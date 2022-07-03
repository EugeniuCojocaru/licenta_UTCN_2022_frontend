import styled from "styled-components/macro";

export const Card = styled.div`
  color: rgba(0, 0, 0, 0.87);
  background-color: rgb(255, 255, 255);
  border: 0px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.75rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem,
    rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem;
  min-height: 500px;
  min-width: 500px;
  text-align: center;
`;

export const RowD = styled.div`
  margin: 50px;
  display: flex;
  gap: 12px;
  justify-content: space-evenly;
`;
