import Card from "./Card";
import {
  IconBrandCss3,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandLaravel,
  IconBrandMongodb,
  IconBrandMysql,
  IconBrandNodejs,
  IconBrandReact,
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
                link={"https://laravel-railway-production-3741.up.railway.app/"}
                titulo={"D&A Software R"}
                descripcion={
                  "Sitio web sobre empresa dedicada al desarollo de aplicaciones moviles y webs."
                }
                tecnologias={
                  <>
                    <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                      <IconBrandHtml5 />
                    </span>

                    <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                      <IconBrandCss3 />
                    </span>
                    <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                      <IconBrandJavascript />
                    </span>
                    <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                      <IconBrandLaravel />
                    </span>
                  </>
                }
              />
            </div>

            <div className="flex w-full  justify-end lg:ml-20 2xl:m-0">
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
                    <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                      <IconBrandHtml5 />
                    </span>

                    <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                      <IconBrandCss3 />
                    </span>
                    <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                      <IconBrandJavascript />
                    </span>

                    <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                      <IconBrandNodejs />
                    </span>
                    <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                      <IconBrandMongodb />
                    </span>
                  </>
                }
              />
            </div>

            <div className="flex w-full  justify-end lg:-ml-16 2xl:m-0">
              <Card
                url={"../work3.png"}
                link={
                  "https://marvelous-wisp-9be2ca.netlify.app/"
                }
                titulo={"Sistema de restaurante JossSnak"}
                descripcion={
                  "Sistema de restaurante enfocado en la creacion de pedidos hasta su carrito de compras."
                }
                tecnologias={
                  <>
                    <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                      <IconBrandHtml5 />
                    </span>

                    <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                      <IconBrandCss3 />
                    </span>
                    <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                      <IconBrandJavascript />
                    </span>
                    <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                      <IconBrandNodejs />
                    </span>
                    <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                      <IconBrandMysql />
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
