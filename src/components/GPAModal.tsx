import React from "react";

interface GPAModalProps {
  gpa: number | null;
  onClose: () => void;
}

const GPAModal: React.FC<GPAModalProps> = ({ gpa, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-[#131313] w-5/6 lg:w-2/6 p-10 rounded-lg shadow-lg text-white text-center">
        <h3 className="text-2xl font-bold mb-6">Your GPA</h3>
        <p className="text-4xl text-green-400 mb-10">{gpa?.toFixed(2)}</p>
        <button
          onClick={onClose}
          className="mt-4 w-5/6 mx-auto font-semibold bg-[#E2E2E2] text-[#E25478] px-4 py-2 rounded-md hover:bg-white"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default GPAModal;
