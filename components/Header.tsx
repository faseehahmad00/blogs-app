import c from 'classnames';
import LinkTo from "./LinkTo";

export default function Header({className}: { className?: string }) {
  return (
    <div className={c(className, 'border-b')}>
      <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 flex items-center ">
        <LinkTo href="/" className="flex items-center">
          <img src="https://rabbito.io/assets/logos/logo-small.png" className="h-8 w-auto sm:h-10" alt="Rabbito Logo" />
          <span className="hidden sm:block ml-4 text-2xl font-light tracking-wide">Rabbito.io</span>
        </LinkTo>

        <div className="flex-grow" />

        <div>
          <LinkTo
            href="/auth/login"
            className="px-4 py-2 border border-transparent rounded shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Login
          </LinkTo>
        </div>
      </div>
    </div>
  );
}
