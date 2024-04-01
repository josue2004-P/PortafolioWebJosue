import AnchorLink from "react-anchor-link-smooth-scroll";
import { IconMenuDeep } from "@tabler/icons-react";
import { useState } from "react";

export default function Navbar() {

  const [isNavbar, setIsNavbar] = useState(true);

  const openNavbar = () => {
   setIsNavbar(isNavbar => !isNavbar);
  }
  


  return (
    <nav className="absolute  z-50 flex w-full text-lg font-medium  text-white shadow-gray-800  md:py-2">
      <div className="mx-auto flex w-full max-w-screen-xl flex-wrap items-center justify-end p-4 md:justify-center">
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2  text-sm md:hidden "
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={()=>{openNavbar()}}
        >
          <span className="sr-only">Open main menu</span>

          <IconMenuDeep />
        </button>
        <div className={`backdrop-blur w-full md:block md:w-auto ${isNavbar ? 'hidden' : ''}`} id="navbar-default">

          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse ">
            <li>
              <AnchorLink href="#hero">Inicio</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#about">¿Quien soy?</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#skills">Habilidades</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#works">Trabajos</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#contact">Contacto</AnchorLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
