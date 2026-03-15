"use client"

import dynamic from "next/dynamic"

const GitHubCalendar = dynamic(
  () =>
    import("react-github-calendar").then(
      (mod) => mod.GitHubCalendar
    ),
  { ssr: false }
)

export default function GithubStats() {
  return (
    <section id="github" className="py-24 bg-black text-white text-center">

      <h2 className="text-4xl font-bold mb-10">
        GitHub Activity
      </h2>

      <div className="flex justify-center overflow-x-auto">

        <GitHubCalendar
          username="Chethumalli"
          blockSize={15}
          blockMargin={5}
          fontSize={14}
        />

      </div>

    </section>
  )
}