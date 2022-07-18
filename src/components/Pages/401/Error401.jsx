import React from "react";
import Error from "../../../assets/error401.png";
import { Container, ErrorImg } from "./Error401.styled";
function Error401() {
  return (
    <Container>
      <ErrorImg src={Error} />
    </Container>
  );
}

export default Error401;
