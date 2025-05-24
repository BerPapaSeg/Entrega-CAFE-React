import React from 'react';
import Navbar from '/src/components/Navbar';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


function Success() {
    const navigate = useNavigate();
    const location = useLocation();
const { paymentMethod } = location.state || {};
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
                        <div className=''>
                            <p>Entrega em</p>
                            <span>Rua Sugante queen manoel, Caputera - Sorocaba, SP</span>
                        </div>
                    </div>
                    <div className='info'>
                        <img src='' alt='icon'></img>
                        <div className=''>
                            <p>Previsão de entrega</p>
                            <span>20 min - 30 min </span>
                        </div>            
                    </div>
                    <div className='info'>
                        <img src='' alt='icon'></img>
                        <div className=''>
                            <p>Pagamento na entrega</p>
                            <span>{paymentMethod}</span>
                        </div>          
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
