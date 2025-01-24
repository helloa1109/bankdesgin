import React from 'react';
import { Header_Wrapper, Nav, MenuItem, Logo, RightWrapper, LeftWrapper, InvestBtn } from '../style/Header';

const Section1_Header = () => {
  return (
    <>
      <Header_Wrapper>
        <Nav>
          <LeftWrapper>
            <Logo className='background' />
            <MenuItem>투자 상품</MenuItem>
            <MenuItem>회사 소개</MenuItem>
            <MenuItem>리서치센터</MenuItem>
            <MenuItem>고객센터</MenuItem>
            <MenuItem>채용</MenuItem>
          </LeftWrapper>
          <RightWrapper>
            <MenuItem>한국어</MenuItem>
            <MenuItem className='other'>English</MenuItem>
            <InvestBtn>PC에서 투자하기</InvestBtn>
          </RightWrapper>
        </Nav>
      </Header_Wrapper>
    </>
  );
};

export default Section1_Header;