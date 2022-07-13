import styled from "styled-components";
import { toRem } from '../../../utils/convertToRem';

export const CertificatesForm = styled.form`
margin-right: ${toRem(35)};
margin-left: ${toRem(67)};
display: grid;
grid-template-columns: 50% 50%;
grid-template-rows: auto ${toRem(77)} auto auto;
`;

export const CertificatesInput = styled.div`
    grid-column: 1 / 3;
    margin-top: ${toRem(37)};
`;

export const DataInputs = styled.div`
    grid-column: 1 / 3;
    margin-top: ${toRem(48)};
`;

export const SubmitButton = styled.div`
    grid-column: 2 / 3;
    display: flex;
    justify-content: right;
    margin-top: ${toRem(55)};
    margin-bottom: ${toRem(34)};
`;

