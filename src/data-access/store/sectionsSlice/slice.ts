import { createSlice } from "@reduxjs/toolkit";

import {
  Section1,
  SECTION1_DEFAULT,
  SECTION2_DEFAULT,
  TabSection2Type,
} from "../../types/sectionsTypes";

export interface SectionsSliceState {
  section1: Section1;
  section2: TabSection2Type;
}

const initialState: SectionsSliceState = {
  section1: SECTION1_DEFAULT,
  section2: SECTION2_DEFAULT,
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
  },
});

export const { updateSection1, updateSection2 } = sectionsSlice.actions;
