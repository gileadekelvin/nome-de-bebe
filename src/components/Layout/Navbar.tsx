import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";

const Navbar = () => {
  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-50 border-b-2 border-gray-600 bg-gray-800 bg-[#EEEBE8]"
    >
      <>
        <div className="mx-auto max-w-7xl px-2 px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-stretch justify-start">
              <a
                key="main"
                href="#"
                className="text-lg font-bold text-gray-900"
              >
                Nome de bebê
              </a>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <a
                key="about"
                href="#"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-700 hover:text-white"
              >
                Sobre
              </a>
            </div>
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Navbar;
