import { IconButton, TextField, Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { DataDisplayContainer, InputContainer } from "./ContentInput.styles";
import Chip from "./Chip";
interface Props {
  label: string;
  required?: boolean;
  values: string[];
  handleValuesChange: (newValues: string[]) => void;
}
const ContentInput = ({
  label,
  required,
  values,
  handleValuesChange,
}: Props) => {
  const [value, setValue] = useState<string>("");

  const [clearValue, setClearValue] = useState<boolean>(false);
  useEffect(() => {
    setValue("");
  }, [clearValue]);

  const handleRemoveChip = (value: string) => {
    handleValuesChange(values.filter((item) => item !== value));
  };
  return (
    <>
      <InputContainer>
        <TextField
          label={label}
          multiline
          required={!!required}
          maxRows={4}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Tooltip title="Add">
          <IconButton
            onClick={() => {
              if (value !== "") {
                handleValuesChange([...values, value]);
                setClearValue(!clearValue);
              }
            }}
          >
            <AddIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Clear">
          <IconButton onClick={() => setValue("")}>
            <RemoveIcon />
          </IconButton>
        </Tooltip>
      </InputContainer>
      <DataDisplayContainer>
        {values.map((value, index) => (
          <Chip
            key={`${label}-${index}`}
            value={value}
            handleRemoveChip={handleRemoveChip}
          />
        ))}
      </DataDisplayContainer>
    </>
  );
};

export default ContentInput;
