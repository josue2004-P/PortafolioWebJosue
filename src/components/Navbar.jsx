import AnchorLink from "react-anchor-link-smooth-scroll";
import { IconMenuDeep } from "@tabler/icons-react";

export default function Navbar() {
  return (
    <nav className="absolute  z-50 flex w-full text-lg font-medium  text-texto shadow-gray-800  md:py-5">
      <div className="mx-auto flex w-full max-w-screen-xl flex-wrap items-center justify-end p-4 md:justify-center">
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2  text-sm md:hidden "
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>

          <IconMenuDeep />
        </button>
        <div className=" hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse ">
            <li>
              <AnchorLink href="#hero">Home</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#about">About Us</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#skills">Skills</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#works">Works</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#contact">Contact</AnchorLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
