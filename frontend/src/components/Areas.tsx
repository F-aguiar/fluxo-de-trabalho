import React, { useState, useEffect } from 'react';
import api from '../services/api'; // Importa a API configurada com Axios

interface Area {
  id: number;
  name: string;
}

const Areas: React.FC = () => {
  const [areas, setAreas] = useState<Area[]>([]); // Estado para armazenar áreas
  const [newArea, setNewArea] = useState(''); // Estado para o nome da nova área
  const [loading, setLoading] = useState<boolean>(false); // Estado para controle de carregamento
  const [error, setError] = useState<string | null>(null); // Estado para erros

  // Carregar áreas quando o componente for montado
  useEffect(() => {
    fetchAreas();
  }, []);

  const fetchAreas = async () => {
    setLoading(true); // Inicia o carregamento
    setError(null); // Limpa erros
    try {
      const response = await api.get('/areas'); // Faz uma requisição GET à API
      setAreas(response.data); // Atualiza o estado com as áreas recebidas
    } catch (err) {
      setError('Erro ao carregar áreas.');
    } finally {
      setLoading(false); // Finaliza o carregamento
    }
  };

  const handleAddArea = async () => {
    if (!newArea) {
      alert('Por favor, insira um nome para a área.');
      return;
    }

    try {
      await api.post('/areas', { name: newArea }); // Faz uma requisição POST para adicionar uma nova área
      setNewArea(''); // Limpa o campo de texto
      fetchAreas(); // Atualiza a lista de áreas
    } catch (err) {
      setError('Erro ao adicionar área.');
    }
  };

  return (
    <div>
      <h1>Gerenciar Áreas</h1>
      {loading && <p>Carregando...</p>} {/* Exibe carregamento */}
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Exibe erros */}
      <ul>
        {areas.map((area) => (
          <li key={area.id}>{area.name}</li> // Lista as áreas
        ))}
      </ul>
      <input
        type="text"
        value={newArea}
        onChange={(e) => setNewArea(e.target.value)} // Atualiza o nome da nova área
        placeholder="Nova área"
      />
      <button onClick={handleAddArea}>Adicionar</button>
    </div>
  );
};

export default Areas;

