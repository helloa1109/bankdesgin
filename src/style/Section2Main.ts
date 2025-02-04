import { styled } from "styled-components";
import background1 from "../img/bont.png";

export const Section1Box = styled.div`
    width: 100%;
    height: 100%;
    padding: 160px 24px;
    min-height: 100%;
    box-sizing: border-box;
`;

export const Section1Box2 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    span {
    font-size: 46px;
    font-weight: bold; 
    line-height: 1.3;
    color: ${props => props.theme.colors.Grey800};
    margin: 0px;
    padding: 0px;
  }

  span:nth-child(2) {
    font-size: 24px;
    line-height: 1.6;
    font-weight: 600;
    color: ${props => props.theme.colors.Grey700};
    margin: 20px 0 0;
  }
`;

export const Container = styled.div`
    flex: 0 0 auto;
    height: 30px;
    box-sizing: border-box;
`;

export const Test = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0px;
    justify-content: center;
    align-items: normal;
`;

export const Section1Wrapper2Item = styled.div`
    display: flex;
    padding: 40px 0px;
    flex-direction: row;
    gap: 20px;
    overflow: visible;
`;

export const ItemBox = styled.div`
    position: relative;
    width: 320px;
    height: 480px;
    border-radius: 30px;
    background-color: rgb(242, 244, 246);
    display: flex;
    flex-direction: column;

    &:nth-child(2) {
    background-color: black;
  }
  
  &:nth-child(3) {
    background-color: #4574e2;
  }
`;

export const WW = styled.div`
    background-image: url(${background1});
    background-size: cover;
    background-position: center;
    position: absolute;
    left: 0px;
    right: 0px;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 30px;
    /* z-index: -1; */
`;

export const ImageContainer = styled.div`
  /* width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center; */
  
  position: relative;
  height: 295px;
`;

export const TextContainer = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  color: #333;
  border-radius: 30px;
  text-align: left;

  span {
    font-size: 24px;
    line-height: 1.6;
    margin: 36px 0px 16px 30px;
  }

  & span:nth-child(2) {
    font-size: 17px;
    color: white;
    margin: 0px 0px 0px 30px;
  }

  .BlackText {
    color: #031228B3 !important;
  }
  
  .WhiteText{
    color: ${props => props.theme.colors.Grey100};
  }

  /* &:nth-child(2) span {
    color: white;
  }

  &:nth-child(3) span {
    color: white;
  } */
`;