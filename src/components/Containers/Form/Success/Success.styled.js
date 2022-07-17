import styled from "styled-components";

const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: left;
  height: 22rem;
  width: 80%;
  border-radius: 1em;
  

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const ReturnContainer = styled.div`
    width: 100%;
    height: 3rem;
    display: flex;
    flex-direction: row-reverse;
`;


export { SuccessContainer, ReturnContainer }

