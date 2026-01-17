export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="h-36 bg-gradient-to-r from-orange-400 to-orange-600 relative">
        <div className="absolute left-6 top-6 text-white text-sm flex gap-4">
          <span>Email</span>
          <span>Phone</span>
        </div>

        <button className="absolute right-6 top-6 bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-medium shadow hover:scale-105 transition">
          Download My Resume
        </button>
      </div>

      {/* Profile Hero */}
      <div className="-mt-12 flex flex-col items-center text-center">
        <img
          src="https://via.placeholder.com/200"
          alt="Profile"
          className="w-40 h-40 rounded-full border-8 border-white shadow-xl ring-4 ring-orange-100"
        />

        <h1 className="text-3xl font-bold mt-4 text-gray-900">
          Saksham Arora
        </h1>

        <p className="text-gray-700 mt-1">
          Male | 25 | He/Him
        </p>

        <button className="mt-4 bg-orange-500 hover:bg-orange-600 hover:scale-[1.03]
        text-white px-6 py-2 rounded-full flex items-center gap-2 transition-all">
          ▶ Watch my Visual Resume Now
        </button>
      </div>

      {/* Tabs */}
      <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm text-gray-700">
        {[
          "Core Skills & Technical Proficiencies",
          "Professional Journey & Internship Roles",
          "Case Insights & Key Projects",
          "Learning & Academic Milestones",
          "Endorsements from Mentors & Peers",
        ].map((tab) => (
          <div
            key={tab}
            className="px-4 py-2 bg-gray-100 rounded-full
            hover:bg-orange-100 hover:text-orange-700
            cursor-pointer transition"
          >
            {tab}
          </div>
        ))}
      </div>

      {/* About Section */}
      <div className="max-w-4xl mx-auto mt-10 px-6 text-center text-gray-700 leading-relaxed">
        <p>
          I am a motivated MBA candidate specializing in Marketing and Business Analytics at TAPMI,
          Bengaluru. With strong foundations in backend development, data analysis, and problem-solving,
          I have worked on real-world case studies and internships that bridge technology and business
          decision-making.
        </p>
      </div>

      {/* Case Insights */}
      <div className="max-w-6xl mx-auto mt-16 px-6">
        <h2 className="text-2xl font-bold text-center mb-10 text-gray-900">
          Case Insights & Key Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "ONDC Market Expansion",
              desc: "Analyzed market penetration strategies and digital adoption challenges for ONDC platforms."
            },
            {
              title: "Jal Jeevan Mission",
              desc: "Evaluated operational efficiency and impact metrics for nationwide water accessibility programs."
            },
            {
              title: "FinEasy Credit App",
              desc: "Studied UX, risk models, and user retention strategies for a digital lending platform."
            }
          ].map((item) => (
            <div
              key={item.title}
              className="border rounded-xl p-6 bg-white
              shadow-sm hover:shadow-lg hover:-translate-y-1
              transition-all"
            >
              <div className="w-12 h-12 bg-orange-100 text-orange-700 rounded-full flex items-center justify-center mb-4">
                📊
              </div>

              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                {item.title}
              </h3>

              <p className="text-gray-700 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Visual Resume Section */}
      <div className="max-w-6xl mx-auto mt-20 px-6">
        <h2 className="text-2xl font-bold text-center mb-10 text-gray-900">
          Visual Resume
        </h2>

        <div className="flex justify-center">
          <div className="w-full md:w-2/3 bg-gray-100 rounded-2xl overflow-hidden shadow">
            <div className="h-64 bg-black flex items-center justify-center text-white text-lg">
              ▶ Video Resume Placeholder
            </div>

            <div className="p-6 text-center">
              <h3 className="font-semibold text-lg text-gray-900">
                Watch My Visual Resume
              </h3>
              <p className="text-gray-700 text-sm mt-2">
                A short walkthrough of my skills, experiences, and career aspirations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Connect Section */}
      <div className="mt-24 bg-gradient-to-r from-orange-400 to-orange-600 py-16 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">
            Let’s Connect
          </h2>

          <p className="mb-8 text-orange-200">
            Interested in collaborating, hiring, or learning more about my journey?
          </p>

          <div className="flex justify-center gap-6">
            <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium
            shadow hover:scale-105 transition">
              Email Me
            </button>

            <button className="border border-white px-6 py-3 rounded-full font-medium
            hover:bg-white hover:text-orange-700 transition">
              LinkedIn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
