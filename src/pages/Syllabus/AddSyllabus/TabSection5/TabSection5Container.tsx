import React from "react";
import { connect } from "react-redux";
import { RootState } from "../../../../data-access/store";
import { TabSection5 } from "./TabSection5";

const mapStateToProps = (state: RootState, ownProps: any) => {
  const section5Data = state.sections.section5;

  return {
    ...ownProps,
    section5Data,
  };
};
export default connect(mapStateToProps)(TabSection5);
