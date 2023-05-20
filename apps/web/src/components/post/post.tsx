"use client";

import { Status } from "types";
import Header from "./header";
import styled from "styled-components";
import PostFooter from "./footer";

interface Props {
  post: Status;
}

const PostContainer = styled.article`
  margin: 15px;
  box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.3);
  border: 1px solid var(--color-component-shadow);
`;

const Contents = styled.div`
  padding: 12px;
  line-height: 22px;
  font-size: 15px;
`;

export default function Post({ post }: Props) {
  return (
    <PostContainer>
      <Header
        acct={post.account.acct}
        avatar={post.account.avatar}
        createdAt={post.created_at}
        displayName={post.account.display_name}
        replyCount={post.replies_count}
      />
      <Contents>{post.content}</Contents>
      <PostFooter replyCount={post.replies_count} />
    </PostContainer>
  );
}
