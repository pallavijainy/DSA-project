const productUrl =
  "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products";

const productContainer = document.querySelector("#product-container");

fetch(productUrl)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.data.forEach((product) => {
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
  })
  .catch((error) => console.log(error));
function filterProductsByCategory() {
  const categoryFilter = document.getElementById("category-filter");
  const selectedCategory = categoryFilter.value;

  fetch(productUrl)
    .then((response) => response.json())
    .then((data) => {
      // filter products based on selected category
      const filteredData = selectedCategory
        ? data.data.filter((product) => product.category === selectedCategory)
        : data.data;

      // clear existing products
      productContainer.innerHTML = "";

      // render filtered products
      filteredData.forEach((product) => {
        const card = document.createElement("div");
        card.classList.add("card");

        // create other elements as before
        // ...
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
    })
    .catch((error) => console.log(error));
}
function sortProducts(orderBy) {
  const productUrl = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?orderBy=${orderBy}`;
  const productContainer = document.querySelector("#product-container");

  fetch(productUrl)
    .then((response) => response.json())
    .then((data) => {
      productContainer.innerHTML = ""; // clear the existing product list

      data.data.forEach((product) => {
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
    })
    .catch((error) => console.log(error));
}
