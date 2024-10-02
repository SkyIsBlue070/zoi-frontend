
import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../Images/frontPageBG.jpg';

function FrontPage() {
return (
    // Div for Background
<div 
    className="flex flex-col items-center justify-center h-screen bg-cover bg-center" 
    style={{ backgroundImage: `url(${backgroundImage})` }} 
>

    {/* Div for Text  */}

    <div className="bg-white p-8 rounded-lg text-center">
    <h1 className="text-2xl font-bold">Welcome to Zoí-Hospital Management App</h1>
    <p className="mt-4 text-xl text-gray-600">Your health is our priority!</p>
    </div>

    <Link to="/login" className="mt-4">
    <button className="bg-blue-500 text-white py-2 px-4 rounded">
        Take Me There!
    </button>
    </Link>

</div>
);
}

export default FrontPage;

