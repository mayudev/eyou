import { Status } from "types";
import Post from "../post/post";

interface Props {
  posts: Status[];
}

export default function Timeline({ posts }: Props) {
  return (
    <div>
      {posts.map(post => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}
