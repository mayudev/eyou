import { Status } from "types";
import Header from "./header";

interface Props {
  post: Status;
}

export default function Post({ post }: Props) {
  return (
    <article>
      <Header
        acct={post.account.acct}
        avatar={post.account.avatar}
        createdAt={post.created_at}
        displayName={post.account.display_name}
        replyCount={post.replies_count}
      />
      <div>{post.content}</div>
    </article>
  );
}
