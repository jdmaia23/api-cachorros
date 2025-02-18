// Função para buscar posts da API
async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!response.ok) {
            throw new Error('Erro na requisição: ' + response.status);
        }

        const posts = await response.json();
        displayPosts(posts);

    } catch (error) {
        console.error('Erro ao buscar os posts:', error);
    }
}

// Função para exibir os posts na página
function displayPosts(posts) {
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = ''; // limpa o conteúdo anterior

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';

        const postTitle = document.createElement('h2');
        postTitle.textContent = post.title;

        const postBody = document.createElement('p');
        postBody.textContent = post.body;

        postElement.appendChild(postTitle);
        postElement.appendChild(postBody);

        postsContainer.appendChild(postElement);
    });
}

// Chama a função para buscar os posts quando a página é carregada
document.addEventListener('DOMContentLoaded', fetchPosts);
