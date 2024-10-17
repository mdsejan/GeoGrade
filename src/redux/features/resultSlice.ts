import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Subject {
  name: string;
  credit: number;
  gradePoint: number;
}

interface ResultState {
  subjects: Subject[];
}

const initialSubjects = {
  thirdYear: [
    { name: "Environmental Geography", credit: 4, gradePoint: 0 },
    { name: "Soil and Biogeography", credit: 4, gradePoint: 0 },
    { name: "Geography of Bangladesh", credit: 4, gradePoint: 0 },
    { name: "World Regional Geography", credit: 4, gradePoint: 0 },
    { name: "Cultural Geography", credit: 4, gradePoint: 0 },
    { name: "Population Geography", credit: 4, gradePoint: 0 },
    { name: "Quantitative Geography", credit: 4, gradePoint: 0 },
    { name: "Practical - III", credit: 4, gradePoint: 0 },
  ],
  fourthYear: [
    { name: "Geographical Thoughts and Concepts", credit: 4, gradePoint: 0 },
    { name: "Oceanography", credit: 4, gradePoint: 0 },
    { name: "Geography of Disasters", credit: 4, gradePoint: 0 },
    { name: "Political Geography", credit: 4, gradePoint: 0 },
    { name: "Agricultural Geography", credit: 4, gradePoint: 0 },
    { name: "Geography of South Asia", credit: 4, gradePoint: 0 },
    { name: "Urban Geography", credit: 4, gradePoint: 0 },
    { name: "Principles of Remote Sensing and GIS", credit: 4, gradePoint: 0 },
    { name: "Practical-IV", credit: 4, gradePoint: 0 },
    { name: "Vīva-voce", credit: 4, gradePoint: 0 },
  ],
};

const resultSlice = createSlice({
  name: "result",
  initialState: {
    subjects: initialSubjects.thirdYear, // Default to third year
  } as ResultState,
  reducers: {
    setGrade: (
      state,
      action: PayloadAction<{ subjectName: string; gradePoint: number }>
    ) => {
      const subject = state.subjects.find(
        (sub) => sub.name === action.payload.subjectName
      );
      if (subject) {
        subject.gradePoint = action.payload.gradePoint;
      }
    },
    setYearSubjects: (
      state,
      action: PayloadAction<"thirdYear" | "fourthYear">
    ) => {
      state.subjects = initialSubjects[action.payload];
    },
  },
});

export const { setGrade, setYearSubjects } = resultSlice.actions;
export default resultSlice.reducer;
