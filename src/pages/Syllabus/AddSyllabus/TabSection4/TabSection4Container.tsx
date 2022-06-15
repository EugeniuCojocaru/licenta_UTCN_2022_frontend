import React from "react";
import { connect } from "react-redux";
import { RootState } from "../../../../data-access/store";
import { TabSection4 } from "./TabSection4";

const mapStateToProps = (state: RootState, ownProps: any) => {
  const section4Data = state.sections.section4;

  return {
    ...ownProps,
    section4Data,
  };
};
export default connect(mapStateToProps)(TabSection4);
