"use client"

import Image from "next/image"
import { TypeAnimation } from "react-type-animation"

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center bg-black text-white px-6 pt-24"
    >

      {/* Profile Image */}
      <div className="relative mb-8">

        <div className="absolute inset-0 bg-purple-600 blur-[120px] opacity-40 rounded-full"></div>

        <Image
          src="/profile.jpeg"
          alt="Chethan C Malli"
          width={220}
          height={220}
          className="relative rounded-full border-4 border-purple-500 object-cover"
          priority
        />

      </div>

      {/* Name */}
      <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
        Chethan C Malli
      </h1>

      {/* Typing Animation */}
      <div className="text-purple-400 text-xl mt-4 h-8">

        <TypeAnimation
          sequence={[
            "AI Developer",
            2000,
            "Machine Learning Engineer",
            2000,
            "Full Stack Developer",
            2000,
          ]}
          speed={50}
          repeat={Infinity}
        />

      </div>

      {/* Description */}
      <p className="text-gray-400 mt-6 max-w-xl">
        I build AI tools, web applications and automation systems
        that solve real world problems.
        I’m deeply passionate about building modern, scalable, and user-centric digital products that solve real-world problems.
I enjoy blending Artificial Intelligence, Machine Learning, and Web Development to create smart, impactful solutions.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex gap-4">

        <a
          href="#projects"
          className="bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-700 transition"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="border border-gray-600 px-6 py-3 rounded-lg hover:border-purple-500 transition"
        >
          Contact Me
        </a>

      </div>

    </section>
  )
}