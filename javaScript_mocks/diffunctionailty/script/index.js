let container = document.querySelector(".container");

const getData = (page) => {
    
fetch(
  `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee?limit=5&page=${page}`

)
  .then((res) => res.json())
  .then((res) => {

      console.log(res.data);
      
    display(res.data);
  })
  .catch((err) => console.log(err));
};

function display(arr) {
  container.innerHTML = "";
  arr.forEach((el) => {
    let card = document.createElement("div");
    card.className="card"
    let image = document.createElement("img");
    image.src = el.image;
   
    let title = document.createElement("h1");
    title.innerText = el.title;
    let price = document.createElement("h3");
    price.innerText = el.price;
    let description = document.createElement("p");
    description.innerText = el.description;
    let addbtn = document.createElement("button");
    addbtn.innerText = "ADD";

    card.append(image, title, price, description, addbtn);
    container.append(card);
  });
}

// -------------------------pagination-----------------

const pagi = document.querySelector(".pagination")
let page=1;


    let prev=document.createElement("button")
prev.innerText="-"
prev.onclick=()=>{
  
    page--;
    console.log(page)
    count.innerText=page;
    getData(page)
    prevbtn();
    nextbtn()
   
}
let next=document.createElement("button")
next.innerText="+"
next.onclick=()=>{
    page++;
    console.log(page)
    count.innerText=page;
    getData(page)
    prevbtn()
    nextbtn()
}
let count = document.createElement("p")
count.innerText=page;

pagi.append(prev,count,next)
getData(page)
prevbtn(); // initially update buttons state
nextbtn()
function prevbtn() {
    if (page <= 1) {
      prev.disabled = true;
    } else {
      prev.disabled = false;
    }
  }


  
  function nextbtn(){
      if(page == 4){
          next.disabled=true
      }else{
          next.disabled=false
      }
  }
  

