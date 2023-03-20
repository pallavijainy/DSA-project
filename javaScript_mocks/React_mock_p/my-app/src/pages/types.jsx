import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "../styles/Pockemon.css";
import { Link, useParams } from "react-router-dom";
const display = async () => {
  return await fetch(`https://pokeapi.co/api/v2/type`).then((res) =>
    res.json()
  );
};

const Types = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    display().then((res) => setData(res.results));
  }, []);
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pokemon-container">
      <h1>Pockemon </h1>
      <div className="pokemon-cards">
        {data.map((el) => {
          console.log(el.url.split("/")[6]);
          return (
            <Link to={`/type/${el.url.split("/")[6]}`}>
              <div className="card" key={el.name}>
                <img src={el.url} alt={el.name} />
                <div className="card-name">{el.name}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export { Types };
