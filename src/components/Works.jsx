import Card from "./Card";

export default function Works() {
  return (
    <div
      id="works"
      className="z-10 relative  flex justify-center items-center  pb-20"
    >
      <div className="w-11/12 rounded-3xl pb-10" id="work">
        <h2 className="mb-8 text-4xl mt-10 font-extrabold tracking-tight leading-tight text-center md:text-5xl">
          <span className="text-titulo ">Works</span>
        </h2>

        <div className=" w-full flex justify-center items-center mt-20">
          <div className="grid 2xl:grid-cols-2 gap-14 px-3 lg:px-0 lg:gap-[2rem] 2xl:gap-[2rem]">
            <div className="flex justify-end  w-full  lg:-ml-[10rem] 2xl:m-0">
              <Card
                url={
                  "https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_1280.png"
                }
              />
            </div>

            <div className="flex justify-end  w-full lg:ml-20 2xl:m-0">
              <Card
                url={
                  "https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_1280.png"
                }
              />
            </div>
            <div className="flex justify-end  w-full lg:-ml-[8rem] 2xl:m-0">
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
