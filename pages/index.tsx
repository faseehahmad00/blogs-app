import Header from "../components/Header";
import PostSection from "../components/PostSection";
import Footer from "../components/Footer";
import { sections } from "../data/data";
import SideBar from "../components/SideBar";
import SearchBar from "../components/SearchBar";

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
          <div></div>
        </div>
      </div>

      <SearchBar />

      <div className="mx-auto my-10 max-w-screen-xl px-4 py-4">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-3">
          <div className="col-span-2 space-y-24">
            {sections.map(({ title, tag }) => (
              <PostSection key={tag} title={title} tag={tag} />
            ))}
          </div>

          <div className="col-span-1 border-0 lg:border-l">
            <SideBar />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
