import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <button className='botaoLogo'>
        <img onClick={() => navigate ('/')} src="/src/assets/Logo.png" />
      </button>

      <div className="navegacao">
        <div className="botao">
          <button id="local">
            <img src="/src/assets/Icon7.png" />
            <p>Sorocaba - SP</p>
          </button>
        </div>

        <div className="botao">
          <button onClick={() => navigate('/checkout')}>
            <img src="/src/assets/icon_shop.png" />
          </button>
        </div>

        <div className="botao">
          <button onClick={() => navigate('/addcafe')}>
            <img src="/src/assets/Cart.png" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
