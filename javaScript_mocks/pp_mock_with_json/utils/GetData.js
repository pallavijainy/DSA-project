import AppendData from "./Append.js";

const GetData = (page, filter, sort) => {
  console.log(filter);
  let url = `https://mock-link.onrender.com/cars?_limit=10&_page=${page}&_sort=${sort}&_order=asc`;
  if (filter != "") {
    url += `&brand=${filter}`;
  }
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      AppendData(res);
    });
};
export default GetData;
