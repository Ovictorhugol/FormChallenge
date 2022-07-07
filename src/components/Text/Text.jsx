import React from "react";
import {
  TextBody,
  TextContainer,
  TitleText,
  VariableText,
} from "./Text.styled";
function Text(props) {
  const { title, variable } = props;
  return (
    <TextBody>
      <TextContainer>
        <TitleText>{title}</TitleText>
        <VariableText>{variable}</VariableText>
      </TextContainer>
    </TextBody>
  );
}

export default Text;
