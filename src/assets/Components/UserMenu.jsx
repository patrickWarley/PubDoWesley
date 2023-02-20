import Modal from "./Modal"
import AcessoUsuario from "../pages/AcessoUsuario";
import ShoppingCart from "../pages/ShoppingCart";

function UserMenu(props) {
  return (
    <div className="">
      <a className="light-text text-decoration-none" data-bs-toggle="modal" data-bs-target="#modal">
        <span className="d-none d-xl-inline p-2"> Olá, visitante</span><i class="fa-solid fa-user"></i>
      </a>
      <ShoppingCart />

      <Modal id="modal">
        < AcessoUsuario />
      </Modal>
    </div>
  );
}

export default UserMenu;