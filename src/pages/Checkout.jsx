import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export default function Checkout({carrinho, removerDoCarrinho}) {
  const navigate = useNavigate();
  const total = carrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0);


  return (
    <div>
      <header>
        <Navbar />
      </header>

      <div className="checkout-wrapper">
        <div className="left-column">
          <h3>Complete seu pedido</h3>

          <div className="card">
            <div className="form-header">
              <img src="/src/assets/Icon5.png" alt="icon" />
              <div>
                <h4>Endereço de Entrega</h4>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </div>

            <form className="formulario">
              <input type="text" placeholder="CEP" className="input cep" />
              <input type="text" placeholder="Rua" className="input rua" />
              <div className="input-row">
                <input type="text" placeholder="Número" className="input pequeno" />
                <div className="complemento-wrapper">
                  <input type="text" placeholder="Complemento" className="input grande" />
                  <span className="optional">Opcional</span>
                </div>
              </div>
              <div className="input-row">
                <input type="text" placeholder="Bairro" className="input pequeno" />
                <input type="text" placeholder="Cidade" className="input grande" />
                <input type="text" placeholder="UF" className="input uf" />
              </div>
            </form>
          </div>

          <div className="card">
            <div className="form-header">
              <img src="/src/assets/Icon6.png" alt="icon" />
              <div>
                <h4>Pagamento</h4>
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              </div>
            </div>

            <div className="payment-options">
              <button className="btn-pay">💳 CARTÃO DE CRÉDITO</button>
              <button className="btn-pay">🏦 CARTÃO DE DÉBITO</button>
              <button className="btn-pay">💵 DINHEIRO</button>
            </div>
          </div>
        </div>

        <div className="right-column">
          <h3>Cafés selecionados</h3>

          <div className="card">
            {carrinho.length === 0 ? (
              <p>Seu carrinho está vazio.</p>
            ) : (
              carrinho.map((item) => (
                <div key={item.id} className="carrinho-item">
                  <img src={item.imagem} className="carrinho-img" />
                  <div className="carrinho-info">
                    <h4>{item.nome}</h4>
                    <p>Quantidade: {item.quantidade}</p>
                    <p>Subtotal: R$ {(item.preco * item.quantidade).toFixed(2)}</p>
                    <button id='remove-btn-carr' onClick={() => removerDoCarrinho(item.id)}>
                      <img id= 'img-lixo' src='/src/assets/lixeria2.webp'></img>
                      <p> REMOVER</p>
                    </button>

                  </div>
                </div>
              ))
            )}

            {carrinho.length > 0 && (
              <div className="resumo-total">
                <hr />
                <p><strong>Total:</strong> R$ {total.toFixed(2)}</p>
                <button className="btn-finalizar">Finalizar pedido</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
