import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Headlines from './pages/Headlines';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Sports from './pages/Sports';
import Education from './pages/Education';
import Political from './pages/Political';
import Science from './pages/Science';
import More from './pages/More';
import Login from './pages/Login';

function Layout() {
  const location = useLocation();

  // Render the Navbar and Header only if not on the login page
  const hideLayout = location.pathname === '/login';

  return (
    <div className="flex">
      {!hideLayout && <Navbar />} {/* Conditionally hide Navbar */}
      
      <div className="flex-1">
        {!hideLayout && <Header />} {/* Conditionally hide Header */}
        
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Headlines />} />
            <Route path="/profile" element={<Profile />} />
            <Route path='/sports' element={<Sports />} />
            <Route path='/education' element={<Education />} />
            <Route path='/political' element={<Political />} />
            <Route path='/science' element={<Science />} />
            <Route path='/more' element={<More />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Login route without sidebar and header */}
        <Route path="/login" element={<Login />} />
        
        {/* Other routes with layout */}
        <Route path="/*" element={<Layout />} />
      </Routes>
    </Router>
  );
}

export default App;
