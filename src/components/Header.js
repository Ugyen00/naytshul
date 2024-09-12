import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="px-12 pb-2 pt-8 flex justify-between">
      <div className='flex items-center'>
        <div className="relative flex items-center w-[600px]">
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
          src='/filter.svg'
          alt="Filter"
          className='pt-1 pl-2 cursor-pointer'
        />
      </div>
      <Link
      to="/login"
      >
        <button className='text-white bg-[#66C564] py-2 px-6 rounded-md'>LOGIN</button>
      </Link>
    </header>
  );
};

export default Header;
