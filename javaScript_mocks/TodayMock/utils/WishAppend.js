let wishlistData = JSON.parse(localStorage.getItem("wishlist")) || [];

function WishAppend(res) {
  let container2 = document.getElementById("container2");
  container2.innerHTML = "";
  res.forEach((el) => {
    let title = document.createElement("h3");
    title.innerText = `${el.title}=>${el.category}=>${el.price}`;
    let button = document.createElement("button");
    button.innerText="remove"
   button.addEventListener("click",(e)=>{
   
        let index = res.indexOf(el);
        res.splice(index, 1);
        localStorage.setItem("wishlist", JSON.stringify(res));
        console.log("deleted data");
        location.reload();
    
   })
    container2.append(title, button);
  });
}
export default WishAppend;
