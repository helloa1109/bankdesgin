import React from "react";
import { 
    Scroll1, Scroll2, ScrollGroup, ScrollWrapper, Section3Div, 
    Section3Foot, Section3Gradient, Section3h, SectionTextWrapper 
} from "../style/Section3";
import tossImage1 from "../img/toss1.png";
import tossImage2 from "../img/toss2.png";
import "../style/Scroll.css";
import { useScrollEffect } from "../hooks/useScrollEffect";

function Section3() {
    const { scrollGroupRef, img1, img2, rotateX, rotateY, handleMouseMove, handleMouseLeave } = useScrollEffect();

    return (
        <Section3Div>
            <Section3Gradient />
            <SectionTextWrapper>
                <span>언제 어디서든 보던 화면 그대로</span>
                <span>모바일에서도 PC에서도, 연결되는 투자를 경험해보세요</span>
            </SectionTextWrapper>
            <Section3h />
            <ScrollWrapper>
                <ScrollGroup 
                    ref={scrollGroupRef}
                    className="ScrollP" 
                    onMouseMove={handleMouseMove} 
                    onMouseLeave={handleMouseLeave}
                    style={{
                        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                        transition: "transform 0.1s ease-out",
                        transformStyle: "preserve-3d",
                    }}
                >
                    <Scroll1 src={tossImage1} ref={img1} alt="toss image" className="Scrollimg1" />
                    <Scroll2 src={tossImage2} ref={img2} alt="toss image" />
                </ScrollGroup>
            </ScrollWrapper>
            <Section3Foot />
        </Section3Div>
    );
}

export default Section3;
