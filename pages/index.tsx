import Header from "../components/Header";
import { SearchIcon, ChevronRightIcon } from '@heroicons/react/solid';

export default function Home() {
  return (
    <div>
      <div className="bg-slate-800  text-gray-100 relative z-10">
        <Header className="border-b-gray-600 text-gray-200" />

        <div className="mx-auto max-w-screen-xl px-4 py-48 grid grid-cols-2 gap-4">
          <div>
            <h1 className="text-6xl text-gray-100 font-serif">Write to Spread</h1>
            <p className="text-gray-300/80 mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <button className="mt-10 border border-gray-400 rounded py-2 px-6 text-gray-300 hover:bg-gray-400/25 transition duration-200">
              CTA Button
            </button>
          </div>
          <div>

          </div>
        </div>
      </div>

      <div className="shadow-md bg-white">
        <div className="mx-auto max-w-screen-xl pr-4 py-2 sm:pr-6 flex items-center relative">
          <SearchIcon className="text-gray-400 h-6 w-6 absolute left-4 pointer-events-none" />
          <input
            className="border-transparent bg-transparent placeholder:text-gray-500 w-full focus:outline-none pl-14 py-6"
            placeholder="Search for posts and blog..."
          />
        </div>
      </div>

      <div className="mx-auto max-w-screen-xl px-4 py-4 my-10">
        <div className="grid grid-cols-3">
          <section id="trending-post" className="col-span-2">
            <h2 className="text-gray-900 text-xl font-semibold mb-8">Trending Posts</h2>
            <div>
              <div className="flex space-x-6">
                <div className="flex shrink-0">
                  <img
                    className="aspect-square h-48 object-cover"
                    src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-gray-900 text-xl font-semibold mb-0.5">My First Rabbito Post</h3>
                  <div className="text-sm mb-2 text-gray-500">
                    By Test Blog &middot;
                    4 people liked
                  </div>
                  <p className="line-clamp-3 text-gray-700">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>

                  <button className="mt-4 font-medium text-indigo-600 flex space-x-0.5 items-end">
                    <span>Read More</span>
                    <ChevronRightIcon className="h-5 w-5 mb-0.5" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          <div className="">

          </div>
        </div>
      </div>
    </div>
  );
}
