import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice/slice";
import { notificationSlice } from "./notificationSlice/slice";
import { sectionsSlice } from "./sectionsSlice/slice";
//import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    sections: sectionsSlice.reducer,
    auth: authSlice.reducer,
    notification: notificationSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
