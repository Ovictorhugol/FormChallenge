import React, { useState, useRef } from 'react';
import Button from '../Button/Button';
import { CertificatesStyled, UlStyled } from './SplitButtons';

const SplitButton = ({list}) => {
const dropDownRef = useRef(null);
const [isActive, setIsActive] = useState(false)
const onClick = () => setIsActive(!isActive)

console.log(isActive)

    return (
        <div>
        <div>
            <Button id="Next" title="Certificates" onClick={onClick}/>
            <CertificatesStyled ref={dropDownRef} className={`certificates ${isActive ? 'active' : 'inactive'}`}>
                <UlStyled>
                    {list}                                
                </UlStyled>
            </CertificatesStyled>
        </div>
        </div>
    )
}

export default SplitButton;