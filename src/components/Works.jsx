import Card from "./Card";
import {
  IconBrandCss3,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandReact,
} from "@tabler/icons-react";

export default function Works() {
  const url = [
    {
      id: 1,
      url: "",
    },
    {
      id: 2,
      url: "",
    },
    {
      id: 3,
      url: "",
    },
  ];

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
                link={"https://brilliant-moxie-cb8520.netlify.app/"}
                titulo={"Cafeteria"}
                descripcion={
                  "Pagina web toma de pedidos cafeteria, almacenamiento en localstorage "
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
                      <IconBrandReact />
                    </span>
                  </>
                }
              />
            </div>

            <div className="flex w-full  justify-end lg:ml-20 2xl:m-0">
              <Card
                url={"../work2.png"}
                link={
                  "https://lacasadelacontabilidadespecializada.netlify.app/"
                }
                titulo={"La casa de la contabilidad especializada"}
                descripcion={
                  "Pagina web informativa de las normativas de los sectores de El Salvador."
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-brand-astro"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M14.972 3.483c.163 .196 .247 .46 .413 .987l3.64 11.53a15.5 15.5 0 0 0 -4.352 -1.42l-2.37 -7.723a.31 .31 0 0 0 -.296 -.213a.31 .31 0 0 0 -.295 .214l-2.342 7.718a15.5 15.5 0 0 0 -4.37 1.422l3.657 -11.53c.168 -.527 .251 -.79 .415 -.986c.144 -.172 .331 -.306 .544 -.388c.242 -.094 .527 -.094 1.099 -.094h2.612c.572 0 .858 0 1.1 .094c.213 .082 .4 .217 .545 .39" />
                        <path d="M9 18c0 1.5 2 3 3 4c1 -1 3 -3 3 -4q -3 1.5 -6 0" />
                      </svg>
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
