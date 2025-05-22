import React, { useState } from 'react';

export default function CafeCard({ id, nome, descricao, preco, imagem, tags, adicionarAoCarrinho }) {
  const [quantidade, setQuantidade] = useState(1);

  function incrementar() {
    setQuantidade(q => q + 1);
  }

  function decrementar() {
    setQuantidade(q => (q > 1 ? q - 1 : 1));
  }

  function handleAddCarrinho() {
    adicionarAoCarrinho({ id, nome, preco, imagem, quantidade });
    setQuantidade(1); // reseta a quantidade
  }

  return (
    <div style={styles.card}>
      <img src={imagem} alt={nome} style={styles.imagem} />
      <h3>{nome}</h3>
      <p>{descricao}</p>
      <p><strong>R$ {preco.toFixed(2)}</strong></p>

      <div style={styles.tags}>
        {tags && tags.map((tag, idx) => (
          <span key={idx} style={styles.tag}>{tag}</span>
        ))}
      </div>

      <div style={styles.qtdContainer}>
        <button onClick={decrementar} style={styles.qtdBtn}>–</button>
        <span>{quantidade}</span>
        <button onClick={incrementar} style={styles.qtdBtn}>+</button>
      </div>

      <button onClick={handleAddCarrinho} style={styles.btnAdd}>
        Adicionar ao carrinho
      </button>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '16px',
    borderRadius: '12px',
    width: '220px',
    textAlign: 'center',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  },
  imagem: {
    width: '100%',
    height: '140px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  tags: {
    display: 'flex',
    justifyContent: 'center',
    gap: '6px',
    margin: '8px 0',
    flexWrap: 'wrap'
  },
  tag: {
    backgroundColor: '#eee',
    padding: '4px 8px',
    borderRadius: '12px',
    fontSize: '12px'
  },
  qtdContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    margin: '10px 0'
  },
  qtdBtn: {
    width: '30px',
    height: '30px',
    fontSize: '18px',
    backgroundColor: '#ddd',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer'
  },
  btnAdd: {
    backgroundColor: '#222',
    color: '#fff',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    marginTop: '8px'
  }
};
