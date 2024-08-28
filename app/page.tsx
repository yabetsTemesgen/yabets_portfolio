import Image from "next/image";
import HomeComponent from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Footer from "./components/footer";
export default function Home() {
  return (
   <>
   <HomeComponent />
   <About />
   <Projects />
   <Skills />
   <Footer />
   </>
  );
}
