import React from 'react';
// import { Linkedin, InspectionPanel, FastForward, BotMessageSquare } from 'lucide-react';
import linkedin from "../assets/linkedin.png"
import insta from "../assets/insta.png"
import github from "../assets/github.png"
import telegram from "../assets/telegram.png"
import discord from "../assets/discord.png"
import Image,{ StaticImageData } from 'next/image';
import Link from 'next/link';
interface Action {
    image: StaticImageData;
    id: number;
    href: string;
    tools?: string;
  }
  const links:Action[] = [
    {
      id: 1,
      image: insta,
      href: "https://www.instagram.com/yab_tem/",
    },
    {
      id: 2,
      image: linkedin,
      href: "https://www.linkedin.com/in/yabets-temesgen-21384b214/",
    },
    {
        id: 3,
        image: github,
        href: "https://github.com.yabetsTemesgen",
      },
      {
        id: 4,
        image: telegram,
        href: "https://t.me/wipuu_2",
      },
      {
        id: 5,
        image: discord,
        href: "https://discordapp.com/users/8544",
      },
  ];

const Footer = () => {
   
  return (
    <footer id='Contact' className="bg-gray-900 text-white p-6 min-h-[300px] relative">
      
      <div className="flex flex-col text-center md:flex-row justify-between my-32 lg:px-96 gap-16">
        <div>
          <h2 className="text-4xl lg:text-6xl font-bold ">
            Let&#39;s Work <br/> <span className="text-secondary">Together</span>
          </h2>
        </div>
        <div>
          <p className="text-2xl">+251923370652</p>
          <p className="text-2xl ">yabtemesgengmail.com</p>
        </div>
      </div>
      <div className="md:col-span-3 flex space-x-4 justify-center">
      <ul className="flex justify-center">
          {links.map(({ id, image, href }) => (
            <li key={id} className="px-2 ">
               <Link href={href} className="flex hover:scale-105" target="_blank" rel="noreferrer">
                                <Image src={image} alt={`Link ${id}`} width={30} height={30} />
                            </Link>
            </li>
          ))}
        </ul>
        </div>
    </footer>
  );
};

export default Footer;
