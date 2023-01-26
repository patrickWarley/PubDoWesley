function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-4 position-absolute w-100">
      <div className="container-fluid">
        <div className=" d-flex col">
          <a className="navbar-brand mr-auto col" href="#">Pub Do Wesley</a>
          <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse col-lg" id="navbarSupportedContent">
          <ul className="d-flex navbar-nav mb-2 mb-lg-0 me-auto">

            <div className="d-lg-flex">
              <li className="nav-item m-2">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>

              <li className="nav-item m-2">
                <a className="nav-link" href="#">Quem Somos</a>
              </li>

              <li className="nav-item m-2">
                <a className="nav-link" href="#">Cardapio</a>
              </li>

              <li className="nav-item m-2">
                <a className="nav-link" href="#contato">Contato</a>
              </li>
            </div>
          </ul>

          <div className="d-flex">
            <ul className="d-flex navbar-nav mb-2 mb-lg-0">
              <li className="nav-item m-xs-2">
                <a className="nav-link" href="#"> Cadastro </a>
              </li>

              <li className="nav-item m-2 m-md-0">
                <a className="nav-link" href="#"> Login </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;