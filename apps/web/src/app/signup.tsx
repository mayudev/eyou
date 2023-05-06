"use client";

import styled from "styled-components";
import Button from "../components/elements/button";
import Frame from "../components/signup/frame";
import BasicInput from "../components/elements/basic-input";

const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const FormGrid = styled.div`
  display: grid;
  align-items: center;

  row-gap: 12px;
  grid-template-columns: 30% 1fr;

  margin: 12px 0 16px;
`;

export default function Signup() {
  return (
    <div>
      <Frame title="login/signup">
        <FormGrid>
          <span>username</span>
          <BasicInput />
          <span>password</span>
          <BasicInput type="password" />
        </FormGrid>
        <Buttons>
          <Button>log in</Button>
          <Button>sign up</Button>
        </Buttons>
      </Frame>
    </div>
  );
}
