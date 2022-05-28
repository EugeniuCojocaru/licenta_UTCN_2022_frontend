import { usersSlice } from "./slice";
import { AppDispatch } from "../store";
import { User } from "../../../common/types/userTypes";

const { updateUsers } = usersSlice.actions;

const updateUsersData = async (dispatch: AppDispatch, users: User[]) => {
  dispatch(updateUsers(users));
};

export { updateUsersData };
