"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Mail, User, MessageSquare, CheckCircle, Loader2 } from 'lucide-react'
import { sendContactForm } from "@/app/actions/contact"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    try {
      await sendContactForm(formData);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setError("Failed to send message. Please try again later.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br bg-white to-slate-50 flex items-center justify-center py-20 px-4">
      <motion.div 
        className="w-full max-w-xl"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <motion.h1
          className="text-5xl font-bold mb-4 text-center"
          variants={fadeInUp}
        >
          <span className="text-4xl font-bold mb-12 text-center gradient-text">
            Get in Touch
          </span>
        </motion.h1>
        
        <motion.p 
          className="text-xl text-center text-slate-700 mb-12 max-w-md mx-auto"
          variants={fadeInUp}
        >
          Have a project in mind or want to collaborate? I'd love to hear from you!
        </motion.p>

        <motion.div 
          className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm bg-white/90 border border-white/20"
          variants={fadeInUp}
          style={{
            boxShadow: "0 10px 40px -10px rgba(0, 0, 0, 0.1), 0 0 20px 0 rgba(0, 0, 0, 0.05)"
          }}
        >
          {isSubmitted ? (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Message Sent!</h2>
              <p className="text-slate-600 mb-8">Thank you for reaching out. I'll get back to you as soon as possible.</p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="fancy-button inline-flex items-center"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-slate-700 text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="pl-10 block w-full rounded-md border-0 py-3.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-slate-700 text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-10 block w-full rounded-md border-0 py-3.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-slate-700 text-sm font-medium mb-2">
                    Subject
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MessageSquare className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="pl-10 block w-full rounded-md border-0 py-3.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all"
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-slate-700 text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="block w-full rounded-md border-0 py-3.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all"
                    placeholder="Tell me about your project, questions, or anything else..."
                    required
                  ></textarea>
                </div>
                
                {error && (
                  <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded">
                    {error}
                  </div>
                )}
                
                <div className="pt-4">
                  <motion.button
                    type="submit"
                    className="w-full fancy-button inline-flex items-center justify-center py-4"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <span className="text-lg">Send Message</span>
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
            </form>
          )}
        </motion.div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-64 h-64 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </motion.div>
    </div>
  )
}
