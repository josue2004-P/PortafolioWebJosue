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
    <div className="relative flex max-w-xs md:max-w-xl justify-center" >
      <div className="grid grid-cols-1 -gap-10 rounded-2xl md:grid-cols-2 md:bg-[#243856] " >
        <img
          src={url}
          alt=""
          className="w-full md:w-[17rem] md:h-full lg:w-[25rem] rounded-t-2xl md:rounded-t-none  md:rounded-s-2xl "
        />

        <div className="bg-[#243856]  md:w-[18rem] rounded-b-2xl md:rounded-r-2xl py-3 px-3">
          <div className="text-lg text-titulo font-bold ">
            <h1>Tecnologias</h1>
            <div className="grid grid-cols-4 mt-2 w-full text-texto">
              <IconBrandHtml5 className="ml-2" size={25} />
              <IconBrandCss3 className="ml-2" size={25} />
              <IconBrandJavascript className="ml-2" size={25} />
              <IconBrandReact className="ml-2" size={25} />
            </div>
          </div>
          <div className=" text-titulo font-bold mt-4 pr-2">
            <h1 className="text-lg mb-2">Descripcion</h1>
            <p className="text-sm font-medium text-texto">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime,
              error?
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 text-gray-300 text-sm font-medium absolute bottom-14 -right-6">
        <div className="flex  items-center mr-2">
          <button className="flex bg-[#4376b4] py-2 px-2 rounded-full">
            <p className="">
              <IconPlayerPlayFilled className="" size={20} />
            </p>
          </button>
        </div>
        <div className="flex items-center">
          <button className="flex bg-[#4376b4] py-2 px-2 rounded-full">
            <p className="">
              <IconBrandGithubFilled className="" size={20} />
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
