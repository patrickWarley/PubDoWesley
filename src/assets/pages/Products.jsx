import React from 'react';
import { useState, useEffect } from "react";
import './Products.css'
import axios from 'axios';

function Products(){
    const [cervejas, setCervejas] = useState(null);
    useEffect(() => {
      axios.get('https://pub-server-w57g.onrender.com/cervejas')
        .then(response => setCervejas(response.data))
        .catch(error => console.error(error))
    }, [])
  
    const [destilados, setDestilados] = useState(null);
    useEffect(() => {
      axios.get('https://pub-server-w57g.onrender.com/destilados')
        .then(response => setDestilados(response.data))
        .catch(error => console.error(error))
    }, [])
  
    const [coqueteis, setCoqueteis] = useState(null);
    useEffect(() => {
      axios.get('https://pub-server-w57g.onrender.com/coqueteis')
        .then(response => setCoqueteis(response.data))
        .catch(error => console.error(error))
    }, [])
  
    const [refeicoes, setRefeicoes] = useState(null);
    useEffect(() => {
      axios.get('https://pub-server-w57g.onrender.com/refeicoes')
        .then(response => setRefeicoes(response.data))
        .catch(error => console.error(error))
    }, [])

    return(
        <div className="produtos">
          <div>
      <h2 className="tituloProduto" id="produtos">Cervejas</h2>
      <div >
        {cervejas ? (

          <div className='content product-grid'>

            {cervejas.map(cerveja => (
              <div className="product-card" key={cerveja.id}>
                <div className="card-img">
                  <img src={cerveja.imagem} alt="My Image" />
                </div>
                <div>
                  <h3>{cerveja.nome}</h3>
                  <p>Unidade: {cerveja.unidade}</p>
                  <p className="price">Preço: {cerveja.preco}</p>
                  <button>Adicionar ao carrinho</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>Carregando...</div>
        )}
      </div>
      </div>
      <h2 className="tituloProduto">Destilados</h2>
      <div >
        {destilados ? (

          <div className='content product-grid'>

            {destilados.map(destilado => (
              <div className="product-card" key={destilado.id}>
                <div className="card-img">
                  <img src={destilado.imagem} alt="My Image" />
                </div>
                <div>
                  <h3>{destilado.nome}</h3>
                  <p>Unidade: {destilado.unidade}</p>
                  <p className="price">Preço: {destilado.preco}</p>
                  <button>Adicionar ao carrinho</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>Carregando...</div>
        )}
      </div>
      <h2 className="tituloProduto">Drinks</h2>
      <div >
        {coqueteis ? (

          <div className='content product-grid'>

            {coqueteis.map(coquetel => (
              <div className="product-card" key={coquetel.id}>
                <div className="card-img">
                  <img src={coquetel.imagem} alt="My Image" />
                </div>
                <div>
                  <h3>{coquetel.nome}</h3>
                  <p>Unidade: {coquetel.unidade}</p>
                  <p className="price">Preço: {coquetel.preco}</p>
                    <button>Adicionar ao carrinho</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>Carregando...</div>
        )}
      </div>
    </div>    
    );
}

export default Products