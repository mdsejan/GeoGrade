import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Subject {
  name: string;
  credit: number;
  gradePoint: number;
}

interface ResultState {
  subjects: Subject[];
}

const initialState: ResultState = {
  subjects: [
    { name: "Environmental Geography", credit: 4, gradePoint: 0 },
    { name: "Soil and Biogeography", credit: 4, gradePoint: 0 },
    { name: "Geography of Bangladesh", credit: 4, gradePoint: 0 },
    { name: "World Regional Geography", credit: 4, gradePoint: 0 },
    { name: "Cultural Geography", credit: 4, gradePoint: 0 },
    { name: "Population Geography", credit: 4, gradePoint: 0 },
    { name: "Quantitative Geography", credit: 4, gradePoint: 0 },
    { name: "Practical - III", credit: 4, gradePoint: 0 },
  ],
};

const resultSlice = createSlice({
  name: "result",
  initialState,
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
  },
});

export const { setGrade } = resultSlice.actions;
export default resultSlice.reducer;
