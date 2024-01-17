import AnchorLink from "react-anchor-link-smooth-scroll";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";

export default function Hero() {
  const [isCopied, setIsCopied] = useState(false);
  const text = "josuepe03@hotmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1000);
    } catch (err) {
      console.error("Error al copiar: ", err);
    }
  };

  return (
    <>
      <div
        id="hero"
        className=" relative  top-0 z-10 flex  h-screen w-full justify-center p-10 lg:pl-[4.5rem] "
      >
        <div className="grid w-full lg:grid-cols-1">
          <div className="flex flex-col justify-center text-texto lg:mb-32 lg:pl-32 xl:pl-6">
            <div>
              <h1 className="text-6xl font-bold  md:text-8xl xl:text-8xl">
                Hi,
                <span className="block lg:flex ">
                  I'm
                  <span className="ml-2 text-titulo">
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                      words={["Josue"]}
                      loop={5}
                      cursor
                      cursorStyle="_"
                      typeSpeed={100}
                    />
                  </span>
                </span>
                <span>web developer.</span>
              </h1>
            </div>
            <div className="mb-5 mt-2 lg:mb-10 lg:mt-5">
              <p className="lg:text-md text-sm   font-medium">
                Frontend <span className="mx-2"></span> /
                <span className="mx-2">Backend</span>
                <span className="mx-2">/</span> Web Developer
              </p>
            </div>
            <div>
              <AnchorLink
                href="#contact"
                className="group relative mb-2 me-2 inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-[#6793c9] to-[#325c97]  p-0.5 text-sm font-medium text-gray-100 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 "
              >
                <span className="relative rounded-lg bg-[#243856] px-5 py-2.5 transition-all duration-75 ease-in  group-hover:bg-opacity-0">
                  Contact Me
                </span>
              </AnchorLink>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-10 flex w-[20rem] justify-center  rounded-md px-6 py-6 lg:right-[6rem]"
          id="hero1"
        >
          <div className="grid grid-cols-1 gap-4">
            <div className=" flex w-full  items-center">
              <div className="group relative inline-flex w-full items-center justify-center overflow-hidden  rounded-l-xl bg-gradient-to-br from-[#6793c9] to-[#325c97]  p-0.5 text-sm font-medium text-gray-100  ">
                <span className="relative w-full rounded-l-lg bg-[#243856] px-5 py-2.5 transition-all duration-75 ease-in  ">
                  josuepe03@hotmail.com
                </span>
              </div>
              <div>
                <button
                  onClick={handleCopy}
                  className="group relative me-2 inline-flex w-full items-center justify-center overflow-hidden rounded-r-xl bg-gradient-to-br from-[#6793c9] to-[#325c97]  p-0.5 text-sm font-medium text-gray-100 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 "
                >
                  <span className="relative w-full rounded-r-lg px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0">
                    {isCopied ? (
                      <i className="fa-solid fa-check"></i>
                    ) : (
                      <i className="fa-solid fa-copy"></i>
                    )}
                  </span>
                </button>
              </div>
            </div>
            <div className="w-full">
              <a
                href="/cv/cv.pdf"
                download="cv.pdf"
                className="group relative me-2 inline-flex w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-[#6793c9] to-[#325c97] p-0.5  text-center text-sm font-medium text-gray-100 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 "
              >
                <span className="relative w-full rounded-lg bg-[#243856] px-5 py-2.5 transition-all duration-75 ease-in  group-hover:bg-opacity-0">
                  <span>DESCARGA CV</span>
                  <i className="fa-solid fa-download ml-3"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
