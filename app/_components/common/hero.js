"use client"
import { useFadeIn, useSlideIn } from "@/app/_widgets/animations";
import { Image, Link } from "@/app/_components/ui";
import { GradientButton } from "../ui/Button";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function HeroComponent() {
    const headingRef = useFadeIn({ delay: 0.2, duration: 1 });
    const paragraphRef = useFadeIn({ delay: 0.5, duration: 1 });
    const buttonGroupRef = useSlideIn({ direction: "bottom", delay: 0.8, distance: 50 });
    const imageRef = useFadeIn({ delay: 1, duration: 1 });

    const gradientRef = useRef(null);

    useEffect(() => {
        if (gradientRef.current) {
            gsap.to(gradientRef.current, {
                backgroundPosition: "200% center",
                duration: 5,
                repeat: -1,
                ease: "linear",
            });
        }
    }, []);

    return (
        <section className="w-full bg-black flex items-center justify-center p-4 sm:p-8 md:p-12 lg:p-16">
            <div
                ref={gradientRef}
                className="w-full max-w-6xl bg-gradient-to-b from-[#000000] to-[#06152A] rounded-3xl pt-8 sm:pt-12 md:pt-16 relative overflow-hidden"
                style={{
                    boxShadow: `
            0 0 0 1px rgba(255, 255, 255, 0.1),
            0 0 0 2px rgba(255, 255, 255, 0.05),
            0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06),
            0 20px 25px -5px rgba(0, 0, 0, 0.5),
            inset 0 1px 1px rgba(255, 255, 255, 0.05)
          `,
                }}
            >
                <div className="mx-auto bg-gradient-to-b from-[#000000] to-[#06152A] text-center space-y-8 relative z-10 pb-12">
                    {/* Heading */}
                    <h1
                        ref={headingRef}
                        className="text-4xl md:text-6xl font-bold tracking-wider text-white"
                        style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                        Redefining 3D Visualization
                        <br />
                        <span className="bg-gradient-to-b from-white to-gray-700 bg-clip-text text-transparent">
                            for a Sustainable Future
                        </span>
                    </h1>

                    {/* Paragraph */}
                    <p
                        ref={paragraphRef}
                        className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
                    >
                        Empowering architects, developers, and designers with immersive, AI-driven
                        visualizations that bring your vision to life.
                    </p>

                    {/* Buttons */}
                    <div
                        ref={buttonGroupRef}
                        className="flex flex-wrap gap-4 justify-center"
                    >
                        <Link href="#services" className={"text-white"}>

                            <GradientButton variant="work">
                                🚀 Explore Our Services

                            </GradientButton>
                        </Link>
                        <Link href="#our-work" className={"no-underline text-white"}>
                            <GradientButton >
                                <div className={"no-underline text-white"}>   See Our Work</div>
                            </GradientButton>
                        </Link>
                    </div>
                </div>

                {/* Image */}
                <div className="relative">
                    <Image
                        ref={imageRef}
                        src="/heroImg.png"
                        width={800}
                        height={400}
                        alt="3D architectural visualization of a modern sustainable home"
                        className="w-full h-auto rounded-lg"
                        priority
                    />
                    <div className="absolute inset-0 bg-blue-500/10" />
                </div>
            </div>
        </section >
    );
}
