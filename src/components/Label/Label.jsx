import React from "react";
import { LabelContainer, LabelError, LabelText } from "./Label.styled";
function Label({ value, hasError }) {
  return (
    <LabelContainer>
      <LabelText>{value}</LabelText>
      {hasError ? <LabelError>{"Please enter your Age"}</LabelError> : <></>}
    </LabelContainer>
  );
}

export default Label;
