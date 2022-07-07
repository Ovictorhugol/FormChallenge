import React from "react"
import {
    FormsTitle,
    TabTitle,
    SignUpTitle,
    TitleStyled
} from './Title.styled'

const Title = ({ type, label }) => {
  const getTitle = (type) => {
    switch (type) {
      case "h1":
        return <FormsTitle>{label}</FormsTitle>;
      case "h2":
        return <SignUpTitle>{label}</SignUpTitle>;
      case "h3":
        return <TabTitle>{label}</TabTitle>;
       default:
        return <TitleStyled>{label}</TitleStyled>;
    }
  };
  return <div>{getTitle(type)}</div>;
};

export default Title;