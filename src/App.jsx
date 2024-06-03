import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './homePage.jsx';
import BlogAlcoolismo from './blogalcolismo.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogalcoolismo" element={<BlogAlcoolismo />} />
      </Routes>
    </Router>
  );
}

export default App;
