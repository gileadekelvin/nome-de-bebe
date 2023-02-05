import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/logo.png";

const Navbar = () => {
  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-50 w-full border-b border-black bg-[#fafafa]"
    >
      <div className="mx-auto px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-row justify-start md:pl-32">
            <Image src={logo} alt="Logo" width={32} />
            <Link
              key="main"
              href="/"
              className="text-2xl font-bold text-gray-900 pl-2"
            >
              Nome de bebê
            </Link>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Link
              key="about"
              href="/about"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:bg-black hover:text-white"
            >
              Sobre
            </Link>
          </div>
        </div>
      </div>
    </Disclosure>
  );
};

export default Navbar;
