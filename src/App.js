import './App.css';
import product_data from './data.js';
import { useState } from 'react';
import { BrowserRouter, Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import Detail from './routes/Detail.js';
import About from './routes/About.js';
import Event from './routes/Event.js';
import List from './components/List.js';
import axios from 'axios';
import styled from 'styled-components';
import Navtop from './components/Navtop';
import Footer from './components/Footer';

function App() {
  // let [products, setProducts] = useState(product_data);
  // let navigate = useNavigate();
  // let [more_count, setMoreCount] = useState(1);
  // let [more_btn, setMoreBtn] = useState(true);

  // const MoreProduct = function () {
  //   setMoreCount(more_count + 1);
  //   if (more_count > 1) {
  //     setMoreBtn(false);
  //   };
  //   axios.get(`https://codingapple1.github.io/shop/data${more_count + 1}.json`)
  //     .then((res) => {
  //       var copy = [...products, ...res.data];
  //       setProducts(copy);
  //     })
  //     .catch(() => {
  //       console.log('failed');
  //     })
  // }

  return (
    <div className="App">
        <Navtop />
        <Outlet></Outlet>
        <Footer />
    </div>

  );
}

export default App;
