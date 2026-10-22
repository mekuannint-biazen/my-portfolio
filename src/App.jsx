import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import AboutMe from "@/sections/AboutMe";
import { Projects } from "@/sections/Projects";
import Services from "@/sections/Services";
import Skills from "./sections/Skills";
import Hobbies from "@/sections/Hobbies";
import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
    

      <main>
        <Hero />
        <AboutMe />
        <Projects />
        <Services />
        <Skills />
        <Hobbies />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;