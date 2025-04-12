"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronRight, CheckCircle, ArrowRight } from "lucide-react"
import TypewriterText from "./components/TypewriterText"
import BackgroundGraphics from "./components/BackgroundGraphics"
import GradientBackground from "./components/GradientBackground"
import CursorTrail from "./components/CursorTrail"
import LiquidBlob from "./components/LiquidBlob"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const skills = [
  "WordPress",
  "React",
  "Next",
  "Figma",
  "Elementor",
  "HTML/CSS",
  "JavaScript",
  "TypeScript",
  "Bootstrap",
  "Tailwind",
]

const HeroAnimation = () => {
  return (
    <div className="relative min-h-screen">
    <GradientBackground />
    <LiquidBlob />
    <CursorTrail />
    <BackgroundGraphics />
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-4">
        Hello, I&apos;m <span className="gradient-text">Noor</span>
      </h1>
      <TypewriterText
        text="UI/UX Designer & Developer"
        className="text-xl md:text-2xl lg:text-3xl font-medium text-center mb-8"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="flex justify-center"
      >
        <Link href="/portfolio" className="fancy-button inline-flex items-center group">
          <span className="text-lg">Explore My Work</span>
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="ml-2"
          >
            <ArrowRight className="h-5 w-5" />
          </motion.div>
        </Link>
      </motion.div>
    </div>
  </div>
  )
}

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <HeroAnimation />

      {/* About Me Section */}
      <motion.section
        className="py-20 bg-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4">
          <div className="md:flex items-center space-y-6 md:space-y-0 md:space-x-12">
            {/* Left Column with Image */}
            <div className="md:w-1/3">
              <div className="w-full max-w-md mx-auto">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="/images/profile/illustration.png" // Replace with your actual image path
                    alt="Profile"
                    width={400}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/30 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Right Column with Text */}
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-8 text-left gradient-text">About Me</h2>

              <p className="text-lg mb-6 text-foreground">
                I&apos;m a recent Software Engineering graduate and a passionate designer and developer with a keen eye for detail and a love for creating intuitive,
                user-friendly designs. I&apos;m eager to turn my skills into impactful projects and dedicated to delivering user-friendly, well-designed websites tailored to your needs.
              </p>

              <h3 className="text-2xl font-bold mb-4 gradient-text">Why Hire Me?</h3>
              <ul className="space-y-4">
                <motion.li
                  className="flex items-center text-foreground"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle className="mr-2 text-accent" />
                  <span>Offering realistic pricing that ensures value without compromising quality.</span>
                </motion.li>
                <motion.li
                  className="flex items-center text-foreground"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <CheckCircle className="mr-2 text-accent" />
                  <span>Collaborating closely to design a website that fits your unique vision.</span>
                </motion.li>
                <motion.li
                  className="flex items-center text-foreground"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <CheckCircle className="mr-2 text-accent" />
                  <span>Bringing modern skills and a fresh approach to every project.</span>
                </motion.li>
                <motion.li
                  className="flex items-center text-foreground"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <CheckCircle className="mr-2 text-accent" />
                  <span>Work is done with dedication, focusing on completing projects in the shortest time possible.</span>
                </motion.li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="py-20 bg-gradient-to-br from-accent-light/20 to-accent-light/10"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">My Skills</h2>
          <div className="overflow-hidden">
            <div className="skills-container flex animate-scroll">
              {[...skills, ...skills].map((skill, index) => (
                <div key={`${skill}-${index}`} className="flex-shrink-0 w-40 mx-4">
                  <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                    <div className="relative w-16 h-16 mx-auto mb-4 overflow-hidden rounded-full bg-white p-2">
                      <Image
                        src={`/images/skills/${skill.toLowerCase().replace(/\s+/g, "-")}.png`}
                        alt={skill}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="font-semibold text-accent-dark">{skill}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Featured Work Section */}
      <motion.section
        className="py-20 bg-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { id: 1, title: "E-Commerce Website", category: "react" },
              {
                id: 2,
                title: "Pizza Hub – Mobile Application for Pizza Restaurant",
                category: "uiux",
              },
              { id: 3, title: "Yummy – Sweet Treats, Easy Orders", category: "uiux" },
              { id: 4, title: "Mosaica – Explore & Admire Timeless Art", category: "uiux" },
            ].map((project) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden group"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={`/images/projects/${project.id}.png`}
                    alt={project.title}
                    width={800}
                    height={400}
                    className="w-full h-62 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-2xl mb-2 text-foreground">{project.title}</h3>
                  <Link
                    href={`/portfolio/${project.id}`}
                    className="text-accent hover:text-accent-dark font-semibold inline-flex items-center group"
                  >
                    <span>View Case Study</span>
                    <ChevronRight className="ml-1 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/portfolio" className="fancy-button inline-flex items-center">
              <span>View All Projects</span>
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

