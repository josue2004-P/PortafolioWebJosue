export default function About() {
  const titulo = "<About Me/>";

  return (
    <section
      id="about"
      className="relative z-10 bg-[#2E3532] lg:h-screen text-texto  flex justify-center"
    >
      <div className="grid lg:grid-cols-2 w-[80%] my-20 lg:my-[10rem]">
        <div className="">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="text-titulo">{titulo}</span>
            </h1>
            <div>
              <p className="mt-14 md:text-xl font-medium ">
                Yo soy Josue Perez Eulogio, un desarrollador web enfocado en el
                Front End con un año de experiencia en tecnologías como React,
                HTML, CSS y JavaScript.
                <br />
                <br />
                Me he dedicado a la elaboración de proyectos con diseños
                responsivos y de fácil navegación para el usuario, siempre
                enfocado en proporcionar soluciones efectivas.
                <br />
                <br />
                Me mantengo una constante capacitación para mantenerme
                actualizado en las nuevas tecnologías, lo que me permite
                adaptarme fácilmente y aprender de manera eficaz.
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold mt-10">
              <span className="text-titulo">Formacion:</span>
              <p className=" text-xl flex items-center">
                Lic. Sistemas Computacionales (Proceso)
                <i className="hidden sm:flex fa-solid fa-laptop-code ml-2"></i>
              </p>
            </h1>
          </div>
        </div>

        <div className="hidden lg:flex justify-center  lg:items-center ml-3 lg:ml-10">
          <div className="max-[450px]:flex max-[450px]:justify-end lg:w-[560px]">
            <div className="lg:mt-0 lg:col-span-6 max-[450px]:pr-10 max-[450px]:mt-10 lg:flex max-[450px]:justify-self-end">
              <div className="home__img relative">
                <div className="w-16 h-16 rounded-full bg-[#6793c9] absolute top-14 -right-2 xl:top-14 xl:right-4 flex justify-center items-center">
                  <i className="font-semibold text-4xl text-[#2E3532] fa-brands fa-react"></i>
                </div>

                <div className="w-16 h-16 rounded-full bg-[#6793c9] absolute bottom-0 right-24 xl:bottom-0 xl:right-36 flex justify-center items-center">
                  <i className="fa-brands fa-html5 font-semibold text-4xl text-[#2E3532] "></i>
                </div>

                <div className="w-16 h-16 rounded-full bg-[#6793c9] absolute lg:bottom-10 lg:left-9 xl:bottom-14 xl:left-20 flex justify-center items-center">
                  <i className="fa-brands fa-css3-alt font-semibold text-4xl text-[#2E3532]"></i>
                </div>

                <div className="w-16 h-16 rounded-full bg-[#6793c9] absolute lg:top-12 xl:top-10 xl:left-20 flex justify-center items-center">
                  <i className="fa-brands fa-js  text-4xl text-[#2E3532]"></i>
                </div>

                <svg
                  className="home__blob"
                  viewBox="0 0 479 467"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <mask id="mask0" mask-type="alpha">
                    <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
                  </mask>
                  <g mask="url(#mask0)">
                    <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
                    <image
                      className="home__blob-img "
                      x="50"
                      y="60"
                      href="../png.png"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
