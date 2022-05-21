import styled from "styled-components/macro";

export const SectionArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  align-content: flex-start;
`;

export const AddItemContainer = styled.div`
  display: flex;

  justify-content: flex-start;
  width: 100%;
`;

/* Section item  */
export const SectionItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: 0.5px solid #000;
  padding-left: 8px;
`;
export const SectionItemEditContainer = styled.div`
  display: flex;
  flex: 2;
`;
