import React, { useState, useEffect } from 'react';
import Title from '../../../Title/Title'
import Input from '../../../Input/Input'
import Button from '../../../Button/Button'
import { useNavigate } from "react-router-dom";
import { FormContainer, FormContent, TitleFormGroup, InputFormGroup, ButtonFormGroup } from './Social.styled'

const Social = () => {  

    const [gitHub, setGitHub] = useState('')
    const [linkedIn, setLinkedIn] = useState ('')
    const [gitHubError, setGitHubError] = useState(false)
    const [isValid, setIsValid] = useState(false)
    
    let navigate = useNavigate();

    const handleLinkedIn = (e) => {
        const linkedIn = e.target.value
        setLinkedIn(e.target.value)
        localStorage.setItem('linkedIn', linkedIn)        
    }
    
    useEffect(() => {
        const gitHub = (localStorage.getItem('gitHub'));
        const linkedIn = (localStorage.getItem('linkedIn'));
        if (gitHub) {
         setGitHub(gitHub);
        }
        if (linkedIn) {
            setLinkedIn(linkedIn);
           }
      }, []);
   
    const handleGitHub = (e) => {
        const gitHub = e.target.value
        const pattern = /^(http(s?):\/\/)?(www\.)?github\.([a-z])+\/([A-Za-z0-9]{1,})+\/?$/
        setGitHub(e.target.value)
        localStorage.setItem('gitHub', gitHub)
        
        if (!pattern.test(gitHub)) {
            setGitHubError(true)
            setIsValid(false)
            return
        }
        setIsValid(true)
        setGitHubError(false)
    }

    const resetFields = () => {
        gitHubError && setGitHubError (false)
    }

    const handleClick = () => {
        if(!isValid) {
            return
        }
        resetFields()
        navigate('/header', { replace: true })
    }
    
    return  (
        <FormContainer>
            <FormContent>
                <TitleFormGroup>
                    <Title type="h2"label="Team Sign Up"/>                    
                </TitleFormGroup>
                <InputFormGroup>
                    <Input
                        label="LinkedIn"
                        placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
                        type="text"
                        id="LinkedIn"
                        onChange={handleLinkedIn}
                        value={linkedIn} 
                    />
                    <Input
                        label="Github *"
                        placeholder="https://github.com/foobar"
                        type="link"
                        id="Github"
                        onChange={handleGitHub}
                        hasError={gitHubError}
                        value={gitHub}  
                    />
                </InputFormGroup>
                <ButtonFormGroup>
                    <Button 
                        id="Next" 
                        title="Next"
                        onClick={handleClick}
                    />
                </ButtonFormGroup>
            </FormContent>
        </FormContainer>
    )
  };
  
  export default Social;