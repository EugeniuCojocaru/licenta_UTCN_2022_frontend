import React from "react";
import { connect } from "react-redux";
import { RootState } from "../../../../data-access/store";
import { TabSection6 } from "./TabSection6";

const mapStateToProps = (state: RootState, ownProps: any) => {
  const section6Data = state.sections.section6;

  return {
    ...ownProps,
    section6Data,
  };
};
export default connect(mapStateToProps)(TabSection6);
