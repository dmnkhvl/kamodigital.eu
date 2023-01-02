import React, { useState } from "react";
import logo from "../../public/kamo_textLogo.svg";
import Button from "./Button.jsx";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleMenu = () => {
    setNavbarOpen((prev) => !prev);
  };

  return (
    <nav className="w-full fixed top-1 px-4 xl:px-0">
      <div className="max-w-screen-xl rounded-full m-4 bg-kamo-black-alt backdrop-saturate-150 backdrop-blur-xl shadow-lg z-10 mx-auto ">
        <div className="flex items-center mx-auto py-4 sm:py-6 md:py-7 px-8">
          <a href="#" className="hover:opacity-90">
            <img className="h-[25px]" src={logo} alt="kamodigital_logo" />
          </a>
          <ul className="hidden md:flex items-center ml-auto">
            <li className="mr-6">
              <a
                className="transition-colors duration-200 hover:text-kamo-green md:font-medium text-base"
                href="#"
              >
                O Nás
              </a>
            </li>
            <li className="mr-6">
              <a
                className="transition-colors duration-200 hover:text-kamo-green md:font-medium text-base"
                href="#"
              >
                Služby
              </a>
            </li>
            <li className="mr-6">
              <a
                className="transition-colors duration-200 hover:text-kamo-green md:font-medium text-base"
                href="#"
              >
                Portfólio
              </a>
            </li>
            <li className="mr-4">
              <a
                className="transition-colors duration-200 hover:text-kamo-green md:font-medium text-base"
                href="#"
              >
                Kontakt
              </a>
            </li>
          </ul>
          <button className="md:hidden ml-auto" onClick={handleMenu}>
            {navbarOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <ul
        className={`menuNav ${
          navbarOpen
            ? "flex md:hidden bg-kamo-black-alt rounded-3xl items-center flex-col max-w-screen-xl  mx-auto mb-6 px-6"
            : "hidden"
        }`}
      >
        <li className="w-full py-4 md:w-auto md:p-0 md:ml-5">
          <a
            className="transition-colors duration-200 hover:text-kamo-green"
            href=""
          >
            o nás.
          </a>
        </li>
        <li className="w-full py-4  md:w-auto md:p-0 md:ml-5">
          <a
            className="transition-colors duration-200 hover:text-kamo-green"
            href=""
          >
            služby.
          </a>
        </li>
        <li className="w-full py-4  md:w-auto md:p-0 md:ml-5">
          <a
            className="transition-colors duration-200 hover:text-kamo-green"
            href=""
          >
            portfólio.
          </a>
        </li>
        <li className="w-full py-4  md:w-auto md:p-0 md:ml-5">
          <a
            className="transition-colors duration-200 hover:text-kamo-green"
            href=""
          >
            kontakt.
          </a>
        </li>
      </ul>
      <Button />
    </nav>
  );
};

export default Navbar;
