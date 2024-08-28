import React from 'react';
import Image from 'next/image';
import last from "../assets/last.png"
import Link from 'next/link';
const About = () => {
  return (
    <div id="About" className="mx-auto p-4 md:p-8 sm:h-auto w-full bg-primary-light">
      <div className="bg-white mx-auto my-auto shadow-lg overflow-hidden h-auto xl:border xl:border-secondary justify-center align-center lg:m-28">
        <div className="xl:flex lg:gap-20">
          <div className="xl:flex-shrink-0">
            <Image
              src={last}
              alt="Profile picture"
              width={1000}
              height={1000}
              // className="w-full object-cover md:w-64 lg:w-[450px] md:pt-20"
              className='w-full object-cover md:w-full xl:w-[500px]'
            />
          </div>
          <div className="lg:p-28">
            <div className="tracking-wide text-3xl md:text-5xl text-primary font-bold">About Me</div>
            <div>
            <p className="mt-2 text-primary md:text-2xl text-left lg:mr-5">
            Hello! I&#39;m Yabets Temesgen
              A passionate Full Stack Developer based in Addis Ababa, Ethiopia, with a strong focus on creating
              innovative, AI-driven solutions. My expertise spans both Frontend and Backend development,
              and I'm particularly skilled in Retrieval-Augmented Generation (RAG) tech that
              leverage large language models to deliver smart, data-driven applications.
            </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-10">
              <button className="bg-primary hover:scale-105 text-secondary font-bold py-3 px-6 rounded">
              <Link href={"https://drive.google.com/file/d/1mW2HwcIBVP2ipQTTLqLXNE6pRsTBcm3z/view?usp=sharing"} download={"Yabets resume"}>
                Resume
              </Link>
              </button>
              <button className="bg-primary hover:scale-105 text-secondary font-bold py-3 px-6 rounded">
                <Link scroll href={'#Contact'}>
                Contact
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;