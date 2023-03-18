import React from 'react';
import { useState, useEffect } from "react";
import './Products.css'
import axios from 'axios';
import ProductGrid from '../Components/ProductGrid';
import { addToShoppingCart } from './ShoppingCart';

function Products() {
  const [cervejas, setCervejas] = useState(null);
  const [refeicoes, setRefeicoes] = useState(null);
  const [coqueteis, setCoqueteis] = useState(null);
  const [destilados, setDestilados] = useState(null);

  function getCervejas() {
    axios.get('https://pub-server-w57g.onrender.com/cervejas')
      .then(response => setCervejas(response.data))
      .catch(error => console.error(error))
  }
  function getDestilados() {
    axios.get('https://pub-server-w57g.onrender.com/destilados')
      .then(response => setDestilados(response.data))
      .catch(error => console.error(error))

  }
  function getCoqueteis() {
    axios.get('https://pub-server-w57g.onrender.com/coqueteis')
      .then(response => setCoqueteis(response.data))
      .catch(error => console.error(error))
  }
  function getRefeicoes() {
    axios.get('https://pub-server-w57g.onrender.com/refeicoes')
      .then(response => setRefeicoes(response.data))
      .catch(error => console.error(error))
  }

  useEffect(() => {
    getCervejas();
    getCoqueteis();
    getDestilados();
    getRefeicoes();
  }, [])


  return (
    <div className="products-page">
      <div className="text-center header-produtos d-flex align-items-end justify-content-center p-5">
        <h1 className='wood-text header-titulo fw-bolder mb-3'>Escolha seu veneno</h1>
      </div>
      <div className="products-list">
        <ProductGrid products={cervejas} title={'Cervejas'} onClick={addToShoppingCart} />
        <ProductGrid products={destilados} title={'Destilados'} onClick={addToShoppingCart} />
        <ProductGrid products={coqueteis} title={'Coqueteis'} onClick={addToShoppingCart} />
      </div >
    </div>
  );
}

export default Products