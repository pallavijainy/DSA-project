import Navbar from "../component/Navbar.js";
import getData from "../utils/GetData.js";

document.querySelector(".navbar").innerHTML=Navbar()

let sort = "";
let order = "";
let filter ="";


getData(sort,order,filter)
let sorting = document.querySelector("#sortPrice")
sorting.onchange = () =>{
    let value = sorting.value
    if(value.length > 0){
        sort = "price"
        order = value
        getData(sort,order,filter)
    }else{
        sort = ""
        order=""
        filter=""
        getData(sort,order,filter)
    }
}


let kms = document.querySelector("#sortkm")
kms.onchange = ()=>{
    let kmvalue = kms.value;
    if(kmvalue.length > 0){
        sort="km"
        order = kmvalue
        getData(sort,order,filter)
    }else{
        sort=""
        order = ""
        filter=""
        getData(sort,order,filter)
    }
}


let filterData = document.getElementById("filter")
filterData.onchange=()=>{
    let filvalue = filterData.value;
    if(filvalue.length > 0){
         filter = filvalue;
      
         getData(sort,order,filter)
    }else{
        filter=""
        sort=""
        order=""
        getData(sort,order,filter)
    }
}