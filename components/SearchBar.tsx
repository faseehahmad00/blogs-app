import c from "classnames";
import { HTMLProps, useRef, useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";

import { topics } from "../data/data";

function Tag({
  isActive,
  className,
  children,
  type = "button",
  ...props
}: { isActive: boolean } & HTMLProps<HTMLButtonElement>) {
  return (
    <button
      type={type as any}
      {...props}
      className={c(
        className,
        "ml-3 flex items-end space-x-0.5 rounded-full border px-4 py-1 transition duration-200",
        isActive
          ? "bg-slate-600 text-white"
          : "border-gray-300 bg-white text-gray-600 hover:bg-gray-200"
      )}
    >
      {children}
    </button>
  );
}

function easeOutQuart(x: number): number {
  return 1 - Math.pow(1 - x, 4);
}

export default function SearchBar() {
  const [scroll, setScroll] = useState(0);
  const tagsRef = useRef<HTMLDivElement>(null);
  const opacity = easeOutQuart(Math.max(0, 1 - scroll / 180));

  return (
    <div className="bg-white shadow-md">
      <div className="relative mx-auto max-w-screen-xl pr-4 sm:pr-6">
        <div
          className="absolute inset-y-0 ml-4 flex w-full max-w-sm items-center"
          style={{ opacity, pointerEvents: opacity === 0 ? "none" : "all" }}
        >
          <SearchIcon className="pointer-events-none absolute left-4 h-6 w-6 text-gray-400" />
          <input
            onFocus={() => {
              tagsRef.current?.scroll({ left: 0, behavior: "smooth" });
            }}
            onKeyPress={() => {
              tagsRef.current?.scroll({ left: 0, behavior: "smooth" });
            }}
            className="w-full border-transparent bg-transparent py-6 pl-14 pr-4 placeholder:text-gray-500 focus:outline-none"
            placeholder="Search for posts and blog..."
          />
        </div>
        <div
          className="flex flex-grow overflow-y-auto"
          ref={tagsRef}
          onScroll={(e) => setScroll((e.target as any)?.scrollLeft)}
        >
          <div className="min-w-content flex">
            <div className="sticky z-20 left-0 h-full w-8 bg-gradient-to-r from-white" />

            <div className="relative z-10 ml-96 flex items-center py-7">
              <Tag className="" isActive={true}>
                All
              </Tag>

              {topics.map(({ name }) => (
                <Tag key={name} isActive={false}>
                  {name}
                </Tag>
              ))}
            </div>
            <div className="sticky z-20 right-0 h-full w-8 bg-gradient-to-l from-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
