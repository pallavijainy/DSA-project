import Navbar from "../component/Navbar.js";
import getData from "../utils/GetData.js";

document.querySelector(".navbar").innerHTML=Navbar()

let sort = "";
let order = "";


getData(sort,order)
let sorting = document.querySelector("#sortPrice")
sorting.onchange = () =>{
    let value = sorting.value
    if(value.length > 0){
        sort = "price"
        order = value
        getData(sort,order)
    }else{
        sort = ""
        order=""
        getData(sort,order)
    }
}


let kms = document.querySelector("#sortkm")
kms.onchange = ()=>{
    let kmvalue = kms.value;
    if(kmvalue.length > 0){
        sort="km"
        order = kmvalue
        getData(sort,order)
    }else{
        sort=""
        order = ""
        getData(sort,order)
    }
}


let filter = document.getElementById("brand")
