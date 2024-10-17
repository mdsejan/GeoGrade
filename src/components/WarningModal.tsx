import React from "react";

interface WarningModalProps {
  onClose: () => void;
}

const WarningModal: React.FC<WarningModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-[#131313] w-5/6 lg:w-2/6 p-8 rounded-lg shadow-lg text-center text-white">
        <h3 className="text-2xl font-bold mb-6">Warning</h3>
        <p className="text-xl text-red-500 mb-6">
          Please select grades for all subjects before calculating GPA.
        </p>
        <button
          onClick={onClose}
          className="w-5/6 mx-auto font-semibold bg-[#E2E2E2] text-[#E25478] px-4 py-2 rounded-md hover:bg-white"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default WarningModal;
