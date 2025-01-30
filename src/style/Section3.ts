import { styled } from "styled-components";
import background1 from "../img/back.png";

export const Section3Div = styled.div`
    background-image: url(${background1});
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
    height: 100vh;
    position: relative;
    width: 100%;
    min-height: 1300px;
    overflow: hidden;
    padding: 160px 24px;
`;

export const Section3Div2 = styled.div`
        position: absolute;
    top: 0px;
    z-index: 2;
    opacity: 1;
    margin: 0px -24px;
    width: 100%;
    height: 180px;
    background: linear-gradient(rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%);
    border-radius: 0px;
`;