import Button from "./children/Button";

import { SiBurgerking } from 'react-icons/si'

const Header = () => {
    return (
        <header className="">
            <nav className="px-6 sm:px-4 py-2.5 bg-transparent absolute w-full z-20 top-0 left-0">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <a href="#0" className="flex items-center gap-2">
                        <SiBurgerking color="#fff" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap text-white">Foodgram</span>
                    </a>
                    <div className="flex md:order-2">
                        <Button />
                        <button data-collapse-toggle="navbar-sticky" id="triggerEl" type="button" className="nline-flex items-center p-2 text-sm txet-white rounded-lg md:hidden focus:outline-none" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6 text-white" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul id="targetEl" className="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium bg-transparent">
                            <li>
                                <a href="#0" className="block py-2 pl-3 pr-4 rounded md:p-0 text-white md:dark:hover:bg-transparent">Home</a>
                            </li>
                            <li>
                                <a href="#1" className="block py-2 pl-3 pr-4 rounded md:p-0 text-white dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                            </li>
                            <li>
                                <a href="#3" className="block py-2 pl-3 pr-4 rounded md:p-0 text-white dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                            </li>
                            <li>
                                <a href="#4" className="block py-2 pl-3 pr-4 rounded md:p-0 text-white dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;