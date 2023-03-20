import React from "react";
import { Route, Routes } from "react-router-dom";
import { PokemonDetails } from "../pages/p";
import { Pokemon } from "../pages/Pokemon";
import { PokemonDetail } from "../pages/ty";
import { Types } from "../pages/types";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/pokemon" element={<Pokemon />} />
      <Route path="/pokemon/:pokemon_name" element={<PokemonDetails />} />
      <Route path="/types" element={<Types />} />
      <Route path="/type/:type" element={<PokemonDetail />} />
    </Routes>
  );
};

export default Allroutes;
