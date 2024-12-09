// src/components/AreasList.js

import React, { useEffect, useState } from 'react';
import api from '../api/axios';

const ProcessList = () => {
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    // Carregar as áreas quando o componente for montado
    api.get('/areas')
      .then(response => {
        setAreas(response.data);  // Armazenar as áreas no estado
      })
      .catch(error => {
        console.error('Erro ao carregar as áreas', error);
      });
  }, []);

  return (
    <div>
      <h2>Lista de Áreas</h2>
      <ul>
        {areas.map(area => (
          <li key={area.id}>
            {area.name} 
            <button onClick={() => alert(`Editar ${area.name}`)}>Editar</button>
            <button onClick={() => alert(`Excluir ${area.name}`)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProcessList;
