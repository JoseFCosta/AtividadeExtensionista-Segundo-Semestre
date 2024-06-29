import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './homePage/homePage.jsx'
import Localizacao from './localizacao/localizacao.jsx'
import SobreNos from './sobrenos/sobrenos.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/localizacao" element={<Localizacao />} />
        <Route path="/sobrenos" element={ <SobreNos  />} />
     
      </Routes>
    </Router>
  );
}

export default App;
