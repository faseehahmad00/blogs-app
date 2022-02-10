import c from "classnames";
import LinkTo from "./LinkTo";

export default function Header({ className }: { className?: string }) {
  return (
    <div className={c(className, "border-b")}>
      <div className="mx-auto flex max-w-screen-xl items-center px-4 py-6 sm:px-6 ">
        <LinkTo href="/" className="flex items-center">
          <img
            src="https://rabbito.io/assets/logos/logo-small.png"
            className="h-8 w-auto sm:h-10"
            alt="Rabbito Logo"
          />
          <span className="ml-4 hidden text-2xl font-light tracking-wide sm:block">
            Rabbito.io
          </span>
        </LinkTo>

        <div className="flex-grow" />

        <div>
          <LinkTo
            href="/auth/login"
            className="rounded border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            Login
          </LinkTo>
        </div>
      </div>
    </div>
  );
}
