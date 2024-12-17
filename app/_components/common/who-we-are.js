"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import TitleSubtitleWidget from "../ui/Title";
import { useScrollAllAnimation } from "@/app/_widgets/animations";

gsap.registerPlugin(ScrollTrigger);

export default function WhoWeAreSection() {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const buttonRef = useRef(null);

    useScrollAllAnimation(sectionRef, [titleRef, subtitleRef, buttonRef], {
        start: "top 50%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
    }, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.3,
        stagger: 0.3,
    });



    useScrollAllAnimation(sectionRef, [imageRef], {
        start: "top 50%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
    }, {
        x: -100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
    });

    return (
        <div
            ref={sectionRef}
            className="flex items-center justify-center min-h-[70vh] bg-gradient-to-r from-blue-900 via-black via-50% to-blue-900"
        >
            <div className="flex flex-col md:flex-row items-center max-w-5xl p-8 rounded-lg space-y-8 md:space-y-0">
                {/* Image */}
                <div ref={imageRef} className="flex-shrink-0">
                    <Image
                        src="/who-us.png"
                        alt="Building"
                        width={300}
                        height={300}
                        className="rounded-lg"
                    />
                </div>

                {/* Text Content */}
                <div className="md:ml-8 text-white text-left">
                    <div ref={titleRef}>
                        <TitleSubtitleWidget
                            title="Who We Are"
                            subtitle="Zenviro is a visionary design studio dedicated to pushing the boundaries of 3D visualization. Partnered with Zeneric, our AI-driven technology arm, we deliver cutting-edge, sustainable solutions in architectural visualization, VR, and beyond. Our focus is on quality, innovation, and ethical practices that prioritize both people and the planet."
                            titleClass="text-4xl md:text-6xl font-bold text-white"
                            subtitleClass="mt-4 text-base md:text-lg font-extralight text-gray-300 leading-6 tracking-widest"
                            containerStyle="text-start"
                        />
                    </div>

                    {/* Button */}
                    <button
                        ref={buttonRef}
                        className="px-6 py-3 mt-6 text-lg font-semibold text-blue-900 bg-blue-500 rounded-full hover:bg-blue-600"
                    >
                        Learn More About Zenviro
                    </button>
                </div>
            </div>
        </div>
    );
}
