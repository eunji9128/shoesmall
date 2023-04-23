import { Container, Button } from "react-bootstrap";
import List from "./components/List";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import product_data from "./data";

const ProductDisplay = () => {
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
        <>
            {/* main background */}
            <div className='main-bg'></div>
            
            {/* product display */}
            <Container>
                <List products={products} />
            </Container>
            
            {
            more_btn == true
                ? <Button variant='secondary' onClick={MoreProduct}>more products</Button>
                : null
            }
        </>
        
    )
};

export default ProductDisplay
