import styled from 'styled-components';
import background from "../img/toss.png";

const flexCenter = `
  display: flex;
  align-items: center;
`;

const commonStyles = `
  color: white;
  cursor: pointer;

  &:hover {
    color: #3182f6;
  }
`;

// 헤더메인
export const Header_Wrapper = styled.div`
  position: sticky;
  height: 68px;
  top: 0;
  width: 100%;
  max-width: 100%;
  backdrop-filter: blur(20px);
  background-color: rgba(0,0,0, .3);
  /* background-color: hsla(0, 0%, 100%, .2); */
  ${flexCenter}
  justify-content: center;
  padding: 24px;
  box-sizing: border-box;
  z-index: 1;
`;

// 헤더Nav
export const Nav = styled.div`
  ${flexCenter}
  justify-content: space-between;
  width: 100%;
  max-width: 1000px;
  gap: 26px;
  
  box-sizing: border-box; 

`;

//로고이미지
export const Logo = styled.div`
  &.background {
    width: 100px;
    height: 25px;
    background-image: url(${background});
    background-size: cover;
    background-position: center;
  }

  &:hover {
    cursor: pointer;
  }
`;

// 메뉴
export const MenuItem = styled.div`
  font-size: 17px;
  font-weight: 600;
  color: white;
  ${commonStyles}

  &.other {
    color: rgba(232,232,253, .36);
  }
`;

export const LeftWrapper = styled.div`
  ${flexCenter}
  gap: 26px;
  flex: 1;
`;

export const RightWrapper = styled.div`
  ${flexCenter}
  gap: 24px;
`;

export const InvestBtn = styled.button`
  font-size: 16px;
  font-weight: 600;
  background-color: #3182f6;
  border: none;
  border-radius: 100px;
  color: white;
  width: auto;
  height: 40px;
  padding: 11px 14px 11px 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #2272eb;
    transition-duration: 0ms.15s;
    transition-timing-function: ease;
  }
`;
