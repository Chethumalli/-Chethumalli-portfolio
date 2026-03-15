"use client"

import Particles from "@tsparticles/react"

export default function ParticlesBg() {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: { value: "#000000" }
        },
        particles: {
          number: { value: 80 },
          size: { value: 2 },
          links: {
            enable: true,
            color: "#8b5cf6",
            distance: 120
          },
          move: {
            enable: true,
            speed: 1
          }
        }
      }}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  )
}