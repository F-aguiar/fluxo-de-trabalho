// src/components/UpdateArea.js

import React, { useState } from 'react';
import api from '../api/axios';

const UpdateProcess = ({ areaId }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Envia a requisição PUT para atualizar a área
    api.put(`/areas/${areaId}`, { name })
      .then(response => {
        alert('Área atualizada com sucesso!');
        setName(''); // Limpa o campo
      })
      .catch(error => {
        console.error('Erro ao atualizar a área', error);
      });
  };

  return (
    <div>
      <h2>Atualizar Área</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome da Área"
          value={name}
          onChange={(e) => setName(e.target.value)}  // Atualiza o nome
        />
        <button type="submit">Atualizar</button>
      </form>
    </div>
  );
};

export default UpdateProcess;
