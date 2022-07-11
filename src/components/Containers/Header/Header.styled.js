import styled from "styled-components";
import { toRem } from "../../../utils/convertToRem";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100% -16rem;
  height: ${toRem(80)};
  padding: 1rem 10%;
  border-bottom-style: solid;
  border-bottom-color: #aaaaaa;
  border-bottom-width: ${toRem(1)};
  @media (max-width: 768px) {
    background: #eceef2;
  }
`;

export { HeaderContainer };
