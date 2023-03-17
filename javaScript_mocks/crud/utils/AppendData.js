import { Delete } from "./Delete.js";
import { AddtoWish } from "./AddData.js";
import showEditModal from "./EditData.js";



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

    const btndiv = document.createElement("div");
    btndiv.className = "btndiv";
    const edit = document.createElement("button");
    edit.innerText = "EDIT";
    edit.classList.add("edit");
    edit.onclick=()=>{
      showEditModal(el)
    }
    const deletebtn = document.createElement("button");
    deletebtn.innerText = "Delete";
    deletebtn.classList.add("delete");
    //delete pr onclick
    deletebtn.onclick =()=>{
      Delete(el.id)
    }
    
    const wishlist = document.createElement("button");
    wishlist.innerText = "❤️";
    
    // wishlist.classList.add("fa-solid" ,"fa-heart");
    wishlist.classList.add("wishlist");
    wishlist.onclick=()=>{
      AddtoWish(el)
    }
    btndiv.append(edit, deletebtn, wishlist);
    carts.append(image, brand, type, year, km, description, price, btndiv);

    container.append(carts);
  });
};

export default AppendData;


