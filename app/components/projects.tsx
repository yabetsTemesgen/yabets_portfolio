"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import covercraft from "../assets/covercraft.png";
import pdfchatify from "../assets/pdfchatify.png"
import pdftoexcel from "../assets/pdftoexcel1.jpg"
import drive from "../assets/drive.png"
import ocr from "../assets/OCR.jpg"
import betrbeta from "../assets/betrbeta.png"
import rnm from "../assets/rnm.png"
import merchant from "../assets/merchant.png"
import autohub from "../assets/autohub.png"



interface Project {
  image: StaticImageData;
  name: string;
  description: string;
  tools?: string;
  website?: string;
  github?: string;
  additionalImage?: string;
}

const projects: Project[] = [
  {
    image: covercraft,
    name: "Covercraft AI",
    description:
      "Covercraft AI is a cutting-edge tool that simplifies the job application process. It accepts a resume PDF and a job description PDF as inputs, then automatically crafts a customized cover letter tailored to the job. ",
    tools: "Next.js, Flask, RAG, LLM, Ollama, ChromaDB, langchain, Tailwindcss"
  },
  {
    image: pdfchatify,
    name: "Pdf Chatify",
    description: "Pdf Chatify is an advanced tool designed to enhance document interaction. It accepts a PDF as input, extracts the text, and stores it in a database. Once the text is stored, Pdf Chatify enables users to ask questions related to the content of the PDF, providing accurate answers based on the extracted information.",
    tools: "Next.js, Flask, RAG, LLM, Ollama, ChromaDB, langchain, Tailwindcss"
  }
  ,
  {
    image: pdftoexcel,
    name: "Pdf to Excel",
    description: "PDF to Excel is a powerful tool designed to convert PDF documents into structured Excel files. It extracts tables from the PDF, processes the extracted text using OpenAI, and generates a clean, organized Excel file. This tool simplifies data extraction, making it easy to work with tabular information from PDFs in a more accessible format like Excel.",
    tools: "Python, RAG, LLM, OpenAI, ChromaDB, langchain"
  }
  ,
  {
    image: rnm,
    name: "Release notes manager",
    description: "Betr Beta is a startup based in Singapore that deploys AI powered solutions for digital transformation. They mainly provide two solutions: priority update android app and Release notes manager. RNM is SaaS product of Betr beta that enables users to customise release notes online. I participated in the frontend development of the product",
    tools: "Next.js, Tailwindcss"
  }
  ,
  {
    image: merchant,
    name: "Loyalty Program",
    description: "Loyalty program is a dynamic loyalty program designed to empower merchants to enhance customer engagement and retention. With loyalty program, merchants can easily add users, assign points for purchases or interactions, and reward loyal customers with exclusive perks and offers. The program provides a seamless way to track customer activity.",
    tools: "Nuxt.js,Vue.js, Vuex,Tailwindcss"
  }
  ,
  {
    image: betrbeta,
    name: "Betr Beta",
    description: "Betr Beta is a startup based in Singapore that deploys AI powered solutions for digital transformation.Their tools empower users worldwide to achieve more. faster and cheaper. I worked there as a JavaScript developer and participated in the development of the company website",
    tools: "Next.js, Firebase, Chakra UI, Tailwindcss"
  }
  ,
  {
    image: ocr,
    name: "Pen2Sheet",
    description: "Pen2Sheet is an innovative solution designed to transform handwritten tables into digital spreadsheets effortlessly. Using advanced AI-powered recognition, Pen2Sheet scans handwritten data, processes it with OpenAI's capabilities, and converts it into well-organized Excel files. This tool eliminates the hassle of manual data entry, ensuring accurate and efficient digitization of handwritten information, making data management and analysis quicker and more accessible.",
    tools: "Python, OCR Engine, OpenAI, LLM, ChromaDB, langchain"
  }
  ,
  {
    image: drive,
    name: "DLMS",
    description: "DLMS is a comprehensive tool designed to manage the entire driving training process. It helps instructors and trainees track progress through a structured curriculum, schedule lessons, and monitor skill development.With features like progress reports, milestone tracking, and certification management, DLMS ensures a smooth and efficient path from learner to licensed driver",
    tools: "Next.js, Express.Js, MySQL, Node.Js and Tailwindcss"
  }
  ,
  {
    image: autohub,
    name: "AutoHub",
    description: "AutoHub is a sleek and user-friendly car dealership website designed to provide customers with a seamless car-buying experience. It offers a comprehensive inventory of new and pre-owned vehicles, complete with detailed descriptions, high-quality images, and pricing information.",
    tools: "Nuxt.js, Vue.js, Vuex, Tailwindcss,Express, Node.Js, MongoDB"
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  const handleImageClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleSeeMore = () => {
    setShowAll(true);
  }; 

  const projectsToDisplay = showAll ? projects : projects.slice(0, 6);

  return (
    <div id="Projects" className="bg-primary h-auto w-full">
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold mt-10 text-primary-light">Projects</h1>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20 lg:mx-44">
  {projectsToDisplay.map((project, index) => (
    <div
      key={index}
      className="rounded-lg shadow hover:scale-105 transition-transform duration-300"
    >
      <Image
        src={project.image}
        alt={`Project ${index + 1}`}
        width={1000}
        height={1000}
        className="w-full h-full rounded-lg cursor-pointer"
        onClick={() => handleImageClick(project)}
      />
    </div>
  ))}
</div>

      </div>
      <div className="flex flex-row items-center justify-center p-6">
        {!showAll && (
          <button
            onClick={handleSeeMore}
            className="rounded-lg bg-secondary px-6 py-3 text-primary transition duration-300"
          >
            View More
          </button>
        )}
      </div>
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-11/12 max-w-5xl relative">
            <button
              className="absolute top-2 right-2 text-2xl font-bold text-primary"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <h2 className="text-2xl text-primary font-bold mb-4">{selectedProject.name}</h2>
            <p className="mb-4 text-primary">{selectedProject.description}</p>
            <p className="mb-4 text-primary">Tools: {selectedProject.tools}</p>
            <div
              className={`flex ${
                selectedProject.additionalImage ? "md:flex-row" : "flex-col"
              } gap-4 mb-4`}
            >
              <img
                src={selectedProject.image.src}
                alt={selectedProject.name}
                className={`w-full ${
                  selectedProject.additionalImage ? "md:w-1/2" : "md:w-full"
                } h-auto rounded-lg`}
              />
              {selectedProject.additionalImage && (
                <img
                  src={selectedProject.additionalImage}
                  alt={`Additional for ${selectedProject.name}`}
                  className="w-full md:w-1/2 h-auto rounded-lg"
                />
              )}
            </div>
            <div className="flex justify-center md:justify-end gap-4">
              {selectedProject.website && (
                <a
                  href={selectedProject.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-black rounded-full hover:bg-gray-100 transition duration-300"
                >
                  Website
                </a>
              )}
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-black rounded-full hover:bg-gray-100 transition duration-300"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
