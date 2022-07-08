import React, { useState, useEffect } from 'react';
import { HeaderContainer } from './Header.styled'
import Title from '../../Title/Title';



function Header ({currentTab}) {
    useEffect(() =>{
        setTitle()
      }, [currentTab])
    const [TitleTab, setTitleTab] =  useState ('')
    const setTitle = () => {
        if (currentTab === 1) {
            setTitleTab ('First Tab')
        } else if (currentTab === 2) {
            setTitleTab ('Second Tab')
        } else if (currentTab === 3) {
            setTitleTab ('Third Tab')
        } else if (currentTab === 4) {
            setTitleTab ('Success Tab')
        }
    }

    return (
      <HeaderContainer>
        <Title type="h1" label="Forms" />
        <Title type="h3" label={TitleTab} />
      </HeaderContainer>
    );
  }
  
  export default Header;