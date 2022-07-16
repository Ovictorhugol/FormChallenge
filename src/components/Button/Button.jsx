import React from 'react';
import  {StyledButton} from './Button.styled';
import { LabelError } from '../Input/Input.styled';
import arrowIcon from '../../assets/icons/arrowIcon.svg'
import addIcon from '../../assets/icons/addIcon.svg';
import checkIcon from '../../assets/icons/checkIcon.svg';
import downIcon from '../../assets/icons/downIcon.svg';

const Button = ({type, id, title, onClick, onBlur, hasError } ) => {
 switch (id) {
    case "Next":
    return<StyledButton className={`${id}`} type={type} id={id} onClick={onClick}>{title}<img src={arrowIcon}></img> </StyledButton>
    case "More":
    return<>
    <StyledButton className={`${id}`} type={type} id={id} onClick={onClick}><img src={addIcon}></img>{title}<img src={arrowIcon}></img> </StyledButton>
    {hasError && <LabelError>{`Please enter your ${id}`}</LabelError>}
    </>
    case "Ending":
    return<StyledButton className={`${id}`} type={type} id={id} onClick={onClick}><img src={checkIcon} ></img>{title}</StyledButton>
    case "Certificates":
      return<StyledButton className={`${id}`} type={type} id={id} onClick={onClick} onBlur={onBlur}>{title}<img src={downIcon}></img> </StyledButton>
    case "Remove":
      return<StyledButton className={`${id}`} type={type} id={id} onClick={onClick}>{title}</StyledButton>
 }
}
export default Button;



  
    
 


