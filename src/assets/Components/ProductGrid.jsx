import Loading from "./Loading";

function ProductGrid({ products, title, onClick }) {
  return (
    <div className="products-grid">
      <h2 className="tituloProduto light-text" id="produtos">{title}</h2>
      <div >
        {
          products ? (

            <div className='content product-grid' >

              {
                products.map(product => (
                  <div className="product-card light-text " key={product.id}>
                    <div className="card-img">
                      <img src={product.imagem} alt="My Image" />
                    </div>
                    <div>
                      <h3>{product.nome}</h3>
                      <p>Unidade: {product.unidade}</p>
                      <p className="price">Preço: {product.preco}</p>
                      <button onClick={() => onClick(product)}>Adicionar ao carrinho</button>
                    </div>
                  </div>
                ))
              }
            </div>
          ) : (
            <Loading isVisible={true} />
          )
        }
      </div>
    </div>)
}

export default ProductGrid;