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

export function subtractFromShoppingCart(nome) {
  let shopCart = getShoppingcart();

  let productIndex = shopCart.findIndex(productCart => productCart.nome === nome);

  if (productIndex > -1)
    if ((--shopCart[productIndex].qtdCart) <= 0) shopCart.splice(productIndex, 1);

  saveShopCart(shopCart);
  notify();
}

function removeFromShoppingCart(nome) {
  let shopCart = getShoppingcart();

  let productIndex = shopCart.findIndex(productCart => productCart.nome === nome);
  shopCart.splice(productIndex, 1);

  saveShopCart(shopCart);
  notify();
}

function ShoppingCart() {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [qtd, setQtd] = useState(0);

  function init() {
    let cart = getShoppingcart();

    setQtd(cart.reduce((acc, curr) => acc += curr.qtdCart, 0));
    setShoppingCart(cart)
  }

  function extractPrice(preco) {
    let price = preco.split(' ');
    return parseInt(price[1]);
  }

  function calcTotal() {
    let total = 0;

    if (shoppingCart.length !== 0) {
      total = shoppingCart.reduce((acc, curr) => acc += extractPrice(curr.preco) * curr.qtdCart, 0);
    }

    console.log(total)

    return Intl.NumberFormat('en-US', { style: 'currency', currency: 'BRL' })
      .format(total);
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
        <div className="offcanvaspub-header fs-3">
          <span id="shopCartOffCanvasLabel" className=" p-3">Meu Carrinho</span>
          <button
            type="button"
            className="btn-close btn-close-white text-reset"
            data-bs-dismiss="offcanvas"
            data-bs-target="#shopCartOffCanvas"
            aria-label="Close"
          />
        </div>
        <div class="offcanvaspub-body d-flex flex-column">
          <div>
            {shoppingCart.length > 0 ? (
              shoppingCart.map(
                product => (
                  <div>
                    <div
                      className="row m-1 p-3 bg-shopping-cart "
                      style={{ boxShadow: '5px 5px 2px 0px rgba(0,0,0,0.75)' }}>
                      <div className="col  d-flex align-items-center justify-content-center1">
                        <img src={product.imagem} style={{ width: '100px' }} />
                      </div>
                      <div className="col position-relative ">
                        <span className="position-absolute d-inline-block" style={{ top: '0px', right: '0px' }}>
                          <a onClick={() => removeFromShoppingCart(product.nome)}>X</a>
                        </span>
                        <span>{product.nome}</span><br />
                        <span>{product.preco}</span>
                        <div>
                          Quantidade :
                          <div className="position-relative d-flex">
                            <button
                              className=" qtd-button p-0 px-2 border-0 d-inline-block bg-dark light-text"
                              style={{ borderRadius: '0' }}
                              onClick={() => addToShoppingCart(product)}>
                              +
                            </button>
                            <input
                              type="number"
                              step={1}
                              min={0}
                              value={product.qtdCart}
                              className="w-25 text-center bg-dark light-text border border-0 d-inline"
                              readOnly
                            />
                            <button
                              className=" qtd-button p-0 px-2 border-0 d-inline-block bg-dark light-text"
                              style={{ borderRadius: '0' }}
                              onClick={() => {
                                subtractFromShoppingCart(product.nome)
                              }
                              }
                            >
                              -
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )
            ) : (
              <h1>Nenhum produto adicionado ainda!</h1>
            )
            }
          </div>
          <div className="d-flex m-1 row justify-content-center mt-auto">
            <div className="col-12 shop-cart-info px-5 py-3">
              <div className="fs-2 w-100 d-flex align-items-center justify-content-between">
                <span>Total:</span><span>{calcTotal()}</span>
              </div>
              <div className="fs-4 w-100 d-flex justify-content-between">
                <span>Frete:</span> <span>GRÁTIS</span>
              </div>
              <div className="fs-5 w-100 mt-4 d-flex justify-content-center">
                <button>Finalizar Compra</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;