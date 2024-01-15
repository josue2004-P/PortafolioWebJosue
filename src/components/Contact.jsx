import { IconBrandFacebook, IconPhone } from "@tabler/icons-react";
import { IconMail } from "@tabler/icons-react";

export default function Contact() {
  return (
    <div id="contact" className="z-10  relative py-10">
      <div className="skill_title text-center pb-20" id="contact">
        <h1 className="text-4xl font-extrabold tracking-tight leading-tight text-titulo">
          Contact
        </h1>
      </div>

      <section className="contact  dark:bg-gray-900 ">
        <div className="lg:flex justify-center gap-10">
          <div className="flex justify-center">
            <form className="w-[20rem] text-texto">
              <div className="mb-6">
                <label  className="block mb-2 text-sm font-medium">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-[#243856] border border-[#6793c9]  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="name@email.com"
                  required
                />
              </div>
              <div className="mb-6">
                <label  className="block mb-2 text-sm font-medium ">
                  Name
                </label>
                <input
                  placeholder="name"
                  id="password"
                  className="shadow-sm bg-[#243856] border border-[#6793c9]  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium ">
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm  bg-[#243856] rounded-lg border border-[#6793c9] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="relative rounded-lg inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-100  group bg-gradient-to-br from-[#6793c9] to-[#325c97] group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 "
                >
                  <span className="rounded-md relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#243856]  group-hover:bg-opacity-0">
                    Contact Me
                  </span>
                </button>
              </div>
            </form>
          </div>
          <div className="xl:ml-16 mt-10 lg:mt-0">
            <div className="text-center mb-10">
              <div className="flex justify-center">
                <p className="bg-[#6793c9] text-texto p-2 rounded-md mb-4">
                  <IconPhone />
                </p>
              </div>
              <div>
                <p className="mb-1 text-xl text-titulo font-bold tracking-tight">Celular:</p>
                <p className="text-sm tracking-tight text-texto font-medium">2841022581</p>
              </div>
            </div>

            <div className="text-center mb-10">
              <div className="flex justify-center">
                <p className="bg-[#6793c9] text-texto p-2 rounded-md mb-4">
                  <IconMail />
                </p>
              </div>
              <div>
                <p className="mb-1 text-titulo text-xl font-bold tracking-tight">Correo:</p>
                <p className="text-sm tracking-tight text-texto font-medium">
                  josuepe03@hotmail.com
                </p>
              </div>
            </div>
            <div className="text-center mb-10">
            <div className="flex justify-center">
                <p className="bg-[#6793c9] text-texto p-2 rounded-md mb-4">
                  <IconBrandFacebook />
                </p>
              </div>
              <div>
                <p className="mb-1 text-titulo text-xl font-bold tracking-tight">Facebook:</p>
                <p className="text-sm tracking-tight text-texto font-medium">Josue Perez</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
