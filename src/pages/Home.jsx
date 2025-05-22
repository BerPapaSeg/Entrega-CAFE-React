import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sobre from '../components/Sobre';
import ListaCafe from '../components/ListaCafe';

export default function Home({ cafes, adicionarAoCarrinho}) {
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div>
        <Sobre />
      </div>

      <div className='catalogo'>
        <ListaCafe cafes = {cafes} adicionarAoCarrinho = {adicionarAoCarrinho}/>
      </div>
    </div>
  );
}