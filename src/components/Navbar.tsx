"use client"

import { useState } from "react"

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/60 border-b border-gray-800">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-xl font-bold text-purple-500">
          Chethan C Malli
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-gray-300">

          <a href="#home" className="hover:text-purple-500 transition">Home</a>
          <a href="#skills" className="hover:text-purple-500 transition">Skills</a>
          <a href="#projects" className="hover:text-purple-500 transition">Projects</a>
          <a href="#contact" className="hover:text-purple-500 transition">Contact</a>

        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 flex flex-col items-center py-4 gap-4">

          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

        </div>
      )}

    </nav>
  )
}