import { useState } from 'react';

const PROJECTS = [
  {
    title: 'Inventory Management System',
    category: 'Systems',
    description:
      'Designed and built a full inventory management system with CRUD operations, stock alerts, and supplier tracking for a small retail business.',
    tech: ['Python', 'SQLite', 'Tkinter'],
    github: 'https://github.com/yourusername/inventory-system',
    demo: null,
    emoji: '📦',
  },
  {
    title: 'Sales Dashboard',
    category: 'Data',
    description:
      'Developed an interactive Power BI dashboard analysing 3 years of sales data, surfacing trends, regional breakdowns, and KPIs for management review.',
    tech: ['Power BI', 'Excel', 'SQL'],
    github: null,
    demo: 'https://yourname-dashboard.netlify.app',
    emoji: '📊',
  },
  {
    title: 'E-Commerce Testing Suite',
    category: 'QA',
    description:
      'Created a comprehensive QA test plan and automated test scripts for an e-commerce platform, covering functional, regression, and UAT testing.',
    tech: ['Selenium', 'Python', 'Jira'],
    github: 'https://github.com/yourusername/ecommerce-qa',
    demo: null,
    emoji: '🧪',
  },
  {
    title: 'University Course Registration Portal',
    category: 'Systems',
    description:
      'Conducted requirements analysis and built a prototype web portal for course registration, including UML diagrams and process flows.',
    tech: ['React', 'Node.js', 'MySQL'],
    github: 'https://github.com/yourusername/course-portal',
    demo: 'https://course-portal-demo.vercel.app',
    emoji: '🎓',
  },
  {
    title: 'Student Performance Analyser',
    category: 'Data',
    description:
      'Built a Python data analysis tool that processes student results, generates visualizations, and flags at-risk students using statistical thresholds.',
    tech: ['Python', 'Pandas', 'Matplotlib'],
    github: 'https://github.com/yourusername/student-analyser',
    demo: null,
    emoji: '📈',
  },
  {
    title: 'Bug Tracking Web App',
    category: 'QA',
    description:
      'Developed a lightweight bug-tracking application with priority levels, status workflows, and email notifications for small dev teams.',
    tech: ['React', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com/yourusername/bug-tracker',
    demo: 'https://bug-tracker-demo.netlify.app',
    emoji: '🐛',
  },
] as const;

const FILTERS = ['All', 'Systems', 'Data', 'QA'];

const CATEGORY_COLORS = {
  Systems: 'bg-indigo-100 text-indigo-700',
  Data: 'bg-purple-100 text-purple-700',
  QA: 'bg-teal-100 text-teal-700',
} as const;

type Project = typeof PROJECTS[number];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col">
      {/* Emoji banner */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center text-6xl py-8">
        {project.emoji}
      </div>
      <div className="p-6 flex flex-col flex-1">
        {/* Title + category */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-bold text-gray-900 text-lg">{project.title}</h3>
          <span className={`text-xs font-semibold px-2 py-1 rounded-full flex-shrink-0 ${CATEGORY_COLORS[project.category]}`}>
            {project.category}
          </span>
        </div>
        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t: string) => (
            <span key={t} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-md font-mono">
              {t}
            </span>
          ))}
        </div>
        {/* Links */}
        <div className="flex gap-3 mt-auto">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.24-1.28-5.24-5.71 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.44-2.69 5.42-5.26 5.7.41.36.78 1.07.78 2.15v3.19c0 .31.21.67.8.56C20.71 21.38 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
              </svg>
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-widest">
            What I've Built
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Projects</h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter tabs */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeFilter === f
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}