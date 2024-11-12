import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const isActive = (path) => location.pathname === path;

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Mobile Menu Button */}
            <button onClick={toggleSidebar} className="lg:hidden fixed top-4 left-4 z-20 text-gray-700">
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            {/* Sidebar */}
            <nav className={`fixed min-h-screen bg-gray-100 shadow-sm flex flex-col justify-between font-sans transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:w-64 w-20 z-10`}>
                <div>
                    <div className="flex items-center justify-center pt-6 pb-4 bg-gray-100">
                        <img src='/only-logo.svg' className="mr-2 mt-12 lg:mt-0" alt="Logo" />
                        <span className="lg:block hidden text-xl">Naytshul</span>
                    </div>
                    <ul className="mt-6 space-y-2">
                        <li>
                            <Link
                                to="/"
                                className={`flex items-center px-4 py-2 mx-2 ${isActive('/') ? 'bg-[#66C564] rounded-[8px]' : 'text-gray-600 hover:bg-gray-200'}`}
                            >
                                <img className="mr-2" src='/headlines.svg' alt="Headlines" />
                                <span className="lg:block hidden">Headlines</span>
                            </Link>
                        </li>
                        <li className="px-4 py-2 text-sm text-gray-400 lg:block hidden">
                            Categories
                        </li>
                        <li>
                            <Link
                                to="/sports"
                                className={`flex items-center px-4 py-2 mx-2 ${isActive('/sports') ? 'bg-[#66C564] rounded-[8px]' : 'text-gray-600 hover:bg-gray-200'}`}
                            >
                                <img src='/sports.svg' className="mr-2" alt="Sports" />
                                <span className="lg:block hidden">Sports</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/education"
                                className={`flex items-center px-4 py-2 mx-2 ${isActive('/education') ? 'bg-[#66C564] rounded-[8px]' : 'text-gray-600 hover:bg-gray-200'}`}
                            >
                                <img src='/education.svg' className="mr-2" alt="Education" />
                                <span className="lg:block hidden">Education</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/political"
                                className={`flex items-center px-4 py-2 mx-2 ${isActive('/political') ? 'bg-[#66C564] rounded-[8px]' : 'text-gray-600 hover:bg-gray-200'}`}
                            >
                                <img src='/political.svg' className="mr-2" alt="Political" />
                                <span className="lg:block hidden">Political</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/science"
                                className={`flex items-center px-4 py-2 mx-2 ${isActive('/science') ? 'bg-[#66C564] rounded-[8px]' : 'text-gray-600 hover:bg-gray-200'}`}
                            >
                                <img src='/science.svg' className="mr-2" alt="Science & Technology" />
                                <span className="lg:block hidden">Science & Technology</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/more"
                                className={`flex items-center px-4 py-2 mx-2 ${isActive('/more') ? 'bg-[#66C564] rounded-[8px]' : 'text-gray-600 hover:bg-gray-200'}`}
                            >
                                <img src='/more.svg' className="mr-2" alt="More" />
                                <span className="lg:block hidden">More</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Overlay for Mobile */}
            {isOpen && (
                <div onClick={toggleSidebar} className="fixed inset-0 bg-black opacity-50 lg:hidden z-5"></div>
            )}
        </>
    );
};

export default Navbar;
