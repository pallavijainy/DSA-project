const container = document.querySelector(".container");

let limit = 10;
let pageCount = 1;
let postCount = 1;
let url = "";
const getData = async () => {
  await fetch(
    `https://jsonplaceholder.typicode.com/comments?_page=${pageCount}&_limit=${limit}`
  )
    .then((res) => res.json())
    .then((res) => {
      display(res);
    });
};
getData();

window.addEventListener("scroll", () => {
  const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight) {
    console.log("I am at the bottom");
    pageCount++;
    getData();
  }
});

const display = (res) => {
  console.log(res);
  res.forEach((curElm, index) => {
    const htmlData = `
        <div class="post">
          <p class="post-id">${postCount++}</p>
          <h2 class="title">${curElm.name}</h2>
          <h2 class="title">${curElm.email}</h2>
          <p class="post-info">${curElm.body}</p>
        </div>
      `;
    container.insertAdjacentHTML("beforeend", htmlData);
  });
};
