import { createSlice } from "@reduxjs/toolkit";
import {
  Section3Type,
  SECTION3_DEFAULT,
} from "../../../pages/Syllabus/AddSyllabus/TabSection3";

import {
  Section1,
  SECTION1_DEFAULT,
  SECTION2_DEFAULT,
  Section2Type,
} from "../../types/sectionsTypes";

export interface SectionsSliceState {
  section1: Section1;
  section2: Section2Type;
  section3: Section3Type;
}

const initialState: SectionsSliceState = {
  section1: SECTION1_DEFAULT,
  section2: SECTION2_DEFAULT,
  section3: SECTION3_DEFAULT,
};

export const sectionsSlice = createSlice({
  name: "sections",
  initialState,
  reducers: {
    updateSection1: (state, action) => {
      state.section1 = action.payload;
    },
    updateSection2: (state, action) => {
      state.section2 = action.payload;
    },
    updateSection3: (state, action) => {
      state.section3 = action.payload;
    },
  },
});

export const { updateSection1, updateSection2, updateSection3 } =
  sectionsSlice.actions;
