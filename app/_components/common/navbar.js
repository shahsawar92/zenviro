'use client'
import { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { BRAND } from "@/app/_assets/Images";

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <nav className="bg-black text-white w-full">
            <div className="flex justify-between items-center max-w-7xl mx-auto py-4 px-6">

                <div className="flex items-center space-x-3">
                    <Image src={BRAND.LOGO} alt="Logo" width={40} height={40} />
                    <span className="text-xl font-bold">Zenviro</span>
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-8 px-8 gap-5 text-sm">
                    <li>
                        <a href="#" className="text-blue-500 hover:text-blue-300">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-blue-300">
                            About Us
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-blue-300">
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-blue-300">
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-blue-300">
                            Case Studies
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-blue-300">
                            Blog
                        </a>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl focus:outline-none"
                    onClick={toggleSidebar}
                >
                    {isSidebarOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Sidebar for Mobile */}
            {isSidebarOpen && (
                <div className="fixed top-0 left-0 w-2/3 h-full bg-gray-800 text-white shadow-lg z-50 p-6 md:hidden">
                    <ul className="space-y-6 text-lg">
                        <li>
                            <a href="#" className="flex items-center space-x-2 hover:text-blue-300">
                                <span className="text-blue-500">🏠</span>
                                <span>Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center space-x-2 hover:text-blue-300">
                                <span className="text-blue-500">📖</span>
                                <span>About Us</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center space-x-2 hover:text-blue-300">
                                <span className="text-blue-500">💼</span>
                                <span>Services</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center space-x-2 hover:text-blue-300">
                                <span className="text-blue-500">📸</span>
                                <span>Portfolio</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center space-x-2 hover:text-blue-300">
                                <span className="text-blue-500">📊</span>
                                <span>Case Studies</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center space-x-2 hover:text-blue-300">
                                <span className="text-blue-500">📝</span>
                                <span>Blog</span>
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
