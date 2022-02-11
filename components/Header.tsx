import c from "classnames";
import LinkTo from "./LinkTo";
import ProfileDropDown from "./ProfileDropdown";

interface Props {
  className?: string;
  onLogin?: () => void;
  onLogout?: () => void;
  isLoggedIn?: boolean;
}

export default function Header({ className, onLogin, onLogout, isLoggedIn }: Props) {
  return (
    <div className={c(className, "border-b")}>
      <div className="mx-auto flex max-w-screen-xl items-center px-4 py-6 sm:px-6">
        <LinkTo href="/" className="flex items-center">
          <img
            src="https://rabbito.io/assets/logos/logo-small.png"
            className="h-8 w-auto"
            alt="Rabbito Logo"
          />
          <span className="ml-4 hidden text-2xl font-light tracking-wide sm:block">
            Rabbito.io
          </span>
        </LinkTo>

        <div className="flex-grow" />

        <div>
          {!isLoggedIn ? (
            <button
              onClick={() => onLogin()}
              className="rounded border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Login
            </button>
          ): (
            <ProfileDropDown onLogout={onLogout} />
          )}
        </div>
      </div>
    </div>
  );
}
