let wishlistData = JSON.parse(localStorage.getItem("wishlist")) || [];

function AppendData(res) {
  let container = document.getElementById("container");
  
  container.innerHTML = "";
  res.forEach((el) => {
    let title = document.createElement("h3");
    title.innerText = `${el.title}=>${el.category}=>${el.price}`;
    let button = document.createElement("i");
    button.classList.add("fa-solid" ,"fa-heart")
    button.addEventListener("click",() => {
      

      const fil = wishlistData.filter((e) => e.id === el.id);
      if (fil.length == 0) {
        alert("Successfully Placed Order")
        wishlistData.push(el);
        localStorage.setItem("wishlist", JSON.stringify(wishlistData));
      } else {
        alert("Already Placed Order")
      }
   
      
    });
    container.append(title, button);
  });
}
export default AppendData;
