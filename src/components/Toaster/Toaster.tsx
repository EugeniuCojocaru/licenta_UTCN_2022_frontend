import React from "react";

import Alert, { AlertColor } from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Severity } from "../../data-access/types";
import { useNotification } from "../../common/hooks/useNotification";

interface Props {
  open: boolean;
  severity: Severity;
  text: string;
}

const Toaster = ({ open, severity, text }: Props) => {
  const { hideNotification } = useNotification();

  const handleClose = () => {
    hideNotification();
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
      key={"vertical + horizontal"}
      action={
        <IconButton color="inherit" size="small" aria-label="close">
          <CloseIcon fontSize="small" />
        </IconButton>
      }
    >
      <Alert
        severity={severity as AlertColor}
        className="toaster"
        id={`${severity}_toaster`}
      >
        {text}
      </Alert>
    </Snackbar>
  );
};
export default Toaster;
