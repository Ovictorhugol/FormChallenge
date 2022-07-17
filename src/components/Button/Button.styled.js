import styled from "styled-components";
import { toRem } from "../../utils/convertToRem";

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
    &:hover {
    background: #3905F5;
    } 

    &.Certificates{
    &:focus {
    width: ${toRem(187)};        
    }   
    }    

    &.More {    
    max-width:  ${toRem(110)}
    }

    &.Remove{
    background: transparent;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: ${toRem(11)};
    line-height: ${toRem(18)};    
    padding: 0;
    height:${toRem(18)}; 
    border: none;
    text-decoration: underline white;
    margin-right: ${toRem(11)};  
    z-index: 10;  
    }  
`;
