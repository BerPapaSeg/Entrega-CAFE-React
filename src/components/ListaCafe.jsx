// src/components/listaCafe.jsx
import React from 'react';
import CafeCard from './CafeCard';

 export default function ListaCafe({ cafes, adicionarAoCarrinho }) {
  return (
    <div className='listacafes'>
      {cafes.map(cafe => (
        <CafeCard key={cafe.id} 
        {...cafe} 
        adicionarAoCarrinho = {adicionarAoCarrinho}/>
      ))}
    </div>
  );
}
