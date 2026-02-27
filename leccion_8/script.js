const form = document.getElementById("commentForm");
const commentInput = document.getElementById("commentInput");
const commentsSection = document.getElementById("commentsSection");
const counter = document.getElementById("counter");

let comments = JSON.parse(localStorage.getItem("comments")) || [];

function renderComments() {
    commentsSection.innerHTML = "";

    comments.forEach((comment, index) => {

        const commentDiv = document.createElement("div");
        commentDiv.classList.add("comment");

        const text = document.createElement("p");
        text.textContent = comment.text;

        const date = document.createElement("p");
        date.classList.add("date");
        date.textContent = comment.date;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.classList.add("delete-btn");

        deleteBtn.addEventListener("click", () => {
            comments.splice(index, 1);
            localStorage.setItem("comments", JSON.stringify(comments));
            renderComments();
        });

        commentDiv.appendChild(deleteBtn);
        commentDiv.appendChild(text);
        commentDiv.appendChild(date);

        commentsSection.appendChild(commentDiv);
    });

    counter.textContent = `Comentarios: ${comments.length}`;
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const text = commentInput.value.trim();
    if (text === "") return;

    const newComment = {
        text: text,
        date: new Date().toLocaleString()
    };

    comments.push(newComment);
    localStorage.setItem("comments", JSON.stringify(comments));

    commentInput.value = "";
    renderComments();
});

renderComments();