// pages/index.js
//npm run dev
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="w-full shadow bg-white sticky top-0 z-50">
        <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
          <h1 className="text-xl font-bold">Stijn Heyde</h1>
          <nav className="space-x-6">
            <Link href="/" className="font-semibold">Home</Link>
            <Link href="/cv">CV/Resume</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/research">Research</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="px-4 py-10">
        {/* Hero */}
        <section className="mx-auto w-full max-w-2xl flex flex-col md:flex-row items-center md:items-start md:justify-between gap-8 text-center md:text-left">
          <div className="md:flex-1">
            <h2 className="text-3xl font-bold tracking-tight">Hi, I’m Stijn Heyde</h2>
            <p className="mt-3 text-gray-700 leading-7">
              A Belgian Electrical Engineering student specializing in Electronics & Chip Design. 
              I started this website to document my stay at Columbia University as a Recipient of the Melexis Columbia Grant, 
              and it is also my personal space on the internet where I share my projects and experiences.
            </p>
          </div>

          {/* Profile picture on the right */}
          <div className="md:flex-none">
            <div className="h-100 w-100 md:h-50 md:w-50 rounded-full overflow-hidden border-4 border-white shadow-lg bg-gray-200">
              <img
                src="/images/profile2.jpg"
                alt="Profile picture of Stijn Heyde"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Quick cards */}
        <section className="mx-auto w-full max-w-3xl mt-10 grid gap-4">
          <div className="rounded-2xl bg-white p-5 shadow">
            <h3 className="text-lg font-semibold">Latest blog post</h3>
            <p className="mt-1 text-gray-700">Holidays</p>
            <Link href="/blog" className="mt-3 inline-block text-blue-600">Go to Blog →</Link>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow">
            <h3 className="text-lg font-semibold">Experience</h3>
            <p className="mt-1 text-gray-700">Educations, internship, projects</p>
            <Link href="/cv" className="mt-3 inline-block text-blue-600">View CV/Resume →</Link>
          </div>
          
          <div className="rounded-2xl bg-white p-5 shadow">
            <h3 className="text-lg font-semibold">Get in touch</h3>
            <Link href="/contact" className="mt-3 inline-block text-blue-600">Contact →</Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-10">
        <div className="mx-auto w-full max-w-2xl px-4 py-6 text-center text-gray-500">
          © {new Date().getFullYear()} Stijn Heyde. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
