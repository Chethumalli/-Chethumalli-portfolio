"use client"

import emailjs from "emailjs-com"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function Contact() {

  const sendEmail = (e:any) => {
    e.preventDefault()

    emailjs.sendForm(
      "service_id",
      "template_id",
      e.target,
      "public_key"
    )

    alert("Message sent!")
    e.target.reset()
  }

  return (
    <section id="contact" className="py-20 text-white text-center px-6">

      <h2 className="text-4xl font-bold mb-4">
        Contact Me
      </h2>

      <p className="text-gray-400 mb-10">
        Feel free to reach out for collaborations, opportunities or just to say hello.
      </p>

      {/* Social Links */}

      <div className="flex justify-center gap-8 text-3xl mb-12">

        <a
          href="https://github.com/Chethumalli"
          target="_blank"
          className="hover:text-purple-500 transition"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/chethumalli"
          target="_blank"
          className="hover:text-purple-500 transition"
        >
          <FaLinkedin />
        </a>

        <a
          href="mailto:chethumalli13@gmail.com"
          className="hover:text-purple-500 transition"
        >
          <FaEnvelope />
        </a>

      </div>

      {/* Contact Form */}

      <form
        onSubmit={sendEmail}
        className="max-w-md mx-auto flex flex-col gap-4"
      >

        <input
          name="name"
          placeholder="Name"
          required
          className="p-3 bg-zinc-900 rounded border border-gray-700 focus:border-purple-500 outline-none"
        />

        <input
          name="email"
          placeholder="Email"
          required
          className="p-3 bg-zinc-900 rounded border border-gray-700 focus:border-purple-500 outline-none"
        />

        <textarea
          name="message"
          placeholder="Message"
          rows={4}
          required
          className="p-3 bg-zinc-900 rounded border border-gray-700 focus:border-purple-500 outline-none"
        />

        <button
          type="submit"
          className="bg-purple-600 py-3 rounded hover:bg-purple-700 transition"
        >
          Send Message
        </button>

      </form>

    </section>
  )
}