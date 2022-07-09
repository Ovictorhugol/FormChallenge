import React, { useState, useRef } from 'react';
import Button from '../Button/Button';
import { CertificatesStyled, UlStyled } from './SplitButtons';

const SplitButton = ({list}) => {
const [isActive, setIsActive] = useState(false)
const onClick = () => setIsActive(!isActive)

console.log(isActive)

    return (
        <div>
        <div>
            <Button id="Certificates" title="Certificates" onClick={onClick}/>
            <CertificatesStyled className={`certificatesDropdown ${isActive ? 'active' : 'inactive'}`}>
                <UlStyled>
                    {list}                                
                </UlStyled>
            </CertificatesStyled>
        </div>
        </div>
    )
}

export default SplitButton;