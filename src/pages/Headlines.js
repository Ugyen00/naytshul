import React, { useState } from 'react';
import { FaHeart } from '@react-icons/all-files/fa/FaHeart';
import { FiHeart, FiMessageCircle, FiShare2 } from 'react-icons/fi';

const Headlines = ({ news }) => {
    const [likedArticles, setLikedArticles] = useState({});

    const handleHeartClick = (index) => {
        setLikedArticles((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    return (
        <div className="flex flex-wrap bg-gray-100 py-16">
            {news.map((article, index) => (
                <div key={index} className="flex flex-col w-auto h-5xl mx-8 bg-[#292929] text-white rounded-lg mb-8">
                    <div className="pt-4 px-8">
                        <div className="flex space-x-2">
                            <img src={article.sourceImage} alt="News Image" className="w-8 h-8" />
                            <h2 className="text-sm font-medium text-white">{article.source}</h2>
                        </div>
                        <h3 className="text-lg font-bold mt-1 mb-4">{article.title}</h3>
                        <div className='flex space-x-8'>
                            <div className="relative w-1/2">
                                <img src={article.image} alt="Article Image" className="w-full h-64 object-cover" />
                            </div>
                            <p className="mt-2 text-sm w-1/2">
                                {article.description}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-end p-4">
                        <span className="text-sm mr-2">{article.likes}</span>
                        <button
                            onClick={() => handleHeartClick(index)}
                            className="text-[#DEBCF4]"
                        >
                            {likedArticles[index] ? <FaHeart /> : <FiHeart />}
                        </button>
                        <button className="ml-4 text-[#DEBCF4]">
                            <FiMessageCircle />
                        </button>
                        <button className="ml-4 text-[#DEBCF4]">
                            <FiShare2 />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

// Example news data array
const newsData = [
    {
        source: "Cable News Network",
        sourceImage: "/cnn.png",
        title: "Trump's hardline new quest to destroy Harris' momentum",
        image: "/cnn1.png",
        description:
            "Donald Trump is trying to crush Democratic nominee Kamala Harris’ persona as a force of change and to destroy her personal credibility as a potential president as their still-fresh competition careens into the final nine weeks before Election Day. In recent days, the ex-president has unveiled a broad assault using the insult-driven politics with which he won power in 2016, even as his advisers have been pleading with him to focus his attention on top voter concerns including high prices and immigration...",
        likes: "1.3K",
    },
    {
        source: "Cable News Network",
        sourceImage: "/cnn.png",
        title: "Trump's hardline new quest to destroy Harris' momentum",
        image: "/cnn1.png",
        description:
            "Donald Trump is trying to crush Democratic nominee Kamala Harris’ persona as a force of change and to destroy her personal credibility as a potential president as their still-fresh competition careens into the final nine weeks before Election Day. In recent days, the ex-president has unveiled a broad assault using the insult-driven politics with which he won power in 2016, even as his advisers have been pleading with him to focus his attention on top voter concerns including high prices and immigration...",
        likes: "1.3K",
    },
];

export default function App() {
    return <Headlines news={newsData} />;
}
