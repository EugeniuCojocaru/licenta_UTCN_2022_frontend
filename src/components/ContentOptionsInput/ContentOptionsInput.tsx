import { IconButton, TextField, Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  ContentOptionsInputType,
  CONTENT_OPTIONS_INPUT_DEFAULT,
} from "../../data-access/types/componentsType";
import {
  DataDisplayContainer,
  InputContainer,
  InputRowContainer,
} from "./ContentOptionsInput.styles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Chip from "./Chip";
interface Props {
  values: ContentOptionsInputType[];
  fieldName: string;
  handleValuesChange: (
    field: string,
    newValues: ContentOptionsInputType[]
  ) => void;
}
const ContentOptionsInput = ({
  values,
  handleValuesChange,
  fieldName,
}: Props) => {
  const [state, setState] = useState<ContentOptionsInputType>(
    CONTENT_OPTIONS_INPUT_DEFAULT
  );
  const { name, duration, notes } = state;
  const [clearValue, setClearValue] = useState<boolean>(false);
  useEffect(() => {
    setState(CONTENT_OPTIONS_INPUT_DEFAULT);
  }, [clearValue]);
  const handleInputChange = (field: string, value: string | number) => {
    setState({ ...state, [field]: value });
  };
  const handleRemoveChip = (value: ContentOptionsInputType) => {
    handleValuesChange(
      fieldName,
      values.filter((item) => item !== value)
    );
  };
  return (
    <>
      <InputContainer>
        <InputRowContainer>
          <TextField
            required={false}
            label="Course title"
            value={name}
            onChange={(e) => handleInputChange("name", e.target.value)}
          />
          <TextField
            required={false}
            label="Duration (in hours)"
            value={duration}
            type="number"
            onChange={(e) => handleInputChange("duration", e.target.value)}
            InputProps={{ inputProps: { min: 0 } }}
            style={{ width: "25%" }}
          />
          <TextField
            label={"Notes"}
            multiline
            required={false}
            maxRows={4}
            value={notes}
            onChange={(e) => handleInputChange("notes", e.target.value)}
            style={{ width: "160%" }}
          />
          <Tooltip title="Add">
            <IconButton
              onClick={() => {
                handleValuesChange(fieldName, [...values, state]);
                setClearValue(!clearValue);
              }}
            >
              <AddIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Clear">
            <IconButton onClick={() => setState(CONTENT_OPTIONS_INPUT_DEFAULT)}>
              <RemoveIcon />
            </IconButton>
          </Tooltip>
        </InputRowContainer>
        <DataDisplayContainer>
          {values.map((value, index) => (
            <Chip
              key={`${fieldName}-${index}`}
              value={value}
              handleRemoveChip={handleRemoveChip}
            />
          ))}
        </DataDisplayContainer>
      </InputContainer>
    </>
  );
};

export default ContentOptionsInput;
