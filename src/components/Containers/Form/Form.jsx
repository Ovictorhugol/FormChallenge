import React from "react";
import Input from "../../Input/Input";
import { FormContainer, FormInput, BirthDayInput } from "./Form.styled";
import Select from "../../Select/Select";
function Form() {
  return (
    <FormContainer>
      <FormInput>
        <Input
          id="FullName"
          type="text"
          placeholder="Foo Bar"
          label="Full Name *"
        />
      </FormInput>
      <FormInput>
        <Input
          id="Nickname"
          type="text"
          placeholder="Nickname"
          label="Nickname*"
        />
      </FormInput>
      <FormInput>
        <Input
          id="Email"
          type="email"
          placeholder="foo@bar.com"
          label="Email *"
        />
      </FormInput>
      <FormInput>
        <Input
          id="Phone"
          type="number"
          placeholder="(83) 00000-0000"
          label="Phone *"
        />
      </FormInput>
      <FormInput>
        <Input
          type="checkbox"
          id="Accept"
          label="I accept the terms and privacy"
        />
      </FormInput>
      <BirthDayInput>
        <Select id="Day" />
        <Select id="Month" />
        <Select id="Year" />
      </BirthDayInput>
    </FormContainer>
  );
}

export default Form;
