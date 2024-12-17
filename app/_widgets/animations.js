import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export const useFadeIn = ({ delay = 0, duration = 1, easing = "power3.out" } = {}) => {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            gsap.from(ref.current, { opacity: 0, y: 30, duration, delay, ease: easing });
        }
    }, [delay, duration, easing]);

    return ref;
};



export const useSlideIn = ({ direction = "left", delay = 0, duration = 1, distance = 100, easing = "power3.out" } = {}) => {
    const ref = useRef(null);

    useEffect(() => {
        const xValue = direction === "left" ? -distance : distance;

        if (ref.current) {
            gsap.from(ref.current, { x: xValue, opacity: 0, duration, delay, ease: easing });
        }
    }, [direction, delay, duration, distance, easing]);

    return ref;
};




export const useScale = ({ delay = 0, duration = 0.5, scale = 1.2, easing = "power3.out" } = {}) => {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            gsap.fromTo(
                ref.current,
                { scale: 1 },
                { scale, duration, delay, ease: easing, repeat: -1, yoyo: true }
            );
        }
    }, [delay, duration, scale, easing]);

    return ref;
};



export const useHoverAnimation = ({ scale = 1.1, duration = 0.3, easing = "power3.out" } = {}) => {
    const ref = useRef(null);

    const handleMouseEnter = () => {
        gsap.to(ref.current, { scale, duration, ease: easing });
    };

    const handleMouseLeave = () => {
        gsap.to(ref.current, { scale: 1, duration, ease: easing });
    };

    return { ref, handleMouseEnter, handleMouseLeave };
};



export const useGradientAnimation = ({ duration = 8, scroller } = {}) => {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            gsap.to(ref.current, {
                backgroundPosition: "200% center",
                duration,
                repeat: -1,
                ease: "linear",
            });
        }
    }, [duration]);

    return ref;
};


export const useRevealAnimation = ({ delay = 0, duration = 1, easing = "power3.out" } = {}) => {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            gsap.from(ref.current, { opacity: 0, y: 30, duration, delay, ease: easing });
        }
    }, [delay, duration, easing]);

    return ref;
};


export const useScrollAllAnimation = (sectionRef, elementRef = [], sectionOptions = {}, elementOptions = {}, scroller) => {
    useEffect(() => {
        const scroller = document.querySelector("#main-page-container");
        if (!sectionRef.current || !scroller) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                scroller: scroller,
                ...sectionOptions,
            },
        });

        elementRef.forEach((element, index) => {
            if (!element.current) return;

            tl.from(element.current, {
                ...elementOptions,

            });
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };


    }, [sectionRef, elementRef, sectionOptions, elementOptions, scroller]);
};