// pages/cv.js
import Link from 'next/link';

export default function CV() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="w-full shadow bg-white sticky top-0 z-50">
        <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
          <h1 className="text-xl font-bold">Stijn Heyde</h1>
          <nav className="space-x-6">
            <Link href="/">Home</Link>
            <Link href="/cv" className="font-semibold">CV/Resume</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/research">Research</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-5xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6">Curriculum Vitae</h2>

        {/* Contact / Header block */}
        <section className="mb-8 grid gap-2 text-gray-700">
          <p className="text-lg font-semibold">2nd Master student Electrical Engineering: Chip Design</p>
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            <span>Heverlee, BE</span>
            <a href="https://www.linkedin.com/in/stijn-heyde" target="_blank" rel="noreferrer" className="text-blue-600">in/stijn-heyde</a>
          </div>
          <p className="text-gray-800 leading-7">
            At twelve years old, I stated that I wanted to be an engineer. A lucky guess, perhaps, but one that has shaped my journey ever since. 
            Now a master’s student in electronics and chip design, I very much appreciate the interwoven nature of mathematics and electrical engineering, 
            as well as my growing fascination with technologies and research in the field.
          </p>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">Education</h3>
          <div className="space-y-4">
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-semibold">M.Sc. Electrical Engineering, Electronics & Chip Design</p>
                <span className="text-sm text-gray-500">Sep 2024 – Present</span>
              </div>
              <p className="text-gray-700">KU Leuven</p>
              <p className="text-gray-700">Columbia University</p>
            </div>
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-semibold">B.Sc. Engineering Sciences</p>
                <span className="text-sm text-gray-500">Sep 2021 – Jul 2024</span>
              </div>
              <p className="text-gray-700">KU Leuven · Major Electrical Engineering / Minor Mechanical Engineering</p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">Experience</h3>
          <div className="space-y-6">
            <div> 
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-semibold">Analog Design Intern · Melexis</p>
                  <span className="text-sm text-gray-500">Jul 2025 – Aug 2025</span>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Three‑stage, Ahuja‑compensated high‑bandwidth output amplifier design for current sensor</li>
                  <li>Schematic design and simulations across corners and operating conditions</li>
                  <li>Worked within an analog IC design team; collaborated with system-architect on spec negotiation</li>
                </ul>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-semibold">R&D Assistant · Kingspan Light & Air</p>
                <span className="text-sm text-gray-500">Jul 2023 – Aug 2023</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Selected, tested and integrated new sensors in a fire safety system’s central console with focus on low power</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">Projects</h3>
          <div className="space-y-4 text-gray-700">
            <div>
              <p className="font-semibold">GMSK Receiver</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Demodulating low‑SNR GMSK signals</li>
                <li>Mixed‑signal IC design from system‑level specs through mixed-signal simulations</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Autonomous Flying Drone Delivering Power</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Collaberating in a team of 11 students</li>
                <li>designed hardware (PCBs and coils) for magnetic‑resonance wireless power transfer</li>
                <li>Simultaneous power and data transfer by modulating the power signal</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Symmetrical OTA Design (Cadence)</p>
              <ul className="list-disc list-inside space-y-1">
                <li>180 nm technology; 90 dB gain and 3 MHz GBW</li>
                <li>To be taped out and measured next year</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">Skills</h3>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <ul className="list-disc list-inside space-y-1">
              <li>Cadence: Virtuoso, Innovus & Genus</li>
              <li>SystemC</li>
              <li>Verilog</li>
            </ul>
            <ul className="list-disc list-inside space-y-1">
              <li>Matlab</li>
              <li>Python</li>
              <li>Altium Designer</li>
            </ul>
          </div>
        </section>

        {/* Highlights */}
        <section className="mb-2">
          <h3 className="text-xl font-semibold mb-3">Academic Achievements</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>2025 Melexis–Columbia grant (covers Columbia tuition cost)</li>
            <li>Highest weighted score for a first-year engineering student 2021-2022 at Kulak Campus</li>
            <li>2× VWO Finalist (Flemish Math Olympiad) 2019 and 2021, 6th place out of 11.441 students in first round 2020</li>
          </ul>
        </section>
      
        {/* Languages */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">Languages</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Dutch - native</li>
            <li>English - fluent</li>
            <li>French - conversational</li>
          </ul>
        </section>

        {/* interests */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">Interests</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Volunteer at Internation Organization for Youth in NYC, partner of the United Nations active in all UN members countries</li>
            <li>Ironman age group competitor and into long distance cycling</li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-10">
        <div className="max-w-5xl mx-auto p-6 text-center text-gray-500">
          © {new Date().getFullYear()} Stijn Heyde. All rights reserved.
        </div>
      </footer>
    </div>
  );
}



{/*<li>Endurance sports: long‑distance cycling & Full Ironman (Age Group), 2020–2024.</li>*/}