import teamImage from '../images/team.png'
import { motion } from 'framer-motion';

const changeOpacity ={
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 20,
    },
  },
  hidden:{
    opacity:0
  }
}

const changeColor ={
  red:{
    color:'red!important',
    transition:{
      duration:2
    }
  },
  black:{
    color:'black!important'
  }
}

function Equipe() {
  const equipe = [
    { nome: 'Patrick', imagem: teamImage, linkedin: "", github: '' },
    { nome: 'Carlos Eduardo', imagem: teamImage, linkedin: '', github: '' },
    { nome: 'Vinicius', imagem: teamImage, linkedin: '', github: '' },
    { nome: 'Igor', imagem: teamImage, linkedin: '', github: '' },
    { nome: 'Wesley', imagem: teamImage, linkedin: '', github: '' },
    { nome: 'Gustavo', imagem: teamImage, linkedin: '', github: '' },
  ];

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={changeOpacity}
      className="container-fluid d-flex justify-content-center bg-dark row overflow-hidden m-0">
      
      <motion.div
        initial='black'
        animate='red' 
        variants={changeColor}
        className="text-center light-text p-5 fw-bolder main-title secondary-font">
          Nosso time!
        </motion.div>
      <div className="col-12 team-grid ">
        {
          equipe.map(member => (
            <div className="card-equipe m-5 m-md-3">
              <div className='image-equipe' style={{}}> <img src={member.imagem} className="image-shadow circle" /></div>
              <div className="rounded links position-relative" style={{ zIndex: 1 }} >
                <div className="card-title light-text text-center">{member.nome}</div>
                <ul className="nav d-flex justify-content-center fs-2 light-text">
                  <li className="nav-item p-2"><a className="text-decoration-none light-text " href={member.linkedin}><i className=" link-redes fa-brands fa-linkedin" /></a></li>
                  <li className="nav-item p-2"><a className="text-decoration-none light-text " href={member.github}><i className=" link-redes fa-brands fa-github"></i></a></li>
                </ul>
              </div>
            </div>
          ))
        }
      </div>
    </motion.div >
  );
}

export default Equipe;