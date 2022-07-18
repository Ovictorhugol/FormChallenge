import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;  
    height: 5rem;
    @media (max-width: 768px) { 
   height: 4.5rem;  
  }
`;
const Label = styled.label`
  font-family: "Nunito", sans-serif;
  font-size: 0.875rem;
  text-align: left; 
  color: #767676;
  font-weight: 400;
  line-height: 1rem;
  height: 1rem;  
`;

const LabelCheckBox = styled.label`
  font-family: "Nunito", sans-serif;
  font-size: 0.875rem;
  text-align: left;
  margin-right: 1.188rem;
  color: #767676;
  font-weight: 400;
`;

const InputStyle = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 2.5em;
  font-family: "Nunito", sans-serif;
  color: #767676;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  background: #ffffff;
  border: 0.125rem solid #aaaaaa;
  border-radius: 3px;
  padding: 0.188rem;
  &::placeholder {
    height: 1.25rem;
    font-family: "Nunito", sans-serif;
    color: #767676;
    justify-content: center;
  }
`;

const InputStyleCheckbox = styled.input`
  box-sizing: border-box;
  height: 2.2rem;
  font-family: "Nunito", sans-serif;
  color: #767676;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  background: #ffffff;
  border: 0.125rem solid #aaaaaa;
  border-radius: 4px;
  padding: 0.188rem;
  margin-right: 8px;
  margin-left: 2px;
  transform: scale(1.5);
  &::placeholder {
    height: 1.25rem;
    font-family: "Nunito", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    color: #767676;
    justify-content: center;
  }
`;

const LabelError = styled.label`
  font-family: "Nunito", sans-serif;
  font-size: 0.875rem;
  text-align: left;
  color: #ff0000;
  font-weight: 400;
  line-height: 1rem;
  height: 1rem;
  margin-left: 1.188rem;
`;

const CheckboxError = styled.label`
  font-family: "Nunito", sans-serif;
  font-size: 0.875rem;
  text-align: left;
  color: #ff0000;
  font-weight: 400;  
  height: 1rem;
`;

const LabelContainer = styled.div`
  display: inline-flex;
  text-align: center;
  margin-bottom: 0.313rem;
`;

const CheckboxContainer = styled.div`

  display: inline-flex;
  align-items: center;
  flex: 1;
  flex-direction: row;
  padding: 0.3rem;
  height: 5rem;
   accent-color: #074ee8;
  > #Checkbox {
    width: 1.25rem;
    height: 1.25rem;
    
  }
  > #Accept {
    font-size: 1rem;
    color: black;
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export {
  Label,
  InputStyle,
  Container,
  LabelError,
  LabelContainer,
  CheckboxError,
  CheckboxContainer,
  LabelCheckBox,
  InputStyleCheckbox,
};
