import React, { useEffect, useState } from "react";
import "./Admin.css"
const Admin = () => {
    const [data , setData] = useState([])
  useEffect(() => {
    fetch("https://camp-4cc5.onrender.com/admin")
      .then((res) => res.json())
      .then((res) =>setData(res))
      .catch((err) => console.log(err));
  },[]);
  return (

    <>
     <table>
      <thead>
        <tr>
          <th>Child Name</th>
          <th>Child Age</th>
          <th>School</th>
          <th>Class</th>
          <th>Parent Name</th>
          <th>Phone</th>
          <th>Mobile</th>
          <th>Comments</th>
        </tr>
      </thead>
      <tbody>
        {data.map((el) => (
          <tr key={el._id}>
            <td>{el.name}</td>
            <td>{el.age}</td>
            <td>{el.school}</td>
            <td>{el.class}</td>
            <td>{el.parentname}</td>
            <td>{el.phone}</td>
            <td>{el.Mobile}</td>
            <td>{el.comment}</td>
          </tr>
        ))}
      </tbody>
    </table>
      
 
    </>


  );
};

export default Admin;
