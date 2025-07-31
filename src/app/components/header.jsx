import Image from "next/image";

const Header = () => {
    return (
        <div className="fixed top-0 z-50 w-full h-16 bg-base-200 shadow-md shadow-base-300">
            <div className="navbar container mx-auto justify-between px-4 md:px-8 xl:max-w-[1280px]">
                <div className="flex-1">
                    <a className="text-xl font-medium" href="#">Joona Kareinen</a>
                </div>

                {/* Desktop menu */}
                <div className="hidden md:flex gap-4 text-gray-500 font-medium">
                    <a href="#about" className="hover:text-base-content transition-all duration-200">About</a>
                    <a href="#updates" className="hover:text-base-content transition-all duration-200">Research</a>
                    <a href="#teaching" className="hover:text-base-content transition-all duration-200">Teaching</a>
                    <a href="#contact" className="hover:text-base-content transition-all duration-200">Contact</a>
                </div>

                {/* Mobile menu - dropdown */}
                <div className="dropdown dropdown-end md:hidden">
                    <label tabIndex={0} className="btn btn-ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li><a href="#about">About</a></li>
                        <li><a href="#updates">Research</a></li>
                        <li><a href="#teaching">Teaching</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;