import React from "react";
import { connect } from "react-redux";
import { RootState } from "../../../../data-access/store";
import { TabSection8 } from "./TabSection8";

const mapStateToProps = (state: RootState, ownProps: any) => {
  const section8Data = state.sections.section8;

  return {
    ...ownProps,
    section8Data,
  };
};
export default connect(mapStateToProps)(TabSection8);
