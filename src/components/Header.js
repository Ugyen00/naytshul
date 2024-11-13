import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser, UserButton } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

const Header = ({ setSearchResults }) => {
  const [query, setQuery] = useState('');
  const { isSignedIn } = useUser();
  const [title, setTitle] = useState('');
  const [country, setCountry] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    const queryParams = new URLSearchParams({
      title,
      country,
      category,
      date,
    }).toString();
    navigate(`/search-results?${queryParams}`);
  };

  return (
    <header className="px-2 lg:px-12 pb-2 pt-4 lg:pt-8 flex flex-col lg:flex-row items-center justify-between lg:ml-64 ml-12">
      <div className="flex items-center w-full lg:w-auto mb-4 lg:mb-0">
        <div className="relative flex items-center w-full lg:w-[600px]">
          {/* Title Input */}
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 rounded text-black"
          />

          {/* Country Dropdown */}
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="border p-2 rounded text-black"
          >
            <option value="">Select Country</option>
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
            {/* Add more countries as needed */}
          </select>

          {/* Category Dropdown */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border p-2 rounded text-black"
          >
            <option value="">Select Category</option>
            <option value="technology">Technology</option>
            <option value="business">Business</option>
            <option value="health">Health</option>
            <option value="sports">Sports</option>
            {/* Add more categories as needed */}
          </select>

          {/* Date Picker */}
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border p-2 rounded text-black"
          />

          {/* Search Button */}
          <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded">
            Search
          </button>
        </div>
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
