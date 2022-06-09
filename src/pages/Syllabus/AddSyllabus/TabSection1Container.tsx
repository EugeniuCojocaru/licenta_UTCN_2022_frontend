import React from "react";
import { connect } from "react-redux";
import { RootState } from "../../../data-access/store";
import { TabSection1 } from "./TabSection1";

const mapStateToProps = (state: RootState, ownProps: any) => {
  const section1Data = state.sections.section1;

  return {
    ...ownProps,
    section1Data,
  };
};
export default connect(mapStateToProps)(TabSection1);
