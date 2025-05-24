import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import EscolheImagem from '../components/EscolheImagem';
import Footer from '../components/Footer';


export default function AddCofe({ adicionarCafe }) {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState('');
  const [preco, setPreco] = useState('');
  const [tagsSelecionadas, setTagsSelecionadas] = useState([]);
  const navigate = useNavigate();

  const opcoesTags = ['clássico', 'especial', 'descafeinado', 'com leite', 'gelado', 'para o Queen'];

  function handleTagChange(tag) {
    setTagsSelecionadas(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  }

  function handleSubmit(e) {
    e.preventDefault();

    adicionarCafe({
      nome,
      descricao,
      imagem,
      preco: parseFloat(preco),
      tags: tagsSelecionadas
    });

    navigate('/');
  }

  return (
      <div className="add-cofe-container">
        <Navbar />
        <div className="form-card">
          <h2>☕ Novo tipo de café</h2>
          <p>Informe as características do novo café que será exibido na loja!</p>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input type="text" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} required />
              <input type="text" placeholder="Descrição" value={descricao} onChange={e => setDescricao(e.target.value)} required />
              <EscolheImagem imagemSelecionada={imagem} onSelecionar={setImagem} />

              <input type="number" placeholder="Preço" value={preco} onChange={e => setPreco(e.target.value)} required />
            </div>

            <fieldset className="tags-fieldset">
              <legend>Tags:</legend>
              <div className="tags-options">
                {opcoesTags.map(tag => (
                  <label key={tag} className="tag-option">
                    <input
                      type="checkbox"
                      value={tag}
                      checked={tagsSelecionadas.includes(tag)}
                      onChange={() => handleTagChange(tag)}
                    />
                    {tag}
                  </label>
                ))}
              </div>
            </fieldset>

            <button className="btn-pay" type="submit">Adicionar Café</button>
          </form>
        </div>
      </div>
  );
}
