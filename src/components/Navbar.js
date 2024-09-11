import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="h-screen w-64 bg-white shadow-lg">
            <div className="flex items-center justify-center h-16 bg-gray-100">
                <h1 className="text-xl font-bold">Naytshul</h1>
            </div>
            <ul className="mt-6 space-y-2">
                <li>
                    <Link
                        to="/"
                        className={`flex items-center px-4 py-2 ${isActive('/') ? 'bg-green-300 text-white' : 'text-gray-600 hover:bg-gray-200'}`}
                    >
                        <span className="mr-2">📰</span>
                        Headlines
                    </Link>
                </li>
                <li className="px-4 py-2 text-sm text-gray-400">
                    Categories
                </li>
                <li>
                    <Link
                        to="/sports"
                        className={`flex items-center px-4 py-2 ${isActive('/sports') ? 'bg-green-300 text-white' : 'text-gray-600 hover:bg-gray-200'}`}
                    >
                        <span className="mr-2">⚽</span>
                        Sports
                    </Link>
                </li>
                <li>
                    <Link
                        to="/education"
                        className={`flex items-center px-4 py-2 ${isActive('/education') ? 'bg-green-300 text-white' : 'text-gray-600 hover:bg-gray-200'}`}
                    >
                        <span className="mr-2">🎓</span>
                        Education
                    </Link>
                </li>
                <li>
                    <Link
                        to="/political"
                        className={`flex items-center px-4 py-2 ${isActive('/political') ? 'bg-green-300 text-white' : 'text-gray-600 hover:bg-gray-200'}`}
                    >
                        <span className="mr-2">🏛️</span>
                        Political
                    </Link>
                </li>
                <li>
                    <Link
                        to="/science"
                        className={`flex items-center px-4 py-2 ${isActive('/science') ? 'bg-green-300 text-white' : 'text-gray-600 hover:bg-gray-200'}`}
                    >
                        <span className="mr-2">🔬</span>
                        Science & Technology
                    </Link>
                </li>
                <li>
                    <Link
                        to="/more"
                        className={`flex items-center px-4 py-2 ${isActive('/more') ? 'bg-green-300 text-white' : 'text-gray-600 hover:bg-gray-200'}`}
                    >
                        <span className="mr-2">...</span>
                        More
                    </Link>
                </li>
            </ul>
            <div className="mt-auto p-4">
                <Link
                    to="/signout"
                    className={`flex items-center px-4 py-2 ${isActive('/signout') ? 'bg-green-300 text-white' : 'text-gray-600 hover:bg-gray-200'}`}
                >
                    <span className="mr-2">↩️</span>
                    Sign Out
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
