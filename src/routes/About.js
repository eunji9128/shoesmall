import { Outlet } from "react-router-dom";
import styled from "styled-components";

function About() {
    return (
        <>
        <Container>
            <BackgroundImg>
                <Box>
                    <p>reasonable price. good quality.</p>
                    <h1>ShoeShop</h1>
                </Box>
                <ShoesImg></ShoesImg>
            </BackgroundImg>
            {/* <Outlet></Outlet> */}
        </Container>
        
        </>
    )
};

const Container = styled.div`
    width: 100%;
    height: 80vh;
`

const BackgroundImg = styled.div`
    position: absolute;
    width: 100vw;
    height: 80vh;
    background-image: url('./about_background1.jpg');
    background-size: contain; 
    background-position: center;  
    background-repeat: no-repeat;
`

const Box = styled.div`
    float: left;
    margin-top: 10%;
    margin-left: 20%;
    text-align: left;
    color: #0c3f8c;
    
    h1 {
        font-size: 6em;
    }

    p {
        font-size: 1.5em;
    }
`

const ShoesImg = styled.div`
    position: relative;
    top: 30%;
    left: 50%;
    width: 40%;
    height: 40%;
    background-image: url('./shoes1.png');
    background-size: contain;
    background-repeat: no-repeat;
`

export default About;