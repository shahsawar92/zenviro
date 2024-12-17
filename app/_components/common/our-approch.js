'use client'

import { useState } from 'react'
import { Brain, Castle, Leaf } from 'lucide-react'
import TitleSubtitleWidget from '../ui/Title'


export default function RotatingCards() {
    const [activeCard, setActiveCard] = useState(1)

    const cards = [
        {
            id: 0,
            title: "Sustainability & Responsibility",
            description: "Committed to sustainable designs that respect the environment.",
            icon: <Leaf className="w-12 h-12 text-blue-500" />,
        },
        {
            id: 1,
            title: "Innovation & Automation",
            description: "Automating 3D workflows with Zenerio's AI tools for seamless project delivery.",
            icon: <Brain className="w-12 h-12 text-blue-500" />,
        },
        {
            id: 2,
            title: "Fairness & Respect",
            description: "Fostering a rewarding work culture where every team member is valued.",
            icon: <Castle className="w-12 h-12 text-blue-500" />,
        },
    ]

    const getCardStyle = (index) => {
        if (index === activeCard) {
            return "transform-none scale-100 opacity-100 z-20  rounded-2xl shadow-[-1px_7px_26px_-5px_#fff]"
        }

        if (index === activeCard - 1 || (activeCard === 0 && index === cards.length - 1)) {
            return "-rotate-12 -translate-x-[90%] translate-y-[11%] scale-90 opacity-70 z-10"
        }

        if (index === activeCard + 1 || (activeCard === cards.length - 1 && index === 0)) {
            return "rotate-12 translate-x-[90%] translate-y-[11%] scale-90 opacity-70 z-10"
        }

        return "opacity-0 scale-75 translate-x-full"
    }

    return (
        <div className="min-h-[740px] bg-black flex flex-col items-center justify-start  p-4">

            <TitleSubtitleWidget
                title="Our Approach"
                subtitle="Built on Values, Driven by Innovation"
                titleClass="text-4xl lg:text-6xl font-bold text-white"
                subtitleClass='text-sm md:text-xl text-gray-400'
                containerStyle='text-center mb-20 mt-10'

            />
            <div className="relative w-full max-w-5xl h-[400px] flex items-center justify-center">
                {cards.map((card, index) => (
                    <div
                        key={card.id}
                        onClick={() => setActiveCard(index)}
                        className={`absolute w-[250px] md:w-full md:max-w-[300px] h-[400] cursor-pointer transition-all duration-500 ease-out ${getCardStyle(index)} `}
                    >
                        <div className="bg-gradient-to-b from-gray-950 to-black p-8 rounded-2xl border-none  h-full">
                            <div className="flex flex-col items-center text-center gap-4">
                                <div className="p-4 rounded-full bg-gray-800/50">
                                    {card.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white">{card.title}</h3>
                                <p className="text-gray-400">{card.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

