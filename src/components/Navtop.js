import { Navbar, Container, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Navtop = () => {
    const navigate = useNavigate();
    return (
        <Navbar bg="light" variant="light" sticky='top'>
            <Container>
                <Navbar.Brand href="/">ShoeShop</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
                    <Nav.Link onClick={() => { navigate('/about') }}>About</Nav.Link>
                    {/* <Nav.Link onClick={() => { navigate('/event') }}>Event</Nav.Link> */}
                    <Nav.Link onClick={() => { navigate('/cart') }}>Cart</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
};

export default Navtop