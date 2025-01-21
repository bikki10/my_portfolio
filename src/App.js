import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import { useRef, useMemo } from "react";

function App() {
  const navRef = useRef(null);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const refs = useMemo(
    () => ({
      nav: navRef,
      hero: heroRef,
      about: aboutRef,
      experience: experienceRef,
      projects: projectsRef,
      contact: contactRef,
    }),
    []
  );

  return (
    <>
      <div className="overflow-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed inset-0 z-[-10] h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        <div className="container mx-auto px-8 pt-3">
          <Navbar
          ref={navRef}
            scrollToSection={(section) => {
              const target = refs[section]?.current;
              if (target) {
                target.scrollIntoView({ behavior: "smooth" });
              } else {
                console.warn(`Section "${section}" not found.`);
              }
            }}
            sections={Object.keys(refs)}
          />
          <Hero ref={heroRef} />
          <About ref={aboutRef} />
          <Technologies />
          <Experience ref={experienceRef} />
          <Projects ref={projectsRef} />
          <Contact ref={contactRef} />
        </div>
      </div>
    </>
  );
}

export default App;
