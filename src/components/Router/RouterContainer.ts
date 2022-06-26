import React from "react";
import { connect } from "react-redux";
import { RootState } from "../../data-access/store";
import { RouterPicker } from "./Router";

const mapStateToProps = (state: RootState, ownProps: any) => {
  const isSessionActive = state.auth.isLoggedIn;
  const isFetchingData = state.auth.isFetchingData;

  return {
    ...ownProps,
    isSessionActive,
    isFetchingData,
  };
};
export default connect(mapStateToProps)(RouterPicker);
