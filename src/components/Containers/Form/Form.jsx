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
  FormButton,
  BirthDayForm,
} from "./Form.styled";
import Select from "../../Select/Select";
import Button from "../../Button/Button";
import { validName, validEmail } from "../../../utils/regex";
import Label from "../../Label/Label";
function Form({ setActiveTab, activeTab }) {
  const [fullName, setFullName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState(0);
  const [birthday, setBirthday] = useState("");
  const [age, setAge] = useState(0);
  const [check, setCheck] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [checkError, setCheckError] = useState(false);
  const [birthdayError, setBirthdayError] = useState(false);

  useEffect(() => {
    setAge(2022 - year);
    Validation("birthday");
  }, [year]);
  const Validation = (variableTest) => {
    switch (variableTest) {
      case "name":
        if (!validName.test(fullName)) {
          console.log("Nome no formato errado ");
          setNameError(true);
        } else setNameError(false);
        break;
      case "email":
        if (!validEmail.test(email)) {
          console.log("Email no formato errado ");
          setEmailError(true);
        } else setEmailError(false);
        break;
      case "check":
        if (check) {
          console.log("Checkbox não marcado ");
          setCheckError(false);
        } else setCheckError(true);
        break;
      case "birthday":
        if (age > 121) {
          setBirthdayError(true);
        } else setBirthdayError(false);
        break;
      default:
        break;
    }
  };

  const onClickHandler = () => {
    if (!nameError && !emailError && !checkError) {
      console.log("Dados incompletos");
    } else {
      const birthday = day + "/" + month + "/" + year;
      setBirthday(birthday);
      localStorage.setItem("fullname", fullName);
      localStorage.setItem("nickname", nickname);
      localStorage.setItem("email", email);
      localStorage.setItem("phone", phone);
      localStorage.setItem("birthday", birthday);
      localStorage.setItem("age", age);
      setActiveTab(activeTab + 1);
    }
  };

  return (
    <FormContainer>
      <FormInput>
        {!nameError ? (
          <Input
            id="FullName"
            type="text"
            placeholder="Foo Bar"
            label="Full Name *"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
              Validation("name");
            }}
          />
        ) : (
          <Input
            id="FullName"
            type="text"
            placeholder="Foo Bar"
            label="Full Name *"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
              Validation("name");
            }}
            hasError
          />
        )}
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
        {!emailError ? (
          <Input
            id="Email"
            type="email"
            placeholder="foo@bar.com"
            label="Email *"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              Validation("email");
            }}
          />
        ) : (
          <Input
            id="Email"
            type="email"
            placeholder="foo@bar.com"
            label="Email *"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              Validation("email");
            }}
            hasError
          />
        )}
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
            Validation("phone");
          }}
        />
      </FormPhone>
      <BirthDayForm>
        {!birthdayError ? (
          <Label value="Birthday *"></Label>
        ) : (
          <Label value="Birthday *" hasError></Label>
        )}

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
              value={age}
            />
          </BirthDayInput>
        </BirthDayContainer>
      </BirthDayForm>
      <FormCheckbox>
        {!checkError ? (
          <Input
            type="checkbox"
            id="Accept"
            label="I accept the terms and privacy"
            value={check}
            onChange={(e) => {
              setCheck(e.target.checked);
              Validation("check");
            }}
            hasError
          />
        ) : (
          <Input
            type="checkbox"
            id="Accept"
            label="I accept the terms and privacy"
            value={check}
            onChange={(e) => {
              setCheck(e.target.checked);
              Validation("check");
            }}
          />
        )}
      </FormCheckbox>
      <FormButton>
        <Button id="Next" title="Next" onClick={onClickHandler} />
      </FormButton>
    </FormContainer>
  );
}

export default Form;
