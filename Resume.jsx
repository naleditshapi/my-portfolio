const HIGHLIGHTS = [
  { icon: '🎓', title: 'BSc Information Systems', subtitle: 'University of Cape Town · 2022 – 2025' },
  { icon: '💼', title: 'IT Intern', subtitle: 'Company Name · Jan 2024 – Jun 2024' },
  { icon: '🏆', title: 'Dean\'s Merit List', subtitle: 'Academic Excellence · 2023' },
  { icon: '📜', title: 'ISTQB Foundation Level', subtitle: 'Software Testing Certification · 2024' },
];

export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-gradient-to-br from-indigo-600 to-purple-700">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-indigo-200 font-semibold text-sm uppercase tracking-widest">
            My Background
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Resume & Experience</h2>
          <div className="w-16 h-1 bg-white/40 mx-auto mt-4 rounded-full" />
        </div>

        {/* Highlights grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.title}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-colors duration-200"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <div className="text-white font-semibold text-sm">{item.title}</div>
              <div className="text-indigo-200 text-xs mt-1 leading-snug">{item.subtitle}</div>
            </div>
          ))}
        </div>

        {/* Download CTA */}
        <div className="text-center">
          <p className="text-indigo-100 mb-6 text-lg">
            Want the full picture? Download my CV for a detailed overview of my education,
            experience, and skills.
          </p>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-700 font-bold rounded-xl hover:bg-indigo-50 transition-colors duration-200 shadow-xl shadow-indigo-900/30 text-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download CV (PDF)
          </a>
          <p className="text-indigo-300 text-sm mt-3">
            Place your resume.pdf in the /public folder to enable the download.
          </p>
        </div>
      </div>
    </section>
  );
}