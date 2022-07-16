import React from "react";

import {
  Container,
  LabelContainer,
  InputStyle,
  Label,
  LabelError,
  CheckboxError,
  CheckboxContainer,
  LabelCheckBox,
  InputStyleCheckbox,
} from "./Input.styled.js";

const Input = ({ id, placeholder, type, label, value, onChange, hasError, register }) => {
  const getInput = (type) => {
    switch (type) {
      case "text":
      case "email":
      case "number":
        return (
          <Container>
            <LabelContainer>
              <Label htmlFor={id}>{label}</Label>
              {hasError && <LabelError>{`Please enter your ${id}`}</LabelError>}
            </LabelContainer>
            <InputStyle
              id={id}
              placeholder={placeholder}
              type={type}
              value={value}
              onChange={onChange}
            />
          </Container>
        );
      case "checkbox":
        return (
          <CheckboxContainer>
            <InputStyleCheckbox
              id={id}
              placeholder={placeholder}
              type={type}
              value={value}
              onChange={onChange}
            />
            <LabelCheckBox for={id} id="Accept">
              {label}
            </LabelCheckBox>
            {hasError && (
              <CheckboxError>{"Please confirm the terms"}</CheckboxError>
            )}
          </CheckboxContainer>
        );
      case "url":
        return (
          <Container>
            <LabelContainer>
              <Label>{label}</Label>
              {hasError && (
                <LabelError>{`Please enter your ${id} Link`}</LabelError>
              )}
            </LabelContainer>
            <InputStyle
              id={id}
              placeholder={placeholder}
              type={type}
              value={value}
              {...register}
              onChange={onChange}
            />
          </Container>
        );
      default:
        return <Input>{label}</Input>;
    }
  };
  return <div>{getInput(type)}</div>;
};

export default Input;
