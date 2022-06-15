import styled from "styled-components/macro";
import { colors } from "../../common";

export const InputContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
`;
export const DataDisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ChipContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 30px;

  padding: 2px;
`;
export const Paragraph = styled.p`
  color: ${colors.red};
  word-break: break-all;
  white-space: normal;
  border: 1px solid #000;
  width: 100%;
  margin: 0;
  padding: 4px;
`;
