import React from "react";
import Link from "next/link";
import Image from "next/image";

const Teachers = () => {
  return (
    <div className="flex flex-col items-center mt-8">
      <h1 className="text-3xl font-bold underline uppercase transition duration-300 ease-in-out delay-150 hover:-translate-y-4">
        Our teachers{" "}
      </h1>
      <div className="flex flex-row space-x-9 justify-even">
        <div className="flex flex-col items-center w-64 pb-10 border mt-9">
          <Image
            className="w-24 mb-3 rounded-full shadow-lg "
            src={"/assets/bonnie.jpg"}
            width={1000}
            height={1000}
            alt="Bonnie image"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Bonnie Gatimu
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Headteacher
          </span>
        </div>
        <div className="flex flex-col items-center w-64 pb-10 border mt-9">
          <Image
            className="w-24 mb-3 rounded-full shadow-lg "
            src={"/assets/bonnie.jpg"}
            width={1000}
            height={1000}
            alt="Bonnie image"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Bonnie Gatimu
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Headteacher
          </span>
        </div>
        <div className="flex flex-col items-center w-64 pb-10 border mt-9">
          <Image
            className="w-24 h-24 mt-3 rounded-full shadow-lg "
            src={"/assets/bonnie.jpg"}
            width={1000}
            height={1000}
            alt="Bonnie image"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Bonnie Gatimu
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Headteacher
          </span>
        </div>
        <div className="flex flex-col items-center w-64 pb-10 border mt-9">
          <Image
            className="w-24 mb-3 rounded-full shadow-lg "
            src={"/assets/bonnie.jpg"}
            width={1000}
            height={1000}
            alt="Bonnie image"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Bonnie Gatimu
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Headteacher
          </span>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
