import React from 'react';
import { Scroll1, ScrollImg1, ScrollWrapper, Section3Div, Section3Gradient, Section3h, SectionTextWrapper } from '../style/Section3';
import tossImage from '../img/toss1.png';
const Section3 = () => {
    return (
        <Section3Div>
            <Section3Gradient />
            <SectionTextWrapper>
                <span>언제 어디서든 보던 화면 그대로</span>
                <span>모바일에서도 PC에서도, 연결되는 투자를 경험해보세요</span>
            </SectionTextWrapper>
            <Section3h />
            <ScrollWrapper>
                <ScrollImg1 className='ScrollP'>
                <Scroll1 src={tossImage} alt="toss image" />
                </ScrollImg1>
            </ScrollWrapper>
        </Section3Div>
    );
}

export default Section3;