import React from 'react';
import  {StyledButton} from './Button.styled';

import arrowIcon from '../../assets/icons/arrowIcon.svg'
import addIcon from '../../assets/icons/addIcon.svg';
import checkIcon from '../../assets/icons/checkIcon.svg';
import downIcon from '../../assets/icons/downIcon.svg';

const Button = ({type, id, title, onClick } ) => {
 switch (id) {
    case "Next":
    return<StyledButton className={`${id}`} type={type} id={id} onClick={onClick}>{title}<img src={arrowIcon}></img> </StyledButton>
    case "More":
    return<StyledButton type={type} id={id}><img src={addIcon} onClick={onClick}></img>{title}<img src={arrowIcon}></img> </StyledButton>
    case "Ending":
    return<StyledButton type={type} id={id}><img src={checkIcon} onClick={onClick}></img>{title}</StyledButton>
    case "Certificates":
    return<StyledButton className={`${id}`} type={type} id={id} onClick={onClick}>{title}<img src={downIcon}></img> </StyledButton>
 }
}

export default Button;