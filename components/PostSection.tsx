import Post from "./Post";
import { posts } from "../data/data";

export default function PostSection({ title, tag }) {
  return (
    <section id="trending-post">
      <h2 className="mb-4 text-xl font-semibold text-gray-900">{title}</h2>
      {posts
        .filter((post) => post.tags.includes(tag))
        .map((post) => (
          <Post key={post.id} data={post} />
        ))}
    </section>
  );
}
