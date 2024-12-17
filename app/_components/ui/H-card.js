import Image from "./Image";

export function CardWidget({
    layout = "horizontal",
    imageSrc = "/placeholder.svg",
    title = "Real-time Walkthroughs",
    description = "Explore your projects interactively with real-time walkthroughs for complete design clarity.",
}) {
    return (
        <div
            className={`relative flex w-full h-full ${layout === "horizontal" ? "md:flex-row px-5" : "md:flex-col py-5"} items-center `}
        >
            <div className={`relative ${layout === "horizontal" ? "w-full md:w-[60%] h-full" : "w-full h-full md:h-[60%]"} flex-shrink-0 opacity-75`}>
                <Image
                    src={imageSrc}
                    alt={title}
                    layout="fill"
                    objectFit="fill"
                    className="rounded-lg"
                    fill={true}
                />
            </div>

            <div
                className={`absolute md:relative  flex flex-col justify-center p-4 item-center ${layout === "horizontal" ? "md:w-[40%] ml-4" : "mt-4"}`}>
                <h2 className="text-2xl font-semibold text-white">{title}</h2>
                <p className="mt-2 text-white">{description}</p>
            </div>
        </div>
    );
}
