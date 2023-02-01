import { motion } from "framer-motion";

import Button from '../Components/Button';
import AnimatedBanner from '../Components/AnimatedBanner';
import Contato from './Contato';
import AnimatedGallery from '../Components/AnimatedGallery';
import LogoShadow from '../Components/Logo/LogoShadow';
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
        <motion.div className="container-fluid background-parallax position-absolute grayscale"
          initial={{ transform: 'scale(1.3)' }}
          animate={{ transform: 'scale(1)' }}
          transition={{ duration: 3 }}
          style={{ backgroundImage: `url(${BackgroundImage})` }}>
        </motion.div>

        <div className="d-flex flex-column min-vh-100 container-fluid position-absolute align-items-center justify-content-center ">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 3 }}
            className="d-inline-block">
            <LogoShadow className="LogoHero me-auto" color={'#ffffff'} />
          </motion.div>

          <Button text='Delivery' className='d-block mt-5 py-2 px-3' style={{ width: '9em' }} />
        </div>
      </div>

      <AnimatedGallery images={images} />

      <AnimatedBanner>
        <div className='fs-1 text-center section-title light-text mb-5 fw-bolder'>
          <span>Ode Ao Álcool...</span>
        </div>

        <div className='fs-4 text-center px-2 '>
          <p>"Mas o que eu não posso, é ficar sem pinga no rim!</p>
          <p>Mas é o que eu não quero, nem tô a fim.</p>

          <p>Já dizia um velho amigo meu,</p>
          <p>Louco é o homem que nunca bebeu,</p>
          <p>e depois de trabalhar,</p>
          <p>vou sair, correr pro bar,</p>
          <p>não me espere pro jantar,..."</p>
        </div>
        <div className="container d-flex justify-content-center">
          <Button className="rounded mt-5 py-2 px-4 fs-5 fw-bold" text="Delivery" />
        </div>
      </AnimatedBanner >

      <Contato />
    </section >
  );
}

export default PaginaInicial;