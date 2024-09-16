import Card from "./Card";
import {
  IconBrandCss3,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandLaravel,
  IconBrandMysql,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandTailwind,
} from "@tabler/icons-react";

export default function Works() {
  return (
    <div
      id="works"
      className="relative z-10  flex items-center justify-center  pb-20"
    >
      <div className="w-11/12 rounded-3xl pb-10" id="work">
        <h2 className="mb-8 mt-10 text-center text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
          <span className="text-titulo ">Trabajos</span>
        </h2>

        <div className=" mt-20 flex w-full items-center justify-center">
          <div className="grid gap-14 px-3 lg:gap-[2rem] lg:px-0 2xl:grid-cols-2 2xl:gap-[2rem]">
            <div className="flex w-full  justify-end  lg:-ml-[10rem] 2xl:m-0">
              <Card
                url={"../work1.png"}
                link={"https://dasoftwarer.netlify.app/"}
                titulo={"D&A Software R"}
                descripcion={
                  "Sitio web oficial D&A Software R , creado con HTML, CSS, JS, con PHP y Laravel de base con conexión MySQL para el registro de contactos"
                }
                tecnologias={
                  <>
                    <span className="mb-2  mr-2 inline-block w-fit rounded-full bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-700">
                      <IconBrandHtml5 />
                    </span>

                    <span className="mb-2 mr-2 inline-block w-fit rounded-full bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-700">
                      <IconBrandCss3 />
                    </span>
                    <span className="mb-2 mr-2 inline-block w-fit rounded-full bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-700">
                      <IconBrandJavascript />
                    </span>
                    <span className="mb-2 inline-block  w-fit rounded-full bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-700">
                      <IconBrandLaravel />
                    </span>
                    <span className="mb-2 inline-block  w-fit rounded-full bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-700">
                      <IconBrandMysql />
                    </span>
                  </>
                }
              />
            </div>

            {/* <div className="flex w-full  justify-end lg:ml-20 2xl:m-0">
              <Card
                url={"../work2.png"}
                link={
                  "https://centro-medico-test.netlify.app/"
                }
                titulo={"Sistema Centro Medico Indicencias"}
                descripcion={
                  "Sistema web diseñado para la creacion de incidencias en equipos medicos, mas detalles en su sitio oficial."
                }
                tecnologias={
                  <>
                    <span className="w-fit mb-2 mr-2 inline-block rounded-full bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-700">
                      <IconBrandHtml5 />
                    </span>

                    <span className="w-fit mb-2 mr-2 inline-block rounded-full bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-700">
                      <IconBrandCss3 />
                    </span>
                    <span className="w-fit mb-2 mr-2 inline-block rounded-full bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-700">
                      <IconBrandJavascript />
                    </span>

                    <span className="w-fit mb-2 mr-2 inline-block rounded-full bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-700">
                      <IconBrandNodejs />
                    </span>
                    <span className="w-fit mb-2  inline-block rounded-full bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-700">
                      <IconBrandMongodb />
                    </span>
                  </>
                }
              />
            </div> */}

            <div className="flex w-full  justify-end lg:-ml-16 2xl:m-0">
              <Card
                url={"../reparacel.png"}
                link={"https://reparacel.netlify.app/"}
                titulo={"Demo Reparacel"}
                descripcion={
                  "Demo de sistema diseñado para gestión de equipos móviles , clientes y reparaciones para tener un control y un análisis rápido de los dispositivos para sus respectiva reparación , se utilizo HTML, CSS, JS, REACT, TAILWIND Y REDUX."
                }
                tecnologias={
                  <>
                    <span className="mb-2 mr-2 inline-block w-fit rounded-full bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-700">
                      <IconBrandHtml5 />
                    </span>

                    <span className="mb-2 mr-2 inline-block w-fit rounded-full bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-700">
                      <IconBrandCss3 />
                    </span>
                    <span className="mb-2 mr-2 inline-block w-fit rounded-full bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-700">
                      <IconBrandJavascript />
                    </span>
                    <span className="mb-2 mr-2 inline-block w-fit rounded-full bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-700">
                      <IconBrandNodejs />
                    </span>
                    <span className="mb-2 inline-block  w-fit rounded-full bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-700">
                      <IconBrandReact />
                    </span>
                  </>
                }
              />
            </div>

            <div className="flex w-full  justify-end  lg:ml-[5rem] 2xl:m-0">
              <Card
                url={"../landingpagered.png"}
                link={"https://landingpagered.netlify.app/"}
                titulo={"Landing Page Red"}
                descripcion={
                  "Página web realizada de un diseño proporcionado utilizando HTML, CSS, Tailwind como frameword de CSS Y JS."
                }
                tecnologias={
                  <>
                    <span className="mb-2  mr-2 inline-block w-fit rounded-full bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-700">
                      <IconBrandHtml5 />
                    </span>

                    <span className="mb-2 mr-2 inline-block w-fit rounded-full bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-700">
                      <IconBrandCss3 />
                    </span>
                    <span className="mb-2 mr-2 inline-block w-fit rounded-full bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-700">
                      <IconBrandJavascript />
                    </span>
                    <span className="mb-2 mr-2 inline-block w-fit rounded-full bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-700">
                      <IconBrandTailwind />
                    </span>
                  </>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
