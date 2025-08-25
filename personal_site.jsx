import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="w-full shadow bg-white sticky top-0 z-50">
        <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
          <h1 className="text-xl font-bold">Stijn Heyde</h1>
          <nav className="space-x-6">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/cv" className="hover:text-blue-600">CV</Link>
            <Link href="/blog" className="hover:text-blue-600">Blog</Link>
            <Link href="/research" className="hover:text-blue-600">Research</Link>
            <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center py-20"
      >
        <h2 className="text-4xl font-bold mb-4">Welcome to My Personal Website</h2>
        <p className="text-lg text-gray-600">
          I am a Belgian Electrical Engineering student passionate about technology, research, and studying abroad.
        </p>
      </motion.section>

      {/* Quick Links */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 p-6">
        <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-white rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-2">CV</h3>
          <p className="text-gray-600 mb-4">My education, skills, and experience.</p>
          <Link href="/cv" className="text-blue-600">View CV →</Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-white rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-2">Blog</h3>
          <p className="text-gray-600 mb-4">Stories about studying abroad and my journey.</p>
          <Link href="/blog" className="text-blue-600">Read Blog →</Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-white rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-2">Research</h3>
          <p className="text-gray-600 mb-4">Details about my current project and findings.</p>
          <Link href="/research" className="text-blue-600">View Research →</Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t mt-10">
        <div className="max-w-5xl mx-auto p-6 text-center text-gray-500">
          © {new Date().getFullYear()} Stijn Heyde. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
