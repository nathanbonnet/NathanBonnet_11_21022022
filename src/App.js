import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Logement from './pages/Logement';
import Propos from './pages/A-propos';
import Header from '../src/components/Header'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/a-propos/:id" element={<Logement />}/>
          <Route path="/a-propos" exact element={<Propos />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
