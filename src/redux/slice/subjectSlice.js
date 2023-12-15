import { createSlice } from "@reduxjs/toolkit";

const subjectSlice = createSlice({
  name: "subject",
  initialState: {
    subject: "romance",
  },
  reducers: {
    setSubjectData(state, action) {
      state.subject = action.payload;
    },
  },
});

export default subjectSlice.reducer;
export const { setSubjectData } = subjectSlice.actions;
