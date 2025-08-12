let posts = JSON.parse(localStorage.getItem("posts")) || [];

function renderPosts() {
    const postsDiv = document.getElementById("posts");
    postsDiv.innerHTML = "";
    posts.forEach((post, i) => {
        postsDiv.innerHTML += `
            <div class="post">
                <h3>${post.title}</h3>
                <p>${post.content}</p>
                <button onclick="deletePost(${i})">Xóa</button>
            </div>
        `;
    });
}

function addPost() {
    const title = document.getElementById("title").value.trim();
    const content = document.getElementById("content").value.trim();
    if (title && content) {
        posts.push({ title, content });
        localStorage.setItem("posts", JSON.stringify(posts));
        document.getElementById("title").value = "";
        document.getElementById("content").value = "";
        renderPosts();
    }
}

function deletePost(index) {
    posts.splice(index, 1);
    localStorage.setItem("posts", JSON.stringify(posts));
    renderPosts();
}

renderPosts();
