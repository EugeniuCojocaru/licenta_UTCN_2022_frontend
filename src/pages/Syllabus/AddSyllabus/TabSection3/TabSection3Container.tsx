import React from "react";
import { connect } from "react-redux";
import { RootState } from "../../../../data-access/store";
import { TabSection3 } from "./TabSection3";

const mapStateToProps = (state: RootState, ownProps: any) => {
  const section3Data = state.sections.section3;

  return {
    ...ownProps,
    section3Data,
  };
};
export default connect(mapStateToProps)(TabSection3);
