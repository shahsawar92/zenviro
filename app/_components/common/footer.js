import { Mail, MapPin, Phone } from 'lucide-react'
import Link from "next/link"
import Input from '../ui/Input'

export default function Footer() {
    return (
        <footer className="bg-black text-white py-12">
            <div className="max-w-8xl mx-auto px-4">
                {/* Header Section */}
                <div className="mb-8">
                    <div className="flex flex-col lg:flex-row lg:items-center  justify-between gap-4 lg:gap-12">
                        <div className="flex items-center space-x-2">
                            <span className="text-2xl font-semibold">Zenviro</span>
                        </div>
                        <p className="text-gray-400 max-w-3xl">
                            Zenviro is a forward-thinking design studio specializing in 3D architectural visualization, VR, and digital solutions. In partnership with our AI-driven technology arm, Zeneric, we deliver innovative, sustainable designs that balance creativity, quality, and ethical practices for a better-built environment.
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 mb-12" />

                {/* Columns Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Reach us */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Reach us</h3>
                        <div className="space-y-3 text-gray-400">
                            <div className="flex items-center space-x-3">
                                <Phone className="h-5 w-5" />
                                <span>+1012 3456 789</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="h-5 w-5" />
                                <span>demo@gmail.com</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 mt-1" />
                                <span>132 Dartmouth Street Boston,<br />Massachusetts 02156 United States</span>
                            </div>
                        </div>
                    </div>

                    {/* Company */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Company</h3>
                        <div className="space-y-3">
                            <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">
                                About
                            </Link>
                            <Link href="/services" className="block text-gray-400 hover:text-white transition-colors">
                                Services
                            </Link>
                            <Link href="/portfolio" className="block text-gray-400 hover:text-white transition-colors">
                                Portfolio
                            </Link>
                            <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* Legal */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Legal</h3>
                        <div className="space-y-3">
                            <Link href="/privacy-policy" className="block text-gray-400 hover:text-white transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms-services" className="block text-gray-400 hover:text-white transition-colors">
                                Terms & Services
                            </Link>
                            <Link href="/terms-of-use" className="block text-gray-400 hover:text-white transition-colors">
                                Terms of Use
                            </Link>
                            <Link href="/refund-policy" className="block text-gray-400 hover:text-white transition-colors">
                                Refund Policy
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Quick Links</h3>
                        <div className="space-y-3">
                            <Link href="/techlabz-keybox" className="block text-gray-400 hover:text-white transition-colors">
                                Techlabz Keybox
                            </Link>
                            <Link href="/downloads" className="block text-gray-400 hover:text-white transition-colors">
                                Downloads
                            </Link>
                            <Link href="/forum" className="block text-gray-400 hover:text-white transition-colors">
                                Forum
                            </Link>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="bg-gray-900 p-4 rounded-lg space-y-4">
                        <h3 className="text-lg font-semibold">Join Our Newsletter</h3>
                        <div className="space-y-3">
                            <Input
                                type="email"
                                placeholder="Your email address"
                                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                            />
                            {/* <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                                Subscribe
                            </Button> */}
                            <p className="text-xs text-gray-400">
                                * Will send you weekly updates for your better tool management.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

