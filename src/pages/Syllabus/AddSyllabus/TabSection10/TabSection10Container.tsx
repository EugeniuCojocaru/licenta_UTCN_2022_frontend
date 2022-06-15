import React from "react";
import { connect } from "react-redux";
import { RootState } from "../../../../data-access/store";
import { TabSection10 } from "./TabSection10";

const mapStateToProps = (state: RootState, ownProps: any) => {
  const section10Data = state.sections.section10;

  return {
    ...ownProps,
    section10Data,
  };
};
export default connect(mapStateToProps)(TabSection10);
