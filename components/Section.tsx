import React from "react";
import Link from "next/link";
import Image from "next/image";
import image6 from "@/public/assets/pictures/image6.jpg";

const Section = () => {
  return (
    <div className="p-5 mt-3 py-7">
      <div className="p-4 text-center transition duration-150 ease-in-out delay-300 border rounded-lg shadow sm:p-8 hover:border-gray-200 hover:-translate-y-4">
        <h1 className="text-3xl font-bold uppercase animate-bounce ">
          welcome to ST Anthony high school{" "}
        </h1>

        <p className="mb-5 text-base font-bold sm:text-lg">
          🎓 Welcome to St. Anthony School! 🎉 At St. Anthony School, we are
          more than just an educational institution; we are a vibrant community
          dedicated to nurturing young minds, fostering creativity, and shaping
          future leaders. As you embark on this journey with us, know that you
          are joining a family that is committed to providing a supportive and
          enriching environment where every student can thrive academically,
          socially, and personally. Our dedicated faculty and staff are here to
          guide and inspire you every step of the way. Whether you're exploring
          new subjects, participating in extracurricular activities, or engaging
          in community service, we encourage you to embrace every opportunity
          for growth and discovery. Together, let's create memories, celebrate
          achievements, and build a brighter future. Welcome to St. Anthony
          School, where excellence meets opportunity!
        </p>
        <div className="flex justify-center w-full mt-10 transition duration-300 ease-in-out delay-150 hover:-translate-y-4">
        <Link
          href="#"
          className="flex flex-col items-center border rounded-lg shadow md:flex-row md:max-w-xl hover:border-gray-200"
        >
          <Image
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src={image6}
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight uppercase dark:text-white?">
              why do we exist?
            </h5>
            <p className="mb-3 font-bold">
              Education: The primary purpose of St. Anthony High School is to
              provide a comprehensive and rigorous education to its students.
              This education encompasses various subjects, ranging from core
              academic disciplines like mathematics and language arts to
              specialized areas such as arts, sciences, and vocational training.
            </p>
          </div>
        </Link>
      </div>
      </div>

      
    </div>
  );
};

export default Section;
