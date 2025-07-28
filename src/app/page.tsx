import Image from "next/image";
import Layout from "./components/Layout";
import Introduction from "./components/sections/Introduction";
import Education from "./components/sections/Education";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Certifications from "./components/sections/Certifications";
import Testimonials from "./components/sections/Testimonials";
import Blogs from "./components/sections/Blogs";
import ContactMe from "./components/sections/ContactMe";
export default function Home() {
  return (
    <>
      <Layout>
        <Introduction />
        <Education />
        <Projects/>
        <Skills/>
        <Experience />
        <Certifications />
        <Testimonials />
        <Blogs />
        <ContactMe />
      </Layout>
    </>
  );
}
