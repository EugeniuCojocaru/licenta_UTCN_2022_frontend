import styled from "styled-components/macro";
import { colors } from "../../common";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const InputRowContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
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
  flex: 1;
`;

export const Paragraph = styled.p`
  color: ${colors.red};
  word-break: break-all;
  white-space: normal;
  border: 1px solid #000;
  flex: 1;
  margin: 0;
  padding: 4px;
`;
