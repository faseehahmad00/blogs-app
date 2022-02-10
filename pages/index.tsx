import Header from "../components/Header";
import Footer from "../components/Footer";
import { blogs, posts, sections, topics } from "../data/data";
import SearchBar from "../components/SearchBar";
import Post from "../components/Post";

export default function Home() {
  return (
    <div>
      <div className="relative z-10 bg-slate-800 text-gray-100">
        <Header className="border-b-gray-600 text-gray-200" />

        <div className="mx-auto grid max-w-screen-xl grid-cols-2 gap-4 px-4 py-48">
          <div>
            <h1 className="font-serif text-6xl text-gray-100">
              Write to Spread
            </h1>
            <p className="mt-4 text-gray-300/80">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button className="mt-10 rounded border border-gray-400 py-2 px-6 text-gray-300 transition duration-200 hover:bg-gray-400/25">
              Start Writing
            </button>
          </div>
        </div>
      </div>

      <SearchBar />

      <div className="mx-auto my-10 max-w-screen-xl px-4 py-4">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-3">
          <div className="col-span-2 space-y-24">
            {sections.map(({ title, tag }) => (
              <section key={tag} id="trending-post">
                <h2 className="mb-4 text-xl font-semibold text-gray-900">
                  {title}
                </h2>
                {posts
                  .filter((post) => post.tags.includes(tag))
                  .map((post) => (
                    <Post key={post.id} data={post} />
                  ))}
              </section>
            ))}
          </div>

          <div className="col-span-1 ml-3 p-2 space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-700">
                Trending Topics
              </h3>
              <div className="divide gray-200 mt-3 divide-y">
                {topics.slice(0, 5).map((topic) => (
                  <div
                    key={topic.name}
                    className="flex items-center justify-between pt-2 pb-1"
                  >
                    <div>
                      <h3 className="font-medium text-gray-800">
                        {topic.name}
                      </h3>
                      <div className="mb-2 text-xs text-gray-500">
                        {topic.followers} people follow
                      </div>
                    </div>
                    <button className="flex items-center px-3 py-1 text-sm text-indigo-600">
                      Follow
                    </button>
                  </div>
                ))}
              </div>
              <button className="flex items-center rounded py-2 px-1 text-sm text-indigo-600 hover:underline">
                See More...
              </button>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700">
                Top Blogs
              </h3>
              <div className="divide gray-200 mt-3 divide-y">
                {blogs.map((blog) => (
                  <div
                    className="flex items-center space-x-4 py-3"
                    key={blog.name}
                  >
                    <div className="flex-shrink-0">
                      <img
                        className="h-12 w-12 rounded-lg object-cover"
                        alt=""
                        src={blog.img}
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-medium text-gray-800">{blog.name}</h3>
                      <div className="mb-2 text-xs text-gray-500">
                        {blog.followers} people follow
                      </div>
                    </div>
                    <button className="flex items-center px-3 py-1 text-sm text-indigo-600">
                      Follow
                    </button>
                  </div>
                ))}
              </div>
              <button className="flex items-center rounded py-2 px-1 text-sm text-indigo-600 hover:underline">
                See More...
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
