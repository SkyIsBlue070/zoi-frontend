import React from 'react';
import { IoIosArrowDropdown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import logo from "../Images/zoiLogoHome.png";

function NavBar({ username }) { // Accept username as a prop
return (
<header className="bg-green-600 text-white p-4 shadow-lg">
    <div className="container mx-auto flex items-center justify-between">
    
    {/* Username Display */}
    <div className="flex items-center space-x-4"> {/* Add space between username and logo */}
        <span className="text-xl font-semibold">{username}</span>
        <img src={logo} alt="Zoi Hospital" className="w-16 h-auto" />
        <span className="text-4xl font-bold">Zoí</span>
    </div>

    {/* Navigation Links */}
    <nav className="flex space-x-10"> {/* Increased space between nav items */}
        {['About Us', 'Health Library', 'Book Appointments', 'Home Remedies'].map((item, index) => (
        <div key={index} className="flex items-center space-x-4 hover:text-gray-300">
            <a href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-xl flex items-center">
            {item}
            </a>
            <IoIosArrowDropdown />
        </div>
        ))}
    </nav>

    {/* Search Section */}
    <div className="flex items-center space-x-4"> {/* Increased space between search icon and input */}
        <div className="text-xl">
        <FaSearch />
        </div>
        <input 
        type="text" 
        placeholder="Search..." 
        className="p-2 rounded-l bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-400" 
        />
        <button className="bg-gray-800 text-white p-2 rounded-r hover:bg-gray-700 transition duration-200">
        Search
        </button>
    </div>
    </div>
</header>
);
}

export default NavBar;
