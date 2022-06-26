import React from "react";
import { connect } from "react-redux";
import { RootState } from "../../../../data-access/store";
import { TabSection2 } from "./TabSection2";

const mapStateToProps = (state: RootState, ownProps: any) => {
  const section2Data = state.sections.section2;

  return {
    ...ownProps,
    section2Data,
  };
};
export default connect(mapStateToProps)(TabSection2);
