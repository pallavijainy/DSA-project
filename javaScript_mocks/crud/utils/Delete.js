import getData from "./GetData.js";

//delete data
let sort = "";
let order = "";
let filter = "";


export function Delete(id) {
    fetch(`https://revision3.onrender.com/mobile/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        getData(sort, order, filter);
        alert("DELETED");
      })
      .catch((err) => {
        console.log(err);
        alert("error");
      });
  }