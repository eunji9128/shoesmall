import { useState } from "react";
import { Card, CloseButton, Container, ListGroup } from "react-bootstrap";
import styled from "styled-components";

const Cart = () => {
    let [count, setCount] = useState(0);
    let cart = (JSON.parse(localStorage.getItem('cart')) || '');
    console.log(cart[0].id);

    const onIncreaseHandler = () => {
        setCount(count + 1);
    };

    const onDecreaseHandler = () => {
        setCount(count - 1);
    };

    const onDeleteHandler = () => {
        setCount(0);
    };

    return (
        <Container>
            <Card className="m-5">
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <Box>
                            <img src={`https://codingapple1.github.io/shop/shoes${cart[0].id + 1}.jpg`} width="15%" />
                            <span className="m-3">
                                <h3>{cart[0].title}</h3>
                                <p>{cart[0].content}</p>
                                <p>{cart[0].price}</p>
                            </span>
                            <span className="m-3">
                                <button className="m-3" onClick={onDecreaseHandler}>-</button>
                                {count}
                                <button className="m-3" onClick={onIncreaseHandler}>+</button>
                            </span>
                            <CloseButton onClick={onDeleteHandler}/>
                        </Box>
                    </ListGroup.Item>
                    <ListGroup.Item>item2</ListGroup.Item>
                    <ListGroup.Item>item3</ListGroup.Item>
                </ListGroup>
            </Card>
        </Container>
    )
};

const Box = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px 30px;
    text-align: left;
`

export default Cart