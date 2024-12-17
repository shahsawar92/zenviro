"use client"
import Image from 'next/image'
import { CardWidget } from '../ui/H-card'
import TitleSubtitleWidget from '../ui/Title'
import { useScrollAllAnimation } from '@/app/_widgets/animations';
import { useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const services = [
    {
        title: 'Architectural Visualization',
        description: 'Realize your architectural concepts with lifelike 3D renderings.',
        image: '/arch.png',
        colSpan: 2,
        rowSpan: 3,
        layout: 'vertical',
        width: 'w-full',
    },
    {
        title: 'VR Experiences',
        description: 'Step into immersive virtual experiences designed to engage and inspire.',
        image: '/vr.png',
        colSpan: 2,
        rowSpan: 2,
        layout: 'vertical',
        width: 'w-full',
    },
    {
        title: 'Real-time Walkthroughs',
        description: 'Explore your projects interactively with real-time walkthroughs.',
        image: '/realtime.png',
        colSpan: 4,
        rowSpan: 1,
        layout: 'horizontal',
        width: 'w-full',
        height: 'h-[150px]'
    },
    {
        title: 'Real Estate Advertising Content',
        description: 'Boost your property’s appeal with high-quality, market-ready visuals.',
        image: '/realestate.png',
        colSpan: 4,
        rowSpan: 1,
        layout: 'horizontal',
        width: 'w-full',
    },
    {
        title: 'Web Development',
        description: 'Create a powerful online presence with web solutions built to impress.',
        image: '/web.png',
        colSpan: 6,
        rowSpan: 1,
        layout: 'horizontal',
        width: 'w-full',
    },
    {
        title: 'Digital Marketing',
        description: 'Elevate your brand visibility with targeted digital strategies.',
        image: '/dg.png',
        colSpan: 4,
        rowSpan: 1,
        layout: 'horizontal',
        width: 'w-full',
    },
    {
        title: 'Game Development',
        description: 'Craft interactive, engaging immersive gaming experiences.',
        image: '/game.png',
        colSpan: 4,
        rowSpan: 1,
        layout: 'horizontal',
        width: 'w-full',
    },
    {
        title: 'Metaverse Solutions',
        description: 'Explore new realities with our groundbreaking metaverse environments.',
        image: '/metaverse.png',
        colSpan: 8,
        rowSpan: 1,
        layout: 'horizontal',
        width: 'w-full',
    },
]
gsap.registerPlugin(ScrollTrigger);
gsap.config({
    markers: true
});

export default function ServicesGrid() {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const titleRef = useRef(null);

    const vRefs = useRef([]);
    const hRefs = useRef([]);

    useScrollAllAnimation(sectionRef, [titleRef], {
        start: "top 50%",
        end: "bottom 20%",
        toggleActions: "play pause resume reverse",
    }, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.3,
        stagger: 0.3,
    });

    useScrollAllAnimation(sectionRef, [vRefs], {
        start: "top 50%",
        end: "bottom 20%",
        toggleActions: "play pause resume reverse",
    }, {
        x: -100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
    });


    useScrollAllAnimation(sectionRef, [hRefs], {
        start: "top 50%",
        end: "bottom 20%",
        toggleActions: "play pause resume reverse",
    }, {
        x: -100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
    });

    return (
        <div ref={sectionRef} id='services' className="bg-black text-white py-12">
            <div ref={titleRef}>

                <TitleSubtitleWidget
                    ref={titleRef}
                    title="What We Offer"
                    subtitle="Bringing Ideas to Life, One Pixel at a Time"
                    titleClass='text-4xl lg:text-6xl font-bold text-white'
                    subtitleClass='mt-4 text-sm lg:text-lg font-extralight text-gray-300 leading-6 tracking-widest'
                    containerStyle='text-center mb-8'
                />
            </div>
            <div className="flex flex-col md:grid md:grid-cols-8 gap-6 max-w-6xl px-5 md:px-0 mx-auto">
                {services.map((service, index) => (
                    <div
                        key={index}
                        ref={(el) => {
                            if (service?.layout === 'vertical') {
                                vRefs.current[index] = el;
                            } else {
                                hRefs.current[index] = el;
                            }
                        }}
                        className={`${service.layout === 'vertical' ? 'bg-gradient-to-b h-[250] md:h-auto' : 'bg-gradient-to-r h-[250px]'} 
                        from-gray-800 via-[#124784] to-gray-800 opacity-80 rounded-3xl 
                        ${service.width} shadow-lg outline outline-[0.5px] outline-gray-200/50`}
                        style={{
                            gridColumn: `span ${service.colSpan}`,
                            gridRow: `span ${service.rowSpan}`,
                        }}
                    >
                        <CardWidget
                            layout={service.layout || "horizontal"}
                            imageSrc={service.image}
                            title={service.title}
                            description={service.description}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
