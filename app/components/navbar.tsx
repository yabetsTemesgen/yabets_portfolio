"use client"
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.png"; // Adjust the path as needed

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "Home" },
    { id: 2, link: "About" },
    { id: 3, link: "Projects" },
    { id: 4, link: "Skills" },
    { id: 6, link: "Contact" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 lg:px-28 mb-10 text-primary-light fixed lg:text-xl bg-primary">
      <div>
        <Link scroll href="#home">
            <Image
              src={logo}
              alt="Logo"
              width={100}
              height={100}
              className="rounded-4xl"
            />
        </Link>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-primary-light hover:scale-105 duration-200 scroll-smooth"
          >
            <Link scroll href={`#${link}`}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-primary-light md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen text-primary-light lg:hidden bg-primary">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-2xl"
            >
              <Link href={`#${link}`} onClick={() => setNav(!nav)}>
                {link}

              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
