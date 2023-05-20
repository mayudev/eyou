import { BiStar, BiRepeat, BiReply, BiSave } from "react-icons/bi";
import PostAction from "./action";
import styled from "styled-components";

interface Props {
  replyCount: number;
}

const Actions = styled.div`
  display: flex;
  justify-content: space-around;

  padding: 0 8px 12px;
`;

export default function PostFooter({ replyCount }: Props) {
  return (
    <Actions>
      <PostAction icon={BiReply} value={replyCount} title="Reply" />
      <PostAction icon={BiRepeat} value={0} title="Boost" />
      <PostAction icon={BiStar} value={1} title="Favorite" />
      <PostAction icon={BiSave} title="Bookmark" />
    </Actions>
  );
}
