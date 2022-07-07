import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 0.3rem;
    height: 5rem;
`

const Label = styled.label`
    font-family: "Nunito", sans-serif;
    font-size: 0.9rem;
    text-align: left;
    margin-right: 1.25rem;
    color: #767676;
    font-weight: 400;
`

const InputStyle = styled.input`
    box-sizing: border-box;
    width: 100%;
    height: 2.2em;
    font-family: "Nunito", sans-serif;
    color: #767676;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    background: #ffffff;
    border: 0.06rem solid #aaaaaa;
    border-radius: 3px;
    padding: 0.188rem;    
    &::placeholder {
        height: 1.25rem;
        font-family: "Nunito", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        color: #767676;
        justify-content: center;
  }

`
const LabelError = styled.label`
    font-family: "Nunito", sans-serif;
    font-size: 0.9rem;
    text-align: left;
    color: #FF0000;
    font-weight: 400;
`

const CheckboxError = styled.label`
    font-family: "Nunito", sans-serif;
    font-size: 0.9rem;
    text-align: left;
    color: #FF0000;
    font-weight: 400;
`
const LabelContainer = styled.div`
    display: inline-flex;
    text-align: center;
    margin-bottom: 0.313rem;
`

const CheckboxContainer = styled.div`
    display: inline-flex;
    align-items: center;
    display: flex;    
    flex: 1;
    padding: 0.3rem;
    height: 5rem;
    > #Checkbox {
        width: 1rem;
        height: 1rem;
        margin-right: 1rem;
    }
    > #Accept {
        font-size: 1rem;
        color: black;
    }
`

export { Label, InputStyle, Container, LabelError, LabelContainer, CheckboxError, CheckboxContainer }