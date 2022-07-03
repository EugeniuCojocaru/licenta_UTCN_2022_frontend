import React from "react";
import { connect } from "react-redux";
import { RootState } from "../../data-access/store";
import { DashboardPage } from "./DashboardPage";

const mapStateToProps = (state: RootState, ownProps: any) => {
  const user = state.auth.user;

  return {
    ...ownProps,
    user,
  };
};
export default connect(mapStateToProps)(DashboardPage);
