import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Headlines from './pages/Headlines';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import Sports from './pages/Sports';
import Education from './pages/Education';
import Political from './pages/Political';
import Science from './pages/Science';
import More from './pages/More';

function App() {
  return (
    <Router>
      {/* Use flexbox to create a side-by-side layout */}
      <div className="flex">
        {/* Side Navbar */}
        <Navbar />

        {/* Main content area */}
        <div className="flex-1 p-6">
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
    </Router>
  );
}

export default App;
