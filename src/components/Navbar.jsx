import AnchorLink from "react-anchor-link-smooth-scroll";
import { IconMenuDeep } from '@tabler/icons-react';

export default function Navbar() {
  return (
    <nav className="z-50  md:py-5 font-medium w-full flex text-lg  text-texto absolute  shadow-gray-800">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-end md:justify-center mx-auto p-4 w-full">
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden "
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>

          <IconMenuDeep/>
          
        </button>
        <div className=" hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
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
