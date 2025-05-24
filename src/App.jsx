import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';

import Home from './pages/Home';
import Checkout from './pages/Checkout';
import AddCofe from './pages/AddCofe';
import Success from './pages/Success';

export default function App() {
  const [cafes, setCafes] = useState([
    
  ]);


  const [carrinho, setCarrinho] = useState([]);

  function adicionarCafe(novoCafe) {
    setCafes(prev => [...prev, { ...novoCafe, id: prev.length + 1 }]);
  }

  function removerDoCarrinho(id) {
  setCarrinho(prev => prev.filter(item => item.id !== id));
}

  function adicionarAoCarrinho(item) {
    setCarrinho(prev => {
      const existente = prev.find(c => c.id === item.id);
      if (existente) {
        return prev.map(c =>
          c.id === item.id
            ? { ...c, quantidade: c.quantidade + item.quantidade }
            : c
        );
      } else {
        return [...prev, item];
      }
    });
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home cafes={cafes} adicionarAoCarrinho={adicionarAoCarrinho} />} />
        <Route
          path="/checkout"
          element={<Checkout carrinho={carrinho} removerDoCarrinho={removerDoCarrinho} />}
        />

        <Route path="/addcafe" element={<AddCofe adicionarCafe={adicionarCafe} />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}
