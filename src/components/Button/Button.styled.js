import styled from "styled-components";
import { toRem } from '../../utils/convertToRem';

export const StyledButton = styled.button`    
    padding:${toRem(11)} ${toRem(12)};
    height: ${toRem(40)};
    background: #074EE8;
    border-radius:${toRem(4)};
    border: none;
    color: #FFFFFF;
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: 1rem;  
    display: flex;
    justify-content: space-evenly;
    align-items: center; 
    gap: ${toRem(6)};   
    cursor: pointer; 

    &.Certificates{
    &:focus {
    width: ${toRem(187)};        
    }   
    }

    &.More {
    margin-left: ${toRem(148.5)};    
    }
`;
