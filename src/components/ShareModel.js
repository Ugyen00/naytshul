import { FiX, FiLink } from 'react-icons/fi';
import { FaWhatsapp, FaFacebookMessenger, FaTelegram } from 'react-icons/fa';


const ShareModal = ({ onClose }) => {
    return (
        <div className="fixed text-md text-black inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-8 w-[500px] relative">
                <button onClick={onClose} className="absolute top-4 right-4">
                    <FiX size={24} />
                </button>
                <h2 className="text-md font-semibold mb-6">Share Via:</h2>
                <div className="flex justify-around space-x-4">
                    <div className="flex flex-col items-center">
                        <FiLink size={48} className="mb-2" />
                        <span>Copy Link</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaWhatsapp size={48} className="mb-2" />
                        <span>WhatsApp</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaFacebookMessenger size={48} className="mb-2" />
                        <span>Messenger</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaTelegram size={48} className="mb-2" />
                        <span>Telegram</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ShareModal;
