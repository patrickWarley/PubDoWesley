import { useEffect, useState } from "react";

const nameBd = 'shopCartPubDoWesley';
let callback;

function subscribe(fn) {
  callback = fn;
}

function notify() {
  callback();
}

function getShoppingcart() {
  let shopCart = JSON.parse(localStorage.getItem(nameBd));

  if (shopCart === null) {
    shopCart = [];
    localStorage.setItem(nameBd, JSON.stringify([]));
  }

  return shopCart;
}

function saveShopCart(shopCart) {
  localStorage.setItem(nameBd, JSON.stringify(shopCart));
}

export function addToShoppingCart(product) {
  let shopCart = getShoppingcart();

  let productIndex = shopCart.findIndex(productCart => productCart.nome === product.nome);

  productIndex > -1 ? shopCart[productIndex].qtdCart++ : shopCart.push({ ...product, qtdCart: 1 });

  saveShopCart(shopCart);
  notify();
}

export function removeFromShoppingCart(productId) {
  let shopCart = getShoppingcart();
  shopCart = shopCart.filter(product => product.id !== productId);
  saveShopCart(shopCart);
}

function ShoppingCart() {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [qtd, setQtd] = useState(0);

  function init() {
    let cart = getShoppingcart();

    setQtd(cart.reduce((acc, curr) => acc += curr.qtdCart, 0));
    setShoppingCart(cart)
  }

  useEffect(() => {
    init();

    subscribe(() => {
      init();
    });
  }, []);

  return (
    <>
      <a
        className="light-text mx-3 text-decoration-none"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#shopCartOffCanvas"
        aria-controls="shopCartOffCanvas">
        <i class="fa-solid fa-cart-shopping"></i>
        <span className="circle" style={{ transform: 'translate(1px,10px)', position: 'absolute' }}>{qtd}</span>
      </a>

      <div
        className="offcanvaspub offcanvaspub-end bg-dark light-text"
        tabindex="-1"
        id="shopCartOffCanvas"
        aria-labelledby="shopCartOffCanvasLabel"
      >
        <div className="offcanvaspub-header">
          <h5 id="shopCartOffCanvasLabel">Carrinho de compras</h5>
          <button
            type="button"
            className="btn-close btn-close-white text-reset"
            data-bs-dismiss="offcanvas"
            data-bs-target="#shopCartOffCanvas"
            aria-label="Close"
          />
        </div>
        <div class="offcanvaspub-body">
          <div>
            {shoppingCart.length > 0 ? (
              shoppingCart.map(
                product => (
                  <div>
                    <div className="row m-1 p-3 bg-shopping-cart " style={{ boxShadow: '5px 5px 2px 0px rgba(0,0,0,0.75)' }}>
                      <div className="col">
                        <img src={product.imagem} style={{ width: '100px' }} />
                      </div>
                      <div className="col">
                        <p>{product.nome}</p>
                        <span className="d-block">Quantidade : {product.qtdCart}</span>
                        <span>{product.preco}</span></div>
                    </div>
                  </div>
                )
              )
            ) : (
              <h1>Nenhum produto adicionado ainda!</h1>
            )
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;