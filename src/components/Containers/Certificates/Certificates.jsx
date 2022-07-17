import React, { useState } from 'react';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import SplitButton from '../../SplitButton/SplitButton';
import { useForm } from "react-hook-form";
import { CertificatesForm, CertificatesInput, SubmitButton, DataInputs, LiStyled, ErrorMessage, MoreBtn, SplitButtonDiv } from './Certificates.styled';

const Certificates = () => {
    const [certificateName, setCertificateName] = useState('');
    const [addedCertificate, setAddedCertificate] = useState([]);
    const certificatesList = [...addedCertificate, certificateName];

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
        localStorage.setItem("form", JSON.stringify(data));
        localStorage.setItem("certificates", JSON.stringify(certificatesList)); 
    }

    const [isActive, setIsActive] = useState(false)
    const isError = () => setIsActive(!isActive)

    const [btnActive, setBtnActive] = useState(false)
    const activatorBtn = () => setBtnActive(true) 
  
    function handleChange(e) {
        setCertificateName(e.target.value);
                
}

    function handleClick() {
        if (addedCertificate.length <= 4) {
            setAddedCertificate([...addedCertificate, certificateName])
            activatorBtn();     
                                         
         
        } else {
            isError();
        }
    }

    const removeItem = (certificateOption) => () => {
        if (addedCertificate.length == 5) {
            setAddedCertificate((addedCertificate) => addedCertificate.filter(i => i !== certificateOption))
            isError();
        } else {
            setAddedCertificate((addedCertificate) => addedCertificate.filter(i => i !== certificateOption))
        }
    }

    const validateCertificates = register("certificates", { required: true })
    return (
        <CertificatesForm onSubmit={handleSubmit(onSubmit)} >
            <CertificatesInput>

                <Input id="certificates"
                    placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
                    type="text"                   
                    label="Certificates"
                    {...{ register: validateCertificates }}
                    onChange={e => {
                        validateCertificates.onChange(e);
                        handleChange(e);
                    }}
                />
            </CertificatesInput>
            <SplitButtonDiv className={`btnActive ${btnActive ? 'active' : 'inactive'}`} >
                <SplitButton id="list"
                    list={addedCertificate.map(certificate =>
                        <>
                            <LiStyled
                                key={certificate + 1}>
                                {certificate}
                            </LiStyled>
                            <Button
                                type="button"
                                id="Remove"
                                title="...&emsp;X"
                                onMouseDown={removeItem(certificate)} />
                        </>
                    )} />
            </SplitButtonDiv>
            <MoreBtn>
                <Button type="button"
                    id="More"
                    title="More"
                    onClick={handleClick} />
                {errors.certificates &&
                    <ErrorMessage>Empty certificate is not allowed.
                    </ErrorMessage>}
                <ErrorMessage
                    className={`limit ${isActive ? 'active' : 'inactive'}`}>
                    Sorry, only 5 certificates are allowed. You can remove one certificate instead.
                </ErrorMessage>
            </MoreBtn>
            <DataInputs>
                <Input id="TeamName"
                    placeholder="SquadRed"
                    type="text"
                    label="Team Name*"
                    hasError={errors.teamName && <p>Please, enter your team Name</p>}
                    {...{
                        register: register('teamName', {
                            required: true,
                        }),
                    }}
                    required />

                <Input id="Institution"
                    placeholder="Universidade Federal da Paraíba"
                    type="text" label="Institution*"
                    hasError={errors.institution && <p>Please, enter your Institution</p>}
                    {...{
                        register: register('institution', {
                            required: true,
                        }),
                    }}
                    required />

                <Input id="Graduation"
                    placeholder="Ciências da Computação"
                    type="text"
                    label="Graduation*"
                    hasError={errors.graduation && <p>Please, enter your Institution</p>}
                    {...{
                        register: register('graduation', {
                            required: true,
                        }),
                    }}
                    required />
                {errors.Graduation && <p>Please, enter your Graduation</p>}
            </DataInputs>
            <SubmitButton>
                <Button
                    type="submit"
                    id="Ending"
                    title="Finish" />
            </SubmitButton>
        </CertificatesForm>

    )
}

export default Certificates;

