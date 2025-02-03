import React from 'react';
import { Container, ImageContainer, ItemBox, Section1Box, Section1Box2, Section1Wrapper2Item, Test, TextContainer, WW } from '../style/Section2Main';

const Section2 = () => {
    return (
        <Section1Box>
            <Section1Box2>
                <span>모두를 위한 투자</span>
                <span>어떤 목적이든, 어떤 상품이든, 모두를 위한 투자를 만나보세요</span>
                <Container />
                <Test>
                    <Section1Wrapper2Item>
                        <ItemBox>
                            <ImageContainer>
                                <WW />
                            </ImageContainer>
                            <TextContainer>
                                <span>해외채권</span>
                                <span className='Second'>소수의 채권으로 모두의 채권으로<br /> 모두에게 동일한 투자 기회를 제공해요</span>
                            </TextContainer>
                        </ItemBox>
                        <ItemBox>
                            <ImageContainer>
                                <WW />
                            </ImageContainer>
                            <TextContainer>
                                <span className='Text2'>국내주식, 해외주식</span>
                                <span>하나의 앱으로 해외주식도 국내주식처럼<br />같으 경험으로 투자해요</span>
                            </TextContainer>
                        </ItemBox>
                        <ItemBox>
                            <ImageContainer>
                                <WW />
                            </ImageContainer>
                            <TextContainer>
                                <span>ETFs</span>
                                <span>분산 투자를 다양하게<br />주식처럼 사고 팔 수 있어요</span>
                            </TextContainer>
                        </ItemBox>
                    </Section1Wrapper2Item>
                </Test>
            </Section1Box2>
        </Section1Box>
    );
}

export default Section2;