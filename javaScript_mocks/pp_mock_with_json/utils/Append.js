import GetData from "./GetData.js";

function AppendData(res) {
  let container = document.getElementById("container");
  container.innerHTML = "";
  res.forEach((el) => {
    const card = document.createElement("div");
    card.className = "card";
    const image = document.createElement("img");
    image.src =
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60";
    card.appendChild(image);
    const title = document.createElement("h3");
    title.textContent = `  ${el.description}`;
    card.appendChild(title);
    const price = document.createElement("p");
    price.textContent = `Price:-${el.price}`;
    card.appendChild(price);
    const Drive = document.createElement("p");
    Drive.textContent = `Kms driven:-${el.km}`;
    card.appendChild(Drive);
    const year = document.createElement("p");
    year.textContent = `Year of purchase:-${el.year}`;
    card.appendChild(year);
    const brand = document.createElement("p");
    brand.textContent = `Brand:-${el.brand}`;
    card.appendChild(brand);
    const btndiv = document.createElement("div");
    btndiv.className = "btn";

    const editButton = document.createElement("button");
    editButton.className = "fas fa-edit";
    editButton.innerText = "Edit Button";
    editButton.addEventListener("click", () => showEditModal(el));
    btndiv.appendChild(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.className = "fas fa-trash-alt";
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", () => deleteAd(el));
    btndiv.appendChild(deleteButton);

    const wishlistButton = document.createElement("button");
    wishlistButton.className = "fas fa-heart";
    wishlistButton.innerText = "Add To Wishlist";
    wishlistButton.addEventListener("click", () => addToWishlist(ad));
    btndiv.appendChild(wishlistButton);
    card.appendChild(btndiv);
    container.appendChild(card);
  });
}
let ads = [];
function deleteAd(el) {
  fetch(`https://mock-link.onrender.com/cars/${el.id}`, {
    method: "DELETE",
  })
    .then(() => {
      ads = ads.filter((a) => a.id !== el.id);
      AppendData();
      alert("deleted");
    })
    .catch((error) => console.error(error));
}

function showEditModal(ad) {
  const modal = document.createElement("div");
  modal.className = "modal";

  const modalContent = document.createElement("div");
  modalContent.className = "modal-content";

  const titleLabel = document.createElement("label");
  titleLabel.textContent = "Title:";
  modalContent.appendChild(titleLabel);

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.value = ad.description;
  modalContent.appendChild(titleInput);

  const priceLabel = document.createElement("label");
  priceLabel.textContent = "Price:";
  modalContent.appendChild(priceLabel);

  const priceInput = document.createElement("input");
  priceInput.type = "number";
  priceInput.value = ad.price;
  modalContent.appendChild(priceInput);

  const submitButton = document.createElement("button");
  submitButton.textContent = "Save";
  submitButton.addEventListener("click", () => {
    ad.description = titleInput.value;
    ad.price = Number(priceInput.value);
    updateAd(ad);
    closeModal(modal);
  });
  modalContent.appendChild(submitButton);
  const cancelButton = document.createElement("button");
  cancelButton.textContent = "Cancel";
  cancelButton.addEventListener("click", () => closeModal(modal));
  modalContent.appendChild(cancelButton);

  modal.appendChild(modalContent);
  document.body.appendChild(modal);
}
let filter = "";
let sort = "";
function updateAd(ad) {
  fetch(`https://mock-link.onrender.com/cars/${ad.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ad),
  })
    .then(() => {
      GetData(1, filter, sort);
    })
    .catch((error) => console.error(error));
}

function closeModal(modal) {
  modal.remove();
}
export default AppendData;
