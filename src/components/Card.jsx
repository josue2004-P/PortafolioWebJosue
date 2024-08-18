
export default function Card({ url, link, titulo, descripcion,tecnologias }) {
  return (
    <div className="max-w-xs overflow-hidden rounded bg-[#243856] shadow-lg">
      <img className="w-full" src={url} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">
          <h1 className="text-2xl text-gray-400">{titulo}</h1>
        </div>
        <p className="text-[14px] text-gray-200">{descripcion}</p>
      </div>

      <div className="px-6 pb-2 pt-4">

        {tecnologias}

      </div>
      <div className="px-6 pb-4">
        <a
          href={link}
          className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Ver demo
          <svg
            className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
