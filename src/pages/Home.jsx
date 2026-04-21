import { Link, useNavigate } from 'react-router-dom';
import { useContent } from '../hooks/useContent';
import Hero from "../components/sections/Hero";

function FeaturedProject({ project }) {
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
            onClick={(event) => event.stopPropagation()}
            className="text-xs text-gray-400 hover:text-gray-800 font-medium transition-colors">GitHub →</a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer"
            onClick={(event) => event.stopPropagation()}
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
      <Hero
        name={name}
        tagline={tagline}
        heroBio={heroBio}
        github={github}
        linkedin={linkedin}
      />

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
