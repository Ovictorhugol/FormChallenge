import styled from "styled-components";

export const ContainerTab = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TabNav = styled.ul`
  width: 60%;
  margin: 0 auto 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #aaaaaa;
`;
export const TabNavOptions = styled.li`
  width: 50%;
  padding: 1rem;
  list-style: none;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;

  :hover {
    background: rgba(0, 154, 246, 0.1);
  }
  &.active {
    border-bottom: 4px solid #074ee8;
    color: #074ee8;
  }
`;
export const TabContant = styled.div`
  display: flex;
`;
