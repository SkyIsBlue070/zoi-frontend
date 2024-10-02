import React, { useState } from 'react'; // Import useState
import { Link } from 'react-router-dom';
import backgroundImage from '../Images/signupPageBG.png';

function SignUpPage() {
const [username, setUsername] = useState(''); // State for username
const [email, setEmail] = useState(''); // State for email
const [password, setPassword] = useState(''); // State for password

const handleSignUp = (e) => {
e.preventDefault(); // Prevent default form submission

// Validation: check if fields are empty
if (!username || !email || !password) {
    alert("Username, email, and password cannot be empty!");
    return;
}

// Redirect to home page if fields are valid
window.location.href = '/home';
};

return (
<div 
    className="flex items-center justify-center h-screen bg-cover bg-center"
    style={{ backgroundImage: `url(${backgroundImage})` }}
>
    <div className="bg-blue-300 p-8 rounded-lg shadow-lg w-96">
    <h2 className="text-2xl font-bold text-center">Sign Up</h2>
    <form className="mt-4" onSubmit={handleSignUp}> {/* Attach the handleSignUp function */}
        <div className="mb-4">
        <label className="block text-gray-700" htmlFor="username">Username</label>
        <input 
            type="text" 
            id="username" 
            className="mt-1 block w-full p-2 border border-gray-300 rounded" 
            placeholder="Enter your username" 
            value={username} // Set value from state
            onChange={(e) => setUsername(e.target.value)} // Update state on change
        />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700" htmlFor="email">Email</label>
        <input 
            type="email" 
            id="email" 
            className="mt-1 block w-full p-2 border border-gray-300 rounded" 
            placeholder="Enter your email" 
            value={email} // Set value from state
            onChange={(e) => setEmail(e.target.value)} // Update state on change
        />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700" htmlFor="password">Password</label>
        <input 
            type="password" 
            id="password" 
            className="mt-1 block w-full p-2 border border-gray-300 rounded" 
            placeholder="Enter your password" 
            value={password} // Set value from state
            onChange={(e) => setPassword(e.target.value)} // Update state on change
        />
        </div>
        <button 
        className="w-full bg-blue-500 text-white py-2 rounded"
        type="submit" // Change type to submit to trigger form submission
        >
        Sign Up
        </button>
    </form>
    <div className="mt-4 text-center">
        <Link to="/login" className="text-blue-500">Already have an account? Login</Link>
    </div>
    </div>
</div>
);
}

export default SignUpPage;
