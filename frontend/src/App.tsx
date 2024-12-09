// src/App.js

import React, { useState } from 'react';
import AreasList from './components/ProcessList';
import UpdateArea from './components/UpdateProcess';
import DeleteArea from './components/DeleteProcess';
import CreateProcess from './components/CreateProcess';

function App() {
  const [selectedAreaId, setSelectedAreaId] = useState(null);

  return (
    <div className="App">
      <h1>Gerenciamento de Áreas</h1>
      
      <CreateProcess areaId={undefined} onProcessCreated={undefined} />  {}
      {selectedAreaId && (
        <>
          <UpdateArea areaId={selectedAreaId} /> {}
          <DeleteArea areaId={selectedAreaId} /> {}
        </>
      )}
      
      <AreasList />  {}
    </div>
  );
}

export default App;
