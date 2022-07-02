import { createSlice } from "@reduxjs/toolkit";

import {
  Section1Type,
  Section10Type,
  SECTION10_DEFAULT,
  SECTION1_DEFAULT,
  Section2Type,
  SECTION2_DEFAULT,
  Section3Type,
  SECTION3_DEFAULT,
  Section4Type,
  SECTION4_DEFAULT,
  Section5Type,
  SECTION5_DEFAULT,
  Section6Type,
  SECTION6_DEFAULT,
  Section7Type,
  SECTION7_DEFAULT,
  Section8Type,
  SECTION8_DEFAULT,
  Section9Type,
  SECTION9_DEFAULT,
} from "../../types";

export interface SectionsSliceState {
  idSyllabus: string;
  section1: Section1Type;
  section2: Section2Type;
  section3: Section3Type;
  section4: Section4Type;
  section5: Section5Type;
  section6: Section6Type;
  section7: Section7Type;
  section8: Section8Type;
  section9: Section9Type;
  section10: Section10Type;
}

const initialState: SectionsSliceState = {
  idSyllabus: "",
  section1: SECTION1_DEFAULT,
  section2: SECTION2_DEFAULT,
  section3: SECTION3_DEFAULT,
  section4: SECTION4_DEFAULT,
  section5: SECTION5_DEFAULT,
  section6: SECTION6_DEFAULT,
  section7: SECTION7_DEFAULT,
  section8: SECTION8_DEFAULT,
  section9: SECTION9_DEFAULT,
  section10: SECTION10_DEFAULT,
};

export const sectionsSlice = createSlice({
  name: "sections",
  initialState,
  reducers: {
    updateIdSyllabus: (state, action) => {
      state.idSyllabus = action.payload;
    },
    updateSection1: (state, action) => {
      state.section1 = action.payload;
    },
    updateSection2: (state, action) => {
      state.section2 = action.payload;
    },
    updateSection3: (state, action) => {
      state.section3 = action.payload;
    },
    updateSection4: (state, action) => {
      state.section4 = action.payload;
    },
    updateSection5: (state, action) => {
      state.section5 = action.payload;
    },
    updateSection6: (state, action) => {
      state.section6 = action.payload;
    },
    updateSection7: (state, action) => {
      state.section7 = action.payload;
    },
    updateSection8: (state, action) => {
      state.section8 = action.payload;
    },
    updateSection9: (state, action) => {
      state.section9 = action.payload;
    },
    updateSection10: (state, action) => {
      state.section10 = action.payload;
    },
    resetSections: () => initialState,
  },
});

export const {
  updateIdSyllabus,
  updateSection1,
  updateSection2,
  updateSection3,
  updateSection4,
  updateSection5,
  updateSection6,
  updateSection7,
  updateSection8,
  updateSection9,
  updateSection10,
  resetSections,
} = sectionsSlice.actions;
