import React from 'react';
import NavBar from './NavBar';


function HomePage() {
return (
    <>
    <div> <NavBar></NavBar>
    </div>
    <div className="flex items-center justify-center h-screen bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-lg w-96">
    <h2 className="text-3xl font-bold text-center">Welcome to the Zoí Home Page!</h2>
    <p className="mt-4 text-center text-gray-600">Your health journey begins here.</p>
    {/* Add more content or sections as needed */}
    </div>
    </div>
    </>
);
}

export default HomePage;
