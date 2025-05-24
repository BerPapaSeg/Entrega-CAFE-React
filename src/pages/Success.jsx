import React from 'react';
import Navbar from '/src/components/Navbar';
import { useNavigate } from 'react-router-dom';

function Success() {
    const navigate = useNavigate();
  return (
    <div>
        <Navbar />
        <div className='joao'> 
            <div className='cont-info'>
                <div className='subTitle'>
                    <h2>Uhu! Pedido confirmado</h2>
                    <p>Agora é só aguardar que logo o café chegará até você</p>
                </div>
                <div className='entrega-cont'>
                    <div className='info'>
                        <img src='' alt='icon'></img>
                        <p>Entrega em 
                            <span>
                                Rua João Queen da Silva, 102 Caputera - Sorocaba, SP
                            </span>
                        </p>
                    </div>
                    <div className='info'>
                        <img src='' alt='icon'></img>
                        <p>Previsão de entrega </p> 
                        <span>20 min - 30 min</span>            
                    </div>
                    <div className='info'>
                        <img src='' alt='icon'></img>
                        <p>Pagamento na entrega </p> 
                        <span>{}</span>            
                    </div>
                </div>
            </div>
            <div className=' img-entre'>
                <img src='/src/assets/Illustration.png'></img>
            </div>
        </div>
    </div>
  );
}

export default Success;
