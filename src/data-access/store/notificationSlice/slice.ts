import { createSlice } from "@reduxjs/toolkit";
import { Severity } from "../../types/componentsType";

export interface NotificationSliceState {
  severity: Severity;
  message: string;
}
const initialState = {
  severity: "hidden",
  message: "",
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    addNotification(state, action) {
      const { severity, message } = action.payload;
      state.severity = severity;
      state.message = message;
    },
    removeNotification(state) {
      state.severity = "hidden";
      state.message = "";
    },
  },
});

export const { addNotification, removeNotification } =
  notificationSlice.actions;
