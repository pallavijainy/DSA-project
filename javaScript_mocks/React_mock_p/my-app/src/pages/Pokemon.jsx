import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "../styles/Pockemon.css";
import { Link, useParams } from "react-router-dom";
const display = async (page) => {
  return await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=10`
  ).then((res) => res.json());
};

const Pokemon = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    display(page).then((res) => setData(res.results));
  }, [page]);
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pokemon-container">
      <h1>Pockemon </h1>
      <div className="pokemon-cards">
        {data.map((el) => {
          return (
            <Link to={`/pokemon/${el.name}`}>
              <div className="card" key={el.name}>
                <img
                  src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${el.name}.gif`}
                  alt={el.name}
                />
                <div className="card-name">{el.name}</div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="pagination">
        <button
          onClick={() => {
            if (page > 1) {
              const newPage = page - 1;
              setPage(newPage);
            }
          }}
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          onClick={() => {
            const newPage = page + 1;
            setPage(newPage);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export { Pokemon };
