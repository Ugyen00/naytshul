import React, { useEffect, useState } from 'react';
import { FaHeart } from '@react-icons/all-files/fa/FaHeart';
import { FiHeart, FiMessageCircle, FiShare2 } from 'react-icons/fi';
import CommentSection from '../components/CommentModel';
import ShareModal from '../components/ShareModel';

function Headlines({ clerkUserId }) {
    const [headlines, setHeadlines] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [likedArticles, setLikedArticles] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);
    const articlesPerPage = 5;

    useEffect(() => {
        const fetchHeadlines = async () => {
            try {
                const response = await fetch('http://localhost:3001/headlines');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();

                setHeadlines(data);
                setLoading(false);

                const likedStatus = {};
                data.forEach(article => {
                    likedStatus[article._id] = article.isLiked || false;
                });
                setLikedArticles(likedStatus);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchHeadlines();
    }, []);

    const handleHeartClick = async (articleId) => {
        try {
            console.log("hi")
            const isLiked = likedArticles[articleId];
            const likeE = `http://localhost:3001/articles/${articleId}/like`;
            const unlikeE = `http://localhost:3001/articles/${articleId}/unlike`;
            var endpoint = likeE;
            // if (isLiked) {
            //     endpoint = likeE
            // } else {
            //     endpoint = unlikeE
            // }
            const response = await fetch(endpoint, {
                method: isLiked ? 'DELETE' : 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId: clerkUserId }),
            });

            if (!response.ok) {
                throw new Error(`Failed to ${isLiked ? 'unlike' : 'like'} article`);
            }

            const result = await response.json();
            console.log("res", result)
            setLikedArticles((prevLikedArticles) => ({
                ...prevLikedArticles,
                [articleId]: !isLiked,
            }));

            setHeadlines((prevHeadlines) =>
                prevHeadlines.map((article) =>
                    article._id === articleId
                        ? { ...article, likeCount: result.likeCount }
                        : article
                )
            );
        } catch (error) {
            console.error(error);
        }
    };

    const handleCommentClick = (index) => {
        setSelectedArticle((prevIndex) => (prevIndex === index ? null : index));
    };

    const handleShareClick = () => {
        setIsShareModalOpen(true);
    };

    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = headlines.slice(indexOfFirstArticle, indexOfLastArticle);

    const nextPage = () => {
        if (currentPage < Math.ceil(headlines.length / articlesPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
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
            <h1 className="text-3xl font-bold mb-6 text-left">Top Headlines</h1>
            {currentArticles.length === 0 ? (
                <p className="text-center text-gray-500">No headlines found.</p>
            ) : (
                currentArticles.map((headline, index) => (
                    <div key={headline._id} className="p-4 bg-white rounded shadow-md mb-6">
                        <div className="flex flex-row items-start space-x-4">
                            {/* Image on the left */}
                            <div className="flex-1">
                                <h2 className="text-xl font-bold mb-2">{headline.title}</h2>
                                <p className="text-sm text-gray-500 mb-2">
                                    Published: {new Date(headline.publishedAt).toLocaleString()}
                                </p>
                                <p className="text-gray-700 mb-4">{headline.description}</p>
                                <div className="flex items-center justify-between">
                                    <div
                                        className="flex items-center cursor-pointer"
                                        onClick={() => handleHeartClick(headline._id)}
                                    >
                                        {likedArticles[headline._id] ? (
                                            <FaHeart className="text-red-500 mr-1" />
                                        ) : (
                                            <FiHeart className="text-gray-600 mr-1" />
                                        )}
                                        <span>{headline.likeCount}</span>
                                    </div>
                                    <div className="flex items-center cursor-pointer" onClick={() => handleCommentClick(index)}>
                                        <FiMessageCircle className="text-gray-600 mr-1" />
                                        <span>Comment</span>
                                    </div>
                                    <div className="flex items-center cursor-pointer" onClick={handleShareClick}>
                                        <FiShare2 className="text-gray-600 mr-1" />
                                        <span>Share</span>
                                    </div>
                                </div>
                                {selectedArticle === index && (
                                    <CommentSection articleId={headline._id} />
                                )}
                                {isShareModalOpen && <ShareModal onClose={() => setIsShareModalOpen(false)} />}
                            </div>
                            {/* Content on the right */}
                            {headline.urlToImage && (
                                <img
                                    src={headline.urlToImage}
                                    alt={headline.title}
                                    className="w-1/3 h-48 object-cover rounded"
                                />
                            )}
                        </div>
                    </div>
                ))
            )}
            <div className="flex justify-between mt-6">
                <button
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Previous
                </button>
                <button
                    onClick={nextPage}
                    disabled={currentPage >= Math.ceil(headlines.length / articlesPerPage)}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default Headlines;
