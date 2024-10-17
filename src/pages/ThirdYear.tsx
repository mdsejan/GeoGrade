import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { setGrade, setYearSubjects } from "../redux/features/resultSlice";
import SubjectCard from "../components/SubjectCard";
import GPAModal from "../components/GPAModal";
import WarningModal from "../components/WarningModal";

const ThirdYear = () => {
  const dispatch = useAppDispatch();
  const subjects = useAppSelector((state: RootState) => state.result.subjects);

  const [gpa, setGpa] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    dispatch(setYearSubjects("thirdYear")); // Set third-year subjects
  }, [dispatch]);

  const handleGradeChange = (subjectName: string, gradePoint: number) => {
    dispatch(setGrade({ subjectName, gradePoint }));
  };

  const calculateGPA = () => {
    const allGradesSelected = subjects.every(
      (subject) => subject.gradePoint !== 0
    );

    if (!allGradesSelected) {
      setShowWarning(true);
      return;
    }

    const totalCredits = subjects.reduce(
      (sum, subject) => sum + subject.credit,
      0
    );
    const totalPoints = subjects.reduce(
      (sum, subject) => sum + subject.credit * subject.gradePoint,
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
      <h2 className="text-3xl font-bold my-12 text-[#FEE68C] text-center">
        Third Year Result
      </h2>
      <div className="grid gap-4">
        {subjects.map((subject) => (
          <SubjectCard
            key={subject.name}
            subjectName={subject.name}
            credit={subject.credit}
            gradePoint={subject.gradePoint}
            handleGradeChange={handleGradeChange}
          />
        ))}
      </div>

      <div className="flex justify-center gap-4 items-center mt-12 mb-24">
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

      {/* Modal for displaying GPA */}
      {showModal && <GPAModal gpa={gpa} onClose={() => setShowModal(false)} />}

      {/* Warning Popup if grades are not selected */}
      {showWarning && <WarningModal onClose={() => setShowWarning(false)} />}
    </div>
  );
};

export default ThirdYear;
