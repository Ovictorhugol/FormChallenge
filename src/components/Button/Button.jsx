import React from 'react';
import  {StyledButton} from './Button.styled';

import arrowIcon from '../../assets/icons/arrowIcon.svg'
import addIcon from '../../assets/icons/addIcon.svg';
import checkIcon from '../../assets/icons/checkIcon.svg';

const Button = ({type, id, title, } ) => {
 switch (id) {
    case "Next":
    return<StyledButton type={type} id={id}>{title}<img src={arrowIcon}></img> </StyledButton>
    case "More":
    return<StyledButton type={type} id={id}><img src={addIcon}></img>{title}<img src={arrowIcon}></img> </StyledButton>
    case "Ending":
    return<StyledButton type={type} id={id}><img src={checkIcon}></img>{title}</StyledButton>
 }
}

export default Button;