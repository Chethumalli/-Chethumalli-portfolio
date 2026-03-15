"use client"

import { motion } from "framer-motion"
import { FaPython, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa"
import { SiNextdotjs, SiFlask } from "react-icons/si"

export default function Skills() {

  const skills = [
    { title: "Python", desc: "Machine learning & automation scripts", icon: <FaPython size={32}/> },
    { title: "Machine Learning", desc: "Scikit-learn, model training, data analysis", icon: <FaPython size={32}/> },
    { title: "Next.js", desc: "Full stack React framework", icon: <SiNextdotjs size={32}/> },
    { title: "React", desc: "Interactive frontend applications", icon: <FaReact size={32}/> },
    { title: "Flask", desc: "Backend APIs for AI tools", icon: <SiFlask size={32}/> },
    { title: "Node.js", desc: "Backend services and REST APIs", icon: <FaNodeJs size={32}/> },
    { title: "Data Analysis", desc: "Pandas, NumPy, data preprocessing", icon: <FaPython size={32}/> },
    { title: "Git & GitHub", desc: "Version control & open source", icon: <FaGitAlt size={32}/> },
    { title: "Automation", desc: "Scripts, bots and workflow automation", icon: <FaNodeJs size={32}/> }
  ]

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section id="skills" className="py-24 bg-black text-white text-center px-6">

      <p className="text-purple-500 mb-2 tracking-widest">
        TECH STACK
      </p>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-12"
      >
        My Skills
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >

        {skills.map((skill, index) => (

          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.06 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-zinc-900 p-8 rounded-xl border border-gray-800 hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition"
          >

            <motion.div
              whileHover={{ rotate: 10, scale: 1.2 }}
              className="flex justify-center mb-4 text-purple-400"
            >
              {skill.icon}
            </motion.div>

            <h3 className="text-xl font-bold mb-3">
              {skill.title}
            </h3>

            <p className="text-gray-400 text-sm">
              {skill.desc}
            </p>

          </motion.div>

        ))}

      </motion.div>

    </section>
  )
}