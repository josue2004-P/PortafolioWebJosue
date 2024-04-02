export default function About() {
  const titulo = "<¿Quien soy?/>";

  return (
    <section
      id="about"
      className="relative z-10 flex justify-center bg-[#2E3532]  text-texto lg:h-screen"
    >
      <div className="my-20 grid w-[80%] lg:mt-[4rem] lg:grid-cols-2">
        <div className="">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold md:text-5xl">
              <span className="text-titulo">{titulo}</span>
            </h1>
            <div>
              <p className="mt-14 font-medium md:text-xl ">
                Soy Josue Perez Eulogio, desarrollador full stack enfocado en el
                Front End con mas de un año de experiencia en tecnologías como React,
                Express y JavaScript.
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
        </div>

        <div className="pl-20 hidden justify-center  lg:ml-10 lg:flex lg:items-center">
          <div className="max-[450px]:flex max-[450px]:justify-end lg:w-[560px]">
            <div className="max-[450px]:mt-10 max-[450px]:justify-self-end max-[450px]:pr-10 lg:col-span-6 lg:mt-0 lg:flex">
              <div className="home__img relative">
                <div className="absolute -right-2 top-14 flex h-16 w-16 items-center justify-center rounded-full bg-[#6793c9] xl:right-4 xl:top-14">
                  <i className="fa-brands fa-react text-4xl font-semibold text-[#2E3532]"></i>
                </div>

                <div className="absolute bottom-0 right-24 flex h-16 w-16 items-center justify-center rounded-full bg-[#6793c9] xl:bottom-0 xl:right-36">
                  <i className="fa-brands fa-html5 text-4xl font-semibold text-[#2E3532] "></i>
                </div>

                <div className="absolute flex h-16 w-16 items-center justify-center rounded-full bg-[#6793c9] lg:bottom-10 lg:left-9 xl:bottom-14 xl:left-20">
                  <i className="fa-brands fa-css3-alt text-4xl font-semibold text-[#2E3532]"></i>
                </div>

                <div className="absolute flex h-16 w-16 items-center justify-center rounded-full bg-[#6793c9] lg:top-12 xl:left-20 xl:top-10">
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
