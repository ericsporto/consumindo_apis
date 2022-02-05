import axios from 'axios';
import React, { useState, useEffect } from 'react';


function Filmes() {

  const [movie, setMovie] = useState([]);
  
  useEffect(() => {
    axios.get('https://api.tvmaze.com/search/shows?q=star%20wars')
    .then((response) => {setMovie(response.data)})
  }, []);


        return (
          <div className="bg-light">
            <h2>Consumindo Api com Componentes Funcionais (Hooks)</h2>
            <hr />
            <ul>
                {movie.map((item, index) =>(
                   <li key={index}>{item.show.name}</li> 
                ))}
                
            </ul>
          </div>
        );
    }
  

export default Filmes;
