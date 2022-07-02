import React from "react";
import { useNotification } from "../../common/hooks/useNotification";
import { Severity } from "../../data-access/types";

import Toaster from "./Toaster";

const ToasterSelector = () => {
  const { notification } = useNotification();
  const { severity, message } = notification;

  if (severity !== "hidden") {
    return (
      <Toaster open={true} severity={severity as Severity} text={message} />
    );
  } else return null;
};

export default ToasterSelector;
