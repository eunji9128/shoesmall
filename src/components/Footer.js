import styled from "styled-components";

const Footer = () => {
    return (
        <Box>
            <h6>@SELEN(EUNJI), ALL RIGHTS RESERVED.</h6>
            <p>서울특별시 광진구 자양동, eunji9128@gmail.com, https://github.com/eunji9128</p>
        </Box>
    )
};

const Box = styled.div`
    width: 100%;
    text-align: center;
    padding: 20px;
    background-color: #f8f9fa;
    color: #888888;

    h6, p {
        margin: 4px;
        font-size: 0.8em;
    }
`

export default Footer