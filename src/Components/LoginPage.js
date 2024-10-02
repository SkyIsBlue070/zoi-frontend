import React, { useState } from 'react'; // Import useState
import { Link } from 'react-router-dom';
import backgroundImage from '../Images/loginPageBG.jpg';

function LoginPage() {
const [username, setUsername] = useState(''); // State for username
const [password, setPassword] = useState(''); // State for password

const handleLogin = (e) => {
e.preventDefault(); // Prevent default form submission

// Validation: check if fields are empty
if (!username || !password) {
    alert("Username and password cannot be empty!");
    return;
}

// Redirect to home page if fields are valid
window.location.href = '/home';
};

return (
    // Div For BackGround Image: 
<div 
    className="flex items-center justify-center h-screen bg-cover bg-center"
    style={{ backgroundImage: `url(${backgroundImage})` }}
>
    { /* Div For Text  */ }

    <div className="bg-blue-950 p-8 rounded-lg shadow-lg w-96">
    <h2 className="text-white text-2xl font-bold text-center">LOG-IN</h2>
    <form className="mt-4" onSubmit={handleLogin}> {/* Attach the handleLogin function */}
        <div className="mb-4">
        <label className="block text-white" htmlFor="username">Username</label>
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
        <label className="block text-white" htmlFor="password">Password</label>
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
        Login
        </button>
    </form>
    <div className="mt-4 text-center">
        <Link to="/signup" className="text-blue-500">Don't have an account? Sign Up</Link>
    </div>
    </div>
</div>
);
}

export default LoginPage;
