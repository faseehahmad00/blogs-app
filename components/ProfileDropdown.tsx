import React, { Fragment } from "react";
import { useRouter } from "next/router";
import { Menu, Transition } from "@headlessui/react";
import c from "classnames";
import LinkTo from "./LinkTo";
import UserAvatar from "./UserAvatar";

export default function ProfileDropDown({
  onLogout,
}: {
  onLogout: () => void;
}) {
  const router = useRouter();

  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 ring-offset-slate-800 focus:ring-offset-2">
          <UserAvatar alt="nmanumr@gmail.com" src="https://lh3.googleusercontent.com/ogw/ADea4I6gFoT2lsKdLWb9S5pPfMijavhloVrjEAjyuyjr=s64-c-mo" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-20 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="mb-2 flex flex-col border-b border-gray-200 px-4 py-2 text-sm">
            <span className="text-gray-600">Signed in as:</span>
            <span className="truncate font-medium text-gray-600">nmanumr@gmail.com</span>
          </div>
          <Menu.Item>
            {({ active }) => (
              <LinkTo
                href="/settings"
                className={c(
                  active ? "bg-gray-100" : "",
                  "block px-4 py-2 text-sm text-gray-700"
                )}
              >
                My Blogs
              </LinkTo>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <LinkTo
                href="/settings"
                className={c(
                  active ? "bg-gray-100" : "",
                  "block px-4 py-2 text-sm text-gray-700"
                )}
              >
                Settings
              </LinkTo>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                type="submit"
                onClick={onLogout}
                className={c(
                  active ? "bg-gray-100" : "",
                  "block w-full px-4 py-2 text-left text-sm text-gray-700"
                )}
              >
                Logout
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
