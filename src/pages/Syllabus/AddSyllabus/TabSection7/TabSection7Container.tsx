import React from "react";
import { connect } from "react-redux";
import { RootState } from "../../../../data-access/store";
import { TabSection7 } from "./TabSection7";

const mapStateToProps = (state: RootState, ownProps: any) => {
  const section7Data = state.sections.section7;

  return {
    ...ownProps,
    section7Data,
  };
};
export default connect(mapStateToProps)(TabSection7);
