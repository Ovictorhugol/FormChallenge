import React, { useState, useRef } from 'react';
import Button from '../Button/Button';
import { CertificatesStyled, UlStyled } from './SplitButtons';

const SplitButton = ({list, id}) => {
const [isActive, setIsActive] = useState(false)
const onClick = () => setIsActive(!isActive)

console.log(isActive)

    return (
        <div>
        <div>
            <Button type="button" id="Certificates" title="Certificates" onClick={onClick}/>
            <CertificatesStyled className={`certificatesDropdown ${isActive ? 'active' : 'inactive'}`}>
                <UlStyled id={id}>
                    {list}                                
                </UlStyled>
            </CertificatesStyled>
        </div>
        </div>
    )
}

export default SplitButton;