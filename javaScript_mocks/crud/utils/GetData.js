import AppendData from "./AppendData.js";

const getData = (sort,order) => {
  const url =`https://revision3.onrender.com/mobile?_sort=${sort}&_order=${order}`
  


  fetch(url)
    .then((res) => res.json())
    .then((res) => AppendData(res))
    .catch((err) => console.log(err));
};


export default getData;