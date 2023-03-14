import AppendData from "./AppendData.js";
import Pagination from "./Pagination.js";

// const GetData = async (page, filter, sort, order) => {
//   let promise = await fetch(
//     `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?limit=12&page=${page}&filter=${filter}&sort=${sort}&order=${order}`
//   );
//   let { data, totalPages } = await promise.json();
//   Pagination(totalPages, filter, sort, order);
//   AppendData(data);
// };

const GetData = (page, filter, sort, order) => {
  fetch(
    `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?limit=12&page=${page}&filter=${filter}&sort=${sort}&order=${order}`
  )
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      Pagination(res.totalPages, filter, sort, order);
      AppendData(res.data);
    })
    .catch((error) => console.log({ error: error }));
};
export default GetData;

