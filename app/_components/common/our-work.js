import { Image } from "../ui";
import TitleSubtitleWidget from "../ui/Title";

export default function WorkSection() {
    return (
        <div id="our-work" className="w-dvw h-auto flex items-center  bg-black mx-auto p-8">
            <div className="max-w-6xl mx-auto">
                <div className="rounded-3xl bg-blue-500 px-8 md:px-12 relative overflow-hidden" style={{ backgroundImage: 'url(/bg-work.png)', backgroundSize: 'cover', backgroundPosition: 'left' }}>
                    <div className="grid md:grid-cols-2 gap-8 items-center" >
                        <div className="space-y-6" >
                            <TitleSubtitleWidget
                                title="Our Work in Action"
                                containerStyle='text-white'
                                subtitle="Browse a selection of our recent projects that demonstrate the impact of our 3D visualizations, VR experiences, and interactive environments. Each project is crafted with a focus on innovation, sustainability, and storytelling."
                                titleClass="text-2xl md:text-5xl font-bold text-white leading-tight 
                                 inline-block after:content-['\A'] after:block after:text-xl"
                                subtitleClass="text-sm md:text-lg 2xl:text-xl text-blue-100 leading-relaxed max-w-lg"
                            />

                            {/* <Button
                                className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-8 py-6 h-auto font-medium"
                                variant="ghost"
                            >
                                See Our Work
                            </Button> */}
                        </div>
                        <div className="">
                            <div className=" overflow-hidden -scale-x-90 -mt-7">
                                <Image
                                    src="/top-work.png"
                                    alt="Modern glass building architecture at dusk"

                                    className="w-full h-full object-cover "
                                />
                            </div>
                            <div className=" overflow-hidden ">
                                <Image
                                    src="/main-work.png"
                                    alt="Modern glass building architecture at dusk"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="-mb-5 -scale-x-90">
                                <Image
                                    src="/bottom-work.png"
                                    alt="Modern glass building architecture at dusk"
                                    className="w-full h-full object-cover "
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

