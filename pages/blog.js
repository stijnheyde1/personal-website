// pages/blog.js
import Link from 'next/link';

export default function CV() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="w-full shadow bg-white sticky top-0 z-50">
        <div className="max-w-xl mx-auto flex items-center justify-between p-4">
          <h1 className="text-xl font-bold">Stijn Heyde</h1>
          <nav className="space-x-6">
            <Link href="/">Home</Link>
            <Link href="/cv">CV</Link>
            <Link href="/blog" className="font-semibold">Blog</Link>
            <Link href="/research">Research</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-2xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">Blog Studying at Columbia University</h2>
        <section className="mb-2">
          <h3 className="text-xl font-semibold mb-2">First Day in New York City</h3>
          <li>I landed in New York on August 16th, after a 13 hours of travelling from Belgium. 
          By the time I reached the hostel where I’d spend my first night, it was late afternoon.
          Without much of a plan, I decided to wander wherever seemed interesting.
          I ended up at Chelsea Market, which was about as crowded as the one subway train I’d taken so far. 
          There I got a local dish called 牛肉面 and walked towards Little Island as I tried to handle the spice along the way. 
          Little Island is that strange but artistic park floating above the Hudson River build and operated through billionaires funding, as any public park should be.
          From there I followed the High Line all the way up to Hudson Yards.
          That evening, I went out for drinks with someone I’d met at the hostel, we explored a few bars in the Lower East Side. 
          By the time I got back, I realized I had been awake for over 24 hours. 
          The exhaustion worked in my favor though: I woke up the next day completely adjusted to my new time zone.</li>
          
          {/* Images */}
          <div className="mt-6 grid gap-4">
            <img
              src="images/first_day.jpg"
              alt="Chelsea Market"
              width={1000}
              height={1000}
              className="rounded-xl shadow-lg mx-auto"
            />
            
          </div>
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
