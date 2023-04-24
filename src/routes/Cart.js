import { useEffect, useState } from "react";
import { Card, CloseButton, Container, ListGroup, Button } from "react-bootstrap";
import styled from "styled-components";
import { checkTotalPrice, onDecreaseHandler, onDeleteHandler, onIncreaseHandler } from "../functions/cartHandler";

const Cart = () => {
    let [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || '');
    let [total, setTotal] = useState(0);
    let total_ = 0;

    useEffect(() => {
        checkTotalPrice(total, setTotal, total_, cart);
        return () => {
            setTotal(0);
        };
    }, [cart]);

    return (
        <Container>
            <Card className="m-5">
                <ListGroup variant="flush">
                    {
                        cart?.map((data, i) => {
                            return (
                                <ListGroup.Item key={i}>
                                    <Box justifyContent="space-between">
                                        <img 
                                            src={`https://codingapple1.github.io/shop/shoes${data.id + 1}.jpg`} 
                                            width="15%" 
                                        />
                                        <span className="m-3">
                                            <h5>{data.title}</h5>
                                            <p>{data.content}</p>
                                            <p>{data.price}</p>
                                        </span>
                                        <span className="m-3">
                                            <button 
                                                className="m-3" 
                                                onClick={(e) => onDecreaseHandler(e, i, cart, setCart)}
                                            >-</button>
                                            {cart[i].amount}
                                            <button 
                                                className="m-3" 
                                                onClick={(e) => onIncreaseHandler(e, i, cart, setCart)}
                                            >+</button>
                                        </span>
                                        <CloseButton onClick={(e) => onDeleteHandler(e, i, cart, setCart)}/>
                                    </Box>
                                </ListGroup.Item>
                            )
                        })
                    }
                </ListGroup>
            </Card>
            <Box className="mb-5" justifyContent="end">
                <h3 className="me-5">Total: {total}</h3>
                <Button 
                    variant="primary" 
                    className="me-3"
                    onClick={() => { alert('주문이 완료 되었습니다!') }}
                >구매하기</Button>
            </Box>
        </Container>
    )
};

const Box = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${props => props.justifyContent || "center"};
    padding: 0px 30px;
    text-align: left;
`

export default Cart