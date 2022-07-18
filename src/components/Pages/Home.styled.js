import styled from "styled-components";
import { toRem } from "../../utils/convertToRem";

export const Container = styled.div`
  display: flex;
  background: white;
  border-radius: ${toRem(20)};
<<<<<<< Updated upstream
  width: 34rem;
  height: 110vh;
  margin-top: 2vh;
=======
  width: ${toRem(617)};
  max-height: ${toRem(739)};
  margin-top: ${toRem(99)};
>>>>>>> Stashed changes
  flex-direction: column;
  margin: auto;
  padding: auto;

  @media (max-width: 768px) {
    width: 70%;
  }
`;
export const TitleContainer = styled.div`
  margin: 3vh 0 3vh 4vh;
`;
