import styled from "styled-components/macro";
import { colors } from "../../common";

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: ${colors.appBackground};
`;
export const LoginContainer = styled.form`
  height: 300px;
  width: 500px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${colors.white};
  border-radius: 12px;
`;
export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  gap: 12px;
`;
export const MiddleText = styled.div`
  display: flex;
  justify-content: center;
`;
