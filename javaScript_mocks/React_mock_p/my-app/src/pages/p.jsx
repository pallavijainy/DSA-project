import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PokemonDetails = () => {
  const { pokemon_name } = useParams();
  const [data, setdata] = useState([]);
  const [ser, setSerch] = useState("");
  const handleClick = (data) => {
    localStorage.setItem("pokemon", JSON.stringify(data));
  };
  const handleClicks = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${ser.toLowerCase()}`)
      .then((res) => res.json())
      .then((data) => setdata(data));
  };
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`)
      .then((res) => res.json())
      .then((data) => setdata(data));
  }, [pokemon_name]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pokemon-details">
      <input
        type="text"
        placeholder="type pokemonname"
        value={ser}
        onChange={(e) => setSerch(e.target.value)}
      />
      <button onClick={handleClicks}>Cick</button>
      <h1>{data.name}</h1>
      <img
        src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${data.name}.gif`}
        alt={data.name}
      />
      <p>Height: {data.height}</p>
      <p>Weight: {data.weight}</p>
      <p>Abilities:</p>
      <ul></ul>
      <button onClick={handleClick(data)}>💚</button>
    </div>
  );
};
export { PokemonDetails };
