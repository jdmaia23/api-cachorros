async function fetchDogs() {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random/5'); // 5 imagens aleatórias

        if (!response.ok) {
            throw new Error('Erro na requisição: ' + response.status);
        }

        const data = await response.json();
        displayDogs(data.message); // o array de imagens tá em "message"
    } catch (error) {
        console.error('Erro ao buscar imagens de cachorros:', error);
    }
}

function displayDogs(dogs) {
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = '';

    dogs.forEach(dogUrl => {
        const imgElement = document.createElement('img');
        imgElement.src = dogUrl;
        imgElement.style.width = '200px';
        imgElement.style.margin = '10px';

        postsContainer.appendChild(imgElement);
    });
}

document.getElementById('loadPosts').addEventListener('click', fetchDogs);
