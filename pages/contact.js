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
            <Link href="/cv">CV/Resume</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/research">Research</Link>
            <Link href="/contact" className="font-semibold">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
          <ul className="list-disc list-inside text-gray-700">
            <a href="https://www.linkedin.com/in/stijn-heyde" target="_blank" rel="noreferrer" className="text-blue-600">in/stijn-heyde</a>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Contact Form</h3>
          
        </section>

        <form action="https://formspree.io/f/myzlyola" method="POST" className="space-y-4">
          <input type="text" name="name" placeholder="Name" required className="w-full border rounded px-3 py-2" />
          <input type="email" name="email" placeholder="Email" required className="w-full border rounded px-3 py-2" />
          <textarea name="message" placeholder="Message" rows="5" required className="w-full border rounded px-3 py-2" />
          {/* simple honeypot to reduce spam */}
          <input type="text" name="_gotcha" className="hidden" tabIndex="-1" autoComplete="off" />
          <button type="submit" className="rounded bg-blue-600 text-white px-4 py-2">Send</button>
        </form>


        
      </main>

      <footer className="bg-white border-t mt-10">
        <div className="max-w-5xl mx-auto p-6 text-center text-gray-500">
          © {new Date().getFullYear()} Stijn Heyde. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
