import styled from "styled-components";
import { toRem } from '../../../utils/convertToRem';

export const CertificatesForm = styled.form`
    margin-right: ${toRem(55)};
    margin-left: ${toRem(47)};
    width: 100%;
    display: grid;
    grid-template-columns: 22.5% 77.5%;
    grid-template-rows: auto ${toRem(77)} auto auto;
`;

export const CertificatesInput = styled.div`
    grid-column: 1 / 3;    
`;

export const DataInputs = styled.div`
    grid-column: 1 / 3;
    margin-top: ${toRem(3)};
`;

export const SubmitButton = styled.div`
    grid-column: 2 / 3;
    display: flex;
    justify-content: right;
    margin-top: ${toRem(55)};
    margin-bottom: ${toRem(34)};
`;

export const LiStyled = styled.li`    
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: ${toRem(11)};
    line-height: ${toRem(18)};
    color: #FFFFFF;     
    white-space: nowrap;
    overflow: hidden;       
    padding-left: ${toRem(8)};          
`;

export const ErrorMessage = styled.p`
    font-family: "Nunito", sans-serif;
    font-size: ${toRem(14)};
    text-align: right;
    color: #FF0000;
    font-weight: 400;  
    margin-top: ${toRem(5)};
    max-width: 30ch;
    line-height: ${toRem(18)};     
    &.limit {
    opacity: 0;
    &.active {
    opacity: 1;
    visibility: visible;    
    }
    }
`;

export const MoreBtn = styled.div`
    display: grid;
    justify-items: end;
`;

export const SplitButtonDiv = styled.div`
    &.btnActive {
    opacity: 0;
    visibility: hidden;
    &.active {
    opacity: 1;
    visibility: visible;        
    }
    }
    z-index: 10;
`;