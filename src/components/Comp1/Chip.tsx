import { IconButton, Tooltip } from "@mui/material";
import React from "react";
import { ChipContainer, Paragraph } from "./Comp1.styles";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
interface Props {
  value: string;
  handleRemoveChip: (value: string) => void;
}
const Chip = ({ value, handleRemoveChip }: Props) => {
  return (
    <ChipContainer>
      <Tooltip title="Remove">
        <IconButton onClick={() => handleRemoveChip(value)}>
          <DeleteOutlineIcon />
        </IconButton>
      </Tooltip>
      <Paragraph>{value}</Paragraph>
    </ChipContainer>
  );
};

export default Chip;
