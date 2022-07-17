import React, { useState, useEffect } from 'react'
import Text from '../../../Text/Text'
import { SuccessContainer, ReturnContainer } from './Success.styled'
import Button from '../../../Button/Button'
import { useNavigate } from "react-router-dom";

const Success = () => {
    const [fullName, setFullName] = useState(''); 
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [birthday, setBirthday] = useState('');
    const [linkedIn, setLinkedIn] = useState('');
    const [gitHub, setGitHub] = useState('');
    const [certificates, setCertificates] = useState('');
    const [teamName, setTeamName] = useState('');
    const [institution, setInstitution] = useState('');
    const [graduation, setGraduation] = useState('');

    let navigate = useNavigate();  
  
   useEffect(() => {
    const fullName = `Full Name: ${localStorage.getItem('fullname')}`;
    const nickname = `Nickname: ${localStorage.getItem('nickname')}`;
    const email = `Email: ${localStorage.getItem("email")}`;
    const phone = `Phone: ${localStorage.getItem("phone")}`;
    const birthday = `Birthday: ${localStorage.getItem("birthday")}`;
    const linkedIn = `LinkedIn: ${localStorage.getItem("linkedIn")}`;
    const gitHub = `GitHub: ${localStorage.getItem('gitHub')}`;
    const certificates = `Certificates: ${localStorage.getItem('certificates')}`;
    const teamName = `TeamName: ${localStorage.getItem('teamName')}`;
    const institution = `Institution: ${localStorage.getItem('intitution')}`;
    const graduation = `Graduation: ${localStorage.getItem('graduation')}`;
    
    if (localStorage.getItem('fullname') !== null) {
      setFullName(fullName) && true;
    }
    if (localStorage.getItem('nickname') !== null) {
      setNickname(nickname);
    }
    if (localStorage.getItem('email') !== null) {
      setEmail(email);
    } 
    if (localStorage.getItem('phone') !== null) {
      setPhone(phone);
    }
    if (localStorage.getItem('birthday') !== null) {
      setBirthday(birthday);
    }
    if (localStorage.getItem('gitHub') !== null) {
      setGitHub(gitHub);
    }
    if (localStorage.getItem("linkedIn") !==null) {
      setLinkedIn(linkedIn);
    }
    if (localStorage.getItem("certificates") !==null) {
      setCertificates(certificates);
    }
    if (localStorage.getItem("teamName") !==null) {
      setTeamName(teamName);
    }
    if (localStorage.getItem("institution") !==null) {
      setInstitution(institution);
    }
    if (localStorage.getItem("graduation") !==null) {
      setGraduation(graduation);
    }
  }, []);

  const handleClick = () => {
    navigate("/basic", { replace: true });
  };
   
  return ( 
        <SuccessContainer>
            <Text title='Your data has been sent successfully!' />        
            <Text variable={fullName}/>
            <Text variable={nickname}/>
            <Text variable={email}/>
            <Text variable={phone}/>
            <Text variable={birthday}/>
            <Text variable={linkedIn}/>
            <Text variable={gitHub}/>
            <Text variable={certificates}/>
            <Text variable={teamName}/>
            <Text variable={institution}/>
            <Text variable={graduation}/> 
            <ReturnContainer>           
                <Button id="Ending" title="Return" onClick={handleClick} />
            </ReturnContainer>                     
        </SuccessContainer>        
  )
};

export default Success;