import React from 'react'
import Text  from '../../../Text/Text'
import SuccessContainer from './Success.styled'
//import  Button  from '../../../Button/Button'

const Success = () => {
  return ( 
        <SuccessContainer>
            <Text title='Your data has been sent successfully!' />        
            <Text variable='Full name: '/>
            <Text variable='Email: '/>
            <Text variable='Birthday: '/>
            <Text variable='Age: '/>
            <Text variable='Linkedin: '/>
            <Text variable='GitHub: '/>
            <Text variable='Certificates: '/>
            <Text variable='Team Name: '/>
            <Text variable='Institution: '/>
            <Text variable='Graduation: '/>
        </SuccessContainer>  
     
        
  )
};

export default Success;