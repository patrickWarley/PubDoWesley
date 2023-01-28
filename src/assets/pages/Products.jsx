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
}

export default Products