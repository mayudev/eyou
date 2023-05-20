import { BiStar, BiRepeat, BiReply, BiSave } from "react-icons/bi";
import PostAction from "./action";
import styled from "styled-components";

interface Props {
  replyCount: number;
  boostCount: number;
  favCount: number;
}

const Actions = styled.div`
  display: flex;
  justify-content: space-around;

  padding: 0 8px 12px;
`;

export default function PostFooter({
  replyCount,
  boostCount,
  favCount,
}: Props) {
  return (
    <Actions>
      <PostAction icon={BiReply} value={replyCount} title="Reply" />
      <PostAction icon={BiRepeat} value={boostCount} title="Boost" />
      <PostAction icon={BiStar} value={favCount} title="Favorite" />
      <PostAction icon={BiSave} title="Bookmark" />
    </Actions>
  );
}
