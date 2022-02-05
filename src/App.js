import React from 'react';
import './App.css';
import Filmes from './Components/Second'; //Componente Funcional (Hook)

import Movies from './Components/Third'; //Componentes de Classe



function App() {
    return (
      <div>
        <Filmes /> 
        <Movies />        
      </div>
    )
  }

export default App;
