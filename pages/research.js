// pages/cv.js
import Link from 'next/link';

export default function CV() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="w-full shadow bg-white sticky top-0 z-50">
        <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
          <h1 className="text-xl font-bold">Stijn Heyde</h1>
          <nav className="space-x-6">
            <Link href="/">Home</Link>
            <Link href="/cv" className="font-semibold">CV</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/research">Research</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6">CV</h2>
        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Education</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Bachelor of Electrical Engineering - KU Leuven (2022 - present)</li>
            <li>Exchange Semester - Technical University of Munich (2024)</li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Skills</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>MATLAB, Python, C/C++</li>
            <li>Circuit Design & Simulation</li>
            <li>Microcontrollers & Embedded Systems</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">Experience</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Internship at XYZ Electronics (Summer 2023)</li>
            <li>Research Assistant at KU Leuven (2023 - present)</li>
          </ul>
        </section>
      </main>

      <footer className="bg-white border-t mt-10">
        <div className="max-w-5xl mx-auto p-6 text-center text-gray-500">
          © {new Date().getFullYear()} Stijn Heyde. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
