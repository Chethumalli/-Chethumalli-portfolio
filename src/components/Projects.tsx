"use client"

export default function Projects() {

  const projects = [
    {
      title: "AI Stock Analyst",
      description: "Machine learning model predicting stock trends using historical market data.",
      tech: ["Python", "Scikit-learn", "Pandas"],
      github: "https://github.com/Chethumalli/Stock-price-predictor-AI.git",
      demo: "#"
    },
    {
      title: "Bulk Mail Send API",
      description: "CSV based personalized email sending API built with Next.js and Nodemailer.",
      tech: ["Next.js", "Node.js", "Nodemailer"],
      github: "https://github.com/Chethumalli/Bulk-mail-send-api",
      demo: "#"
    },
    {
      title: "Multilingual Speech Translator",
      description: "Speech recognition system converting multiple languages into English text.",
      tech: ["Python", "Flask", "SpeechRecognition"],
      github: "https://github.com/Chethumalli/Language-converter-AI.git",
      demo: "#"
    },
    {
      title: "AI Face Recognition System",
      description: "Real-time face recognition system using computer vision and machine learning.",
      tech: ["Python", "OpenCV", "Face Recognition"],
      github: "https://github.com/Chethumalli/face-recognition-attendance-system.git",
      demo: "#"
    },
    {
      title: "Client.X Platform",
      description: "Client project platform designed for managing services and automation workflows.",
      tech: ["Next.js", "TypeScript", "API"],
      website: "https://www.clientx.tech/"
    }
  ]

  return (
    <section id="projects" className="py-24 bg-black text-white px-6">

      <h2 className="text-4xl font-bold text-center mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {projects.map((project, index) => (

          <div
            key={index}
            className="bg-zinc-900 rounded-xl p-6 border border-gray-800 hover:border-purple-500 transition"
          >

            <h3 className="text-xl font-bold mb-3">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-4">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-purple-600/20 text-purple-400 px-3 py-1 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 flex-wrap">

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700 transition"
                >
                  GitHub
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  className="border border-gray-600 px-4 py-2 rounded-lg hover:border-purple-500 transition"
                >
                  Live Demo
                </a>
              )}

              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  className="border border-purple-500 px-4 py-2 rounded-lg hover:bg-purple-600 hover:text-white transition"
                >
                  Visit Website
                </a>
              )}

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}