// pages/blog.js
// nog life in nyc: social and food, midterms and parents, final projects and exams
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
            <h3 className="text-2xl font-semibold">Volunteering and Lots of Homework</h3>
            <div className="flex items-center flex-shrink-0">
              {/* Thin line */}
              <div className="border-t border-gray-400 w-20 mr-3"></div>
              {/* Date */}
              <span className="text-gray-500 text-5sm italic">October 14, 2025</span>
            </div>
          </div>
          11:40 am is not a bad time to have your first class of the day, and that for 4 days of the week.
          Class load is pretty low here, with only about ten hours of lectures per week, regardless of which courses you pick. 
          This is made up for by homework, which is a much bigger part of the system compared to Belgium.
          Most weeks I have three or four deadlines, and that's before the project work even starts.
          <div className="flex items-center justify-between mb-2">
          </div>
          Overall, I'm spending noticeably more time on class-related work here than I would back home. At the same time, 
          I'm already expecting the exams to be lighter than the month-and-a-half study period we have in Belgium. For now, 
          I like this system better. The many assignments keep things moving, and I'm learning more on a week-to-week basis during the semester. 
          It also fits nicely with my productive momentum, first my internship, then an early starting semester here, 
          and in January I'm working on my thesis in Leuven while everyone else is studying for exams, creating a motivating environment in the libraries.
          I will also have a well timed break during Christmas and New Year. This academic year works a lot better for me, but it requires me to have no re-take exams from last year, which are common in Belgium.
          There is another benefit to the many smaller deadlines, it becomes more manageable when learning the course content broken into small pieces. 
          It is especially useful when juggling multiple courses at the same time as <a href="https://www.wsj.com/articles/SB10001424052748703478704574612052322122442" target="_blank" rel="noreferrer" className="text-blue-600">research suggests</a>, which is where willpower starts to break down. 
          
          {/* Images */}
          <div className="mt-6 grid gap-4">
            <img
              src="images/schedule.png"
              alt="Chelsea Market"
              width={800}
              height={800}
              className="rounded-xl shadow-lg mx-auto"
            /> 
          </div>
          <div className="flex items-center justify-between mb-6">
          </div>
          Stepping away from that tangent, I simply like the structure here, even though I generally do well with single-exam courses in Belgium.
          Outside of classes, I also found time to volunteer at the International Organization for Youth in New York City, 
          which is connected to the United Nations and active across all UN member states. A law student interning at the UN introduced me to the opportunity. 
          My role involved welcoming guest speakers, members of youth parliaments, 
          and other officials attending a conference focused on economic and technical development, mainly in regions across Africa and South Asia.

          Volunteering there again introduced me to people from all over the world, including other students and young professionals. 
          I also ended up making friends with members of the Youth Parliament in Pakistan. 

          On a lighter note, there's a non-profit boathouse in lower Manhatten on the Hudson that is run entirely by volunteers and lets anyone kayak on a pay-what-you-wish basis. 
          Their season ends in the second week of October, 
          so I went with different friends on each visit and managed to fit in three kayaking sessions before they closed for the year.
          <div className="flex items-center justify-between mb-2">
          </div>
          Oh and I went to Harry Potter on Broadway. Never seen any of the movies.

          {/* Images */}
          <div className="mt-6 grid gap-4">
            <img
              src="images/kayak.png"
              alt="Chelsea Market"
              width={1000}
              height={1000}
              className="rounded-xl shadow-lg mx-auto"
            />
            
          </div>
        </section>


        <section className="mb-10">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-semibold">First Week of Classes and Special Guest</h3>
            <div className="flex items-center flex-shrink-0">
              {/* Thin line */}
              <div className="border-t border-gray-400 w-20 mr-3"></div>
              {/* Date */}
              <span className="text-gray-500 text-5sm italic">September 12, 2025</span>
            </div>
          </div>
          The first week at Columbia is called the 'shopping period', which means you can attend more classes than you will actually take before deciding which ones 
          you will stick with.
          I made good use of that and tried a wide range of courses, including some from the Computer Science department.
          One class that stood out there was a SystemC course for CS students. I was surprised it wasn't open to electrical engineering students, 
          since it’s directly relevant for chip design. After emailing the professor and exchanging a few messages, I was able to enroll just like a few others have doen before me.
          During the week, I attended both 4000-level courses (meant for Master’s students) and 6000-level courses (usually taken by PhD students) to complete my courseload. 
          The 6000-level classes were consistently more interesting, so I ended up choosing an entirely “PhD-level” lineup since it would be a waste to come all the way to NYC and not take
          challanging courses. My final course list looks like this:
          <div>
            <p className="font-semibold list-inside mt-2"><li>System-on-Chip Platforms</li></p>    
            This is the SystemC course. The class is very well developed and he professor, originally from Italy, teaches clearly and has a lovely accent. There also is a final project organized as a competition.
          </div>
          <div>
            <p className="font-semibold list-inside mt-2"><li>Advances in VLSI Design Automation and Methodology</li></p>    
            A course on the full digital design flow and the CAD tools used in industry. There’s a lot of hands-on work with tools like Genus and Innovus, 
            and we’ll be using ECOs, plugs, and other methods to modify the flow.
          </div>
          <div>
            <p className="font-semibold list-inside mt-2"><li>Millimeter-Wave IC Design</li></p>    
            Focused on mm-wave circuits (somewhat predictable), with a 60 GHz receiver project planned at the end of the semester.
          </div>
          <div>
            <p className="font-semibold list-inside mt-2"><li>Topics course: Harsh-Environment Electronics</li></p>    
            A new course at Columbia, taught by early-career professor Savannah Eisner. As the name suggests, it covers circuits designed for extreme conditions.
          </div>
          <div className="flex items-center justify-between mb-2">
          </div>
          Because of this selection, I’m expecting a higher workload spread over the semester since every class has homework and a final project.
          On the other hand, only two have exams and during the first week the assignments were still basic. That gave me time to explore the city with a special guest: my girlfriend came to visit.
          We visited parts of New York I hadn’t seen yet, walked a lot, enough that our feet hurt, at least for the one of us that was wearing tall boots, and had dinner at Peak with Priceless. 
          Eating there isn’t cheap, but after dinner you can go straight onto the Edge viewing platform. I made the reservation so we’d be there at sunset.
          Normally, access to the platform at that time without the restaurant costs about 94 dollars per person if you also want to be escorted through the seperate restaurant elevator to skip the line.
          A general tip: always mention that you’re celebrating something at these kinds of places. It gets you free stuff, and being in a relationship for seven months and a week is worth celebrating to me. 
          I told a few people about this later, but apparently the restaurant now increased the minimum spend to avoid people going for the view after. 
          Anyways, I’ll be eating lots of pasta in the future to compensate for the cost of that dinner. 
          An even better deal if you're ever here is taking the tramway to Roosevelt Island and then hopping on the city's ferry service to Wall Street, to enjoy the sunset views from the East River as you cross under the many bridges. 
          This is far cheaper than booking some type of cruise.
          
          {/* Images */}
          <div className="mt-6 grid gap-4">
            <img
              src="images/special_guest_ad.jpg"
              alt="not Chelsea Market"
              width={1000}
              height={1000}
              className="rounded-xl shadow-lg mx-auto"
            />
            
          </div>
        </section>


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
          And this brings me to a point the NYT guest essay misses: being surrounded by "top-performing" students is incredibly motivating.
          That environment is a major part of the value an Ivy League university provides.
          <div className="flex items-center justify-between mb-2">
          </div>
          After the welcome session, no official social activities were planned, so a few of us decided to get pizza together.
          We ended up walking through Central Park and the Upper East Side, just exploring the area and getting to know each other.
          During the rest of the weeks before classes, I had a few picnics with international students, and went to One Vanderbilt at night among other touristic activities.
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
