"use client";

import { BaseAccount } from "types";
import Button from "../../components/elements/button";
import Avatar from "../../components/post/avatar";
import styled from "styled-components";

interface Props {
  data: BaseAccount;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 16px 0;
`;

const DisplayName = styled.div`
  font-size: 24px;
`;

const AcctName = styled.div`
  color: #808080;
`;

const AvContainer = styled.div`
  margin: 10px 0;
`;

export default function YouPanel({ data }: Props) {
  return (
    <Container>
      <DisplayName>{data.display_name}</DisplayName>
      <AcctName>{data.acct}</AcctName>
      <AvContainer>
        <Avatar size={128} src={data.avatar} />
      </AvContainer>
      <Button>write post</Button>
    </Container>
  );
}
