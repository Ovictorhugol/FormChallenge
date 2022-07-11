import styled from "styled-components";
import { toRem } from "../../../utils/convertToRem";

export const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 40vw;
  justify-content: center;
`;

export const FormInput = styled.div`
  width: 90%;
`;

export const BirthDayInput = styled.div`
  display: flex;
  flex-direction: row;
  width: 30vw;
  align-items: center;
  justify-content: space-evenly;
`;
