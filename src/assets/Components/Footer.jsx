function Footer() {
  return (
    <footer className=" dark-background light-text w-100 p-3 px-5 text-center">
      <span>Todos os direitos resevados &copy; Pub do Wesley 2023</span>
      <div className="container">
        <ul className="nav d-inline-flex fs-2 light-text">
          <li className="nav-item p-2"><a className="text-decoration-none light-text " href=""><i className=" link-redes fa-brands fa-square-instagram" /></a></li>
          <li className="nav-item p-2"><a className="text-decoration-none light-text " href=""><i className=" link-redes fa-brands fa-facebook"></i></a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;