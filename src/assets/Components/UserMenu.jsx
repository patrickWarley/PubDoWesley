import Modal from "./Modal"
import AcessoUsuario from "../pages/AcessoUsuario";

function UserMenu(props) {
  return (
    <div className="">
      <a className="light-text text-decoration-none" data-bs-toggle="modal" data-bs-target="#modal">
        <span className="d-none d-lg-inline p-2"> Olá, visitante</span><i class="fa-solid fa-user"></i>
      </a>
      <Modal id="modal">
        < AcessoUsuario />
      </Modal>
    </div>
  );
}

export default UserMenu;