

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
  IconBrandReact,
  IconBrandNodejs,
  IconBrandLaravel,
  IconTerminal2,
  IconBrandGit,
  IconBrandMongodb,
} from "@tabler/icons-react";

export default function Skills() {
  return (
    <section
      className="home relative  z-10 bg-secundary pb-[10rem]  dark:bg-gray-900"
      id="skills"
    >
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:py-16">
        <h2 className=" text-center text-4xl font-extrabold leading-tight tracking-tight md:text-5xl dark:text-white">
          <span className="text-titulo ">Habilidades</span>
          <div className="flex w-full justify-center">
            <p className="mt-5 text-lg font-normal text-texto lg:w-[76%] lg:text-xl dark:text-gray-400">
              Mi experiencia se extiende al diseño y desarrollo de interfaces
              modernas y altamente interactivas, utilizando la potencia de React
              para construir componentes reutilizables y eficientes.
            </p>
          </div>
        </h2>
        <div className="flex items-center justify-center">
          <div className="grid gap-x-16 sm:grid-cols-2 lg:grid-cols-4 ">
            <div className="mt-20">
              <div>
                <h2 className="mb-8 text-start text-4xl font-bold leading-tight tracking-tight text-titulo md:text-2xl lg:mb-6 dark:text-white">
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
                    <IconBrandReact size={58} />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-20">
              <div>
                <h2 className="mb-8 text-start text-4xl font-bold leading-tight tracking-tight text-titulo md:text-2xl lg:mb-6 dark:text-white">
                  <span className=" ">Backend</span>
                </h2>
                <div className="grid grid-cols-3  text-texto">
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
                <h2 className="mb-8 text-start text-4xl font-bold leading-tight tracking-tight text-titulo md:text-2xl lg:mb-6 dark:text-white">
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
                <h2 className="mb-8 text-start text-4xl font-bold leading-tight tracking-tight text-titulo md:text-2xl lg:mb-6 dark:text-white">
                  <span className="">Lenguajes</span>
                </h2>
                <div className="grid grid-cols-3 text-texto">
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
                <h2 className="mb-8 text-start text-3xl font-bold leading-tight tracking-tight text-titulo md:text-2xl lg:mb-6 dark:text-white">
                  <span className=" ">Sistemas Operativos</span>
                </h2>
                <div
                  className="grid grid-cols-3 text-texto
                "
                >
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
                <h2 className="mb-8 text-start text-4xl font-bold leading-tight tracking-tight text-titulo md:text-2xl lg:mb-6 dark:text-white">
                  <span className=" ">Base de datos</span>
                </h2>
                <div className="grid grid-cols-3 text-texto">
                  <div>
                    <IconBrandFirebase size={58} />
                  </div>
                  <div>
                    <IconBrandMysql size={58} />
                  </div>
                  <IconBrandMongodb stroke={2} size={58} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
