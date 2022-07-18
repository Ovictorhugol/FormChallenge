import styled from "styled-components";

const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 35rem;
  width: 85%;
  border-radius: 1em;
  margin: auto;
  padding: 2rem 0rem;
  overflow: hidden;

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

const CertificatesContainer = styled.div`
  width: 100%;
  display: inline-flex;
  height: 6rem;
  div:nth-child(2) {
    flex: 2;
  }

`


export { SuccessContainer, ReturnContainer, CertificatesContainer }

