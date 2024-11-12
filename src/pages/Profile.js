import React, { useState } from 'react';
import { FiHeart, FiMessageCircle, FiShare2 } from 'react-icons/fi';
import { FaHeart } from '@react-icons/all-files/fa/FaHeart';

const Profile = () => {
  const [user] = useState({
    name: 'Ugyen Dendup',
    email: 'ugyentechoffical@gmail.com',
    joinedOn: '12-05-2024',
    profileImage: '/user1.png'
  });

  const [articles] = useState([
    {
      id: 1,
      source: 'Cable News Network',
      title: "Trump’s hardline new quest to destroy Harris’ momentum",
      likes: 1300,
    },
    {
      id: 2,
      source: 'Cable News Network',
      title: "Breaking: Major policy changes expected in next election",
      likes: 1500,
    },
    {
      id: 3,
      source: 'Cable News Network',
      title: "Global markets respond to recent events with sharp changes",
      likes: 2000,
    },
  ]);

  const [comments] = useState([
    {
      id: 1,
      source: 'Cable News Network',
      title: "Trump’s hardline new quest to destroy Harris’ momentum",
      comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      time: '4hr ago',
      likes: 1300,
    },
  ]);

  const [activeTab, setActiveTab] = useState('liked'); // 'liked' or 'commented'

  return (
    <div className="bg-gray-100 lg:ml-64 ml-6">
      <div className="flex flex-col lg:flex-row p-6 lg:p-12 space-y-8 lg:space-y-0 lg:space-x-16 items-center">
        <img
          src={user.profileImage}
          className="w-32 h-32 lg:w-48 lg:h-48 rounded-full"
          alt="User Profile"
        />

        <div className="border border-[#CCCCCC] rounded-lg px-6 py-4 lg:px-10 lg:py-4 w-full lg:w-[800px]">
          <div className="flex justify-between items-center">
            <h1 className="text-md lg:text-xl">Personal Info</h1>
            <button className="py-2 px-4 bg-[#66C564] text-white rounded-xl text-sm lg:text-base">
              Edit Profile
            </button>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-around mt-6 space-y-4 lg:space-y-0">
            <div className="flex flex-col items-center lg:items-start">
              <p className="text-[#888888]">Name</p>
              <p>{user.name}</p>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <p className="text-[#888888]">Email</p>
              <p>{user.email}</p>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <p className="text-[#888888]">Joined On</p>
              <p>{user.joinedOn}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 lg:p-12">
        <div className="flex space-x-8 border-b-2 pb-4 justify-center lg:justify-start">
          <button
            className={`flex items-center space-x-2 ${activeTab === 'liked' ? 'text-[#DEBCF4]' : 'text-black'}`}
            onClick={() => setActiveTab('liked')}
          >
            <FiHeart /> <span className={`${activeTab === 'liked' ? 'text-[#DEBCF4]' : 'text-black'}`}>Liked Articles</span>
          </button>
          <button
            className={`flex items-center space-x-2 ${activeTab === 'commented' ? 'text-[#DEBCF4]' : 'text-black'}`}
            onClick={() => setActiveTab('commented')}
          >
            <FiMessageCircle /> <span className={`${activeTab === 'commented' ? 'text-[#DEBCF4]' : 'text-black'}`}>Commented</span>
          </button>
        </div>

        {activeTab === 'liked' && (
          <>
            <p className="text-[#807E7E] p-4">{articles.length} Likes</p>
            {articles.map((article) => (
              <div key={article.id} className="bg-[#292929] rounded-md py-4 px-6 lg:px-8 text-white mt-4">
                <div className="flex items-center space-x-2">
                  <img
                    src="/cnn.png"
                    className="w-6 h-6"
                    alt="Source Logo"
                  />
                  <h1 className="text-white text-sm">{article.source}</h1>
                </div>
                <div className="flex flex-col lg:flex-row justify-between mt-2 space-y-2 lg:space-y-0">
                  <p>{article.title}</p>
                  <div className="flex space-x-4">
                    <button className="flex items-center space-x-2 text-[#DEBCF4]">
                      <span className="text-white">{article.likes}</span> <FaHeart />
                    </button>
                    <button className="text-[#DEBCF4]"><FiMessageCircle /></button>
                    <button className="text-[#DEBCF4]"><FiShare2 /></button>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}

        {activeTab === 'commented' && (
          <div className="p-4">
            <p className="text-[#807E7E] p-4">{comments.length} Comments</p>
            {comments.map((comment) => (
              <div key={comment.id} className="bg-[#292929] rounded-md py-4 px-4 lg:px-8 text-white mt-4">
                <div className="flex flex-col lg:flex-row items-start lg:space-x-4 space-y-4 lg:space-y-0">
                  <img
                    src="/cnn.png"
                    className="w-8 h-8 rounded-full"
                    alt="Source Logo"
                  />
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row justify-between">
                      <div>
                        <h1 className="text-white text-sm">{comment.source}</h1>
                        <p className="text-white italic">{comment.title}</p>
                      </div>
                      <div className="flex items-center mt-2 lg:mt-0 space-x-4">
                        <span className="flex items-center text-[#DEBCF4]">
                          <span className="text-white mr-2">{comment.likes}</span> <FaHeart />
                        </span>
                        <button className="text-[#DEBCF4]"><FiMessageCircle /></button>
                        <button className="text-[#DEBCF4]"><FiShare2 /></button>
                      </div>
                    </div>

                    <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 mt-4">
                      <img
                        src={user.profileImage}
                        className="w-10 h-10 rounded-full"
                        alt="User Profile"
                      />
                      <div className="flex-1">
                        <div className="flex flex-col lg:flex-row lg:space-x-2">
                          <p>{user.name}</p>
                          <p className="text-[#807E7E]">{comment.time}</p>
                        </div>
                        <p className="mt-2">{comment.comment}</p>
                        <div className="flex mt-2 text-[#807E7E] space-x-4">
                          <button>Reply</button>
                          <button>Edit</button>
                          <button>Delete</button>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
