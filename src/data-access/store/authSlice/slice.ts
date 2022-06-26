import { createSlice } from "@reduxjs/toolkit";
import { User, USER_DEFAULT } from "../../types";

export interface AuthSliceState {
  isLoggedIn: boolean;
  user: User;
  isFetchingData: boolean;
}
const initialState: AuthSliceState = {
  isLoggedIn: false,
  user: USER_DEFAULT,
  isFetchingData: false,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userIsLoggedIn: (state) => {
      state.isLoggedIn = true;
      state.isFetchingData = false;
    },
    updateUserData: (state, action) => {
      state.user = action.payload;
    },
    setIsFatchingData: (state, action) => {
      state.isFetchingData = action.payload;
    },
    resetAuth: () => initialState,
  },
});

export const { userIsLoggedIn, updateUserData, setIsFatchingData, resetAuth } =
  authSlice.actions;
