import React from "react";
import { connect } from "react-redux";
import { RootState } from "../../../data-access/store";
import { TabSectionFinish } from "./TabSectionFinish";

const mapStateToProps = (state: RootState, ownProps: any) => {
  const section1Data = state.sections.section1;
  const section2Data = state.sections.section2;
  return {
    ...ownProps,
    section1Data,
    section2Data,
  };
};
export default connect(mapStateToProps)(TabSectionFinish);
