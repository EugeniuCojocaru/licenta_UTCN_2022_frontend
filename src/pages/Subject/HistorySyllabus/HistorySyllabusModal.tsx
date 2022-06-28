import React, { useEffect, useState } from "react";
import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import { TextField, Button } from "@mui/material";
import { sxClasses } from "../../../common";
import { SyllabusVersionDto } from "../../../data-access/types";
import { getSyllabusVersionsBySubjectId } from "../../../data-access/service/subjectService";
import { HistoryTable } from "./HistoryTable";

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

interface Props {
  open: boolean;
  handleClose: () => void;
  subjectId: string;
}
export const HistorySyllabusModal = ({
  handleClose,
  open,
  subjectId,
}: Props) => {
  const [data, setData] = useState<SyllabusVersionDto[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getSyllabusVersionsBySubjectId(subjectId);
      response?.data && setData(response.data);
    };
    fetchData();
  }, []);

  return (
    <StyledModal
      aria-labelledby="unstyled-modal-title"
      aria-describedby="unstyled-modal-description"
      open={open}
      onClose={handleClose}
      BackdropComponent={Backdrop}
    >
      <Box sx={{ ...sxClasses.modal, width: "700px" }}>
        <h1>History syllabus</h1>
        <HistoryTable data={data} />
      </Box>
    </StyledModal>
  );
};
