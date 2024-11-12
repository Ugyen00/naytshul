import React from 'react';
import { Link } from 'react-router-dom';
import { useUser, UserButton } from '@clerk/clerk-react';

const Header = () => {
  const { isSignedIn } = useUser();

  return (
    <header className="px-2 lg:px-12 pb-2 pt-4 lg:pt-8 flex flex-col lg:flex-row items-center justify-between lg:ml-64 ml-12">
      <div className="flex items-center w-full lg:w-auto mb-4 lg:mb-0">
        <div className="relative flex items-center w-full lg:w-[600px]">
          <input
            type="text"
            placeholder="Search for news"
            className="w-full bg-[#EAEAEA] rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <img
            src="/search.svg"
            alt="Search"
            className="absolute left-3 w-5 h-5 text-gray-400 cursor-pointer"
          />
        </div>
        <img
          src="/filter.svg"
          alt="Filter"
          className="ml-2 w-6 h-6 cursor-pointer hidden lg:block"
        />
      </div>

      {/* Conditional rendering based on login status */}
      <div className="flex items-center">
        {!isSignedIn ? (
          <Link to="/login">
            <button className="text-white bg-[#66C564] py-2 px-4 lg:px-6 rounded-md w-full lg:w-auto">
              LOGIN
            </button>
          </Link>
        ) : (
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "w-10 h-10",
                userButton: "flex items-center",
              },
            }}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
