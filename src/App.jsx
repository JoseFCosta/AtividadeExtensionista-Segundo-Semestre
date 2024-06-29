import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './homePage/homePage.jsx'
import Localizacao from './localizacao/localizacao.jsx'
import SobreNos from './sobrenos/sobrenos.jsx'
import Blog1 from './blogs/blogA.jsx';
import Blog3 from './blogs/blog3.jsx';
import Blog2 from './blogs/blog2.jsx';
import Blog4 from './blogs/blog4.jsx';
import Blog5 from './blogs/blog5.jsx';
import Blog6 from './blogs/blog6.jsx';
import Blog7 from './blogs/blog7.jsx';
import Blog8 from './blogs/blog8.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/localizacao" element={<Localizacao />} />
        <Route path="/sobrenos" element={ <SobreNos  />} />

        <Route path="/blogA" element={<Blog1 />} />
        <Route path="/blog2" element={<Blog2 />} />
        <Route path="/blog3" element={<Blog3 />} />
        <Route path="/blog4" element={<Blog4 />} />
        <Route path="/blog5" element={<Blog5 />} />
        <Route path="/blog6" element={<Blog6 />} />
        <Route path="/blog7" element={<Blog7 />} />
        <Route path="/blog8" element={<Blog8 />} />
     
      </Routes>
    </Router>
  );
}

export default App;
