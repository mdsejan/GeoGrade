import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { setGrade } from "../redux/features/resultSlice";

const gradeOptions = [
  { label: "A+ (Plus)", value: 4.0 },
  { label: "A (Plain)", value: 3.75 },
  { label: "A- (Minus)", value: 3.5 },
  { label: "B+ (Plus)", value: 3.25 },
  { label: "B (Plain)", value: 3.0 },
  { label: "B- (Minus)", value: 2.75 },
  { label: "C+ (Plus)", value: 2.5 },
  { label: "C (Plain)", value: 2.25 },
  { label: "D (Plain)", value: 2.0 },
  { label: "F (Fail)", value: 0.0 },
];

const ThirdYear = () => {
  const dispatch = useAppDispatch();
  const subjects = useAppSelector((state: RootState) => state.result.subjects);

  const [gpa, setGpa] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleGradeChange = (subjectName: string, gradePoint: number) => {
    dispatch(setGrade({ subjectName, gradePoint }));
  };

  const calculateGPA = () => {
    const totalCredits = subjects.reduce(
      (sum: number, subject: { credit: number }) => sum + subject.credit,
      0
    );
    const totalPoints = subjects.reduce(
      (sum: number, subject: { credit: number; gradePoint: number }) =>
        sum + subject.credit * subject.gradePoint,
      0
    );
    const calculatedGpa = totalPoints / totalCredits;
    setGpa(calculatedGpa);
    setShowModal(true);
  };

  const resetGrades = () => {
    subjects.forEach((subject) => {
      dispatch(setGrade({ subjectName: subject.name, gradePoint: 0 }));
    });
    setGpa(null);
    setShowModal(false);
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl  font-bold my-12 text-[#FEE68C] text-center">
        Third Year Result
      </h2>
      <div className="grid gap-4">
        {subjects.map((subject) => (
          <div
            key={subject.name}
            className="p-4 bg-[#131313] shadow-lg rounded-lg "
          >
            <h3 className="text-xl font-semibold text-gray-100">
              {subject.name}
            </h3>
            <div className="mt-2 text-gray-500">Mark: 100</div>
            <div className="mt-1 text-gray-500">Credit: {subject.credit}</div>
            <select
              onChange={(e) =>
                handleGradeChange(subject.name, parseFloat(e.target.value))
              }
              className="mt-2 p-2 rounded-md w-2/3 bg-[#1A1A1A] text-gray-200 focus:outline-none"
              value={subject.gradePoint || ""}
            >
              <option value="">Select Grade</option>
              {gradeOptions.map((option) => (
                <option key={option.label} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 items-center mt-12  mb-24">
        <button
          onClick={calculateGPA}
          className="bg-[#E2E2E2] text-blue-500 font-semibold px-4 py-2 rounded-md hover:bg-white transition"
        >
          Calculate GPA
        </button>
        <button
          onClick={resetGrades}
          className="bg-[#E2E2E2] text-[#E25478] font-semibold px-4 py-2 rounded-md hover:bg-white transition"
        >
          Reset
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-[#131313] w-5/6 p-10 rounded-lg shadow-lg text-white text-center">
            <h3 className="text-2xl font-bold mb-6">Your GPA</h3>
            <p className="text-4xl text-green-400 mb-10">{gpa?.toFixed(2)}</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 w-5/6 mx-auto font-semibold bg-[#E2E2E2] text-[#E25478] px-4 py-2 rounded-md hover:bg-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThirdYear;
