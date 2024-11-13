import { FiX, FiLink } from 'react-icons/fi';
import { FaWhatsapp, FaFacebookMessenger, FaTelegram } from 'react-icons/fa';

const ShareModal = ({ onClose }) => {
    const shareUrl = window.location.href; // The current URL to be shared

    const handleCopyLink = () => {
        navigator.clipboard.writeText(shareUrl).then(() => {
            alert('Link copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    };

    const handleShareWhatsApp = () => {
        window.open(`https://wa.me/?text=${encodeURIComponent(shareUrl)}`, '_blank');
    };

    const handleShareMessenger = () => {
        window.open(`https://www.facebook.com/dialog/send?link=${encodeURIComponent(shareUrl)}&app_id=YOUR_APP_ID&redirect_uri=${encodeURIComponent(shareUrl)}`, '_blank');
    };

    const handleShareTelegram = () => {
        window.open(`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=Check this out!`, '_blank');
    };

    return (
        <div className="fixed text-md text-black inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-8 w-[500px] relative">
                <button onClick={onClose} className="absolute top-4 right-4">
                    <FiX size={24} />
                </button>
                <h2 className="text-md font-semibold mb-6">Share Via:</h2>
                <div className="flex justify-around space-x-4">
                    <div
                        className="flex flex-col items-center hover:text-blue-500 transition-transform transform hover:scale-110 cursor-pointer"
                        onClick={handleCopyLink}
                    >
                        <FiLink size={48} className="mb-2" />
                        <span>Copy Link</span>
                    </div>
                    <div
                        className="flex flex-col items-center hover:text-green-500 transition-transform transform hover:scale-110 cursor-pointer"
                        onClick={handleShareWhatsApp}
                    >
                        <FaWhatsapp size={48} className="mb-2" />
                        <span>WhatsApp</span>
                    </div>
                    <div
                        className="flex flex-col items-center hover:text-blue-600 transition-transform transform hover:scale-110 cursor-pointer"
                        onClick={handleShareMessenger}
                    >
                        <FaFacebookMessenger size={48} className="mb-2" />
                        <span>Messenger</span>
                    </div>
                    <div
                        className="flex flex-col items-center hover:text-blue-400 transition-transform transform hover:scale-110 cursor-pointer"
                        onClick={handleShareTelegram}
                    >
                        <FaTelegram size={48} className="mb-2" />
                        <span>Telegram</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShareModal;
