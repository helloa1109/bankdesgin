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

export const Section3Gradient = styled.div`
  position: absolute;
  top: 0px;
  z-index: 2;
  opacity: 1;
  margin: 0px -24px;
  width: 100%;
  height: 180px;
  background: linear-gradient(
    rgb(255, 255, 255) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  border-radius: 0px;
`;

export const SectionTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  align-items: center;
  justify-content: center;
  text-align: center;

  span {
    font-weight: bold;
    line-height: 1.3;
    font-size: 48px;
    margin: 0;
    padding: 0;
    color: ${(props) => props.theme.colors.Grey800};
  }

  span:nth-child(2) {
    color: ${(props) => props.theme.colors.Grey700};
    font-size: 24px;
    font-weight: 600;
    margin-top: 20px;
  }
`;

export const Section3h = styled.div`
  flex: 0 0 auto;
  height: 80px;
`;

export const ScrollWrapper = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    /* border: 4px solid yellow; */
`;

export const ScrollImg1 = styled.div`
    transform: scale(0.84, 0.84);
    translate: none;
    rotate: none;
    scale: none;
    height: 650px;
    width: 300px;
    
`;

export const Scroll1 = styled.img`
    z-index: 1;
    color: transparent;
    position: absolute;
    width: 300px;
    height: 650px;
    stroke: #228be6;
    stroke-width: 2;
    stroke-opacity: 20%;
    border-radius: 20px;
    box-shadow: 0 0 200px rgb(34, 139, 230, .2);
    overflow: hidden;
`;