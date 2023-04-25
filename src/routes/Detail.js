import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Nav } from 'react-bootstrap';

function Detail(props) {
    let { id } = useParams();
    let idx = props.products.findIndex((e) => e.id === parseInt(id));
    let [ tab, setTab ] = useState(0);
    let [ tab_fade, setTabFade ] = useState('');
    let [ comp_fade, setCompFade ] = useState('');

    useEffect(() => {
        setTimeout(() => { setTabFade('end') }, 100)
        return () => {
            setTabFade('');
        }
    }, [tab])

    const checkCartItem = (cart, data) => {
        if (cart === '') return -1;
        console.log('pass case1');
        for (let i=0; i<cart.length; i++) {
            console.log('cart id: ', cart[i].id, 'data id: ', data.id);
            if (cart[i].id === data.id) return i
        }
        return -1;
    };

    const onOrderHandler = (e, data) => {
        e.preventDefault();
        let cart = (JSON.parse(localStorage.getItem('cart')) || '');
        let cartCheck = checkCartItem(cart, data);
        console.log(cartCheck);

        if (cart === '') {
            cart = [{
                ...data,
                amount: 1,
            }]
        } else if (cart !== '' && cartCheck < 0) {
            console.log('case2');
            cart = [
                ...cart,
                {
                    ...data,
                    amount: 1,
                },
            ];
        } else {
            console.log('case3');
            cart[cartCheck] = {
                ...data,
                amount: cart[cartCheck].amount + 1,
            }
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('메뉴가 장바구니에 추가 되었습니다!');
    }

    return (
        <Container>
            {/* product detail */}
            <div className="row">
                <div className="col-md-6">
                    <img src={`https://codingapple1.github.io/shop/shoes${parseInt(id) + 1}.jpg`} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{props.products[idx].title}</h4>
                    <p className="m-3">{props.products[idx].content}</p>
                    <p className="m-3">{props.products[idx].price}원</p>
                    <button 
                        className="btn btn-danger m-3"
                        onClick={(e) => onOrderHandler(e, props.products[idx])}
                    >주문하기</button>
                </div>
            </div>

            {/* tab layout */}
            <Nav variant="tabs" defaultActiveKey="link-0">
                <Nav.Item>
                    <Nav.Link onClick={()=>{ setTab(0) }} eventKey="link-0">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{ setTab(1) }} eventKey="link-1">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{ setTab(2) }} eventKey="link-3">Tab 3</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tab = {tab} tab_fade = {tab_fade}/>
        </Container>
    )
}

function TabContent(props) {
    return (
        <div className={'start '+ props.tab_fade}>
            {
                [<div className="content">content 0: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti deserunt commodi molestias sequi? Nobis natus, magnam debitis nisi quo eos odit? Dicta mollitia quo repellat aspernatur. Natus molestiae debitis veritatis.</div>, 
                <div className="content">content 1: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti deserunt commodi molestias sequi? Nobis natus, magnam debitis nisi quo eos odit? Dicta mollitia quo repellat aspernatur. Natus molestiae debitis veritatis.</div>, 
                <div className="content">content 2: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti deserunt commodi molestias sequi? Nobis natus, magnam debitis nisi quo eos odit? Dicta mollitia quo repellat aspernatur. Natus molestiae debitis veritatis.</div>][props.tab]
            }
        </div>
    )
}

export default Detail;