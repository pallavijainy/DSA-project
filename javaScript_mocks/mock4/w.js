const watchlistData = localStorage.getItem("wishlist");
console.log(watchlistData);
const watchlist = JSON.parse(watchlistData);
console.log(watchlist);
const productContainer = document.querySelector("#product-container");

watchlist.forEach((product) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const image = document.createElement("img");
  image.src = product.image;
  image.alt = product.title;
  card.appendChild(image);

  const brand = document.createElement("h3");
  brand.textContent = product.brand;
  card.appendChild(brand);

  const title = document.createElement("h2");
  title.textContent = product.title;
  card.appendChild(title);

  const category = document.createElement("p");
  category.textContent = `Category: ${product.category}`;
  card.appendChild(category);

  const price = document.createElement("p");
  price.textContent = `Price: ${product.price}`;
  card.appendChild(price);

  const wishlist = document.createElement("span");
  wishlist.innerHTML = "❤️";
  wishlist.classList.add("wishlist-icon");
  card.appendChild(wishlist);

  productContainer.appendChild(card);
});
