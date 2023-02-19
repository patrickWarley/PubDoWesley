import teamImage from '../images/team.png'
import { motion } from 'framer-motion';

const changeOpacity = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      delayChildren: 2,
      duration: 1,
    },
  },
  hidden: {
    opacity: 0
  }
}

const heroEntry = {
  visible: order => ({
    transform: "translate(0px)",
    transition: {
      delay: order * 0.5,
      duration: 0.5
    }
  }),
  hidden: {
    transform: "translate(1000px)"
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
      whileInView={"visible"}
      viewport={{ once: true, amount: 0.3 }}
      variants={changeOpacity}
      className="container-fluid d-flex justify-content-center bg-dark row overflow-hidden m-0"
    >
      <a id="quemsomos" className="anchor" style={{ paddingTop: '100px', marginTop: '-100px' }}></a>
      <div className="text-center light-text p-5 fw-bolder main-title secondary-font">
        Nosso time!
      </div>
      <div className="col-12 team-grid ">
        {
          equipe.map((member, i) => (
            <motion.div
              custom={i}
              variants={heroEntry}
              className="card-equipe m-5 m-md-3">

              <div className='image-equipe' style={{}}> <img src={member.imagem} className="image-shadow circle" /></div>
              <div className="rounded links position-relative" style={{ zIndex: 1 }} >
                <div className="card-title light-text text-center">{member.nome}</div>
                <ul className="nav d-flex justify-content-center fs-2 light-text">
                  <li className="nav-item p-2"><a className="text-decoration-none light-text " href={member.linkedin}><i className=" link-redes fa-brands fa-linkedin" /></a></li>
                  <li className="nav-item p-2"><a className="text-decoration-none light-text " href={member.github}><i className=" link-redes fa-brands fa-github"></i></a></li>
                </ul>

              </div>
            </motion.div>
          ))
        }
      </div>
    </motion.div >
  );
}

export default Equipe;