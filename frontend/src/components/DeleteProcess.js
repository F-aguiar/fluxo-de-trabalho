// src/components/DeleteArea.js

import React from 'react';
import api from '../api/axios';

const DeleteProcess = ({ areaId }) => {
  const handleDelete = () => {
    // Envia a requisição DELETE para excluir a área
    api.delete(`/areas/${areaId}`)
      .then(response => {
        alert('Área excluída com sucesso!');
      })
      .catch(error => {
        console.error('Erro ao excluir a área', error);
      });
  };

  return (
    <div>
      <button onClick={handleDelete}>Excluir Área</button>
    </div>
  );
};

export default DeleteProcess;
