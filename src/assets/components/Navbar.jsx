import { useEffect, useState } from "react";

function Navbar() {

  const [sticky, setSticky] = useState(false);

  function handleScroll(evt) {
    //essa variavel salva em que posição nos estamos
    let windowHeight = window.scrollY;

    if (windowHeight > 500) setSticky(true);
    else {
      if (sticky) setSticky(false);
    }

  }

  useEffect(() => {
    window.document.addEventListener('scroll', handleScroll);
    //get the offset and save it 
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-dark p-4 ${sticky ? "position-fixed" : "position-absolute"} vw-100`} style={{ zIndex: 99999 }}>
      <div className="container-fluid">
        <div className="d-flex col-12 col-lg justify-content-between">
          <a className="navbar-brand" href="#">Pub Do Wesley</a>
          <button className="navbar-toggler hambumguer-icon" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse col-lg" id="navbarSupportedContent">
          <ul className="d-flex navbar-nav mt-5 mt-lg-0 mb-2 mb-lg-0 me-auto align-items-center bigger-text">

            <div className="d-lg-flex">
              <li className="nav-item m-2">
                <a className="nav-link fs-5 fw-bolder" aria-current="page" href="#">Home</a>
              </li>

              <li className="nav-item m-2">
                <a className="nav-link fs-5 fw-bolder" href="#">Quem Somos</a>
              </li>

              <li className="nav-item m-2">
                <a className="nav-link fs-5 fw-bolder" href="#">Cardapio</a>
              </li>

              <li className="nav-item m-2">
                <a className="nav-link fs-5 fw-bolder" href="#contato">Contato</a>
              </li>
            </div>
          </ul>

          <div className="d-block">
            <ul className="d-flex navbar-nav mb-2 mb-lg-0">
              <li className="nav-item m-xs-2 inline-block">
                <a className="nav-link" href="#"> Cadastro </a>
              </li>

              <li className="nav-item m-2 m-md-0 inline-block">
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