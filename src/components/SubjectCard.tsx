import React from "react";
import { gradeOptions } from "../utils/constants";

interface SubjectCardProps {
  subjectName: string;
  credit: number;
  gradePoint: number;
  handleGradeChange: (subjectName: string, gradePoint: number) => void;
}

const SubjectCard: React.FC<SubjectCardProps> = ({
  subjectName,
  credit,
  gradePoint,
  handleGradeChange,
}) => {
  return (
    <div className="p-4 bg-[#131313] shadow-lg rounded-lg">
      <h3 className="text-xl font-semibold text-gray-100">{subjectName}</h3>
      <div className="mt-2 text-gray-500">Mark: 100</div>
      <div className="mt-1 text-gray-500">Credit: {credit}</div>
      <select
        onChange={(e) =>
          handleGradeChange(subjectName, parseFloat(e.target.value))
        }
        className="mt-2 p-2 rounded-md w-2/3 bg-[#1A1A1A] text-gray-200 focus:outline-none"
        value={gradePoint || ""}
      >
        <option value="">Select Grade</option>
        {gradeOptions.map((option) => (
          <option key={option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SubjectCard;
