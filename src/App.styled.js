import styled from "styled-components";
import { toRem } from "./utils/convertToRem";
export const Container = styled.div`
  display: flex;
  background: white;
  border-radius: ${toRem(20)};
  width: 34rem;
  height: 110vh;
  margin-top: 2vh;
  flex-direction: column;
  margin: auto;
  padding: auto;

  @media (max-width: 768px) {
    width: 70%;
  }
`;
