// src/components/CreateSubprocess.js

import React, { useState } from 'react';
import api from '../api/axios';

const CreateSubprocess = ({ processoId, onSubprocessCreated }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const subprocessData = { name, description, processoId };

    // Envia a requisição POST para criar o subprocesso
    api.post('/subprocessos', subprocessData)
      .then((response) => {
        alert('Subprocesso criado com sucesso!');
        onSubprocessCreated();  // Atualiza os subprocessos na tela
        setName('');
        setDescription('');
      })
      .catch((error) => {
        console.error('Erro ao criar subprocesso', error);
      });
  };

  return (
    <div>
      <h3>Criar Novo Subprocesso</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome do Subprocesso"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Criar Subprocesso</button>
      </form>
    </div>
  );
};

export default CreateSubprocess;
