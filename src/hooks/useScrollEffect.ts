import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useScrollEffect = () => {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const img1 = useRef<HTMLImageElement | null>(null);
    const img2 = useRef<HTMLImageElement | null>(null);
    const scrollGroupRef = useRef<HTMLDivElement | null>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - (left + width / 2)) / 30;
        const y = (e.clientY - (top + height / 2)) / 30;

        setRotateX(y * -1);
        setRotateY(x);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    useEffect(() => {
        if (!img1.current || !img2.current) return;

        let ctx = gsap.context(() => {
            const tl1 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".ScrollP",
                    start: "top 80%",
                    end: "bottom 50%",
                    scrub: 1,
                    markers: true,
                }
            });

            const tl2 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".Scrollimg1",
                    start: "top 80%",
                    end: "bottom 80%",
                    scrub: 1,
                    markers: true,
                }
            });

            tl1.fromTo(
                img1.current,
                { opacity: 1 },
                { duration: 3, opacity: 0, zIndex: -1 }
            );

            tl2.fromTo(
                img2.current,
                { opacity: 0 },
                { duration: 3, opacity: 1, zIndex: 1, width: "1080px", height: "720px" }
            );

            return () => {
                tl1.kill();
                tl2.kill();
            };
        });

        return () => ctx.revert();
    }, []);

    return { scrollGroupRef, img1, img2, rotateX, rotateY, handleMouseMove, handleMouseLeave };
};
