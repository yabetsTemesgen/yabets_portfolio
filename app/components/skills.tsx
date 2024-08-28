import React from "react";

import next from "../assets/next.png";
import nuxt from "../assets/nuxt.png";
import react from "../assets/react.png";
import vue from "../assets/vue.png";
import figma from "../assets/figma.png";
import langchain from "../assets/langchain.png";
import python from "../assets/python.png";
import ollama from "../assets/ollama.png";
import git from "../assets/git.png";
import flask from "../assets/flask.png";
import node from "../assets/node.png";
import express from "../assets/express.png";
import nest from "../assets/nestjs.png";
import firebase from "../assets/firebase.png";
import docker from "../assets/docker.png";
import postresql from "../assets/postgresql.png";
import mysql from "../assets/mysql.png";
import mongo from "../assets/mongo.png";
import prisma from "../assets/prisma.png";
import chroma from "../assets/chroma.png";
import Image, { StaticImageData } from "next/image";

type Tech = {
  id: number;
  src: StaticImageData;
  title: string;
  style: string;
};

const Skills: React.FC = () => {
  const techs: Tech[] = [
    {
      id: 1,
      src: next,
      title: "Next.Js",
      style: "shadow-gray-900",
    },
    {
      id: 2,
      src: nuxt,
      title: "Nuxt.Js",
      style: "shadow-green-500",
    },
    {
      id: 3,
      src: react,
      title: "React.Js",
      style: "shadow-blue-500",
    },
    {
      id: 4,
      src: vue,
      title: "Vue.Js",
      style: "shadow-green-500",
    },
    {
      id: 5,
      src: figma,
      title: "Figma",
      style: "shadow-blue-500",
    },
    {
      id: 6,
      src: langchain,
      title: "Langchain",
      style: "shadow-lime-400",
    },
    {
      id: 7,
      src: python,
      title: "Python",
      style: "shadow-yellow-700",
    },
    {
      id: 8,
      src: ollama,
      title: "Ollama",
      style: "shadow-gray-900",
    },
    {
      id: 9,
      src: git,
      title: "Git",
      style: "shadow-orange-500",
    },
    {
      id: 10,
      src: flask,
      title: "Flask",
      style: "shadow-gray-500",
    },
    {
      id: 11,
      src: node,
      title: "Node.Js",
      style: "shadow-green-400",
    },
    {
      id: 12,
      src: express,
      title: "Express.Js",
      style: "shadow-gray-700",
    },
    {
        id: 13,
        src: nest,
        title: "Nest.Js",
        style: "shadow-red-700",
      },
      {
        id: 14,
        src: firebase,
        title: "Firebase",
        style: "shadow-yellow-700",
      },
      {
        id: 15,
        src: docker,
        title: "Docker",
        style: "shadow-blue-700",
      },
      {
        id: 16,
        src: postresql,
        title: "PostgreSQL",
        style: "shadow-blue-700",
      },
      {
        id: 17,
        src: mysql,
        title: "MySQL",
        style: "shadow-yellow-700",
      },
      {
        id: 18,
        src: mongo,
        title: "MongoDB",
        style: "shadow-gray-700",
      },
      {
        id: 19,
        src: prisma,
        title: "Prisma",
        style: "shadow-gray-700",
      },
      {
        id: 20,
        src: chroma,
        title: "ChromaDB",
        style: "shadow-gray-700",
      }
  ];

  return (
    <div
      id="Skills"
      className="bg-[#F3F3F1] w-full min-h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-primary pt-32 ">
        <div className="text-center">
          <p className="text-4xl xl:text-5xl font-bold p-2 inline justify-center pb-10">
            Skills
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <Image src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
