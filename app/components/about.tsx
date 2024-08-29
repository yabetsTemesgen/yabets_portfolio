import React from 'react';
import Image from 'next/image';
import last from "../assets/last.png";
import Link from 'next/link';

const About = () => {
  return (
    <div id="About" className="mx-auto p-4 md:p-8 sm:h-auto w-full bg-primary-light">
      <div className="bg-white mx-auto my-auto shadow-lg overflow-hidden h-auto xl:border xl:border-secondary justify-center align-center lg:m-28">
        <div className="flex flex-col xl:flex-row lg:gap-20">
          <div className="xl:flex-shrink-0 w-full xl:w-auto">
            <Image
              src={last}
              alt="Profile picture"
              width={1000}
              height={1000}
              className="w-full object-cover md:w-full xl:w-[500px]"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="tracking-wide text-3xl md:text-5xl text-primary font-bold">About Me</div>
            <p className="mt-4 text-primary md:text-2xl text-left w-full">
              Hello! I&#39;m Yabets Temesgen,
              A passionate Full Stack Developer based in Addis Ababa, Ethiopia, with a strong focus on creating
              innovative, AI-driven solutions. My expertise spans both Frontend and Backend development,
              and I&#39;m particularly skilled in Retrieval-Augmented Generation (RAG) tech that
              leverages large language models to deliver smart, data-driven applications.
            </p>
            <div className="items-center md:items-start flex flex-col sm:flex-row gap-5 mt-5 mb-10">
              <Link className='mt-5' href={"https://drive.google.com/file/d/1mW2HwcIBVP2ipQTTLqLXNE6pRsTBcm3z/view?usp=sharing"} download={"Yabets resume"}>
                <button className="bg-primary hover:scale-105 text-secondary font-bold py-3 px-6 rounded w-52">
                  Resume
                </button>
              </Link>
              <Link  className='mt-5'scroll href={'#Contact'}>
                <button className="bg-primary hover:scale-105 text-secondary font-bold py-3 px-6 rounded w-52">
                  Contact
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
