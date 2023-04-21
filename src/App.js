import './App.css';
import { Navbar, Container, Nav, Row, Button } from 'react-bootstrap';
import product_data from './data.js';
import { useState } from 'react';
import { BrowserRouter, Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import Detail from './routes/Detail.js';
import About from './routes/About.js';
import Event from './routes/Event.js';
import List from './components/List.js';
import axios from 'axios';

function App() {
  let [products, setProducts] = useState(product_data);
  let navigate = useNavigate();
  let [more_count, setMoreCount] = useState(1);
  let [more_btn, setMoreBtn] = useState(true);

  const MoreProduct = function () {
    setMoreCount(more_count + 1);
    if (more_count > 1) {
      setMoreBtn(false);
    };
    axios.get(`https://codingapple1.github.io/shop/data${more_count + 1}.json`)
      .then((res) => {
        var copy = [...products, ...res.data];
        setProducts(copy);
      })
      .catch(() => {
        console.log('failed');
      })
  }

  return (
    <div className="App">
        {/* navbar */}
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="/">ShoeShop</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
              {/* <Nav.Link onClick={()=>{navigate('/detail/0')}}>Detail</Nav.Link> */}
              <Nav.Link onClick={()=>{navigate('/about')}}>About</Nav.Link>
              <Nav.Link onClick={()=>{navigate('/event')}}>Event</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        {/* define routes */}

        <Outlet></Outlet>

        <div style={{clear: "both"}}>
          <h1>footer</h1>
          <p>footer blahblah</p>
        </div>
        {/* nav - outlet - footer 레이아웃 다시 잡아야 하고, 
        먼저 routing part 정리부터 해줘야 할 듯 */}
    </div>

  );
}

export default App;
