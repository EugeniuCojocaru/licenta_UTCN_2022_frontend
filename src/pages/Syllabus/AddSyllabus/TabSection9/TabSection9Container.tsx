import React from "react";
import { connect } from "react-redux";
import { RootState } from "../../../../data-access/store";
import { TabSection9 } from "./TabSection9";

const mapStateToProps = (state: RootState, ownProps: any) => {
  const section9Data = state.sections.section9;

  return {
    ...ownProps,
    section9Data,
  };
};
export default connect(mapStateToProps)(TabSection9);
