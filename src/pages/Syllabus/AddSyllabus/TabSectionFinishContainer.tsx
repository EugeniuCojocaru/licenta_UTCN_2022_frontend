import React from "react";
import { connect } from "react-redux";
import { RootState } from "../../../data-access/store";
import { TabSectionFinish } from "./TabSectionFinish";

const mapStateToProps = (state: RootState, ownProps: any) => {
  const idSyllabus = state.sections.idSyllabus;
  const section1Data = state.sections.section1;
  const section2Data = state.sections.section2;
  const section3Data = state.sections.section3;
  const section4Data = state.sections.section4;
  const section5Data = state.sections.section5;
  const section6Data = state.sections.section6;
  const section7Data = state.sections.section7;
  const section8Data = state.sections.section8;
  const section9Data = state.sections.section9;
  const section10Data = state.sections.section10;
  return {
    ...ownProps,
    idSyllabus,
    section1Data,
    section2Data,
    section3Data,
    section4Data,
    section5Data,
    section6Data,
    section7Data,
    section8Data,
    section9Data,
    section10Data,
  };
};
export default connect(mapStateToProps)(TabSectionFinish);
