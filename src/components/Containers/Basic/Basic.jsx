import React, { useState, useEffect } from "react";
import Input from "../../Input/Input";
import Select from "../../Select/Select";
import Button from "../../Button/Button";
import { validName, validEmail } from "../../../utils/regex";
import Label from "../../Label/Label";
import { useNavigate } from "react-router-dom";
import {
  ContainerBasic,
  ContainerInputLarger,
  ContainerInputLargerPhone,
  ContainerInputLargerEmail,
  ContainerBirthday,
  ContainerBirthdayInput,
  ContainerButton,
  ContainerCheckbox,
  ContainerBirthdayLabel,
} from "./Basic.styled";
function Basic(props) {
  const navigate = useNavigate();
  const { setActiveTab, activeTab } = props;
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
  const [nameError, setNameError] = useState(true);
  const [emailError, setEmailError] = useState(true);
  const [checkError, setCheckError] = useState(true);
  const [birthdayError, setBirthdayError] = useState(true);

  useEffect(() => {
    if (year != "") {
      changeAge(year);
    }
  }, [year]);
  useEffect(() => {
    if (year != "") {
      changeAge(year);
    }
  }, [day]);
  useEffect(() => {
    if (year != "") {
      changeAge(year);
    }
  }, [month]);
  const changeAge = (currentYear) => {
    setAge(2022 - currentYear);
    console.log(age);
    Validation("birthday");
  };

  useEffect(() => {
    setNameError(true);
    setEmailError(true);
    setCheckError(true);
    setBirthdayError(true);
    if (localStorage.getItem("fullname") != null) {
      setFullName(localStorage.getItem("fullname"));
      setNameError(false);
    }
    if (localStorage.getItem("nickname") != null) {
      setNickname(localStorage.getItem("nickname"));
    }
    if (localStorage.getItem("email") != null) {
      setEmail(localStorage.getItem("email"));
      setEmailError(false);
    }
    if (localStorage.getItem("phone") != null) {
      setPhone(localStorage.getItem("phone"));
    }
    if (
      localStorage.getItem("age") != 0 &&
      localStorage.getItem("age") != null
    ) {
      setBirthdayError(false);
    }
    if (age === 0) {
      setAge("");
    }
  }, []);
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
          setCheckError(true);
        } else setCheckError(false);
        break;
      case "birthday":
        if (day === undefined || month === null || year === undefined) {
          setBirthdayError(true);
        } else setBirthdayError(false);
        break;
      default:
        break;
    }
  };
  const onClickHandler = () => {
    if (nameError || emailError || checkError || birthdayError) {
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
      navigate("/social");
    }
  };
  return (
    <ContainerBasic>
      <ContainerInputLarger>
        {nameError ? (
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
          />
        )}
      </ContainerInputLarger>
      <ContainerInputLarger>
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
      </ContainerInputLarger>
      <ContainerInputLargerEmail>
        {emailError ? (
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
          />
        )}
      </ContainerInputLargerEmail>

      <ContainerInputLargerPhone>
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
      </ContainerInputLargerPhone>
      <ContainerBirthdayLabel>
        {birthdayError ? (
          <Label value="Birthday *" hasError></Label>
        ) : (
          <Label value="Birthday *"></Label>
        )}
        <ContainerBirthday>
          <Select id="Day" setDay={setDay} />
          <Select id="Month" setMonth={setMonth} />
          <Select id="Year" setYear={setYear} />
          <ContainerBirthdayInput>
           <Input
              id="Age"
              type="number"
              placeholder="Age"
              label="Age"
              value={age} />
              </ContainerBirthdayInput>               
        </ContainerBirthday>
      </ContainerBirthdayLabel>
      <ContainerCheckbox>
        {checkError ? (
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
      </ContainerCheckbox>
      <ContainerButton>
        <Button id="Next" title="Next" onClick={onClickHandler} />
      </ContainerButton>
    </ContainerBasic>
  );
}

export default Basic;
