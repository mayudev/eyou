"use client";

import styled from "styled-components";
import Avatar from "./avatar";
import dayjs from "../../lib/dayjs";

interface Props {
  avatar: string;
  displayName: string;
  acct: string;
  createdAt: string;
  replyCount: number;
}

const Container = styled.div`
  background: var(--color-component-bg);

  display: flex;

  padding: 12px;
  align-items: center;
`;

const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;
const DisplayName = styled.span``;
const PostTimestamp = styled.span`
  color: var(--color-disabled);
`;
const Username = styled.span`
  font-weight: 700;
`;
const Account = styled.span`
  color: var(--color-disabled);
  margin-left: 4px;
`;

export default function Header({
  avatar,
  displayName,
  acct,
  createdAt,
}: Props) {
  const date = dayjs(createdAt);

  return (
    <Container>
      <Avatar size={48} src={avatar} alt={`${displayName}'s profile picture`} />
      <PostInfo>
        <DisplayName>
          <Username>{displayName}</Username>
          <Account>@{acct}</Account>
        </DisplayName>
        <PostTimestamp title={date.format("ddd, MMM D, YYYY h:mm A")}>
          {date.fromNow()}
        </PostTimestamp>
      </PostInfo>
      <span style={{ flex: 1 }} />
    </Container>
  );
}
