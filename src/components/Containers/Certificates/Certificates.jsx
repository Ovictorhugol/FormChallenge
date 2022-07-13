import React from 'react';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import SplitButton from '../../SplitButton/SplitButton';
import { CertificatesForm, CertificatesInput, SubmitButton, DataInputs } from './Certificates.styled';


function addItem() {
    var a = document.getElementById("list");
    var certificates = document.getElementById("certificates");
    var li = document.createElement("li");
    var btn = document.createElement('button');
    btn.innerText="X";
    btn.type="button";
    btn.onclick= removeItem;
    li.setAttribute('id', certificates.value);
    li.appendChild(document.createTextNode(certificates.value));   
    li.appendChild((btn))
    a.appendChild(li);        
}

function removeItem() {   
    var a = document.getElementById("list");   
    var item = document.querySelectorAll("#list li");   
    a.removeChild(item[0])
}
const Certificates = () => {
    return(        
            <CertificatesForm >
                <CertificatesInput>
                <Input id="certificates" placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/" type="text" label="Certificates"/>
                </CertificatesInput>
                <SplitButton id="list" />
                <Button type="button" id="More" title="More" onClick={addItem}/>
                <DataInputs>
                <Input id="TeamName" placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/" type="text" label="Team Name*"/>
                <Input id="Institution" placeholder="Universidade Federal da Paraíba" type="text" label="Institution*"/>
                <Input id="Graduation" placeholder="Ciências da Computação" type="text" label="Graduation*"/>                
                </DataInputs>
                <SubmitButton>
                <Button type="button" id="Ending" title="Finish"/>                
                </SubmitButton>
            </CertificatesForm>        
    )
}

export default Certificates;