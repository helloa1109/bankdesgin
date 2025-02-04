import React, { useEffect, useRef } from 'react';
import { Container, ImageContainer, ItemBox, Section1Box, Section1Box2, Section1Wrapper2Item, Test, TextContainer, WW } from '../style/Section2Main';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const Section2 = () => {

    const itemRef1 = useRef(null);
    const itemRef2 = useRef(null);
    const itemRef3 = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.mainitem',
                start: 'top 80%',
                end: 'bottom 60%',
                scrub: 1,
                markers: true,
            }
        });

        tl.fromTo(
            itemRef1.current,
            { x: 100 },
            { x: 0, duration: 3 }
        ).fromTo(
            itemRef2.current,
            { x: 100 },
            { x: 0, duration: 3 },
            "-=1.5"
        ).fromTo(
            itemRef3.current,
            { x: 100 },
            { x: 0, duration: 3 },
            "-=1.5"
        )
        window.addEventListener("resize", ScrollTrigger.update);
        // 컴포넌트 언마운트 시 리스너 제거 및 ScrollTrigger 정리
        return () => {
            window.removeEventListener("resize", ScrollTrigger.update);
            ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // 모든 ScrollTrigger 인스턴스 제거
        };

    }, []);

    return (
        <Section1Box>
            <Section1Box2>
                <span>모두를 위한 투자</span>
                <span>어떤 목적이든, 어떤 상품이든, 모두를 위한 투자를 만나보세요</span>
                <Container />
                <Test>
                    <Section1Wrapper2Item className='mainitem'>
                        <ItemBox className='Fade' ref={itemRef1}>
                            <ImageContainer>
                                <WW />
                            </ImageContainer>
                            <TextContainer>
                                <span>해외채권</span>
                                <span className='BlackText'>소수의 채권으로 모두의 채권으로<br /> 모두에게 동일한 투자 기회를 제공해요</span>
                            </TextContainer>
                        </ItemBox>
                        <ItemBox className='Fade' ref={itemRef2}>
                            <ImageContainer>
                                <WW />
                            </ImageContainer>
                            <TextContainer>
                                <span className='WhiteText'>국내주식, 해외주식</span>
                                <span className='WhiteText'>하나의 앱으로 해외주식도 국내주식처럼<br />같으 경험으로 투자해요</span>
                            </TextContainer>
                        </ItemBox>
                        <ItemBox className='Fade' ref={itemRef3}>
                            <ImageContainer>
                                <WW />
                            </ImageContainer>
                            <TextContainer>
                                <span className='WhiteText'>ETFs</span>
                                <span className='WhiteText'>분산 투자를 다양하게<br />주식처럼 사고 팔 수 있어요</span>
                            </TextContainer>
                        </ItemBox>
                    </Section1Wrapper2Item>
                </Test>
            </Section1Box2>
        </Section1Box>
    );
}

export default Section2;