// pages/blog.js
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
            <Link href="/blog" className="font-semibold">Blog</Link>
            <Link href="/research">Research</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6">Blog: Studying at Columbia University</h2>

        <section className="mb-10">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-semibold">The Two Weeks Before Classes and the Admissions Process</h3>
            <div className="flex items-center flex-shrink-0">
              {/* Thin line */}
              <div className="border-t border-gray-400 w-20 mr-3"></div>
              {/* Date */}
              <span className="text-gray-500 text-5sm italic">September 2, 2025</span>
            </div>
          </div>
          In the two weeks before classes started, Columbia held a Student Welcome Day for incoming engineering students.
          We got an introduction to the university, the engineering school, and some of the resources available on campus.
          One thing they highlighted was that this year had been the most selective admissions cycle for the engineering faculty so far.
          Selectivity clearly plays a big role in how top U.S. universities position themselves.
          Hearing that made me appreciate how anyone who wants to study engineering at the top school in Belgium (which is KU Leuven ofcourse) can start the program.
          Here, however, the game is played like chess. If you like a sceptical opinion piece,
          I found a <a href="https://www.nytimes.com/2025/09/22/opinion/college-admissions-seniors-stats.html" target="_blank" rel="noreferrer" className="text-blue-600">good one by The New York Times</a>.
          Something you could already notice, though, is that every student was here at Columbia for a reason.
          They were motivated, willing to put in the work, and aiming for far more than just passing their classes.
          And this brings me to a point the NYT guess essay misses: being surrounded by "top-performing" students is incredibly motivating.
          That environment is a major part of the value an Ivy League university provides.
          <div className="flex items-center justify-between mb-2">
          </div>
          After the welcome session, no official social activities were planned, so a few of us decided to get pizza together.
          We ended up walking through Central Park and the Upper East Side, just exploring the area and getting to know each other.
          During the rest of the weeks before classes, I had a few picnics with international students, went to One Vanderbilt at night among other touristic activities.
          {/* Images */}
          <div className="mt-6 grid gap-4">
            <img
              src="images/two_weeks.jpg"
              alt="Chelsea Market"
              width={1000}
              height={1000}
              className="rounded-xl shadow-lg mx-auto"
            />
            
          </div>
        </section>


        <section className="mb-10">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-semibold">First Day in New York City</h3>
            <div className="flex items-center flex-shrink-0">
              {/* Thin line */}
              <div className="border-t border-gray-400 w-20 mr-3"></div>
              {/* Date */}
              <span className="text-gray-500 text-5sm italic">August 16, 2025</span>
            </div>
          </div>
          I landed in New York on August 16th, after a 13 hours of travelling from Belgium. 
          By the time I reached the hostel where I’d spend my first night, it was late afternoon.
          Without much of a plan, I decided to wander wherever seemed interesting.
          I ended up at Chelsea Market, which was about as crowded as the one subway train I’d taken so far. 
          There I got a local dish called 牛肉面 and walked towards Little Island as I tried to handle the spice along the way. 
          Little Island is that strange but artistic park floating above the Hudson River build and operated through a billionaire's funding, as an American public park should be.
          From there I followed the High Line all the way up to Hudson Yards.
          That evening, I went out for drinks with someone I’d met at the hostel, we explored a few bars in the Lower East Side. 
          By the time I got back, I realized I had been awake for over 24 hours. 
          The exhaustion worked in my favor though: I woke up the next day completely adjusted to my new time zone.
          
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

        
        <section className="mb-10">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-semibold">Internship at Melexis</h3>
            <div className="flex items-center flex-shrink-0">
              {/* Thin line */}
              <div className="border-t border-gray-400 w-20 mr-3"></div>
              {/* Date */}
              <span className="text-gray-500 text-5sm italic">August 13, 2025</span>
            </div>
          </div>
          Before setting of to Columbia, I joined the Melexis R&D team during an internship at their site in Ypres.
          The topic for my internship at Melexis was improving a High-Bandwidth Output Amplifier.
          This amplifier forms a part of a current sensor's architecture, 
          the project explored how its bandwidth could be extended for the new sensor beyond that of the existing design.
          In doing so, the focus was also on pushing the limits of the technology node for this block and
          understanding the factors that constrain its performance. The results provide insight into how
          this block behaves under a wide range of operating conditions and offers a clearer view of the
          trade-offs involved in reaching higher bandwidths.
          
          This industrial experience at Melexis was split into two parts. With the first taking place from 3rd
          until 18th of July, the second part ran from 4th until 13th of August, making for a total of 4 workweeks. 
          I commuted from home to the site in Ypres by car each day.
          About once per week I made the trip by bike, this was possible since I could arrive and start
          working at whatever time suited me. Allowing me to enjoy some cycling before going to New York.

          I found the internship very useful, as it gave me the opportunity to spend more time working extensively with Cadence. 
          In addition, I gained a good understanding of how the team collaborates within a larger organization and how communication flows between the system architect and the designers. 
          I would definitely recommend this experience to anyone that wants to work in the field.
                    
          {/* Images */}
          <div className="mt-6 grid gap-4">
            <img
              src="images/Melexis_logo.png"
              alt="Chelsea Market"
              width={500}
              height={500}
              className="rounded-xl shadow-lg mx-auto"
            />
            
          </div>
        </section>

        <section className="mb-10">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-semibold">Melexis - Columbia Grant Ceremony</h3>
            <div className="flex items-center flex-shrink-0">
              {/* Thin line */}
              <div className="border-t border-gray-400 w-20 mr-3"></div>
              {/* Date */}
              <span className="text-gray-500 text-5sm italic">April 2, 2025</span>
            </div>
          </div>
          
                    
          {/* Images */}
          <div className="mt-6 grid gap-4">
            <img
              src="images/grant.png"
              alt="Chelsea Market"
              width={500}
              height={500}
              className="rounded-xl shadow-lg mx-auto"
            />
            
          </div>
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
