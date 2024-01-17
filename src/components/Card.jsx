import {
  IconBrandCss3,
  IconBrandGithubFilled,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandReact,
} from "@tabler/icons-react";
import { IconPlayerPlayFilled } from "@tabler/icons-react";

export default function Card({ url }) {
  return (
    <div className="relative flex max-w-xs justify-center md:max-w-xl">
      <div className="-gap-10 grid grid-cols-1 rounded-2xl md:grid-cols-2 md:bg-[#243856] ">
        <img
          src={url}
          alt=""
          className="w-full rounded-t-2xl md:h-full md:w-[17rem] md:rounded-s-2xl md:rounded-r-none  lg:w-[25rem] "
        />

        <div className="rounded-b-2xl  bg-[#243856] px-3 py-3 md:w-[18rem] md:rounded-r-2xl">
          <div className="text-lg font-bold text-titulo ">
            <h1>Tecnologias</h1>
            <div className="mt-2 grid w-full grid-cols-4 text-texto">
              <IconBrandHtml5 className="ml-2" size={25} />
              <IconBrandCss3 className="ml-2" size={25} />
              <IconBrandJavascript className="ml-2" size={25} />
              <IconBrandReact className="ml-2" size={25} />
            </div>
          </div>
          <div className=" mt-4 px-2 font-bold text-titulo">
            <h1 className="mb-2 text-lg">Descripcion</h1>
            <p className="text-sm font-medium text-texto">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime,
              error?
            </p>
          </div>
        </div>
      </div>

      <div className="absolute right-5 -top-4 flex  text-sm font-medium text-gray-300">
        <div className="mr-2  flex items-center">
          <button className="flex rounded-full bg-[#4376b4] px-2 py-2 mr-2">
            <p className="">
              <IconPlayerPlayFilled className="" size={20} />
            </p>
          </button>
          <button className="flex rounded-full bg-[#4376b4] px-2 py-2">
            <p className="">
              <IconBrandGithubFilled className="" size={20} />
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
