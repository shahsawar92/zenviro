'use client'

import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Autoplay } from 'swiper/modules'
import { gsap } from 'gsap';
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import TitleSubtitleWidget from '../ui/Title'

const testimonials = [
    {
        quote: "Your app brings so much peace and tolerance to our home.",
        author: "Rachel",
        location: "UK",
        description: "on meditation's positive effect on family life"
    },
    {
        quote: "I came to learn that the storyline in my head ... was holding me back.",
        author: "Peter",
        location: "Belgium",
        description: "on what he learned when sitting with himself"
    },
    {
        quote: "Zenviro provides me with ... a connection to myself, and a disconnection from negative thoughts, feelings, and sensations.",
        author: "Ken",
        location: "UK",
        description: "on finding her happy space"
    },
    {
        quote: "Changing my mindset has allowed me to change my life.",
        author: "Dennis",
        location: "London",
        description: "on using mindfulness in his daily routine"
    },
    // Add more testimonials for continuous sliding effect
    {
        quote: "The journey of self-discovery has been transformative.",
        author: "Sarah",
        location: "Canada",
        description: "on personal growth through meditation"
    },
    ,
    {
        quote: "I came to learn that the storyline in my head ... was holding me back.",
        author: "Peter",
        location: "Belgium",
        description: "on what he learned when sitting with himself"
    },
    {
        quote: "Zenviro provides me with ... a connection to myself, and a disconnection from negative thoughts, feelings, and sensations.",
        author: "Ken",
        location: "UK",
        description: "on finding her happy space"
    },
    ,
    {
        quote: "I came to learn that the storyline in my head ... was holding me back.",
        author: "Peter",
        location: "Belgium",
        description: "on what he learned when sitting with himself"
    },
    {
        quote: "Zenviro provides me with ... a connection to myself, and a disconnection from negative thoughts, feelings, and sensations.",
        author: "Ken",
        location: "UK",
        description: "on finding her happy space"
    },
]

const useSlideAnimation = (slideRefs) => {
    useEffect(() => {
        if (!slideRefs.current) return;

        slideRefs.current.forEach((slide, index) => {
            gsap.fromTo(
                slide,
                { opacity: 0, y: 100, scale: 0.8 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1,
                    delay: index * 0.2,
                    ease: 'power3.out',
                }
            );
        });

        return () => {
            gsap.killTweensOf(slideRefs.current);
        };
    }, [slideRefs]);
};

export default function TestimonialSlider() {
    const [mounted, setMounted] = useState(false);
    const slideRefs = useRef([]);
    useSlideAnimation(slideRefs);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }


    return (
        <div className="bg-black text-white py-16 px-4">
            <div className="max-w-8xl mx-auto ">
                <TitleSubtitleWidget
                    title="What Our Clients Say"
                    subtitle="Hear from clients who've partnered with Zenviro to bring their visions to life. Our dedication to innovation, quality, and client satisfaction shines through in every project."
                    titleClass="text-4xl lg:text-6xl font-bold text-white"
                    subtitleClass="mt-4 text-sm lg:text-lg font-extralight text-gray-300 leading-6 tracking-widest max-w-3xl mx-auto"
                    containerStyle="text-center"
                />

                <Swiper
                    centeredSlides={true}
                    slidesPerView={5}
                    loop={true}
                    spaceBetween={20}
                    autoplay={true}
                    modules={[Autoplay]}
                    breakpoints={{
                        320: {
                            slidesPerView: 1.5,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        1280: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },
                    }}
                    className="w-full py-12 h-[500px] relative "
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide
                            key={index}
                            className="swiper-slide h-auto overflow-visible flex gap-12"
                            ref={(el) => (slideRefs.current[index] = el)} // Assign ref to each slide
                        >
                            {({ isActive, isNext, isPrev }) => (
                                <div className="h-[450px] flex items-center">
                                    <div
                                        className={`p-8 rounded-3xl transition-all duration-500 h-[300px] flex flex-col justify-between ${isActive
                                            ? 'bg-blue-500 transform translate-y-12'
                                            : isNext || isPrev
                                                ? 'bg-blue-500 opacity-30 transform translate-y-6'
                                                : 'bg-blue-500 opacity-30 transform'
                                            }`}
                                    >
                                        <div className="text-4xl leading-3 text-black ">{`"`}</div>
                                        <blockquote className="2xl:text-lg mb-4">{testimonial.quote}</blockquote>
                                        <div>
                                            <div className="font-semibold text-black">
                                                {testimonial.author}, {testimonial.location}
                                            </div>
                                            <div className="text-xs text-gray-300">
                                                {testimonial.description}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
