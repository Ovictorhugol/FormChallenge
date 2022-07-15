import styled from "styled-components";
import { toRem } from '../../utils/convertToRem';

export const CertificatesStyled = styled.div`
    &.certificatesDropdown {
    opacity: 0;
    &.active {
    opacity: 1;
    visibility: visible;    
    }
    }
`;

export const UlStyled = styled.ul`
    background: rgba(7, 78, 232, 0.8);
    border-radius: ${toRem(4)};
    width: ${toRem(187)};
    height:${toRem(103)};          
`;

