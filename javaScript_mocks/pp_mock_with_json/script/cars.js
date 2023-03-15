import Navbar from "../components/Navbar.js";
import GetData from "../utils/GetData.js";

document.getElementById("navbar").innerHTML = Navbar();
// Get Api data
let filter = "";
let sort = "";

GetData(1, filter, sort);

let sortData = document.getElementById("sort-select");
sortData.onchange = () => {
  let value = sortData.value;
  console.log(value);
  if (value.length > 0) {
    sort = value;
    GetData(1, filter, sort);
  } else {
    filter = "";
    sort = "";
    GetData(1, filter, sort);
  }
};
let filterData = document.getElementById("filter-select");

filterData.onchange = () => {
  let val = filterData.value;
  if (val.length > 0) {
    filter = val;
    GetData(1, filter, sort);
  } else {
    filter = "";
    sort = "";
    GetData(1, filter, sort);
  }
};
