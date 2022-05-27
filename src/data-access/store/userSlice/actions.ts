import { usersSlice } from "./slice";
import { AppDispatch } from "../store";

const { updateUsers } = usersSlice.actions;

const getUsers = () => async (dispatch: AppDispatch) => {
  try {
  } catch (e: any) {
    return e.response;
  }
};
