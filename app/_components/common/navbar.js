'use client';
import { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { BRAND } from "@/app/_assets/Images";
import Link from "next/link";

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
                        <Link href="#" className="text-blue-500 hover:text-blue-300">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="#who-we-are" className="hover:text-blue-300">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link href="#services" className="hover:text-blue-300">
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link href="#our-work" className="hover:text-blue-300">
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:text-blue-300">
                            Case Studies
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:text-blue-300">
                            Blog
                        </Link>
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
            <div
                className={`fixed top-0 left-0 h-full w-2/3 bg-black text-white shadow-lg z-50 p-6 md:hidden transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <ul className="space-y-6 text-lg">
                    <li>
                        <Link href="/" className="flex items-center space-x-2 hover:text-blue-300">
                            <span className="text-blue-500">🏠</span>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#who-we-are" className="flex items-center space-x-2 hover:text-blue-300">
                            <span className="text-blue-500">📖</span>
                            <span>About Us</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#services" className="flex items-center space-x-2 hover:text-blue-300">
                            <span className="text-blue-500">💼</span>
                            <span>Services</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#our-work" className="flex items-center space-x-2 hover:text-blue-300">
                            <span className="text-blue-500">📸</span>
                            <span>Portfolio</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="flex items-center space-x-2 hover:text-blue-300">
                            <span className="text-blue-500">📊</span>
                            <span>Case Studies</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="flex items-center space-x-2 hover:text-blue-300">
                            <span className="text-blue-500">📝</span>
                            <span>Blog</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
