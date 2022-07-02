import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../data-access/store";
import {
  addNotification,
  removeNotification,
} from "../../data-access/store/notificationSlice/slice";
import { NotificationType, Severity } from "../../data-access/types";

export const useNotification = () => {
  const notification = useAppSelector((state) => state.notification);
  const dispatch = useAppDispatch();

  const showNotification = useCallback(
    (severity: Severity, message: string) => {
      dispatch(addNotification({ severity, message }));
    },
    []
  );

  const hideNotification = useCallback(
    () => dispatch(removeNotification()),
    []
  );

  return {
    notification,
    showNotification,
    hideNotification,
  };
};
