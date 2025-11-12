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
            <Link href="/research" className="font-semibold">Research</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6">Coming Soon</h2>
        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Already made the page...</h3>
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
