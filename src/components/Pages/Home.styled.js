import styled from "styled-components";
import { toRem } from "../../utils/convertToRem";

export const Container = styled.div`
  display: flex;
  background: white;
  border-radius: ${toRem(20)};
  width: 40vw;
  height: 100vh;
  margin-top: 2vh;
  flex-direction: column;
  margin: auto;
  padding: auto;
`;
export const TitleContainer = styled.div`
  margin: 6vh 0 3vh 4vh;
`;
