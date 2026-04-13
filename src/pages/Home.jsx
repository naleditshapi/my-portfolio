import { Link } from 'react-router-dom';
import { useContent } from '../hooks/useContent';

function FeaturedProject({ project }) {
  return (
    <div className="group bg-white rounded-2xl p-7 border border-gray-100 hover:border-transparent hover:shadow-lg transition-all duration-300 flex flex-col">
      <div className="flex items-start justify-between gap-3 mb-4">
        <span className="text-3xl">{project.emoji}</span>
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-burgundy-50 text-burgundy-700">
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
            className="text-xs text-gray-400 hover:text-gray-800 font-medium transition-colors">GitHub →</a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer"
            className="text-xs text-burgundy-700 hover:text-burgundy-900 font-medium transition-colors">Live Demo →</a>
        )}
      </div>
    </div>
  );
}

function BlogPreview({ post }) {
  return (
    <Link to={`/blog/${post.id}`} className="group block bg-white rounded-2xl p-7 border border-gray-100 hover:border-transparent hover:shadow-lg transition-all duration-300">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs text-gray-400">{post.date}</span>
        <span className="w-1 h-1 rounded-full bg-gray-300" />
        <span className="text-xs text-gray-400">{post.readTime} min read</span>
      </div>
      <h3 className="font-semibold text-gray-900 text-base mb-2 leading-snug group-hover:text-burgundy-800 transition-colors">{post.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
      <div className="flex flex-wrap gap-1.5 mt-4">
        {post.tags.map(tag => (
          <span key={tag} className="text-xs text-burgundy-600 bg-burgundy-50 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>
    </Link>
  );
}

export default function Home() {
  const { content } = useContent();
  const { name, tagline, heroBio, github, linkedin } = content.general;
  const featured = content.projects.filter(p => p.featured).slice(0, 3);
  const latestPosts = [...content.blog].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 2);

  return (
    <div>
      {/* Hero */}
      <section className="min-h-screen flex items-center bg-white pt-16">
        <div className="max-w-6xl mx-auto px-6 py-24 w-full">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 animate-fadeIn">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-6">
                Available for opportunities
              </p>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-4">
                Hi, I'm<br />
                <span className="text-burgundy-800">{name}</span>
              </h1>
              <p className="text-lg text-gray-500 font-normal mt-6 mb-4">{tagline}</p>
              <p className="text-gray-400 text-base max-w-lg mb-10 leading-relaxed">{heroBio}</p>
              <div className="flex flex-wrap items-center gap-4">
                <Link to="/projects"
                  className="px-7 py-3.5 bg-burgundy-800 text-white rounded-full font-medium text-sm hover:bg-burgundy-700 transition-colors duration-200">
                  View My Work
                </Link>
                <Link to="/contact"
                  className="px-7 py-3.5 text-gray-700 rounded-full font-medium text-sm border border-gray-200 hover:border-gray-400 transition-colors duration-200">
                  Get In Touch
                </Link>
              </div>
              <div className="flex items-center gap-5 mt-10">
                <a href={github} target="_blank" rel="noopener noreferrer"
                  className="text-gray-300 hover:text-gray-700 transition-colors" aria-label="GitHub">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.24-1.28-5.24-5.71 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.44-2.69 5.42-5.26 5.7.41.36.78 1.07.78 2.15v3.19c0 .31.21.67.8.56C20.71 21.38 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
                  </svg>
                </a>
                <a href={linkedin} target="_blank" rel="noopener noreferrer"
                  className="text-gray-300 hover:text-gray-700 transition-colors" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex-shrink-0 relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-burgundy-50 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-burgundy-100 to-burgundy-200 opacity-60" />
                <span className="relative text-8xl select-none">👨‍💻</span>
              </div>
              <div className="absolute -bottom-2 -right-2 w-20 h-20 rounded-full border-4 border-white bg-burgundy-800 flex items-center justify-center">
                <span className="text-white text-xs font-bold text-center leading-tight">IS<br/>2025</span>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 mt-20 text-gray-300">
            <div className="w-8 h-px bg-gray-200" />
            <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      {featured.length > 0 && (
        <section className="py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-3">Selected Work</p>
                <h2 className="text-3xl font-bold text-gray-900">Featured Projects</h2>
              </div>
              <Link to="/projects" className="text-sm font-medium text-burgundy-800 hover:text-burgundy-600 transition-colors flex items-center gap-1.5">
                View all projects
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {featured.map(p => <FeaturedProject key={p.title} project={p} />)}
            </div>
          </div>
        </section>
      )}

      {/* Latest Blog Posts */}
      {latestPosts.length > 0 && (
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-3">Thoughts & Writing</p>
                <h2 className="text-3xl font-bold text-gray-900">Latest Posts</h2>
              </div>
              <Link to="/blog" className="text-sm font-medium text-burgundy-800 hover:text-burgundy-600 transition-colors flex items-center gap-1.5">
                Read all posts
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {latestPosts.map(p => <BlogPreview key={p.id} post={p} />)}
            </div>
          </div>
        </section>
      )}

      {/* CTA Strip */}
      <section className="py-20 bg-burgundy-800">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Open to new opportunities</h2>
            <p className="text-burgundy-200 text-sm">Let's build something great together.</p>
          </div>
          <Link to="/contact"
            className="flex-shrink-0 px-8 py-3.5 bg-white text-burgundy-900 font-semibold rounded-full hover:bg-burgundy-50 transition-colors text-sm">
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
