import { TextField } from "@mui/material";
import React from "react";
type HandleChangeType =
  | ((filedName: string, value: string) => void)
  | ((value: string) => void);
interface PropType {
  label: string;
  value: string;
  isRequired?: boolean;
  type?: string;
  isDisabled?: boolean;
  handleChange: any;
}
export const CustomTextField = ({
  label,
  value,
  isRequired,
  type,
  isDisabled,
  handleChange,
}: PropType) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      size="small"
      label={label}
      value={value}
      required={isRequired}
      type={type || "text"}
      disabled={isDisabled}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};
