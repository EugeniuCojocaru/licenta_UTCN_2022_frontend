import { IconButton, Tooltip } from "@mui/material";
import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {
  ChipContainer,
  DataDisplayContainer,
  InputRowContainer,
  Paragraph,
} from "./ContentOptionsInput.styles";
import { ContentOptionsInputType } from "../../data-access/types";

interface Props {
  value: ContentOptionsInputType;
  handleRemoveChip: (value: ContentOptionsInputType) => void;
}
const Chip = ({ value, handleRemoveChip }: Props) => {
  return (
    <ChipContainer>
      <Tooltip title="Remove">
        <IconButton onClick={() => handleRemoveChip(value)}>
          <DeleteOutlineIcon />
        </IconButton>
      </Tooltip>
      <DataDisplayContainer style={{ flex: 1 }}>
        <InputRowContainer>
          <Paragraph>{`Title: ${value.name}`}</Paragraph>
          <Paragraph>{`Time allocated: ${value.duration}`}</Paragraph>
        </InputRowContainer>
        {value.notes !== "" && (
          <InputRowContainer>
            <Paragraph>{`Notes: ${value.notes}`}</Paragraph>
          </InputRowContainer>
        )}
      </DataDisplayContainer>
    </ChipContainer>
  );
};

export default Chip;
