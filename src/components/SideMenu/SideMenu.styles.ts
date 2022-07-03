import styled from "styled-components/macro";
import { colors } from "../../common/style/styles";

export const SideMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 24px;
  margin-bottom: 15%;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30%;
`;

export const ButtonContainer = styled.div<{ active: boolean }>`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  color: ${colors.white};
  margin: 0 10%;

  svg {
    color: ${({ active }) => (active ? colors.red : colors.white)};
  }
  p {
    text-decoration: none;
    text-transform: none;
    font-family: "Poppins", sans-serif;
  }

  &:hover {
    svg {
      color: ${colors.red};
    }
  }
`;
