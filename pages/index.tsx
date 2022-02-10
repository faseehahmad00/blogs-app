import Header from "../components/Header";
import PostSection from "../components/PostSection";
import Footer from "../components/Footer";
import { SearchIcon, ChevronRightIcon } from '@heroicons/react/solid';
import {sections,topics} from "../data/data";
import SideBar from "../components/SideBar";

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
        <div className="mx-auto max-w-screen-xl pr-4 py-2 sm:pr-6 grid grid-cols-3 relative lg:grid-cols-6">
          <div className="flex items-center relative col-span-3 md:col-span-2">
          <SearchIcon className="text-gray-400 h-6 w-6 absolute left-4 pointer-events-none" />
          <input
            className="border-transparent bg-transparent placeholder:text-gray-500 w-full focus:outline-none pl-14 py-6"
            placeholder="Search for posts and blog..."
          />
          </div>
          <div className="col-span-4 flex items-center justify-center flex-wrap">
            { topics.map((topic) => (
                <button className="ml-3 mt-2 text-sm text-indigo-600 flex space-x-0.5 items-end border border-gray-400 rounded-xl px-2 hover:bg-gray-200 transition duration-200">
                    {topic.name}
                  </button>
              ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-screen-xl px-4 py-4 my-10">
        <div className="grid grid-cols-2 lg:grid-cols-3">
          <div className="col-span-2 mr-4">
            {
              sections.map(section => (
                <PostSection title={section.title} tag={section.tag} /> 
              ))
            }
          </div>

          <div className="col-span-1 border-0 lg:border-l-2" >
            <SideBar/>
          </div>
        </div>

      </div>

      <Footer/>
    </div>
  );
}
