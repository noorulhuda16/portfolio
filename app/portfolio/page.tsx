"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 60 },
  transition: { duration: 0.6 },
}

const categories = [
  { id: "all", name: "All Projects" },
  { id: "uiux", name: "UI/UX Design" },
  { id: "wordpress", name: "WordPress" },
  { id: "react", name: "React/Next.js" },
  { id: "label", name: "Label Designs" },
]

const projects = [
  { id: 1, title: "E-Commerce Website", category: "react", description: "A modern e-commerce platform developed using Next JS." },
  {
    id: 2,
    title: "Pizza Hub – Mobile Application for Pizza Restaurant",
    category: "uiux",
    description: "A seamless, mouthwatering pizza ordering experience with an intuitive and modern UI/UX design. ",
  },
  { id: 3, title: "Yummy – Sweet Treats, Easy Orders", category: "uiux", description: " A delightful and visually tempting donut shop website for effortless browsing, ordering, and cravings satisfaction." },
  { id: 4, title: "Mosaica – Explore & Admire Timeless Art", category: "uiux", description: "A beautifully designed landing page for art gallery." },
  { id: 5, title: "Royal Retreat – Hotel Booking Website", category: "uiux", description: "A minimalist yet attractive landing page UI for a hotel. " },
  { id: 6, title: "Brew – Perfect Coffee, Just a Tap Away", category: "uiux", description: "A sleek and cozy app for ordering your favorite brews." },
  { id: 7, title: "The Daily Scroll – Stay Informed, Stay Ahead", category: "wordpress", description: "A modern and user-friendly news blog covering the latest stories, trends, and updates across all categories." },
  { id: 8, title: "Jacqueline Photography - Capturing Moments, Telling Stories", category: "wordpress", description: "A visually captivating portfolio to showcase stunning photography with an elegant and immersive UI/UX. " },
  { id: 9, title: "Blossom Bliss Shower Gel", category: "label", description: "A sleek, minimalistic design with a soft gradient of ocean blues and aqua tones, symbolizing freshness and hydration. " },
  { id: 10, title: "Velare – Scented Candle", category: "label", description: "An elegant, minimalist aesthetic with a soft matte finish. " },


]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <div className="container mx-auto px-4 py-20">
      <motion.h1
        className="text-5xl font-bold mb-12 text-center gradient-text"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        My Portfolio
      </motion.h1>

      <motion.nav className="mb-12" initial="initial" animate="animate" variants={fadeInUp}>
        <ul className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <li key={category.id}>
             <button
      onClick={() => setActiveCategory(category.id)}
      className={`px-4 py-2 rounded-full transition-colors ${
        activeCategory === category.id ? "bg-teal-500 text-white" : "bg-teal-50 text-teal-500 hover:bg-teal-100"
      }`}
    >
      {category.name}
    </button>
            </li>
          ))}
        </ul>
      </motion.nav>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={{
            animate: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <Image
                src={`/images/projects/${project.id}.png`}
                alt={project.title}
                width={800}
                height={400}
                className="w-full h-62 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-black">{project.title}</h2>
                <p className="text-black mb-4">{project.description}</p>
                <Link href={`/portfolio/${project.id}`} className="text-black hover:text-gray-600 font-semibold">
                  View Case Study →
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

