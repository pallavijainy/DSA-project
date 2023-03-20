import Navbar from "../component/Navbar.js";
import PrivateRoute from "../component/PrivateRoute.js";

document.querySelector(".navbar").innerHTML = Navbar();

PrivateRoute();
let container = document.getElementById("container");
let local = localStorage.getItem("user");

function AppendData(el) {
  container.innerHTML = "";
  el.forEach((el) => {
    console.log(el);
    let card = document.createElement("div");
    card.className = "card";
    let imag = document.createElement("img");
    imag.src =
      "https://images.unsplash.com/photo-1608470639012-3b64ec3c61a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dW5wbHVnZ2VkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60";

    let name = document.createElement("h1");
    name.innerText = el.username;
    let content = document.createElement("p");
    content.innerText = el.content;

    let c = document.createElement("button");
    c.innerText = `Likes:-${el.likes}`;
    c.addEventListener("click", () => {
      c.innerText = `Likes:-${el.likes++}`;
      console.log(el.likes);
    });
    let cat = document.createElement("p");
    cat.innerText = el.category;
    let date = document.createElement("p");
    date.innerText = el.date;
    let edit = document.createElement("button");
    edit.innerText = "Edit";
    let dete = document.createElement("button");
    dete.innerText = "Delete";
    if (el.username == local) {
      edit.style.display = "block";
      dete.style.display = "block";
      edit.addEventListener("click", () => {
        showModal(el);
      });
      dete.addEventListener("click", () => {
        showDeleteConfirmation(el.id);
      });
    } else {
      edit.style.display = "none";
      dete.style.display = "none";
    }

    let add = document.createElement("button");
    add.innerText = "Add Comment";

    card.append(imag, name, content, date, cat, c, edit, dete, add);
    container.append(card);
  });
}

function showModal(blog) {
  let modal = document.createElement("div");
  modal.className = "modal";
  let modalContent = document.createElement("div");
  modalContent.className = "modal-content";
  let closeBtn = document.createElement("span");
  closeBtn.className = "close-btn";
  closeBtn.innerText = "X";
  let title = document.createElement("h1");
  title.innerText = "Edit Blog";
  let form = document.createElement("form");
  let contentLabel = document.createElement("label");
  contentLabel.innerText = "Content: ";
  let contentInput = document.createElement("textarea");
  contentInput.value = blog.content;
  let categoryLabel = document.createElement("label");
  categoryLabel.innerText = "Category: ";
  let categoryInput = document.createElement("input");
  categoryInput.type = "text";
  categoryInput.value = blog.category;
  let saveBtn = document.createElement("button");
  saveBtn.type = "submit";
  saveBtn.innerText = "Save";

  form.onsubmit = (e) => {
    e.preventDefault();
    blog.content = contentInput.value;
    blog.category = categoryInput.value;
    update(blog);
    modal.style.display = "none";
  };

  modalContent.append(closeBtn, title, form);
  form.append(
    contentLabel,
    contentInput,
    categoryLabel,
    categoryInput,
    saveBtn
  );
  modal.append(modalContent);
  document.body.append(modal);

  closeBtn.onclick = () => {
    modal.style.display = "none";
  };
}

function update(blog) {
  fetch(`http://localhost:8000/blogs/${blog.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blog),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      window.location.reload();
    })
    .catch((err) => console.log(err));
}

function showDeleteConfirmation(id) {
  if (confirm("Are you sure you want to delete this blog?")) {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        display();
      });
  }
}

function display() {
  fetch("http://localhost:8000/blogs")
    .then((response) => response.json())
    .then((data) => {
      //   console.log(data);
      AppendData(data);
      searchButton.addEventListener("click", () => filterByTitle(data));
    });
}
display();
