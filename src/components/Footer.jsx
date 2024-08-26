import {
  IconBrandDiscord,
  IconBrandFacebook,
  IconBrandGithub,
} from "@tabler/icons-react";
export default function Footer() {
  return (
    <footer id="footer" className="relative  z-10 w-full   ">
      <div className="mx-auto w-full p-4 py-6 lg:py-8">
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm font-medium text-texto sm:text-center dark:text-gray-400">
            © Josue Perez 2023
          </span>
          {/* <div className="mt-4 flex space-x-5 sm:mt-0 sm:justify-center">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <IconBrandFacebook />
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <IconBrandDiscord />
              <span className="sr-only">Discord community</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <IconBrandGithub />
              <span className="sr-only">GitHub account</span>
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
