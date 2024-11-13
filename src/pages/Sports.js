import React, { useState, useEffect } from 'react';
import { FaHeart } from '@react-icons/all-files/fa/FaHeart';
import { FiHeart, FiMessageCircle, FiShare2 } from 'react-icons/fi';
import CommentSection from '../components/Comment';  // Adjust the path as needed
import ShareModal from '../components/ShareModel';  // Adjust the path as needed

const Sports = () => {
    const [sportsNews, setSportsNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [likedArticles, setLikedArticles] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);
    const articlesPerPage = 5;

    useEffect(() => {
        const fetchSportsNews = async () => {
            try {
                const response = await fetch('http://localhost:3001/sports');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setSportsNews(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchSportsNews();
    }, []);

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
    const currentArticles = sportsNews.slice(indexOfFirstArticle, indexOfLastArticle);

    const totalPages = Math.ceil(sportsNews.length / articlesPerPage);

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

    if (loading) {
        return <div className="text-center mt-10 text-lg">Loading...</div>;
    }

    if (error) {
        return <div className="text-center mt-10 text-red-600">Error: {error}</div>;
    }

    return (
        <div className="container mx-auto p-4 ml-64 max-w-5xl">
            <h1 className="text-3xl font-bold mb-6 text-left">Sports News</h1>
            {currentArticles.length === 0 ? (
                <p className="text-center text-gray-500">No sports news found.</p>
            ) : (
                currentArticles.map((article, index) => (
                    <div key={index} className="p-4 bg-white rounded shadow-md mb-6">
                        {article.urlToImage && (
                            <img
                                src={article.urlToImage}
                                alt={article.title}
                                className="w-full h-64 object-cover mb-4 rounded"
                            />
                        )}
                        <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
                        <p className="text-gray-700 mb-4">{article.description}</p>
                        <a
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            Read more
                        </a>
                        <p className="text-sm text-gray-500 mt-2">
                            <strong>Published at:</strong> {new Date(article.publishedAt).toLocaleString()}
                        </p>
                        <div className="flex items-center mt-4">
                            <button
                                onClick={() => handleHeartClick(index)}
                                className="text-red-500 mr-4"
                            >
                                {likedArticles[index] ? <FaHeart /> : <FiHeart />}
                            </button>
                            <button
                                onClick={() => handleCommentClick(index)}
                                className="text-gray-600 mr-4"
                            >
                                <FiMessageCircle />
                            </button>
                            <button onClick={handleShareClick} className="text-gray-600">
                                <FiShare2 />
                            </button>
                        </div>
                        {selectedArticle === index && <CommentSection articleId={index} />}
                    </div>
                ))
            )}
            <div className="flex justify-between mt-6">
                <button onClick={handlePreviousPage} disabled={currentPage === 1} className="bg-gray-200 px-4 py-2 rounded">
                    Previous
                </button>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage >= Math.ceil(sportsNews.length / articlesPerPage)}
                    className="bg-gray-200 px-4 py-2 rounded"
                >
                    Next
                </button>
            </div>
            {isShareModalOpen && <ShareModal onClose={() => setIsShareModalOpen(false)} />}
        </div>
    );
};

export default Sports;
