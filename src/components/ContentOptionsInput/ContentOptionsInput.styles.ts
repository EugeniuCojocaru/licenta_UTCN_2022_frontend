import styled from "styled-components/macro";
import { colors } from "../../common";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  svg {
    &:hover {
      color: ${colors.red};
    }
  }
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
`;

export const Paragraph = styled.p`
  color: ${colors.text};
  word-break: break-all;
  white-space: normal;
  flex: 1;
  margin: 0;
  padding: 8px;

  border-radius: 4px;
  background-color: ${colors.white};
  box-shadow: 2px 0 4px 0 ${colors.shadow};
`;
