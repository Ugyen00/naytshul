import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';

import Headlines from './pages/Headlines';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Sports from './pages/Sports';
import Education from './pages/Health';
import Political from './pages/Business';
import Science from './pages/Technology';
import Search from './pages/SearchResults';

function Layout() {
  // Render the Navbar and Header for all pages, including '/login' for a consistent layout
  return (
    <div className="flex">
      <Navbar /> {/* Navbar is always displayed */}

      <div className="flex-1">
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Headlines />} />
            {/* Protect other routes using Clerk's SignedIn component */}
            <Route path="/sports" element={
              <SignedIn>
                <Sports />
              </SignedIn>
            } />
            <Route path="/health" element={
              <SignedIn>
                <Education />
              </SignedIn>
            } />
            <Route path="/business" element={
              <SignedIn>
                <Political />
              </SignedIn>
            } />
            <Route path="/technology" element={
              <SignedIn>
                <Science />
              </SignedIn>
            } />
            <Route path="/search-results" element={
              <SignedIn>
                <Search />
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
