import GetData from "./GetData.js";

function Pagination(totalPages,filter,sort,order) {
    let pagination = document.getElementById("pagination");
    pagination.innerHTML = "";
    for (let i = 1; i <= totalPages; i++) {
      let button = document.createElement("button");
      button.innerText = i;
      button.onclick = () => {
        GetData(i,filter,sort,order);
      };
      pagination.append(button);
    }
  }
  export default Pagination