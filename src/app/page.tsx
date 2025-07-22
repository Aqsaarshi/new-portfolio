//import Image from "next/image";
import Hero from "./component/Hero";
import Contact from "./component/contact";
import Project from "./component/project";
import About from "./component/about";

export default function Home() {
  return (
    <div className="bg-slate-500">
      <Hero />
      <Project />

      <About />

      <Contact />
    </div>
  );
}
