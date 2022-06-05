import { createSlice } from "@reduxjs/toolkit";
import {
  Section1,
  SECTION1_DEFAULT,
} from "../../../common/types/sectionsTypes";

export interface SectionsSliceState {
  section1: Section1;
}

const initialState: SectionsSliceState = {
  section1: SECTION1_DEFAULT,
};

export const sectionsSlice = createSlice({
  name: "sections",
  initialState,
  reducers: {
    updateSection1: (state, action) => {
      state.section1 = action.payload;
    },
  },
});
