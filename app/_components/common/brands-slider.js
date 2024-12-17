'use client'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { BRANDS_ON_BOARD } from '@/app/_assets/Images'
import { Image } from '../ui'


const logos = [
    {
        src: BRANDS_ON_BOARD[0],
        alt: "Brand 1",
    },
    {
        src: BRANDS_ON_BOARD[1],
        alt: "Brand 2",
    },
    {
        src: BRANDS_ON_BOARD[2],
        alt: "Brand 3",
    },
    {
        src: BRANDS_ON_BOARD[3],
        alt: "Brand 4",
    },
    {
        src: BRANDS_ON_BOARD[4],
        alt: "Brand 5",
    },
    {
        src: BRANDS_ON_BOARD[5],
        alt: "Brand 6",
    },
    {
        src: BRANDS_ON_BOARD[6],
        alt: "Brand 7",
    },
    {
        src: BRANDS_ON_BOARD[2],
        alt: "Brand 8",
    },
    {
        src: BRANDS_ON_BOARD[3],
        alt: "Brand 9",
    },
]

export function LogoSlider() {
    const [swiper, setSwiper] = useState(null)
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        if (swiper) {
            swiper.on('slideChange', () => {
                setActiveIndex(swiper.realIndex)
                console.log(swiper)
            })

        }
    }, [swiper])

    const getOpacity = (index) => {
        if (index === activeIndex) return 1
        if (index === activeIndex - 1 || index === activeIndex + 1) return 0.55;
        return 0.3;
    };

    return (
        <div className="w-full bg-black py-12">
            <div className="container relative mx-auto px-4">
                <Swiper
                    onSwiper={setSwiper}
                    centeredSlides={true}
                    loop
                    className="!overflow-visible"
                    breakpoints={{
                        320: {
                            slidesPerView: 1.5,
                        },
                        640: {
                            slidesPerView: 5,
                        },
                        1024: {
                            slidesPerView: 7,
                        },
                    }}
                >
                    {logos.map((logo, index) => (
                        <SwiperSlide key={index} className="transition-all duration-300 ease-in-out">
                            {({ isActive }) => (
                                <div
                                    className="flex items-center justify-center px-4"
                                    style={{
                                        opacity: getOpacity(index),
                                        transition: 'opacity 0.3s ease-in-out',
                                    }}
                                >
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        width={150}
                                        className=" object-cover"
                                    />
                                </div>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
                <button
                    onClick={() => swiper?.slidePrev()}
                    className="absolute left-0 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>
                <button
                    onClick={() => swiper?.slideNext()}
                    className="absolute right-0 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
            </div>
        </div>
    )
}

