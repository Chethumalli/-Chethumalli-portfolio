import Navbar from "../src/components/Navbar"
import Hero from "../src/components/Hero"
import Skills from "../src/components/Skills"
import Projects from "../src/components/Projects"
import GithubStats from "../src/components/GithubStats"
import Contact from "../src/components/Contact"
import CursorGlow from "../src/components/CursorGlow"
import CursorTrail from "../src/components/CursorTrail"


export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* <CursorGlow /> */}
{/* <CursorTrail /> */}
      <CursorGlow />
      <CursorTrail />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* GitHub Stats */}
      <section id="github">
        <GithubStats />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>

    </main>
  )
}