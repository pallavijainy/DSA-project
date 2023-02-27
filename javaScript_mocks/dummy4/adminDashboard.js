const form = document.querySelector("#book-form");

form.addEventListener("submit", async (event) => {
  event.preventDefault(); // prevent the form from submitting normally

  let url = form.image.value;
  let book_name = form.name.value;
  let author = form.author.value;
  let genre = form.genre.value;
  let edition = form.edition.value;
  let publisher = form.publisher.value;
  let cost = form.cost.value;
  let bookData = {
    url: url,
    title: book_name,
    author: author,
    genre: genre,
    edition: edition,
    publisher: publisher,
    cost: cost,
  };

  try {
    const response = await fetch("http://localhost:3000/Books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookData),
    });

    alert("Book added successfully!");
    form.reset();
    DisplayBooks();
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
});
let booksTable = document.querySelector("#book-table");
const DisplayBooks = () => {
  try {
    fetch("http://localhost:3000/Books")
      .then((res) => res.json())
      .then((data) => {
        data.forEach((book) => {
          const row = document.createElement("tr");
          row.innerHTML = `
          <td><img src="${book.url}" alt="Book Cover Image"></td>
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.genre}</td>
          <td>${book.edition}</td>
          <td>${book.publisher}</td>
          <td>${book.cost}</td>
          <td><button id = "edit">Edit</button></td>
          <td><button>Delete</button></td>
            `;
          booksTable.querySelector("tbody").appendChild(row);
        });
      });
  } catch (error) {
    console.log(error);
  }
};
DisplayBooks();
const buttons = document.querySelectorAll("#edit");
console.log(buttons);
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    alert("vinit");
  });
});
