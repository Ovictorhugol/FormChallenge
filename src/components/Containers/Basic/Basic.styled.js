import styled from "styled-components";
import { toRem } from "../../../utils/convertToRem";

export const ContainerBasic = styled.div`  
  margin-right: ${toRem(55)};
  margin-left: ${toRem(47)};
  display: grid;
  grid-template-columns: 68.6% 31.4%;
  grid-template-rows: auto auto auto auto auto auto;

  justify-content: space-between;
  @media (max-width: 768px) {   
    grid-template-columns: 50% 50%;
    grid-template-rows: auto auto auto auto auto auto auto auto;
  }
`;

export const ContainerInputLarger = styled.div`
  grid-column: 1 / 3;    
`;

export const ContainerInputLargerEmail = styled.div`
  grid-column: 1 / 2;  
  grid-row: 3 /4;
  margin-right: 1.5rem;
  @media (max-width: 768px) {
    grid-column: 1 / 3; 
    margin-right: 0;
  }
`;

export const ContainerInputLargerPhone = styled.div`
  grid-column: 2 / 3;  
  grid-row: 3 / 4;
  @media (max-width: 768px) {
    grid-column: 1 / 3;
    grid-row: 4 / 5;
  }
`;

export const ContainerBirthdayLabel = styled.div` 
  grid-column: 1 / 3; 
  grid-row: 4 / 5;
  width: 100%;  
  @media (max-width: 768px) {    
    grid-row: 5 / 6;
  }
`;

export const ContainerBirthday = styled.div`
  grid-column: 1 / 3; 
  grid-row: 4 / 5;
  display: grid;
  grid-template-columns: 21% 21% 21% auto;    
  gap: 1.375rem;
  @media (max-width: 768px) {
    grid-column: 1 / 3; 
    grid-row: 4 / 6;   
    display: grid;
    grid-template-columns: 47% 47%;
    grid-template-rows: 50% 50%;
    grid-gap: 0 1.375rem;
    
  }
`;

export const ContainerBirthdayInput = styled.div`
  grid-column: 4/ 5; 
  margin-left: 0.375rem;

  @media (max-width: 768px) {    
    grid-column: 2 / 3;   
  }
`;

export const ContainerCheckbox = styled.div`
  grid-column: 1 / 3; 
  grid-row: 5 / 6;
  margin-bottom: 2.688rem;
  @media (max-width: 768px) {   
    grid-row: 6/ 7;  
  }
`;

export const ContainerButton = styled.div`
  grid-column: 2 / 3; 
  grid-row: 6 / 7;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 2.25rem;
  @media (max-width: 768px) {
    grid-row: 7/ 8;   
  }
`;
