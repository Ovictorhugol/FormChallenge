import styled from "styled-components";

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;
export const LabelText = styled.label`
  font-family: "Nunito", sans-serif;
  font-size: 0.875;
  text-align: left;
  color: #767676;
  font-weight: 400;
  line-height: 1rem;
  height: 1rem;
`;
export const LabelError = styled.label`
  font-family: "Nunito", sans-serif;
  font-size: 0.875;
  text-align: left;
  color: #ff0000;
  font-weight: 400;
  margin-left: 2rem;
  line-height: 1rem;
  height: 1rem;
`;
