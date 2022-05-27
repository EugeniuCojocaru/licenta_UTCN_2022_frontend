import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../../common/types/userTypes";
export interface UsersSliceState {
  users: User[];
}

const initialState: UsersSliceState = {
  users: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    updateUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});
