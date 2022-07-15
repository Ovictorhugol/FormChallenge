import styled from 'styled-components'

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 36.25rem; 
    width: 30.625rem;
    border-radius: 1em;
    margin-right: auto;
    margin-left: auto;
    background-color: white;
    @media (max-width:768px) {
        
        width: 100%;        
    }

`
const FormContent = styled.form`   
    width: 80%;
`

const TitleFormGroup = styled.div`
    width: 100%;
    height: 8rem;   
`

const InputFormGroup = styled.div`
    width: 100%;
    height: 20rem; 
`

const ButtonFormGroup = styled.div`
    width: 100%;
    height: 3rem;
    display: flex;
    flex-direction: row-reverse;
`

export { FormContainer, FormContent, TitleFormGroup, InputFormGroup, ButtonFormGroup }