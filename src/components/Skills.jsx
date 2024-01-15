import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import "../css/home.css";

import {
  IconBrandCSharp,
  IconBrandFirebase,
  IconBrandGithub,
  IconBrandHtml5,
  IconBrandMysql,
  IconBrandPhp,
  IconBrandUbuntu,
  IconBrandWindows,
  IconBrandCss3,
  IconBrandJavascript,
  IconBrandTailwind,
  IconBrandBootstrap,
  IconBrandReact,
  IconBrandNodejs,
  IconBrandNextjs,
  IconBrandLaravel,
  IconTerminal2,
  IconBrandGit,
} from "@tabler/icons-react";

export default function Skills() {
  return (
    <section
      className="z-10 relative  py-10 bg-secundary home  dark:bg-gray-900"
      id="skills"
    >
      <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <h2 className=" text-4xl font-extrabold tracking-tight leading-tight text-center dark:text-white md:text-5xl">
          <span className="text-titulo ">Skills</span>
          <div className="w-full flex justify-center">
            <p className="lg:w-[76%] text-lg font-normal mt-5 text-texto lg:text-xl dark:text-gray-400">
              Mi experiencia se extiende al diseño y desarrollo de interfaces
              modernas y altamente interactivas, utilizando la potencia de React
              para construir componentes reutilizables y eficientes.
            </p>
          </div>
        </h2>
        <div className="flex justify-center items-center">
          <div className="sm:grid-cols-2 lg:grid-cols-4 grid gap-x-16 ">
            <div className="mt-20">
              <div>
                <h2 className="mb-8 lg:mb-6 text-4xl font-bold tracking-tight leading-tight text-start text-titulo dark:text-white md:text-2xl">
                  <span className=" ">Frontend</span>
                </h2>
                <div className="grid grid-cols-3 text-texto">
                  <div>
                    <IconBrandHtml5 size={58} />
                  </div>
                  <div>
                    <IconBrandCss3 size={58} />
                  </div>
                  <div>
                    <IconBrandJavascript size={58} />
                  </div>
                  <div>
                    <IconBrandTailwind size={58} />
                  </div>
                  <div>
                    <IconBrandBootstrap size={58} />
                  </div>
                  <div>
                    <IconBrandReact size={58} />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-20">
              <div>
                <h2 className="mb-8 lg:mb-6 text-4xl font-bold tracking-tight leading-tight text-start text-titulo dark:text-white md:text-2xl">
                  <span className=" ">Backend</span>
                </h2>
                <div className="grid grid-cols-3  text-texto">
                  <div>
                    <IconBrandNextjs size={58} />
                  </div>
                  <div>
                    <IconBrandNodejs size={58} />
                  </div>
                  <div>
                    <IconBrandLaravel size={58} />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-20">
              <div>
                <h2 className="mb-8 lg:mb-6 text-4xl font-bold tracking-tight leading-tight text-start text-titulo dark:text-white md:text-2xl">
                  <span className="">Herramientas</span>
                </h2>
                <div className="grid grid-cols-3 text-texto">
                  <div>
                    <IconTerminal2 size={58} />
                  </div>
                  <div>
                    <IconBrandGit size={58} />
                  </div>
                  <div>
                    <IconBrandGithub size={58} />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-20">
              <div>
                <h2 className="mb-8 lg:mb-6 text-4xl font-bold tracking-tight leading-tight text-start text-titulo dark:text-white md:text-2xl">
                  <span className="">Lenguajes</span>
                </h2>
                <div className="grid grid-cols-3 text-texto">
                  <div>
                    <IconBrandCSharp size={58} />
                  </div>
                  <div>
                    <IconBrandPhp size={58} />
                  </div>
                  <div>
                    <IconBrandJavascript size={58} />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-20">
              <div>
                <h2 className="mb-8 lg:mb-6 text-3xl font-bold tracking-tight leading-tight text-start text-titulo dark:text-white md:text-2xl">
                  <span className=" ">Sistemas Operativos</span>
                </h2>
                <div className="grid grid-cols-3 text-texto
                ">
                  <div>
                    <IconBrandWindows size={58} />
                  </div>
                  <div>
                    <IconBrandUbuntu size={58} />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-20">
              <div>
                <h2 className="mb-8 lg:mb-6 text-4xl font-bold tracking-tight leading-tight text-start text-titulo dark:text-white md:text-2xl">
                  <span className=" ">Base de datos</span>
                </h2>
                <div className="grid grid-cols-3 text-texto">
                  <div>
                    <IconBrandFirebase size={58} />
                  </div>
                  <div>
                    <IconBrandMysql size={58} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
