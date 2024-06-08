import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './homePage.jsx';
import BlogAlcoolismo from './blogalcolismo.jsx';
import Localizacao from './localizacao.jsx'
import SobreNos from './sobrenos.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogalcoolismo" element={<BlogAlcoolismo />} />
        <Route path="/localizacao" element={<Localizacao />} />
     
        <Route path="/sobrenos" element={ <SobreNos  />} />
     
      </Routes>
    </Router>
  );
}

export default App;
