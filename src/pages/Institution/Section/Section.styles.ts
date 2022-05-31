import styled from "styled-components/macro";
import { colors } from "../../../common/style/styles";

export const SectionContainer = styled.div`
  display: flex;
  flex: 1;
  height: 80%;
  border-radius: 12px 64px 64px;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  padding: 24px 16px;

  background-color: ${colors.white};
  box-shadow: 2px 0 4px 0 ${colors.shadow};

  h1 {
    align-self: center;
    margin-bottom: 32px;
  }
  svg {
    &:hover {
      color: ${colors.red};
    }
  }
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
  overflow-x: hidden;
  margin-bottom: 8px;
`;

export const AddItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  padding-top: 16px;
`;

/* Section item  */
export const SectionItemContainer = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-left: 8px;
`;
export const SectionItemEditContainer = styled.div`
  display: flex;
  flex: 2;
`;
