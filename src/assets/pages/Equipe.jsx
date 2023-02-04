import teamImage from '../images/team.png'

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
    <section className="container-fluid d-flex justify-content-center bg-dark row overflow-hidden m-0">
      <div className="col-lg-4 col-12 border border-1 text-light min-vh-100 overflow-hidden position-relative">
        <div className="bg-light circle equipe-title text-center dark-text position-absolute top-25 translate-middle"></div>
        Nosso time
      </div>
      <div className="col-lg-8 col-12 border border-3 team-grid ">
        {
          equipe.map(member => (
            <div className="card-equipe m-2 m-md-3">
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
    </section >
  );
}

export default Equipe;