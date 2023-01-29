import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import UserMenu from "./UserMenu";
function Navbar() {
  const myRef = useRef(null);
  const location = useLocation();

  function handleScroll(evt) {
    //essa variavel salva em que posição nos estamos
    let windowHeight = window.scrollY;
    let classList = myRef.current.classList;

    if (windowHeight > 500) {
      classList.add("scrollNavbar");
    } else {
      classList.remove("scrollNavbar");
    }

  }

  useEffect(() => {
    window.document.addEventListener('scroll', handleScroll);
    //get the offset and save it 
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-light p-4 position-fixed vw-100`}
      style={{ zIndex: 99999, boxShadow: "10px 2px 5px 0px rgba(0,0,0,0.75)" }}
      ref={myRef}
    >
      <div className="container-fluid">
        <div className="d-flex col justify-content-between order-1">
          <Link className="navbar-brand" to={'/'}>Pub Do Wesley</Link>
        </div>

        <div className="collapse navbar-collapse justify-content-center col order-3 order-lg-2" id="navbarSupportedContent">
          <ul className="d-flex navbar-nav mt-5 mt-lg-0 mb-2 mb-lg-0 align-items-center bigger-text wood-text">

            <div className="d-lg-flex">
              <li className="nav-item m-2">
                <Link className="nav-link fs-5 fw-bolder" to={'/'}>
                  Home
                </Link>
              </li>

              <li className="nav-item m-2">
                {
                  location.pathname !== '/' ?
                    <Link className="nav-link fs-5 fw-bolder" to={'/#quemsomos'}>Quem Somos</Link>
                    :
                    <a className="nav-link fs-5 fw-bolder" href="#quemsomos">Quem Somos</a>
                }
              </li>

              <li className="nav-item m-2">
                <Link to={'/produtos'} className="nav-link fs-5 fw-bolder">Produtos</Link>
              </li>

              <li className="nav-item m-2">
                {
                  location.pathname !== '/' ?
                    <Link className="nav-link fs-5 fw-bolder" to={'/#contato'}>Contato</Link>
                    :
                    <a className="nav-link fs-5 fw-bolder" href="#contato">Contato</a>
                }
              </li>
            </div>
          </ul>
        </div>

        <div className="col order-2 order-lg-3 d-flex justify-content-end">
          <ul className="d-flex flex-row align-items-center navbar-nav">

            <li className="nav-item px-2">
            </li>

            <li className="nav-item px-2">
              <UserMenu />
            </li>

            <li className="nav-item px-2">
              <button className="navbar-toggler hambumguer-icon" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;