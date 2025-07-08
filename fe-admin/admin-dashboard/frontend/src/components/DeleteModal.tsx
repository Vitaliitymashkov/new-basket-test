import React from 'react';

interface DeleteModalProps {
    isOpen: boolean;
    onClose: () => void;
    onDelete: () => void;
    productName: string;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ isOpen, onClose, onDelete, productName }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white rounded shadow-lg p-6">
                <h2 className="text-lg font-bold mb-4">Confirm Deletion</h2>
                <p>Are you sure you want to delete the product "{productName}"?</p>
                <div className="mt-4 flex justify-end">
                    <button 
                        className="bg-red-500 text-white px-4 py-2 rounded mr-2" 
                        onClick={onDelete}
                    >
                        Delete
                    </button>
                    <button 
                        className="bg-gray-300 px-4 py-2 rounded" 
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;