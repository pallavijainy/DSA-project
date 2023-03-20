import React from "react";
let data = JSON.parse(localStorage.getItem("pokemon")) || [];
const Favorites = () => {
  return (
    <div>
      {data.map((el) => {
        return <div id></div>;
      })}
    </div>
  );
};

export default Favorites;
