export default function Footer() {
    return (
        <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-4 xl:gap-8">
            <div className="hidden xl:block xl:col-span-1">
                    <span className="text-3xl tracking-tight text-gray-600"
                          style={{fontFamily: "'Spartan',sans-serif", fontWeight: 900}}>Rabbito.io</span>
                <p className="mt-1 text-sm text-gray-500"
                   style={{maxWidth: "200px"}}>Blogs, Events, Social Commerce</p>
            </div>
            <div
                className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 xl:mt-0 xl:col-span-3">
                <div>
                    <h4
                        className="text-sm leading-5 font-medium tracking-wider text-gray-500 uppercase"> Product </h4>
                    <ul className="mt-4">
                        <li>
                            <button
                                className="text-base leading-6 text-gray-600 hover:text-gray-900 focus:outline-none"> Features
                            </button>
                        </li>
                        <li className="mt-4">
                            <button
                                className="text-base leading-6 text-gray-600 hover:text-gray-900 focus:outline-none"> Pricing
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="mt-12 md:mt-0">
                    <h4
                        className="text-sm leading-5 font-medium tracking-wider text-gray-500 uppercase"> Support </h4>
                    <ul className="mt-4">
                        <li><a
                            className="text-base leading-6 text-gray-600 hover:text-gray-900"
                            href="/faq"> FAQ </a>
                        </li>
                        <li className="mt-4"><a
                            className="text-base leading-6 text-gray-600 hover:text-gray-900"
                            href="/support"> Support </a></li>
                    </ul>
                </div>
                <div className="mt-12 md:mt-0">
                    <h4
                        className="text-sm leading-5 font-medium tracking-wider text-gray-500 uppercase"> Company </h4>
                    <ul className="mt-4">
                        <li><a
                            className="text-base leading-6 text-gray-600 hover:text-gray-900"
                            href="/about"> About </a>
                        </li>
                        <li className="mt-4"><a
                            className="text-base leading-6 text-gray-600 hover:text-gray-900"
                            href="/privacy"> Privacy Policy </a></li>
                        <li className="mt-4"><a
                            className="text-base leading-6 text-gray-600 hover:text-gray-900"
                            href="/terms"> Terms of Services </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="mt-6 pt-8"><p
            className="text-base leading-6 text-gray-500 text-center hover:text-gray-600">
            <a href="https://objex.tech/">Objex Inc.</a></p></div>
    </div>
    );
}