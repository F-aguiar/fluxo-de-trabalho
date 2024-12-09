// src/components/ProcessChain.js

import React, { useState, useEffect } from 'react';
import api from '../api/axios';
import CreateSubprocess from './CreateSubprocess';  // Importa o componente para criar subprocessos

const ProcessChain = () => {
  const [processos, setProcessos] = useState([]);
  const [selectedProcess, setSelectedProcess] = useState(null);
  const [subprocessos, setSubprocessos] = useState([]);

  // Fazendo a requisição para pegar os processos do backend
  useEffect(() => {
    api.get('/processos')
      .then((response) => {
        setProcessos(response.data); // Armazena os processos no estado
      })
      .catch((error) => console.error('Erro ao carregar processos', error));
  }, []);

  const handleProcessClick = (processo) => {
    setSelectedProcess(processo);

    // Carrega os subprocessos desse processo
    api.get(`/subprocessos?processoId=${processo.id}`)
      .then((response) => {
        setSubprocessos(response.data); // Atualiza os subprocessos
      })
      .catch((error) => console.error('Erro ao carregar subprocessos', error));
  };

  // Atualiza a lista de subprocessos quando um novo subprocesso for criado
  const handleSubprocessCreated = () => {
    if (selectedProcess) {
      api.get(`/subprocessos?processoId=${selectedProcess.id}`)
        .then((response) => {
          setSubprocessos(response.data);
        })
        .catch((error) => console.error('Erro ao carregar subprocessos', error));
    }
  };

  return (
    <div>
      <h2>Cadeia de Processos</h2>
      <div>
        <h3>Processos</h3>
        {processos.length === 0 ? (
          <p>Nenhum processo encontrado.</p>
        ) : (
          processos.map((processo) => (
            <div
              key={processo.id}
              onClick={() => handleProcessClick(processo)}
              style={{ cursor: 'pointer', padding: '10px', marginBottom: '5px', border: '1px solid #ccc' }}
            >
              <h4>{processo.name}</h4>
              <p>{processo.description}</p>
            </div>
          ))
        )}
      </div>

      {selectedProcess && (
        <div>
          <h3>Subprocessos do Processo: {selectedProcess.name}</h3>
          {subprocessos.length === 0 ? (
            <p>Nenhum subprocesso encontrado.</p>
          ) : (
            subprocessos.map((subprocesso) => (
              <div key={subprocesso.id}>
                <h4>{subprocesso.name}</h4>
                <p>{subprocesso.description}</p>
              </div>
            ))
          )}

          <CreateSubprocess
            processoId={selectedProcess.id}
            onSubprocessCreated={handleSubprocessCreated}
          />
        </div>
      )}
    </div>
  );
};

export default ProcessChain;
