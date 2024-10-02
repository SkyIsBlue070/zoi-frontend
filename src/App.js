// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import FrontPage from './Components/FrontPage';
// import LoginPage from './Components/LoginPage';
// import SignUpPage from './Components/SignUp';
// import HomePage from './Components/HomePage';

// function App() {
//   return (
//     <Router>
//       <>
//         <Routes>
//           <Route path="/" element={<FrontPage />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/signup" element={<SignUpPage />} />
//           <Route path="/home" element={<HomePage />} />
//         </Routes>
//       </>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FrontPage from './Components/FrontPage';
import LoginPage from './Components/LoginPage';
import SignUp from './Components/SignUp';
import HomePage from './Components/HomePage';
import AboutUs from './Components/AboutUs'; // Create this component
import HealthLibrary from './Components/HealthLibrary'; // Create this component
import BookAppointments from './Components/BookAppointments'; // Create this component
import HomeRemedies from './Components/HomeRemedies'; // Create this component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/health-library" element={<HealthLibrary />} />
        <Route path="/book-appointments" element={<BookAppointments />} />
        <Route path="/home-remedies" element={<HomeRemedies />} />
      </Routes>
    </Router>
  );
}

export default App;



