import PageHeader from '../components/PageHeader';
import { useContent } from '../ContentContext';

function SkillBar({ name, level }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">{name}</span>
        <span className="text-xs text-gray-400 tabular-nums">{level}%</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-1.5">
        <div className="bg-burgundy-700 h-1.5 rounded-full" style={{ width: `${level}%` }} />
      </div>
    </div>
  );
}

export default function About() {
  const { content } = useContent();
  const { paragraphs, stats } = content.about;
  const { highlights } = content.resume;

  return (
    <div>
      <PageHeader label="Who I Am" title="About Me" subtitle="A final-year IS student bridging the gap between technology and business." />

      {/* About + Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-start">
          <div className="flex-1 space-y-5 text-gray-500 leading-relaxed text-base">
            {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            <div className="pt-6 border-t border-gray-100">
              <a href="/contact" className="inline-flex items-center gap-2 text-burgundy-800 font-medium text-sm hover:gap-3 transition-all duration-200">
                Let's connect
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
          <div className="md:w-64 grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-gray-50 rounded-2xl p-5 text-center">
                <div className="text-2xl font-bold text-burgundy-800 mb-1">{stat.value}</div>
                <div className="text-xs text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-4">What I Know</p>
            <h2 className="text-3xl font-bold text-gray-900">Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.skills.map((cat) => (
              <div key={cat.title} className="bg-white rounded-2xl p-8 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-7">
                  <span className="text-2xl">{cat.icon}</span>
                  <h3 className="font-semibold text-gray-800 text-base">{cat.title}</h3>
                </div>
                {cat.skills.map(skill => <SkillBar key={skill.name} name={skill.name} level={skill.level} />)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Highlights */}
      <section className="py-20 bg-burgundy-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-burgundy-300 mb-4">My Background</p>
            <h2 className="text-3xl font-bold text-white">Experience & Education</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {highlights.map((item) => (
              <div key={item.title} className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors duration-200">
                <div className="text-3xl mb-4">{item.icon}</div>
                <div className="text-white font-medium text-sm leading-snug mb-1">{item.title}</div>
                <div className="text-burgundy-300 text-xs leading-snug">{item.subtitle}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-10 border-t border-white/10">
            <p className="text-burgundy-200 text-sm leading-relaxed flex-1 max-w-lg">{content.resume.ctaText}</p>
            <a href="/resume.pdf" download
              className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 bg-white text-burgundy-900 font-semibold rounded-full hover:bg-burgundy-50 transition-colors text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-4">What People Say</p>
            <h2 className="text-3xl font-bold text-gray-900">Testimonials</h2>
            <p className="text-gray-400 text-sm mt-2 italic">* Placeholder quotes — replace with real references.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {content.testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="text-5xl font-serif text-burgundy-100 leading-none mb-4 select-none">"</div>
                <p className="text-gray-500 leading-relaxed text-sm mb-6">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-burgundy-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-burgundy-800 font-bold text-xs">{t.avatar}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 text-sm">{t.name}</div>
                    <div className="text-gray-400 text-xs mt-0.5">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
