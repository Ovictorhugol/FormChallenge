import styled from "styled-components";

export const ContainerTab = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Nunito", sans-serif;
`;

export const ContainerTitle = styled.div`
  display: flex;
  margin-top: 3.5rem; 
  margin-left: 2.813rem;
  margin-bottom: 2.063rem;
  @media (max-width: 768px) {
    margin: 0 1.5rem 1.5rem 1.5rem;
  }  
`;

export const TabNav = styled.ul`
  width: 90%;
  margin: 0 auto 2rem;
  display: flex;

  border-bottom: 1px solid #aaaaaa;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
export const TabNavOptions = styled.li`
  width: 50%;
  padding: 0.5rem;
  list-style: none;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  font-family: "Nunito", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.125rem;

  :hover {
    background: rgba(0, 154, 246, 0.1);
  }
  &.active {
    border-bottom: 2px solid #074ee8;
    color: #074ee8;
  }
`;
export const TabContant = styled.div`
  display: flex;
  justify-content: center;
`;
