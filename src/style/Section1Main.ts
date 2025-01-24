import { styled } from "styled-components";
import coin from "../img/coin.png";
export const Section1_Wrapper = styled.div`
    background-color: black;
    width: 100%;
    height: 100%;
    min-height: 100svh;
    position: relative;
    padding: 120px 24px 160px;
    overflow: hidden;
    margin-top: -68px;
    box-sizing: border-box;
    border: 1px solid red;
`;

export const Section1_Text_Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0px;
    justify-content: center;
    align-items: center;
    padding-top: 140px;
    text-align: center;
    /* border: 1px solid yellow; */
`;

export const Section1_Text = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0px;
    justify-content: center;
    align-items: center;
    /* border: 1px solid blue; */

    span {
    color: white;
    font-size: 40px;
    font-weight: bold; 
    line-height: 1.3;
  }

  span:nth-child(2) {
    font-size: 20px;
    line-height: 1.6;
    font-weight: 600;
    margin-top: 20px;
    color: #FDFDFFBF;
  }
`;

export const CoinWrappr = styled.div`
  /* position: absolute; */
  left: 0;
  right: 0;
  bottom: 0; /* 하단에 배치 */
  display: block;
  object-fit: contain;
  z-index: 1; /* z-index 조정 */
  width: 100%;
  height: 100%;
  border: 1px solid blue;
  overflow: hidden;

  span {
    color: white;
    font-size: 50px;
  }
`;