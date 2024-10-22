import React, { useState } from 'react';
import { FiChevronUp, FiPlusCircle, FiX } from 'react-icons/fi';
import CommentModal from './CommentModel';

const CommentSection = ({ comments, onClose }) => {
    const [allComments, setAllComments] = useState(comments); // Stores all comments
    const [isModalOpen, setIsModalOpen] = useState(false); // Controls modal visibility
    const [newComment, setNewComment] = useState(''); // New comment text
    const [username, setUsername] = useState('Ugyen Dendup');
    const [profileImage, setProfileImage] = useState('/user1.png'); // Profile image

    const [editedComment, setEditedComment] = useState(null); // Tracks which comment is being edited
    const [newCommentText, setNewCommentText] = useState(''); // Holds edited text
    const [replyComment, setReplyComment] = useState(null); // Tracks which comment is being replied to

    const handleAddCommentClick = () => {
        setIsModalOpen(true); // Open the modal when button is clicked
    };

    const handleSaveComment = (comment) => {
        if (comment.trim() && username.trim()) {
            const newCommentObject = {
                username,
                userImage: profileImage,
                time: "Just now",
                text: comment,
            };
            setAllComments([...allComments, newCommentObject]);
            setIsModalOpen(false); // Close the modal after saving the comment
        }
    };

    const handleEditClick = (index) => {
        setEditedComment(index);
        setNewCommentText(allComments[index].text); // Set current text to be edited
    };

    const handleSaveEdit = (index) => {
        const updatedComments = [...allComments];
        updatedComments[index].text = newCommentText;
        setAllComments(updatedComments);
        setEditedComment(null); // Clear editing state
    };

    const handleCancelEdit = () => {
        setEditedComment(null); // Cancel editing mode
    };

    const handleReplyClick = (index) => {
        setReplyComment(index); // Set reply mode for the selected comment
    };

    const handleAddReply = (index, replyText) => {
        const updatedComments = [...allComments];
        const replyObject = {
            username: "Ugyen Dendup", // You can modify to use real usernames
            userImage: "/user1.png", // Default reply user image
            time: "Just now",
            text: replyText,
        };
        updatedComments[index].replies = updatedComments[index].replies || [];
        updatedComments[index].replies.push(replyObject);
        setAllComments(updatedComments);
        setReplyComment(null); // Exit reply mode
    };

    const handleDeleteClick = (index) => {
        const updatedComments = allComments.filter((_, i) => i !== index);
        setAllComments(updatedComments); // Update comments after deletion
    };

    return (
        <div className="bg-[#292929] text-white p-4 px-16 rounded-lg mt-4 w-full">
            <div className="py-4 border-b mb-8 flex justify-between">
                <div className="flex cursor-pointer" onClick={onClose}>
                    <h1 className="text-white mr-2">Comments</h1>
                    <FiChevronUp size={20} />
                </div>
                <div className="flex items-center cursor-pointer">
                    <button onClick={handleAddCommentClick} className="text-[#CCCCCC] mr-2">
                        Post your comment
                    </button>
                    <FiPlusCircle size={28} color="#DEBCF4" onClick={handleAddCommentClick} />
                </div>
            </div>

            {allComments.map((comment, index) => (
                <div key={index} className="mb-8">
                    <div className="flex items-center space-x-2 mb-2">
                        <img src={comment.userImage} alt="User" className="w-8 h-8 rounded-full" />
                        <h4 className="text-sm font-medium">{comment.username}</h4>
                        <span className="text-xs text-gray-400">{comment.time}</span>
                    </div>

                    {editedComment === index ? (
                        <div className="flex flex-col">
                            <textarea
                                className="text-sm text-gray-300 p-2 rounded-lg bg-gray-700"
                                value={newCommentText}
                                onChange={(e) => setNewCommentText(e.target.value)}
                            />
                            <div className="flex mt-2">
                                <button
                                    onClick={() => handleSaveEdit(index)}
                                    className="text-[#888888] mr-4"
                                >
                                    Save
                                </button>
                                <button onClick={handleCancelEdit} className="text-[#888888]">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    ) : (
                        <p className="text-sm text-gray-300 mb-2">{comment.text}</p>
                    )}

                    {editedComment !== index && replyComment !== index && (
                        <div className="flex space-x-4">
                            <button
                                onClick={() => handleReplyClick(index)}
                                className="text-[#888888]"
                            >
                                Reply
                            </button>
                            {comment.username === 'Ugyen Dendup' && (
                                <>
                                    <button
                                        onClick={() => handleEditClick(index)}
                                        className="text-[#888888]"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDeleteClick(index)}
                                        className="text-[#888888]"
                                    >
                                        Delete
                                    </button>
                                </>
                            )}
                        </div>
                    )}

                    {replyComment === index && (
                        <div className="mt-4 ml-8">
                            <textarea
                                className="text-sm text-gray-300 p-2 rounded-lg bg-gray-700 w-full"
                                placeholder="Write your reply..."
                                onChange={(e) => setNewCommentText(e.target.value)}
                            />
                            <div className="flex mt-2">
                                <button
                                    onClick={() => handleAddReply(index, newCommentText)}
                                    className="text-[#888888] mr-4"
                                >
                                    Reply
                                </button>
                                <button onClick={() => setReplyComment(null)} className="text-[#888888]">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    )}

                    {comment.replies &&
                        comment.replies.map((reply, i) => (
                            <div key={i} className="ml-8 mt-4">
                                <div className="flex items-center space-x-2 mb-2">
                                    <img
                                        src={reply.userImage}
                                        alt="User"
                                        className="w-6 h-6 rounded-full"
                                    />
                                    <h4 className="text-sm font-medium">{reply.username}</h4>
                                    <span className="text-xs text-gray-400">{reply.time}</span>
                                </div>
                                <p className="text-sm text-gray-300">{reply.text}</p>
                            </div>
                        ))}
                </div>
            ))}

            {/* Modal for new comment */}
            {isModalOpen && (
                <CommentModal
                    onClose={() => setIsModalOpen(false)}
                    onSave={handleSaveComment}
                />
            )}
        </div>
    );
};

export default CommentSection;

