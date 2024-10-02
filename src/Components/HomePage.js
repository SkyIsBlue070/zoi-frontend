import React from 'react';
import NavBar from './NavBar';
import { useLocation } from 'react-router-dom';

function HomePage() {
const location = useLocation();
const { username } = location.state || { username: "User" }; // Fallback if no username is passed

const services = [
"General Checkup",
"Pediatrics",
"Cardiology",
"Orthopedics",
"Dermatology"
]; // Sample services

return (
<>
    {/* Fixed Navbar */}
    <div className="fixed top-0 left-0 right-0 z-10">
    <NavBar />
    </div>

    {/* Main Content */}
    <div className="flex items-center justify-center h-screen mt-16 bg-gray-100"> {/* Added margin-top */}
    <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold text-center">Welcome to the Zoí Home Page, {username}!</h2>
        <p className="mt-4 text-center text-gray-600">Your health journey begins here.</p>

        <h3 className="mt-6 text-xl font-semibold text-center">Our Services:</h3>
        <ul className="mt-2 text-gray-700">
        {services.map((service, index) => (
            <li key={index} className="mt-1">{service}</li>
        ))}
        </ul>
    </div>
    </div>
</>
);
}

export default HomePage;
