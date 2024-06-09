import React from 'react'
import { FaEnvelope, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa'

const Contact = () => {
  return (
    <div
    id="contact"
    className="min-h-screen pt-24 w-full flex flex-col justify-center items-center gap-10"
  >
    <h1 className="text-last font-semibold border-b-2 mb-4 border-last inline-block">
      Contact
    </h1>
    <div className="bg-gray-200 p-8 rounded-md sm:w-96 md:w-2/5 h-56 ">
      <div className="flex flex-col items-center space-y-4 m-auto">
        <a
          href="mailto:fairuzizuan019@gmail.com"
          className="text-lg text-gray-800 hover:text-gray-600 flex items-center space-x-2"
        >
          <FaEnvelope className="text-2xl" />
          <span>fairuzizuan019@gmail.com</span>
        </a>
        <a
          href="https://wa.me/081325667882"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-gray-800 hover:text-gray-600 flex items-center space-x-2"
        >
          <FaWhatsapp className="text-2xl" />
          <span>WhatsApp</span>
        </a>
        <a
          href="https://github.com/azzurif"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-gray-800 hover:text-gray-600 flex items-center space-x-2"
        >
          <FaGithub className="text-2xl" />
          <span>azzurif</span>
        </a>
        <a
          href="https://instagram.com/fairz.me"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-gray-800 hover:text-gray-600 flex items-center space-x-2"
        >
          <FaInstagram className="text-2xl" />
          <span>fairz.me</span>
        </a>
      </div>
    </div>
  </div>

  )
}

export default Contact