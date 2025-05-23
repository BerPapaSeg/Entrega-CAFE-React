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
    setQuantidade(1);
  }

  return (
    <div style={styles.card}>
      <img src={imagem} alt={nome} style={styles.imagem} />
      
      <div style={styles.tags}>
        {tags.map((tag, idx) => (
          <span key={idx} style={styles.tag}>{tag.toUpperCase()}</span>
        ))}
      </div>

      <h3 style={styles.nome}>{nome}</h3>
      <p style={styles.descricao}>{descricao}</p>

      <div style={styles.footer}>
        <div style={styles.preco}>
          <span style={{ fontSize: '14px' }}>R$</span>
          <strong style={{ fontSize: '20px' }}>{preco.toFixed(2)}</strong>
        </div>

        <div style={styles.quantidade}>
          <button onClick={decrementar} style={styles.qtdBtn}>–</button>
          <span style={styles.qtdNum}>{quantidade}</span>
          <button onClick={incrementar} style={styles.qtdBtn}>+</button>
        </div>

        <button onClick={handleAddCarrinho} style={styles.btnCarrinho}>
          <img src="/src/assets/Icon9.png" alt="Carrinho" style={{ width: '40px',height:'40px' }} />
        </button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: '#F3F2F2',
    borderRadius: '20px',
    padding: '16px',
    width: '250px',
    textAlign: 'center',
    boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  imagem: {
    width: '100px',
    height: '100px',
    marginTop: '-40px',
    objectFit: 'cover',
    borderRadius: '50%',
  },
  tags: {
    display: 'flex',
    gap: '4px',
    marginTop: '8px',
    marginBottom: '8px',
  },
  tag: {
    backgroundColor: '#F1E9C9',
    color: '#C47F17',
    fontSize: '10px',
    fontWeight: 'bold',
    padding: '4px 8px',
    borderRadius: '999px',
  },
  nome: {
    fontSize: '18px',
    fontWeight: '700',
    margin: '8px 0 4px 0',
  },
  descricao: {
    fontSize: '14px',
    color: '#8D8686',
    marginBottom: '16px',
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '8px',
    width: '100%',
  },
  preco: {
    display: 'flex',
    alignItems: 'flex-end',
    gap: '2px',
    color: '#574F4D',
  },
  quantidade: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#E6E5E5',
    borderRadius: '8px',
    padding: '4px 8px',
  },
  qtdBtn: {
    background: 'none',
    border: 'none',
    fontSize: '16px',
    color: '#8047F8',
    cursor: 'pointer',
    padding: '4px',
  },
  qtdNum: {
    margin: '0 6px',
    fontWeight: 'bold',
  },
  btnCarrinho: {
    backgroundColor: '#4B2995',
    border: 'none',
    padding: '0px',
    borderRadius: '6px',
    cursor: 'pointer',
  }

};
