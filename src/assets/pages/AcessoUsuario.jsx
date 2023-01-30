import { useRef, useState } from "react";
import Button from "../Components/Button";
import Cadastro from "../Components/Cadastro/Cadastro";
import LogIn from "../Components/LogIn";

function AcessoUsuario() {
  const [currentElement, setCurrentElement] = useState(<Cadastro />);
  const logTab = useRef(null);
  const cadastroTab = useRef(null);

  function handleClick(evt) {
    const { target } = evt;
    const id = target.getAttribute('id');

    if (id === "cadastro") {
      cadastroTab.current.classList.add('active');
      logTab.current.classList.remove('active');
      return setCurrentElement(<Cadastro />);
    }


    cadastroTab.current.classList.remove('active');
    logTab.current.classList.add('active');
    setCurrentElement(< LogIn />);
  }

  return (
    <div className="light-text container-fluid p-3">
      <div className="container d-flex align-items-center">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link" ref={logTab} id="login" onClick={handleClick}>
              Log In
            </a>
          </li>
          <li className="Nav-item">
            <a className="nav-link" ref={cadastroTab} id="cadastro" onClick={handleClick} >
              Cadastro
            </a>
          </li>
        </ul>
      </div>

      <div className="light-text">
        {currentElement}
      </div>
    </div >

  );
}

export default AcessoUsuario;