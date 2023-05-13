"use client";

import styled from "styled-components";
import Button from "../components/elements/button";
import Frame from "../components/signup/frame";
import BasicInput from "../components/elements/basic-input";
import wand from "mutant_svg/emoji/magic_wand.svg";
import Image from "next/image";
import Flex from "../components/helpers/flex";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  const redir = () => {
    // TODO: replace with actual login/signup flow
    router.push("/home");
  };

  return (
    <div>
      <Frame
        title={
          <Flex>
            <Image src={wand} alt="Wand emoji" height={32} />
            <span>&nbsp;&nbsp;login/signup</span>
          </Flex>
        }
      >
        <FormGrid>
          <span>username</span>
          <BasicInput />
          <span>password</span>
          <BasicInput type="password" />
        </FormGrid>
        <Buttons>
          <Button onClick={redir}>log in</Button>
          <Button onClick={redir}>sign up</Button>
        </Buttons>
      </Frame>
    </div>
  );
}
