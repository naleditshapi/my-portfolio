import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/layout/PageHeader';
import { useContent } from '../hooks/useContent';

const FILTERS = ['All', 'Systems', 'Data', 'QA'];

const CATEGORY_COLORS = {
  Systems: 'text-burgundy-700 bg-burgundy-50',
  Data: 'text-gray-600 bg-gray-100',
  QA: 'text-gray-600 bg-gray-100',
};

function ProjectCard({ project }) {
  const navigate = useNavigate();
  const projectSlug = project.title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');
  const hasCaseStudy = Boolean(project.caseStudy);

  const openCaseStudy = () => {
    if (hasCaseStudy) {
      navigate(`/projects/${projectSlug}`);
    }
  };

  const handleCardKeyDown = (event) => {
    if (!hasCaseStudy) return;

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openCaseStudy();
    }
  };

  return (
    <div
      className={`group bg-white rounded-2xl p-7 border border-gray-100 hover:border-transparent hover:shadow-lg transition-all duration-300 flex flex-col ${hasCaseStudy ? 'cursor-pointer' : ''}`}
      onClick={openCaseStudy}
      onKeyDown={handleCardKeyDown}
      role={hasCaseStudy ? 'button' : undefined}
      tabIndex={hasCaseStudy ? 0 : -1}
      aria-label={hasCaseStudy ? `Open case study for ${project.title}` : undefined}
    >
      <div className="flex items-start justify-between gap-3 mb-4">
        <span className="text-3xl">{project.emoji}</span>
        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${CATEGORY_COLORS[project.category] || 'bg-gray-100 text-gray-600'}`}>
          {project.category}
        </span>
      </div>
      <h3 className="font-semibold text-gray-900 text-base mb-2 leading-snug">{project.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">{project.description}</p>
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tech.map((t) => (
          <span key={t} className="bg-gray-50 text-gray-500 text-xs px-2.5 py-1 rounded-lg font-mono border border-gray-100">{t}</span>
        ))}
      </div>
      <div className="flex gap-4 pt-4 border-t border-gray-50">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            onClick={(event) => event.stopPropagation()}
            className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-800 font-medium transition-colors">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.24-1.28-5.24-5.71 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.44-2.69 5.42-5.26 5.7.41.36.78 1.07.78 2.15v3.19c0 .31.21.67.8.56C20.71 21.38 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
            </svg>
            GitHub
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer"
            onClick={(event) => event.stopPropagation()}
            className="flex items-center gap-1.5 text-xs text-burgundy-700 hover:text-burgundy-900 font-medium transition-colors">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const { content } = useContent();
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? content.projects
    : content.projects.filter((p) => p.category === activeFilter);

  return (
    <div>
      <PageHeader label="What I've Built" title="Projects" subtitle="A collection of academic, internship, and personal projects across systems, data, and QA." />

      <section className="py-16 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-2 flex-wrap mb-10">
            {FILTERS.map((f) => (
              <button key={f} onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${activeFilter === f
                    ? 'bg-burgundy-800 text-white'
                    : 'bg-white text-gray-500 hover:text-gray-800 border border-gray-200'
                  }`}>
                {f}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
