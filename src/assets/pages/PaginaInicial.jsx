import BackgroundImage from '../images/background-pagina-inicial.jpg'
import Contato from './Contato';

function PaginaInicial() {
  return (
    <>
      <div className='position-relative min-vh-100' style={{ zIndex: -1 }}>
        <div className="container-fluid background-parallax position-absolute grayscale" style={{ backgroundImage: `url(${BackgroundImage})` }}>
        </div>
        <div className="d-flex min-vh-100 container-fluid position-absolute " style={{}}>
          <div className='m-auto'><span className='main-title light-text'> Pub do Wesley</span></div>
        </div>
      </div>
      <Contato />
    </>
  );
}

export default PaginaInicial;