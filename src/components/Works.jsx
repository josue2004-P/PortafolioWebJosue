import Card from "./Card";

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
                url={
                  "https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_1280.png"
                }
              />
            </div>

            <div className="flex w-full  justify-end lg:ml-20 2xl:m-0">
              <Card
                url={
                  "https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_1280.png"
                }
              />
            </div>
            <div className="flex w-full  justify-end lg:-ml-[8rem] 2xl:m-0">
              <Card
                url={
                  "https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_1280.png"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
