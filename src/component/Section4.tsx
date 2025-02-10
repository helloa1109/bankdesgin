import React from "react";
import { 
    Card, CardImg, HorizonCardGroup, InnerTextGroup, 
    ScrollScaleGroup, Section4D, Section4FixHorizon, 
    Section4Inner, Section4S, Section4horizon 
} from "../style/Section4";
import photo from "../img/toss2.png";
import { useHorizontalScroll } from "../hooks/useHoriontalScroll"

const Section4 = (): JSX.Element => {
    const { horizonRef, cardGroupRef } = useHorizontalScroll(); 

    return (
        <Section4D>
            <Section4S ref={horizonRef}>
                <Section4horizon>
                    <Section4FixHorizon>
                        <Section4Inner>
                            <InnerTextGroup>
                                <span>투자할 때 알아야 할 모든 정보</span>
                                <span>재무, 안정성, 실적 뉴스까지 한 눈에 볼 수 있어요</span>
                            </InnerTextGroup>
                            <HorizonCardGroup ref={cardGroupRef}>
                                {[...Array(8)].map((_, i) => (
                                    <Card key={i} className="card">
                                        <CardImg src={photo} />
                                    </Card>
                                ))}
                            </HorizonCardGroup>
                        </Section4Inner>
                        <ScrollScaleGroup>
                            <span>빠르게 성장한 증권사</span>
                        </ScrollScaleGroup>
                    </Section4FixHorizon>
                </Section4horizon>
            </Section4S>
        </Section4D>
    );
};

export default Section4;
