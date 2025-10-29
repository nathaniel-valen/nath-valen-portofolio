import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Education from "./sections/Education";
import Organization from "./sections/Organization";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      {/* <Navbar /> */}
      <Hero />
      <About />
      <TechStack />
      <Education />
      <Organization />
      <Projects />
      <Contact />
    </main>
  );
}
