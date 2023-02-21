const productUrl =
  "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products";
const productContainer = document.querySelector("#product-container");

// Initialize page number to 1
let currentPage = 1;

// Function to fetch products from API for a given page
function fetchProducts(page) {
  const limit = 12; // Set the limit parameter to control number of products per page
  const offset = (page - 1) * limit; // Calculate the offset based on current page number and limit
  const wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || [];
  fetch(`${productUrl}?limit=${limit}&offset=${offset}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      productContainer.innerHTML = ""; // Clear the product container before adding new products
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

        if (wishlistItems.some((item) => item.id === product.id)) {
          // if the product is in the wishlist, show a filled heart icon
          wishlist.innerHTML = "❤️";
        } else {
          // otherwise, show an empty heart icon
          wishlist.innerHTML = "♡";
        }

        wishlist.addEventListener("click", () => {
          // add or remove the product from the wishlist
          const index = wishlistItems.findIndex(
            (item) => item.id === product.id
          );
          if (index > -1) {
            wishlistItems.splice(index, 1);
          } else {
            wishlistItems.push(product);
          }
          localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
          // update the heart icon
          if (wishlistItems.some((item) => item.id === product.id)) {
            wishlist.innerHTML = "❤️";
          } else {
            wishlist.innerHTML = "♡";
          }
        });

        card.appendChild(wishlist);

        // Add image, brand, title, category, price, and wishlist elements to card element
        // ...

        productContainer.appendChild(card);
      });
    })
    .catch((error) => console.log(error));
}

// Fetch products for the initial page (page 1)
fetchProducts(currentPage);

// Add event listener to previous page button
document.querySelector("#prev-page").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    fetchProducts(currentPage);
  }
});

// Add event listener to next page button
document.querySelector("#next-page").addEventListener("click", () => {
  currentPage++;
  fetchProducts(currentPage);
});

// Filter products by category

function filterProductsByCategory() {
  const categoryFilter = document.getElementById("category-filter");
  const selectedCategory = categoryFilter.value;
  const wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || [];
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

        if (wishlistItems.some((item) => item.id === product.id)) {
          // if the product is in the wishlist, show a filled heart icon
          wishlist.innerHTML = "❤️";
        } else {
          // otherwise, show an empty heart icon
          wishlist.innerHTML = "♡";
        }

        wishlist.addEventListener("click", () => {
          // add or remove the product from the wishlist
          const index = wishlistItems.findIndex(
            (item) => item.id === product.id
          );
          if (index > -1) {
            wishlistItems.splice(index, 1);
          } else {
            wishlistItems.push(product);
          }
          localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
          // update the heart icon
          if (wishlistItems.some((item) => item.id === product.id)) {
            wishlist.innerHTML = "❤️";
          } else {
            wishlist.innerHTML = "♡";
          }
        });

        card.appendChild(wishlist);

        productContainer.appendChild(card);
      });
    })
    .catch((error) => console.log(error));
}
