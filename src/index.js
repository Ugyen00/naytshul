import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ClerkProvider } from '@clerk/clerk-react';
import './index.css';

const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk publishable key.");
}

ReactDOM.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <App />
    </ClerkProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
