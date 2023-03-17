import AppendData from "./AppendData.js";


function getData(sort, order, filter) {
  //show loader
  const loader = document.getElementById("loader");
  loader.style.display = "block";

  let url = `https://revision3.onrender.com/mobile?_sort=${sort}&_order=${order}`;
  if (filter != "") {
    url += `&brand=${filter}`;
  }

  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      AppendData(res);
      //HIDE LOADER
      loader.style.display = "none";
    })
    .catch((err) => {
      console.log(err);
      alert("error");
      // Hide loader
      loader.style.display = "none";
    });
}


export default getData;
