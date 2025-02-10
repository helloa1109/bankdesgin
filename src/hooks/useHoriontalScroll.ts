import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useHorizontalScroll = () => {
    const horizonRef = useRef<HTMLDivElement | null>(null);
    const cardGroupRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!horizonRef.current || !cardGroupRef.current) return;

        let ctx = gsap.context(() => {
            let scrollTween = gsap.to(cardGroupRef.current, {
                x: () => -(cardGroupRef.current?.scrollWidth! - window.innerWidth),
                ease: "none",
                scrollTrigger: {
                    trigger: horizonRef.current,
                    start: "top top",
                    end: () => `+=${cardGroupRef.current?.scrollWidth! - window.innerWidth}`,
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                }
            });

            return () => {
                scrollTween.kill();
            };
        });

        return () => ctx.revert();
    }, []);

    return { horizonRef, cardGroupRef };
};
