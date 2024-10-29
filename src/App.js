import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';

import Headlines from './pages/Headlines';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Sports from './pages/Sports';
import Education from './pages/Education';
import Political from './pages/Political';
import Science from './pages/Science';
import More from './pages/More';

function Layout() {
  const location = useLocation();

  // Render the Navbar and Header for all pages, including '/login' for a consistent layout
  return (
    <div className="flex">
      <Navbar /> {/* Navbar is always displayed */}

      <div className="flex-1">
        <Header /> {/* Header is always displayed */}

        <div className="p-4">
          <Routes>
            <Route path="/" element={<Headlines />} />
            {/* Protect other routes using Clerk's SignedIn component */}
            <Route path="/profile" element={
              <SignedIn>
                <Profile />
              </SignedIn>
            } />
            <Route path="/sports" element={
              <SignedIn>
                <Sports />
              </SignedIn>
            } />
            <Route path="/education" element={
              <SignedIn>
                <Education />
              </SignedIn>
            } />
            <Route path="/political" element={
              <SignedIn>
                <Political />
              </SignedIn>
            } />
            <Route path="/science" element={
              <SignedIn>
                <Science />
              </SignedIn>
            } />
            <Route path="/more" element={
              <SignedIn>
                <More />
              </SignedIn>
            } />
            {/* Redirect any unknown routes to the Headlines page */}
            <Route path="*" element={<Navigate to="/" />} />
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
        {/* Route for headlines accessible to both logged-in and logged-out users */}
        <Route path="/" element={<Layout />} />

        {/* Protect all other routes with Clerk's SignedIn and SignedOut */}
        <Route path="/*" element={
          <>
            <SignedIn>
              <Layout />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
