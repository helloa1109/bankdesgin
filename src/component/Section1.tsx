import React from 'react';
import { CoinWrappr, Section1_Text, Section1_Text_Wrapper, Section1_Wrapper } from '../style/Section1Main';

const Section1 = () => {
    return (
        <Section1_Wrapper>
            <Section1_Text_Wrapper>
                 <Section1_Text>
                    <span>투자의 힘을 모두에게</span>
                    <span>누구나 마주할 투자의 모든 어려움, 토스증권이 바꿀게요</span>
                </Section1_Text>   
            </Section1_Text_Wrapper>
            <CoinWrappr>
                {/* <span>텍스트를 테스트</span> */}
            </CoinWrappr>
        </Section1_Wrapper>
    );
}

export default Section1;