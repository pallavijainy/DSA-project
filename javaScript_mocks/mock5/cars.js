const adsUrl = "http://localhost:3000/cars";
let ads = [];

const adsContainer = document.getElementById("ads-container");

function generateAdCard(ad) {
  const card = document.createElement("div");
  card.className = "card";

  const image = document.createElement("img");
  image.src = ad.image;
  card.appendChild(image);

  const title = document.createElement("h3");
  title.textContent = ad.title;
  card.appendChild(title);

  const price = document.createElement("p");
  price.textContent = `Price: $${ad.price}`;
  card.appendChild(price);

  const kmsDriven = document.createElement("p");
  kmsDriven.textContent = `Kms driven: ${ad.kmsDriven}`;
  card.appendChild(kmsDriven);

  const year = document.createElement("p");
  year.textContent = `Year: ${ad.year}`;
  card.appendChild(year);

  const brand = document.createElement("p");
  brand.textContent = `Brand: ${ad.brand}`;
  card.appendChild(brand);

  const editButton = document.createElement("button");
  editButton.className = "fas fa-edit";
  editButton.innerText = "Edit Button";
  editButton.addEventListener("click", () => showEditModal(ad));
  card.appendChild(editButton);

  const deleteButton = document.createElement("button");
  deleteButton.className = "fas fa-trash-alt";
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", () => deleteAd(ad));
  card.appendChild(deleteButton);

  const wishlistButton = document.createElement("button");
  wishlistButton.className = "fas fa-heart";
  wishlistButton.innerText = "Add To Wishlist";
  wishlistButton.addEventListener("click", () => addToWishlist(ad));
  card.appendChild(wishlistButton);

  return card;
}
function renderAds() {
  adsContainer.innerHTML = "";
  ads.forEach((ad) => {
    const card = generateAdCard(ad);
    adsContainer.appendChild(card);
  });
}

function getAds() {
  fetch(adsUrl)
    .then((response) => response.json())
    .then((data) => {
      ads = data;
      renderAds();
    })
    .catch((error) => console.error(error));
}

function deleteAd(ad) {
  fetch(`${adsUrl}/${ad.id}`, {
    method: "DELETE",
  })
    .then(() => {
      ads = ads.filter((a) => a.id !== ad.id);
      renderAds();
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
  titleInput.value = ad.title;
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
    ad.title = titleInput.value;
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

function updateAd(ad) {
  fetch(`${adsUrl}/${ad.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ad),
  })
    .then(() => {
      renderAds();
    })
    .catch((error) => console.error(error));
}

function closeModal(modal) {
  modal.remove();
}

function addToWishlist(ad) {
  const wishlistedCarsUrl = "your_wishlisted_cars_api_url";
  fetch(wishlistedCarsUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ad),
  })
    .then(() => {
      console.log("Ad added to wishlist:", ad);
    })
    .catch((error) => console.error(error));
}

function filterByBrand(brand) {
  return ads.filter((ad) => ad.brand === brand);
}
function sortAds(sortField) {
  switch (sortField) {
    case "price":
      ads.sort((a, b) => a.price - b.price);
      break;
    case "kms":
      ads.sort((a, b) => a.kms - b.kms);
      break;
  }
  renderAds();
}

function handleSortChange(event) {
  sortAds(event.target.value);
}

function handleFilterChange(event) {
  const brand = event.target.value;
  if (brand === "all") {
    ads = initialAds;
  } else {
    ads = filterByBrand(brand);
  }
  renderAds();
}

function init() {
  getAds();

  const sortSelect = document.getElementById("sort-select");
  sortSelect.addEventListener("change", handleSortChange);

  const filterSelect = document.getElementById("filter-select");
  filterSelect.addEventListener("change", handleFilterChange);
}

init();
