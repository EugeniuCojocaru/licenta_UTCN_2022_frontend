import styled from "styled-components/macro";

export const FullPageContainer = styled.div`
  height: inherit;
  display: flex;
`;

export const SideMenuContainer = styled.div`
  width: 220px;
  margin: 14px;
  padding: 14px;
  border-radius: 25px;
  box-shadow: 2px 0 4px 0 rgba(0, 0, 0, 0.08);
  background: rgba(0, 0, 0, 0)
    linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25)) repeat scroll 0%
    0%;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 24px;
`;
