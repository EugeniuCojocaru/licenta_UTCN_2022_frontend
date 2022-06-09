import styled from "styled-components/macro";
import { colors } from "../../../common/style/styles";

export const StepperContainer = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  background-color: ${colors.white};
  box-shadow: 2px 0 4px 0 ${colors.shadow};
  border-radius: 12px;
`;

export const TabControllerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  margin-top: 24px;
  margin-bottom: 24px;
  background-color: ${colors.white};
  box-shadow: 2px 0 4px 0 ${colors.shadow};
  border-radius: 12px;
`;
export const TabController = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`;

export const TabSectionContainer = styled.form`
  display: flex;
  flex-direction: column;
  min-height: 500px;
  width: 100%;
  gap: 12px;
`;
export const RowContainer = styled.div`
  display: flex;
  gap: 12px;
`;
