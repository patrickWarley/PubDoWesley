import { motion } from "framer-motion";

import Apresentacao from "./Apresentacao";
import Button from '../Components/Button';
import AnimatedBanner from '../Components/AnimatedBanner';
import Contato from './Contato';
import AnimatedGallery from '../Components/AnimatedGallery';
import LogoShadow from '../Components/Logo/LogoShadow';
import BackgroundImage from '../images/background-pagina-inicial.jpg';
import Equipe from "./Equipe";

import food3 from '../images/food/food3.jpg';
import food4 from '../images/food/food4.jpg';
import food5 from '../images/food/food5.jpg';
import food6 from '../images/food/food6.jpg';


const images = [
  {
    image: food3,
    text: 'Beber e não ter a vergonha de ser feliz ...'
  }, {
    image: food4,
    text: 'Cantar e Cantar e Cantar a beleza de ser um eterno infeliz ...'
  }, {
    image: food5,
    text: 'Não tem comida ...'
  }, {
    image: food6,
    text: 'Serio, não tem...'
  }
];


function PaginaInicial() {
  return (
    <section className="page overflow-hidden">
      <div id="topo" className='d-flex flex-column position-relative min-vh-100' style={{ zIndex: 0 }}>
        <div className="background-parallax container-fluid position-absolute grayscale"
          style={{ backgroundImage: `url(${BackgroundImage})` }}>
        </div>

        <div className="overflow-hidden d-flex flex-column min-vh-100 container-fluid position-absolute align-items-center justify-content-center ">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="d-inline-block"
          >
            <LogoShadow className="LogoHero me-auto" color={'#ffffff'} />
          </motion.div>

          <motion.div
            className="overflow-hidden"
            initial={{ transform: 'translate(1000px)' }}
            animate={{ transform: 'translate(0px)' }}
            transition={{ delay: 2, duration: 1 }}>
            <Button
              style={{ zIndex: 3 }}
              text='Delivery'
              className='mt-5 main-bold-font fs-5 d-block py-1 px-1 delivery-button' />
          </motion.div>

        </div>
      </div>

      <Apresentacao />
      <AnimatedGallery id="galery" images={images} />

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
          <Button className="main-bold-font mt-5 py-2 px-4 fs-5 fw-bold delivery-button" text="Delivery" />
        </div>
      </AnimatedBanner >
      <Equipe />
      <Contato />
    </section >
  );
}

export default PaginaInicial;