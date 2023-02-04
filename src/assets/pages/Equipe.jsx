import teamImage from '../images/team.png'

function Equipe(){
  const equipe=[
    {nome:'Patrick',imagem:teamImage, linkedin:'', github:''},
    { nome: 'Carlos Eduardo', imagem:teamImage, linkedin:'', github:''},
    { nome: 'Vinicius', imagem:teamImage, linkedin:'', github:''},
    { nome: 'Igor', imagem:teamImage, linkedin:'', github:''},
    { nome: 'Wesley', imagem:teamImage, linkedin:'', github:''},
    { nome: 'Gustavo', imagem:teamImage, linkedin:'', github:''},
  ];
  
  return(
    <section className="container-fluid d-flex justify-content-center align-items-center">
      <div className="row">
      {
        equipe.map(member => (
          <div className="col-md-5 col-12 card m-1 text-center h-50 p-0 card-equipe">
            <img src={teamImage} className="card-img-top image-equipe " style={{ borderRadius: '50%' }} />
            <div className="card-body bg-dark">
              <div className="card-title light-text">Nome</div>
              <ul className="nav d-inline-flex fs-2 light-text">
                <li className="nav-item p-2"><a className="text-decoration-none light-text " href=""><i className=" link-redes fa-brands fa-square-instagram" /></a></li>
                <li className="nav-item p-2"><a className="text-decoration-none light-text " href=""><i className=" link-redes fa-brands fa-facebook"></i></a></li>
              </ul>
            </div>
          </div>
        ))
      }
      </div>
    </section>
  );
}

export default Equipe;