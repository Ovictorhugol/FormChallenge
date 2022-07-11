import styled from "styled-components";
import { toRem } from "../../utils/convertToRem";

export const Container = styled.div`
  background: white;
  border-radius: ${toRem(20)};
  width: 40vw;
  height: 60vh;
  margin-top: 2vh;
`;
