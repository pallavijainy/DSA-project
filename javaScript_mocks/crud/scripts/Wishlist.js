import Navbar from "../component/Navbar.js";

document.querySelector(".navbar").innerHTML=Navbar()



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

    const btn = document.createElement("button")
    btn.innerText="remove"
    btn.classList.add("delete");
    btn.onclick=()=>{
        fetch(`https://revision3.onrender.com/cart/${el.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        getData();
        alert("DELETED");
      })
      .catch((err) => {
        console.log(err);
        alert("error");
      });
    }

    carts.append(image, brand, type, year, km, description, price,btn);

    container.append(carts);
  });
};



function getData() {
    //show loader
    const loader = document.getElementById("loader");
    loader.style.display = "block";
  
    let url = `https://revision3.onrender.com/cart`;
   
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        AppendData(res);
        //HIDE LOADER
        loader.style.display = "none";
      })
      .catch((err) => {
        console.log(err);
        alert("error");
        // Hide loader
        loader.style.display = "none";
      });
  }
  
  
  getData()
  
