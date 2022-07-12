import React, { useState, useEffect } from "react";
import Input from "../../Input/Input";
import {
  FormContainer,
  FormInput,
  BirthDayInput,
  BirthDayContainer,
  FormCheckbox,
  FormEmail,
  FormPhone,
} from "./Form.styled";
import Select from "../../Select/Select";
import Button from "../../Button/Button";
function Form() {
  const [fullName, setFullName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [age, setAge] = useState();
  useEffect(() => {
    setAge(2022 - year);
  }, [year]);

  return (
    <FormContainer>
      <FormInput>
        <Input
          id="FullName"
          type="text"
          placeholder="Foo Bar"
          label="Full Name *"
          value={fullName}
          onChange={(e) => {
            setFullName(e.target.value);
          }}
          hasError
        />
      </FormInput>
      <FormInput>
        <Input
          id="Nickname"
          type="text"
          placeholder="Nickname"
          label="Nickname*"
          value={nickname}
          onChange={(e) => {
            setNickname(e.target.value);
          }}
        />
      </FormInput>
      <FormEmail>
        <Input
          id="Email"
          type="email"
          placeholder="foo@bar.com"
          label="Email *"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          hasError
        />
      </FormEmail>
      <FormPhone>
        <Input
          id="Phone"
          type="number"
          placeholder="(83) 00000-0000"
          label="Phone *"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
      </FormPhone>

      <BirthDayContainer>
        <Select id="Day" setDay={setDay} />
        <Select id="Month" setMonth={setMonth} />
        <Select id="Year" setYear={setYear} />
        <BirthDayInput>
          <Input
            id="Age"
            type="number"
            placeholder="Age"
            label="Age"
            value={2022 - year}
          />
        </BirthDayInput>
      </BirthDayContainer>
      <FormCheckbox>
        <Input
          type="checkbox"
          id="Accept"
          label="I accept the terms and privacy"
          hasError
        />
      </FormCheckbox>
      <Button id="Next" title="Next" />
    </FormContainer>
  );
}

export default Form;
