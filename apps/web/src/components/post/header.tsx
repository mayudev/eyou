"use client";

import styled from "styled-components";
import Button from "../elements/button";
import Avatar from "./avatar";

interface Props {
  avatar: string;
  displayName: string;
  acct: string;
  createdAt: string;
  replyCount: number;
}

const Username = styled.div``;

export default function Header({
  avatar,
  displayName,
  acct,
  createdAt,
  replyCount,
}: Props) {
  return (
    <div>
      <Avatar
        size={128}
        src={avatar}
        alt={`${displayName}'s profile picture`}
      />
      <Username>
        <strong>{displayName}</strong>
        <span>@{acct}</span>
      </Username>
      <span style={{ flex: 1 }} />
      <Button>replies ({replyCount})</Button>
      <Button>reply</Button>
    </div>
  );
}
