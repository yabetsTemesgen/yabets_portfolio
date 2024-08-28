"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import covercraft from "../assets/covercraft.png";
import pdfchatify from "../assets/pdfchatify.png"
import pdftoexcel from "../assets/pdftoexcel.png"

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
    tools: "Next.js, Flask, RAG, LLM, Ollama, ChromaDB, Tailwindcss"
  },
  {
    image: pdfchatify,
    name: "Pdf Chatify",
    description: "Pdf Chatify is an advanced tool designed to enhance document interaction. It accepts a PDF as input, extracts the text, and stores it in a database. Once the text is stored, Pdf Chatify enables users to ask questions related to the content of the PDF, providing accurate answers based on the extracted information.",
    tools: "Next.js, Flask, RAG, LLM, Ollama, ChromaDB, Tailwindcss"
  }
  ,
  {
    image: covercraft,
    name: "Pdf to Excel",
    description: "PDF to Excel is a powerful tool designed to convert PDF documents into structured Excel files. It extracts tables from the PDF, processes the extracted text using OpenAI, and generates a clean, organized Excel file. This tool simplifies data extraction, making it easy to work with tabular information from PDFs in a more accessible format like Excel.",
    tools: "Python, RAG, LLM, OpenAI, ChromaDB"
  }
  ,
  {
    image: pdfchatify,
    name: "Pdf Chatify",
    description: "Pdf Chatify is an advanced tool designed to enhance document interaction. It accepts a PDF as input, extracts the text, and stores it in a database. Once the text is stored, Pdf Chatify enables users to ask questions related to the content of the PDF, providing accurate answers based on the extracted information.",
    tools: "Next.js, Flask, RAG, LLM, Ollama, ChromaDB, Tailwindcss"
  }
  ,
  {
    image: pdfchatify,
    name: "Pdf Chatify",
    description: "Pdf Chatify is an advanced tool designed to enhance document interaction. It accepts a PDF as input, extracts the text, and stores it in a database. Once the text is stored, Pdf Chatify enables users to ask questions related to the content of the PDF, providing accurate answers based on the extracted information.",
    tools: "Next.js, Flask, RAG, LLM, Ollama, ChromaDB, Tailwindcss"
  }
  ,
  {
    image: pdfchatify,
    name: "Pdf Chatify",
    description: "Pdf Chatify is an advanced tool designed to enhance document interaction. It accepts a PDF as input, extracts the text, and stores it in a database. Once the text is stored, Pdf Chatify enables users to ask questions related to the content of the PDF, providing accurate answers based on the extracted information.",
    tools: "Next.js, Flask, RAG, LLM, Ollama, ChromaDB, Tailwindcss"
  }
  ,
  {
    image: pdfchatify,
    name: "Pdf Chatify",
    description: "Pdf Chatify is an advanced tool designed to enhance document interaction. It accepts a PDF as input, extracts the text, and stores it in a database. Once the text is stored, Pdf Chatify enables users to ask questions related to the content of the PDF, providing accurate answers based on the extracted information.",
    tools: "Next.js, Flask, RAG, LLM, Ollama, ChromaDB, Tailwindcss"
  }
  ,
  {
    image: pdfchatify,
    name: "Pdf Chatify",
    description: "Pdf Chatify is an advanced tool designed to enhance document interaction. It accepts a PDF as input, extracts the text, and stores it in a database. Once the text is stored, Pdf Chatify enables users to ask questions related to the content of the PDF, providing accurate answers based on the extracted information.",
    tools: "Next.js, Flask, RAG, LLM, Ollama, ChromaDB, Tailwindcss"
  }
  ,
  {
    image: pdfchatify,
    name: "Pdf Chatify",
    description: "Pdf Chatify is an advanced tool designed to enhance document interaction. It accepts a PDF as input, extracts the text, and stores it in a database. Once the text is stored, Pdf Chatify enables users to ask questions related to the content of the PDF, providing accurate answers based on the extracted information.",
    tools: "Next.js, Flask, RAG, LLM, Ollama, ChromaDB, Tailwindcss"
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
        <h1 className="text-4xl font-bold mt-10">projects</h1>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20 lg:mx-44">
  {projectsToDisplay.map((project, index) => (
    <div
      key={index}
      className="relative border border-secondary rounded-lg shadow hover:scale-105 transition-transform duration-300"
    >
      <Image
        src={project.image}
        alt={`Project ${index + 1}`}
        layout="responsive"
        width={400}
        height={225}
        className="object-cover rounded-lg cursor-pointer"
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
            className="px-10 py-2 border border-black rounded-full hover:bg-gray-100 transition duration-300"
          >
            See More
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
                src={selectedProject.image.src} // If using Next.js Image component, use .src
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
