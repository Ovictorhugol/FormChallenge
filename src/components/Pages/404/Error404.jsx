import React from "react";
import { Container, Error404 } from "./Error404.styled";
import Error from "../../../assets/gifError404.gif";
export default function ErrorPage404() {
  return (
    <Container>
      <Error404 src={Error} />
    </Container>
  );
}
