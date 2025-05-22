import React from 'react';

const imagens = [
  '/src/assets/cafe1.webp',
  '/src/assets/cafe2.png',
  '/src/assets/cafe3.png',
  '/src/assets/cafe4.png',
  '/src/assets/cafe5.webp',
  '/src/assets/cafe6.webp'
];

export default function EscolheImagem({ imagemSelecionada, onSelecionar }) {
  return (
    <div className="escolhe-imagem">
      <p>Escolha um ícone para seu produto:</p>
      <div className="galeria">
        {imagens.map((url, idx) => (
          <div
            key={idx}
            className={`imagem-card ${imagemSelecionada === url ? 'selecionada' : ''}`}
            onClick={() => onSelecionar(url)}
          >
            <img src={url} alt={`Ícone ${idx + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}