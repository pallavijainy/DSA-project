import Navbar from "../components/Navbar.js";
import GetData from "../utils/GetData.js";
document.getElementById("Navbar").innerHTML = Navbar();

// Get API DATA
let filter = "";
let sort = "";
let order = "";

GetData(1, filter, sort, order);

let filerCat = document.getElementById("filterData");
filerCat.onchange = () => {
  let value = filerCat.value;
  filter = value;
  GetData(1, filter, sort, order);
};

let sortData = document.getElementById("sortData");
sortData.onchange = () => {
  let value = sortData.value;
  console.log(value)
  if (value.length > 0) {
    
    order = value;
    sort = "price";
    GetData(1, filter, sort, order);
  } else {
    order = "";
    sort = "";
    GetData(1, filter, sort, order);
  }
};
