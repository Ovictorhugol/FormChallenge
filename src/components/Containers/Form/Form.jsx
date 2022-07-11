import React from "react";
import Input from "../../Input/Input";
import { FormContainer, FormInput } from "./Form.styled";
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
    </FormContainer>
  );
}

export default Form;
