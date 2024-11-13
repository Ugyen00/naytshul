import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';

const CommentModal = ({ onClose, onSave, user }) => {
    const [comment, setComment] = useState('');
    const [isOpen, setIsOpen] = useState(true); // Modal visibility state

    const handleSave = () => {
        if (comment.trim()) {
            onSave(comment); // Save the comment
            setComment('');
            handleClose(); // Close the modal after saving comment
        }
    };

    const handleClose = () => {
        setIsOpen(false); // Close the modal
        if (onClose) {
            onClose(); // Trigger the parent's onClose function if passed
        }
    };

    if (!isOpen) {
        return null; // Do not render the modal if it's closed
    }

    return (
        <div className="fixed text-black inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-8 w-[500px] relative">
                {/* Close button */}
                <button onClick={handleClose} className="absolute top-4 right-4">
                    <FiX size={24} />
                </button>

                {/* User Info */}
                <div className="flex items-center mb-4">
                    <img
                        src={user?.profileImageUrl || '/default-user.png'}
                        alt="User"
                        className="w-12 h-12 rounded-full mr-4"
                    />
                    <h2 className="text-lg font-semibold">{user?.name || 'Anonymous User'}</h2>
                </div>

                {/* Comment Textarea */}
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Write your comment..."
                    className="w-full h-32 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
                />

                {/* Save Button */}
                <div className="flex justify-end mt-4">
                    <button
                        onClick={handleSave}
                        className="px-6 py-2 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CommentModal;
