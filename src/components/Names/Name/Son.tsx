import { Popover, Transition } from "@headlessui/react";

const Son = () => {
  return (
    <Popover className="relative">
      <Popover.Button className="mr-2 inline-flex items-center rounded-lg p-1 text-center text-sm font-medium text-red-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6 hover:fill-red-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
        <span className="sr-only">{"Marker my son's name"}</span>
      </Popover.Button>
      <Popover.Overlay className="fixed inset-0 backdrop-blur-sm" />

      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Popover.Panel className="absolute z-10">
          <div className="w-32 rounded-md border border-gray-600 bg-white p-2">
            Nome do meu filho!
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};
export default Son;
