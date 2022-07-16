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

export default SuccessContainer