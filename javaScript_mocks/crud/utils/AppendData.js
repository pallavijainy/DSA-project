const AppendData = (res) => {
  const container = document.querySelector(".container");
  container.innerHTML = "";

  res.forEach((el) => {
    const carts = document.createElement("div");
    carts.className = "card";
    const image = document.createElement("img");
    image.src =
      "https://images.unsplash.com/photo-1678854354576-1d7504664911?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60";

    const brand = document.createElement("h2");
    brand.innerText = el.brand;

    const type = document.createElement("p");
    type.innerText = el.type;

    const year = document.createElement("p");
    year.innerText = el.year;

    const km = document.createElement("p");
    km.innerText = `km:- ${el.km}`;

    const description = document.createElement("p");
    description.innerText = el.description;

    const price = document.createElement("p");
    price.innerText = `price:- ${el.price}`;

    carts.append(image, brand, type, year, km, description, price);

    container.append(carts)
    
  });
};

export default AppendData;
