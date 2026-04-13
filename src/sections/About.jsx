import { useContent } from '../hooks/useContent';

export default function About() {
  const { content } = useContent();
  const { paragraphs, stats } = content.about;

  return (
    <section id="about" className="py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col md:flex-row gap-20 items-start">
          {/* Left: heading + stats */}
          <div className="md:w-80 flex-shrink-0">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-4">About Me</p>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-10">
              Who I Am
            </h2>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white rounded-2xl p-5">
                  <div className="text-2xl font-bold text-burgundy-800 mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: paragraphs */}
          <div className="flex-1 pt-1">
            <div className="space-y-5 text-gray-500 leading-relaxed text-base">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-burgundy-800 font-medium text-sm hover:gap-3 transition-all duration-200"
              >
                Let's connect
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
