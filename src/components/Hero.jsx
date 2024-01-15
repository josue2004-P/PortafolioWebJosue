import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <>
      <div
        id="hero"
        className=" z-10  h-screen w-full relative  top-0 flex p-10 lg:pl-[4.5rem] justify-center "
      >
        <div className="grid lg:grid-cols-1 w-full">
          <div className="text-texto flex flex-col lg:mb-32 justify-center xl:pl-6 lg:pl-32">
            <div>
              <h1 className="text-6xl md:text-8xl  xl:text-8xl font-bold">
                Hi,
                <span className="block lg:flex ">
                  I'm
                  <span className="text-titulo ml-2">
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
            <div className="mt-2 lg:mt-5 mb-5 lg:mb-10">
              <p className="text-sm lg:text-md   font-medium">
                Frontend <span className="mx-2"></span> /
                <span className="mx-2">Backend</span>
                <span className="mx-2">/</span> Web Developer
              </p>
            </div>
            <div>
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-100  group bg-gradient-to-br from-[#6793c9] to-[#325c97] group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#243856]  group-hover:bg-opacity-0">
                  Contact Me
                </span>
              </button>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-10 lg:right-[6rem] rounded-md px-6  py-6 w-[20rem] flex justify-center"
          id="hero1"
        >
          <div className="grid grid-cols-1 gap-4">
            <div className=" flex items-center  w-full">
              <div className="w-full rounded-l-xl relative inline-flex items-center justify-center p-0.5  overflow-hidden text-sm font-medium text-gray-100  group bg-gradient-to-br from-[#6793c9] to-[#325c97]  ">
                <span className="w-full relative rounded-l-lg px-5 py-2.5 transition-all ease-in duration-75 bg-[#243856]  ">
                  josuepe03@hotmail.com
                </span>
              </div>
              <div>
                <button className="w-full rounded-r-xl relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-100  group bg-gradient-to-br from-[#6793c9] to-[#325c97] group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                  <span className="w-full relative rounded-r-lg px-5 py-2.5 transition-all ease-in duration-75 bg-[#243856]  group-hover:bg-opacity-0">
                    <i className="fa-solid fa-copy"></i>
                  </span>
                </button>
              </div>
            </div>
            <div className="w-full">
              <button className="w-full rounded-xl relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-100  group bg-gradient-to-br from-[#6793c9] to-[#325c97] group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                <span className="w-full relative rounded-lg px-5 py-2.5 transition-all ease-in duration-75 bg-[#243856]  group-hover:bg-opacity-0">
                  <span>DESCARGA CV</span>
                  <i className="ml-3 fa-solid fa-download"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
