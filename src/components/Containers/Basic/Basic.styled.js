import styled from "styled-components";
import { toRem } from "../../../utils/convertToRem";

export const ContainerBasic = styled.div`
  width: 30rem;
  display: flex;
  flex-wrap: wrap;

  justify-content: space-between;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const ContainerInputLarger = styled.div`
  width: 30rem;
`;

export const ContainerInputLargerEmail = styled.div`
  width: 30rem;
  @media (max-width: 768px) {
    width: 50%;
  }
`;
export const ContainerInputLargerPhone = styled.div`
  width: 30rem;
  @media (max-width: 768px) {
    width: 35%;
  }
`;

export const ContainerBirthday = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const ContainerBirthdayInput = styled.div`
  width: 5rem;
  height: 4rem;
  @media (max-width: 768px) {
    width: 25vw;
  }
`;
export const ContainerCheckbox = styled.div``;
export const ContainerButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
