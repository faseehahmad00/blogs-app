export default function Footer() {
  return (
    <div className="mx-auto max-w-screen-xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="xl:grid xl:grid-cols-4 xl:gap-8">
        <div className="hidden xl:col-span-1 xl:block">
          <h3 className="font-spartan text-3xl font-black tracking-tight text-gray-600">
            Rabbito.io
          </h3>
          <p
            className="mt-1 text-sm text-gray-500"
            style={{ maxWidth: "220px" }}
          >
            Blogs, Events, Social Commerce
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 xl:col-span-3 xl:mt-0">
          <div>
            <h4 className="text-sm font-medium uppercase leading-5 tracking-wider text-gray-500">
              Product
            </h4>
            <ul className="mt-4">
              <li>
                <button className="text-base leading-6 text-gray-600 hover:text-gray-900 focus:outline-none">
                  Features
                </button>
              </li>
              <li className="mt-4">
                <button className="text-base leading-6 text-gray-600 hover:text-gray-900 focus:outline-none">
                  Pricing
                </button>
              </li>
            </ul>
          </div>
          <div className="mt-12 md:mt-0">
            <h4 className="text-sm font-medium uppercase leading-5 tracking-wider text-gray-500">
              Support
            </h4>
            <ul className="mt-4">
              <li>
                <a
                  className="text-base leading-6 text-gray-600 hover:text-gray-900"
                  href="/faq"
                >
                  FAQ
                </a>
              </li>
              <li className="mt-4">
                <a
                  className="text-base leading-6 text-gray-600 hover:text-gray-900"
                  href="/support"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-12 md:mt-0">
            <h4 className="text-sm font-medium uppercase leading-5 tracking-wider text-gray-500">
              Company
            </h4>
            <ul className="mt-4">
              <li>
                <a
                  className="text-base leading-6 text-gray-600 hover:text-gray-900"
                  href="/about"
                >
                  About
                </a>
              </li>
              <li className="mt-4">
                <a
                  className="text-base leading-6 text-gray-600 hover:text-gray-900"
                  href="/privacy"
                >
                  Privacy Policy
                </a>
              </li>
              <li className="mt-4">
                <a
                  className="text-base leading-6 text-gray-600 hover:text-gray-900"
                  href="/terms"
                >
                  Terms of Services
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-6 pt-8">
        <p className="text-center text-base leading-6 text-gray-500 hover:text-gray-600">
          <a href="https://objex.tech/">Objex Inc.</a>
        </p>
      </div>
    </div>
  );
}
