import React, { useEffect, useState } from "react";

const getData = async(id) => {
 return await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res) => res.json())
  
 
};

const Pokemon = () => {
const [data,setData] = useState([])

useEffect(()=>{
    getData(id).then((res) => {
    setData(res.results)
      })
      .catch((err) => console.log(err));
},[])
 
  return(
    <div>
       {
           data.map((el)=>(
               <div>
                   <img src={el.url} alt="url" />
                   <h2>{el.name}</h2>
               </div>
           ))
       }
      
    </div>
  )
};

export default Pokemon;
