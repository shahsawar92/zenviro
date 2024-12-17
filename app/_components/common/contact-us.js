import { MapPin, Mail, Phone, Twitter, InstagramIcon as Instagram, DiscIcon as Discord } from 'lucide-react'
import TitleSubtitleWidget from '../ui/Title'

export default function ContactCard() {
    return (
        <div className="bg-black text-white py-12">

            <div className="w-full max-w-6xl mx-auto">
                <div className="transition-colors bg-gradient-to-br from-gray-200 via-white to-white p-2 rounded-3xl overflow-hidden flex flex-col md:flex-row">
                    {/* Left Side - Contact Information */}
                    <div className="bg-black rounded-2xl text-white p-8 md:p-12 relative md:w-[40%] space-y-8 overflow-hidden">

                        <TitleSubtitleWidget
                            title="Contact Information"
                            subtitle="Say something to start a live chat!"
                            titleClass="text-4xl lg:text-6xl font-semibold text-white"
                            subtitleClass='mt-4 text-sm md:text-lg font-extralight text-gray-300 leading-6 tracking-widest'
                            containerStyle=''

                        />

                        <div className="space-y-6 text-black">
                            <div className="flex items-center space-x-4">
                                <Phone className="w-6 h-6" />
                                <span>+1012 3456 789</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Mail className="w-6 h-6" />
                                <span>demo@gmail.com</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <MapPin className="w-6 h-6" />
                                <span>132 Dartmouth Street Boston, Massachusetts 02156 United States</span>
                            </div>
                        </div>

                        {/* Social Media Links */}
                        <div className="flex space-x-4 mt-auto pt-8">
                            <button className="p-2 hover:bg-gray-800 rounded-full transition-colors">
                                <Twitter className="w-6 h-6" />
                            </button>
                            <button className="p-2 hover:bg-gray-800 rounded-full transition-colors">
                                <Instagram className="w-6 h-6" />
                            </button>
                            <button className="p-2 hover:bg-gray-800 rounded-full transition-colors">
                                <Discord className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Decorative Circles */}
                        <div className="absolute bottom-10 right-12 pointer-events-none">
                            <div className="w-48 h-48 rounded-full bg-blue-900 opacity-90 absolute bottom-0 right-0  transform translate-x-1/2 translate-y-1/2"></div>
                            <div className="w-28 h-28 rounded-full bg-blue-600 opacity-50 absolute bottom-7 right-7 "></div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="bg-transparent p-8 md:p-12 md:w-[60%]">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm text-gray-600 mb-2">First Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 border-b border-gray-300 focus:border-blue-500 outline-none text-gray-500"
                                        placeholder="John"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-600 mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 border-b border-gray-300 focus:border-blue-500 outline-none text-gray-500"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm text-gray-600 mb-2">Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-2 border-b border-gray-300 focus:border-blue-500 outline-none text-gray-500"
                                        placeholder="email@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-600 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        className="w-full px-4 py-2 border-b border-gray-300 focus:border-blue-500 outline-none text-gray-500"
                                        placeholder="+1 012 3456 789"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm text-gray-600 mb-4">Select Subject?</label>
                                <div className="flex flex-wrap gap-6">
                                    {["General Inquiry", "General Inquiry", "General Inquiry", "General Inquiry"].map((option, index) => (
                                        <label key={index} className="flex items-center space-x-2 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="subject"
                                                className="w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-500 "
                                            />
                                            <span className="text-sm text-gray-600">{option}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm text-gray-600 mb-2">Message</label>
                                <textarea
                                    className="w-full px-4 py-2 border-b border-gray-300 focus:border-blue-500 outline-none resize-none text-gray-500"
                                    rows={4}
                                    placeholder="Write your message.."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

