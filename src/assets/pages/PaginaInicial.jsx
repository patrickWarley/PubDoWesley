import Button from '../Components/Button';
import AnimatedBanner from '../Components/AnimatedBanner';
import Contato from './Contato';
import AnimatedGallery from '../Components/AnimatedGallery';

import BackgroundImage from '../images/background-pagina-inicial.jpg';

import food3 from '../images/food/food3.jpg';
import food4 from '../images/food/food4.jpg';
import food5 from '../images/food/food5.jpg';
import food6 from '../images/food/food6.jpg';

const images = [food3, food4, food5, food6];

function PaginaInicial() {
  return (
    <section>
      <div className='position-relative min-vh-100' style={{ zIndex: -1 }}>
        <div className="container-fluid background-parallax position-absolute grayscale" style={{ backgroundImage: `url(${BackgroundImage})` }}>
        </div>
        <div className="d-flex min-vh-100 container-fluid position-absolute " style={{}}>
          <div className='m-auto'><span className='main-title light-text'> Pub do Wesley</span></div>
        </div>
      </div>

      <AnimatedGallery images={images} />

      <AnimatedBanner>
        <div className='fs-1 text-center section-title light-text mb-5 fw-bolder'>
          <span>Vai uma cervejinha...</span>
        </div>

        <div className='fs-4 text-center px-2 '>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed in est vitae velit mattis scelerisque non ac felis.
          </p>

          <p>
            Duis commodo auctor ipsum vel hendrerit.
            Nulla vitae dui eget urna rutrum ultricies efficitur at nulla.
            Sed lobortis sapien eget turpis sagittis fringilla. Maecenas auctor varius neque non mattis.
          </p>

          <p>
            Integer egestas metus ut consequat porttitor. Etiam posuere risus odio, in feugiat magna vehicula at. Duis id auctor turpis. lobortis.
          </p>
        </div>
        <div className="container d-flex justify-content-center">
          <Button className="rounded mt-5 py-2 px-4 fs-5 fw-bold" text="Delivery" />
        </div>
      </AnimatedBanner>

      <Contato />
    </section>
  );
}

export default PaginaInicial;