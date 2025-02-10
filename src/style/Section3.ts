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
`;

export const ScrollGroup = styled.div`
  transform: scale(0.84, 0.84);
  translate: none;
  rotate: none;
  scale: none;
  height: 650px;
  width: 300px;
  transform-style: preserve-3d;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /* overflow: hidden; */
`;

export const Scroll1 = styled.img`
  /* z-index: 1; */
  color: transparent;
  position: absolute;
  width: 300px;
  height: 720px;
  stroke: #228be6;
  stroke-width: 2;
  stroke-opacity: 20%;
  border-radius: 20px;
  box-shadow: 0 0 200px rgb(34, 139, 230, 0.2);
  overflow: hidden;
  /* transform: rotateX(5deg) rotateY(5deg); */
`;

export const Scroll2 = styled.img`
  color: transparent;
  position: absolute;
  /* opacity: 0; */
  width: 300px;
  height: 720px;
  transform: translate(0px, 0px);
  translate: none;
  rotate: none;
  scale: none;
  z-index: 1;
  border-radius: 20px;
  overflow: hidden;
`;

export const Section3Foot = styled.div`
    position: absolute;
    bottom: 0px;
    z-index: 2;
    opacity: 1;
    width: 100%;
    margin: 0px -24px;
    height: 180px;
    background: linear-gradient(rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 100%);
    border-radius: 0px;
`;