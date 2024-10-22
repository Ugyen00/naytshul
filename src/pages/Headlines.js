// import React, { useState } from 'react';
// import { FaHeart } from '@react-icons/all-files/fa/FaHeart';
// import { FiHeart, FiMessageCircle, FiShare2 } from 'react-icons/fi';
// import CommentSection from '../components/Comment';

// const Headlines = ({ news }) => {
//     const [likedArticles, setLikedArticles] = useState({});
//     const [currentPage, setCurrentPage] = useState(1);
//     const [selectedArticle, setSelectedArticle] = useState(null);
//     const articlesPerPage = 5;

//     const handleHeartClick = (index) => {
//         setLikedArticles((prevState) => ({
//             ...prevState,
//             [index]: !prevState[index],
//         }));
//     };

//     const handleCommentClick = (index) => {
//         // Toggle the comment section by checking if the same article is clicked
//         setSelectedArticle((prevIndex) => (prevIndex === index ? null : index));
//     };

//     const indexOfLastArticle = currentPage * articlesPerPage;
//     const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
//     const currentArticles = news.slice(indexOfFirstArticle, indexOfLastArticle);

//     const totalPages = Math.ceil(news.length / articlesPerPage);

//     const handleNextPage = () => {
//         if (currentPage < totalPages) {
//             setCurrentPage((prevPage) => prevPage + 1);
//         }
//     };

//     const handlePreviousPage = () => {
//         if (currentPage > 1) {
//             setCurrentPage((prevPage) => prevPage - 1);
//         }
//     };

//     return (
//         <div className="flex flex-col items-center bg-gray-100 py-16">
//             <div className="flex flex-wrap justify-center">
//                 {currentArticles.map((article, index) => (
//                     <div key={index} className="flex flex-col w-auto h-5xl mx-8 bg-[#292929] text-white rounded-lg mb-8">
//                         <div className="pt-4 px-8">
//                             <div className="flex space-x-2">
//                                 <img src={article.sourceImage} alt="News Image" className="w-8 h-8" />
//                                 <h2 className="text-sm font-medium text-white">{article.source}</h2>
//                             </div>
//                             <h3 className="text-lg font-bold mt-1 mb-4">{article.title}</h3>
//                             <div className="flex space-x-8">
//                                 <div className="relative w-1/2">
//                                     <img src={article.image} alt="Article Image" className="w-full h-64 object-cover" />
//                                 </div>
//                                 <p className="mt-2 text-sm w-1/2">{article.description}</p>
//                             </div>
//                         </div>
//                         <div className="flex items-center justify-end p-4">
//                             <span className="text-sm mr-2">{article.likes}</span>
//                             <button
//                                 onClick={() => handleHeartClick(index)}
//                                 className="text-[#DEBCF4]"
//                             >
//                                 {likedArticles[index] ? <FaHeart /> : <FiHeart />}
//                             </button>
//                             <button
//                                 onClick={() => handleCommentClick(index)}
//                                 className="ml-4 text-[#DEBCF4]"
//                             >
//                                 <FiMessageCircle />
//                             </button>
//                             <button className="ml-4 text-[#DEBCF4]">
//                                 <FiShare2 />
//                             </button>
//                         </div>
//                         {selectedArticle === index && (
//                             <CommentSection comments={article.comments} onClose={() => setSelectedArticle(null)} />
//                         )}
//                     </div>
//                 ))}
//             </div>
//             <div className="flex justify-center mt-8 items-center">
//                 <button
//                     onClick={handlePreviousPage}
//                     disabled={currentPage === 1}
//                     className={`px-4 py-2 mx-2 rounded ${currentPage === 1 ? 'bg-gray-400' : 'bg-[#66C564]'} text-white`}
//                 >
//                     &lt;
//                 </button>
//                 <span className="text-lg mx-4">{currentPage} of {totalPages}</span>
//                 <button
//                     onClick={handleNextPage}
//                     disabled={currentPage === totalPages}
//                     className={`px-4 py-2 mx-2 rounded ${currentPage === totalPages ? 'bg-gray-400' : 'bg-[#66C564]'} text-white`}
//                 >
//                     &gt;
//                 </button>
//             </div>
//         </div>
//     );
// };

// // Example news data array
// const newsData = [
//     {
//         source: "Cable News Network",
//         sourceImage: "/cnn.png",
//         title: "Trump's hardline new quest to destroy Harris' momentum",
//         image: "/cnn1.png",
//         description:
//             "Donald Trump is trying to crush Democratic nominee Kamala Harris’ persona as a force of change and to destroy her personal credibility as a potential president as their still-fresh competition careens into the final nine weeks before Election Day. In recent days, the ex-president has unveiled a broad assault using the insult-driven politics with which he won power in 2016, even as his advisers have been pleading with him to focus his attention on top voter concerns including high prices and immigration...",
//         likes: "1.3K",
//         comments: [
//             {
//                 username: "Ugyen Dendup",
//                 userImage: "/user1.png",
//                 time: "5 mins ago",
//                 text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
//             },
//             {
//                 username: "John Doe",
//                 userImage: "/user1.png",
//                 time: "10 mins ago",
//                 text: "This is an interesting development. I wonder how it will affect the upcoming elections."
//             }
//         ]
//     },
//     {
//         source: "Cable News Network",
//         sourceImage: "/cnn.png",
//         title: "Trump's hardline new quest to destroy Harris' momentum",
//         image: "/cnn1.png",
//         description:
//             "Donald Trump is trying to crush Democratic nominee Kamala Harris’ persona as a force of change and to destroy her personal credibility as a potential president as their still-fresh competition careens into the final nine weeks before Election Day. In recent days, the ex-president has unveiled a broad assault using the insult-driven politics with which he won power in 2016, even as his advisers have been pleading with him to focus his attention on top voter concerns including high prices and immigration...",
//         likes: "1.3K",
//         comments: [
//             {
//                 username: "Gaurav Sharma",
//                 userImage: "/user1.png",
//                 time: "5 mins ago",
//                 text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
//             },
//             {
//                 username: "John Doe",
//                 userImage: "/user1.png",
//                 time: "10 mins ago",
//                 text: "This is an interesting development. I wonder how it will affect the upcoming elections."
//             }
//         ]
//     },
//     // Add more articles here for testing
// ];

// export default function App() {
//     return <Headlines news={newsData} />;
// }

import React, { useState } from 'react';
import { FaHeart } from '@react-icons/all-files/fa/FaHeart';
import { FiHeart, FiMessageCircle, FiShare2 } from 'react-icons/fi';
import CommentSection from '../components/Comment';
import ShareModal from '../components/ShareModel';

const Headlines = ({ news }) => {
    const [likedArticles, setLikedArticles] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);
    const articlesPerPage = 5;

    const handleHeartClick = (index) => {
        setLikedArticles((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    const handleCommentClick = (index) => {
        setSelectedArticle((prevIndex) => (prevIndex === index ? null : index));
    };

    const handleShareClick = () => {
        setIsShareModalOpen(true);
    };

    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = news.slice(indexOfFirstArticle, indexOfLastArticle);

    const totalPages = Math.ceil(news.length / articlesPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    return (
        <div className="flex flex-col items-center bg-gray-100 py-16">
            <div className="flex flex-wrap justify-center">
                {currentArticles.map((article, index) => (
                    <div key={index} className="flex flex-col w-auto h-5xl mx-8 bg-[#292929] text-white rounded-lg mb-8">
                        <div className="pt-4 px-8">
                            <div className="flex space-x-2">
                                <img src={article.sourceImage} alt="News Image" className="w-8 h-8" />
                                <h2 className="text-sm font-medium text-white">{article.source}</h2>
                            </div>
                            <h3 className="text-lg font-bold mt-1 mb-4">{article.title}</h3>
                            <div className="flex space-x-8">
                                <div className="relative w-1/2">
                                    <img src={article.image} alt="Article Image" className="w-full h-64 object-cover" />
                                </div>
                                <p className="mt-2 text-sm w-1/2">{article.description}</p>
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
                            <button
                                onClick={() => handleCommentClick(index)}
                                className="ml-4 text-[#DEBCF4]"
                            >
                                <FiMessageCircle />
                            </button>
                            <button onClick={handleShareClick} className="ml-4 text-[#DEBCF4]">
                                <FiShare2 />
                            </button>
                        </div>
                        {selectedArticle === index && (
                            <CommentSection comments={article.comments} onClose={() => setSelectedArticle(null)} />
                        )}
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-8 items-center">
                <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 mx-2 rounded ${currentPage === 1 ? 'bg-gray-400' : 'bg-[#66C564]'} text-white`}
                >
                    &lt;
                </button>
                <span className="text-lg mx-4">{currentPage} of {totalPages}</span>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 mx-2 rounded ${currentPage === totalPages ? 'bg-gray-400' : 'bg-[#66C564]'} text-white`}
                >
                    &gt;
                </button>
            </div>
            {isShareModalOpen && (
                <ShareModal onClose={() => setIsShareModalOpen(false)} />
            )}
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
            "Donald Trump is trying to crush Democratic nominee Kamala Harris’ persona as a force of change and to destroy her personal credibility as a potential president as their still-fresh competition careens into the final nine weeks before Election Day. In recent days, the ex-president has unveiled a broad assault using the insult-driven politics with which he won power in 2016, even as his advisers have been pleading with him to focus his attention on top voter concerns including high prices and immigration...",
        likes: "1.3K",
        comments: [
            {
                username: "Ugyen Dendup",
                userImage: "/user1.png",
                time: "5 mins ago",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            },
            {
                username: "John Doe",
                userImage: "/user1.png",
                time: "10 mins ago",
                text: "This is an interesting development. I wonder how it will affect the upcoming elections."
            }
        ]
    },
    {
        source: "Cable News Network",
        sourceImage: "/cnn.png",
        title: "Trump's hardline new quest to destroy Harris' momentum",
        image: "/cnn1.png",
        description:
            "Donald Trump is trying to crush Democratic nominee Kamala Harris’ persona as a force of change and to destroy her personal credibility as a potential president as their still-fresh competition careens into the final nine weeks before Election Day. In recent days, the ex-president has unveiled a broad assault using the insult-driven politics with which he won power in 2016, even as his advisers have been pleading with him to focus his attention on top voter concerns including high prices and immigration...",
        likes: "1.3K",
        comments: [
            {
                username: "Gaurav Sharma",
                userImage: "/user1.png",
                time: "5 mins ago",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            },
            {
                username: "John Doe",
                userImage: "/user1.png",
                time: "10 mins ago",
                text: "This is an interesting development. I wonder how it will affect the upcoming elections."
            }
        ]
    },
    // Add more articles here for testing
];

export default function App() {
    return <Headlines news={newsData} />;
}
