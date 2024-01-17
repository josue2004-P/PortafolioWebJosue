// Import Swiper styles
import "../css/swiper.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay } from "swiper/modules";

export default function Testimonios() {
  return (
    <section id="testimonios" className="relative z-10 py-[10rem]">
      <div className=" bg-[#243856] dark:bg-gray-900">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-16">
              <figure className="mx-auto max-w-screen-md">
                <svg
                  className="mx-auto mb-3 h-12 text-titulo dark:text-gray-600"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote>
                  <p className="text-2xl font-medium text-texto">
                    "Excelente trabajo."
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-center space-x-3">
                  <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <div className="pr-3 font-medium text-[#6793c9] dark:text-white">
                      Arnold Morales
                    </div>
                    <div className="pl-3 text-sm font-light text-texto dark:text-gray-400">
                      Ing. Ciberseguridad
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-16">
              <figure className="mx-auto max-w-screen-md">
                <svg
                  className="mx-auto mb-3 h-12 text-titulo dark:text-gray-600"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote>
                  <p className="text-2xl font-medium text-texto">
                    "Josue Pitudo."
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-center space-x-3">
                  <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <div className="pr-3 font-medium text-[#6793c9] dark:text-white">
                      Arnold Morales
                    </div>
                    <div className="pl-3 text-sm font-light text-texto dark:text-gray-400">
                      Ing. Ciberseguridad
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
