import { styled } from "styled-components";

export const Section1_Wrapper = styled.div`
    background-color: black;
    width: 100%;
    height: 100%;
    min-height: 100svh;
    position: relative;
    padding: 120px 24px 160px;
    overflow: hidden;
    margin-top: -68px;
`;

export const Section1_Text_Wrapper = styled.div`
    display: flex;
    gap: 0px;
    justify-content: center;
    align-items: center;
    padding-top: 140px;
    text-align: center;
`;

export const Section1_Text = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0px;
    justify-content: center;
    align-items: center;

    span {
    color: white;
    font-size: 60px;
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
  position: relative;
  display: flex;
  flex: 1;
  z-index: 1;
  width: 100%;
  height: 100%;

  span {
    color: white;
    font-size: 50px;
  }
`;