import { Disclosure } from "@headlessui/react";
import Link from "next/link";

const Navbar = () => {
  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-50 w-full border-b border-black bg-[#fafafa]"
    >
      <div className="mx-auto px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-stretch justify-start">
            <Link
              key="main"
              href="/"
              className="md:pl-32 text-2xl font-bold text-gray-900"
            >
              Nome de bebê
            </Link>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <a
              key="about"
              href="#"
              className="rounded-sm px-3 py-2 text-sm font-medium text-gray-900 hover:bg-black hover:text-white"
            >
              Sobre
            </a>
          </div>
        </div>
      </div>
    </Disclosure>
  );
};

export default Navbar;
