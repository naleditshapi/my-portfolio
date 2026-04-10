const STATS = [
  { value: '4th', label: 'Year Student' },
  { value: '10+', label: 'Projects Completed' },
  { value: '3+', label: 'Tech Stacks' },
  { value: '2025', label: 'Graduating' },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-widest">
            Who I Am
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            About Me
          </h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Text */}
          <div className="flex-1 space-y-4 text-gray-600 leading-relaxed text-lg">
            <p>
              I'm a final-year <strong className="text-gray-800">Information Systems</strong> student
              with a strong foundation in business analysis, software quality assurance, and systems
              design. I enjoy bridging the gap between technical teams and business stakeholders to
              deliver solutions that actually work.
            </p>
            <p>
              My academic journey has equipped me with hands-on experience in requirements gathering,
              process modelling, data analysis, and testing methodologies. I'm passionate about using
              technology to solve meaningful problems — whether that's through clean data pipelines,
              well-structured test plans, or insightful dashboards.
            </p>
            <p>
              I'm actively seeking entry-level roles as a <strong className="text-gray-800">Business Analyst</strong>,{' '}
              <strong className="text-gray-800">QA Tester</strong>, <strong className="text-gray-800">Systems Analyst</strong>,
              or <strong className="text-gray-800">Data Analyst</strong> where I can grow, contribute,
              and make a real impact from day one.
            </p>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center text-indigo-600 font-semibold hover:underline"
              >
                Let's connect →
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="w-full md:w-64 grid grid-cols-2 gap-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-indigo-50 rounded-2xl p-6 text-center hover:bg-indigo-100 transition-colors duration-200"
              >
                <div className="text-3xl font-extrabold text-indigo-600">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}