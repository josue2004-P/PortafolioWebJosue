import {
  IconBrandGithubFilled,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconPhone,
} from "@tabler/icons-react";
import { IconMail } from "@tabler/icons-react";

export default function Contact() {
  return (
    <div id="contact" className="relative  z-10 py-10">
      <div className="">
        <section className="mb-32">
          <div className="relative h-[300px] overflow-hidden bg-[url('https://mdbcdn.b-cdn.net/img/new/textures/full/171.jpg')] bg-cover bg-[50%] bg-no-repeat"></div>
          <div className=" flex justify-center px-6 md:px-12">
            <div
              className="-mt-[100px] block rounded-lg px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] md:px-12 md:py-16"
              id="testimonios1"
            >
              <div className=" grid gap-x-6 md:grid-cols-2 lg:grid-cols-5">
                <div className="mx-auto mb-12 text-center lg:mb-0">
                  <div className="flex justify-center">
                    <IconMail className="mb-4 text-titulo" size={35} />
                  </div>
                  <h6 className="font-medium text-texto">
                    josueperezeulogio3@gmail.com
                  </h6>
                </div>
                <div className="mx-auto mb-12 text-center lg:mb-0">
                  <div className="flex justify-center">
                    <IconPhone className="mb-4 text-titulo " size={35} />
                  </div>
                  <h6 className="font-medium text-texto">284 - 102 - 2581</h6>
                </div>
                <div className="mx-auto mb-12 text-center lg:mb-0">
                  <div className="flex justify-center">
                    <IconBrandWhatsapp className="mb-4 text-titulo " size={35} />
                  </div>
                  <h6 className="font-medium text-texto">284 - 102 - 2581</h6>
                </div>
                <div className="mx-auto mb-6 text-center md:mb-0">
                  <div className="flex justify-center">
                    <IconBrandLinkedin className="mb-4 text-titulo" size={35} />
                  </div>
                  <a href="https://www.linkedin.com/in/josuepedev" className="font-medium text-texto  hover:text-gray-400">Josue Perez</a>
                </div>
                <div className="mx-auto text-center">
                  <div className="flex justify-center">
                    <IconBrandGithubFilled
                      className="mb-4 text-texto"
                      size={35}
                    />
                  </div>
                  <a
                    href="https://github.com/josue2004-P"
                    className="font-medium text-texto hover:text-gray-400"
                  >
                    josue2004-P
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
