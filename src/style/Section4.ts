import { styled } from "styled-components";

export const Section4D = styled.div`
`;

export const Section4S = styled.section`
    min-height: 100vh;
    overflow: hidden;
`;

export const Section4horizon = styled.div`
    order: 0;
    place-self: auto;
    grid-area: auto;
    z-index: auto;
    float: none;
    flex-shrink: 1;
    display: flex;
    margin: 0px;
    inset: 0px;
    position: relative;
    flex-basis: auto;
    overflow: visible;
    box-sizing: border-box;
    width: 1920px;
    height: 5080px;
    padding: 0px 0px 4000px;
`;

export const Section4FixHorizon = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0px;
    justify-content: center;
    align-items: center;
    margin: 0px;
    height: 1080px;
    position: fixed;
    translate: none;
    rotate: none;
    scale: none;
    left: 0px;
    top: -0.203125px;
    max-width: 1920px;
    width: 1920px;
    max-height: 1080px;
    padding: 0px;
    box-sizing: border-box;
    transform: translate(0px, 0px);
`;

export const Section4Inner = styled.div`
    width: 1000px;
    height: 1024px;
    position: relative;
`;

export const InnerTextGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0px;
    justify-content: normal;
    align-items: center;
    margin-top: 210px;
    white-space: nowrap;
    z-index: 3;
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

export const HorizonCardGroup = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: normal;
    align-items: normal;
    position: relative;
    left: 0px;
    margin-top: 86px;
    translate: none;
    rotate: none;
    scale: none;
    transform: translate3d(-321.25px, 0px, 0px);
    /* border: 5px solid black; */
`;

export const Card = styled.div`
    position: relative;
    border-radius: 20px;
`;

export const CardImg = styled.img`
    min-width: 300px;
    width: 20vw;
    height: 400px;
    box-shadow: rgba(0, 27, 55, 0.1) 0px 2px 30px 0px;
    border-radius: 20px;
`;

export const ScrollScaleGroup = styled.div`
    visibility: hidden;
    height: 0px;
    width: 100vw;
    flex-direction: column;
    scale: 1;
    z-index: 3;
    position: absolute;
    background-image: url("../img/back2.png");
    background-position: 50%;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
`;