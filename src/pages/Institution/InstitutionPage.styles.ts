import styled from "styled-components/macro";

export {};

export const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const DataContainer = styled.div`
  display: flex;
  height: 100%;
  gap: 16px;
`;

export const SectionContainer = styled.div`
  display: flex;
  flex: 1;
  height: 80%;
  border: 1px solid aquamarine;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  padding: 8px 16px;
  gap: 8px;
`;
