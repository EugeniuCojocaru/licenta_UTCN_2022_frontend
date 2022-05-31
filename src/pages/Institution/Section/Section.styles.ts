import styled from "styled-components/macro";

export const SectionContainer = styled.div`
  display: flex;
  flex: 1;
  height: 80%;
  border: 1px solid aquamarine;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  padding: 8px 16px;
  gap: 12px;
`;

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
  background: #dde1e7;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-shadow: -5px -5px 9px rgba(255, 255, 255, 0.45),
    5px 5px 9px rgba(94, 104, 121, 0.3);
  padding-left: 8px;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.25);
  }
`;
export const SectionItemEditContainer = styled.div`
  display: flex;
  flex: 2;
`;
