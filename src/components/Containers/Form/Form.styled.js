import styled from "styled-components";
import { toRem } from "../../../utils/convertToRem";

export const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 35rem;
  justify-content: center;
`;

export const FormInput = styled.div`
  width: 90%;
`;

export const FormEmail = styled.div`
  width: 90%;
  @media (max-width: 768px) {
    width: 55%;
  }
`;
export const FormPhone = styled.div`
  width: 90%;
  @media (max-width: 768px) {
    margin-left: 1vw;
    width: 33%;
  }
`;

export const BirthDayContainer = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
  }
`;
export const BirthDayForm = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  flex-direction: column;
`;
export const BirthDayInput = styled.div`
  width: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.9rem;
`;

export const FormCheckbox = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FormButton = styled.div`
  display: flex;
  width: 90%;
  justify-content: flex-end;
  margin-top: 2rem;
`;
