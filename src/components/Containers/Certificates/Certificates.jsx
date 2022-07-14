import React, {useRef, useState} from 'react';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import SplitButton from '../../SplitButton/SplitButton';
import styled from "styled-components";
import { CertificatesForm, CertificatesInput, SubmitButton, DataInputs, LiStyled } from './Certificates.styled';



const Certificates = () => {   
    const [certificates, setCertificates] = useState([]);
    const [inputContent, setInputContent] = useState('');

    function handleChange(event) {
        setInputContent(event.target.value);
    }

    function handleClick() {
        setCertificates([...certificates, inputContent])              
    }

    function removeItem() {   
        const certificateList = document.getElementById("list");   
        const item = document.querySelectorAll("#list li");   
        const removeBtn = document.querySelectorAll("#list Button");   
        certificateList.removeChild(item[0])
        certificateList.removeChild(removeBtn[0])
    }

    return (
        <CertificatesForm >
            <CertificatesInput>
                <Input id="certificates" placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/" type="text" label="Certificates" onChange={handleChange}/>
            </CertificatesInput>
            <SplitButton id="list" list={certificates.map(certificate => <><LiStyled key={certificate}>{certificate}</LiStyled><Button type="button" id="Remove" title="...&emsp;X" onClick={removeItem}/></>)}/>
            <Button type="button" id="More" title="More" onClick={handleClick} />
            <DataInputs>
                <Input id="TeamName" placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/" type="text" label="Team Name*" />
                <Input id="Institution" placeholder="Universidade Federal da Paraíba" type="text" label="Institution*" />
                <Input id="Graduation" placeholder="Ciências da Computação" type="text" label="Graduation*" />
            </DataInputs>
            <SubmitButton>
                <Button type="button" id="Ending" title="Finish" />
            </SubmitButton>
        </CertificatesForm>
    )
}

export default Certificates;

