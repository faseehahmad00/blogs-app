import Blog from "./Blog";
import { blogs, topics } from "../data/data";
import Topic from "./Topic";

export default function SideBar() {
  return (
    <div className="ml-3 p-2">
      <h3 className="mb-0.5 text-xl font-semibold text-gray-700">Topics</h3>
      <div className="grid grid-cols-3">
        {topics.map((topic) => (
          <Topic data={topic} />
        ))}
      </div>

      <div className="mt-8">
        <h3 className="mb-0.5 text-xl font-semibold text-gray-700">Blogs</h3>
        {blogs.map((blog) => (
          <Blog data={blog} />
        ))}
      </div>
    </div>
  );
}
