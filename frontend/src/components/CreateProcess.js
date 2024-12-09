// src/components/CreateProcess.js
import React, { useState } from 'react';
import api from '../api/axios';

const CreateProcess = ({ areaId, onProcessCreated }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Envia a requisição POST para criar o processo
    api.post('/processos', { name, description, areaId })
      .then((response) => {
        alert('Processo criado com sucesso!');
        onProcessCreated(); // Atualiza os processos na tela
        setName('');
        setDescription('');
      })
      .catch((error) => {
        console.error('Erro ao criar processo', error);
      });
  };

  return (
    <div>
      <h3>Criar Novo Processo</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome do Processo"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Criar Processo</button>
      </form>
    </div>
  );
};

export default CreateProcess;
