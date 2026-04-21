import { useParams, Link, Navigate } from 'react-router-dom';
import { useContent } from '../hooks/useContent';

function MetricCard({ metric }) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100">
      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">{metric.metric}</div>
      
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <div className="text-xs text-gray-400 mb-1">Before</div>
          <div className="font-semibold text-gray-900 text-sm">{metric.before}</div>
        </div>
        <div className="flex items-center justify-center">
          <svg className="w-5 h-5 text-burgundy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
        <div>
          <div className="text-xs text-gray-400 mb-1">After</div>
          <div className="font-semibold text-gray-900 text-sm">{metric.after}</div>
        </div>
      </div>

      <div className="text-xs text-burgundy-700 bg-burgundy-50 px-3 py-1.5 rounded-full inline-block">
        {metric.impact}
      </div>
    </div>
  );
}

function ChallengeCard({ challenge }) {
  return (
    <div className="bg-gray-50 rounded-2xl p-7 border border-gray-100">
      <h4 className="font-semibold text-sm mb-3 text-burgundy-800">
        Challenge: {challenge.challenge}
      </h4>
      <p className="text-gray-600 text-sm mb-4">{challenge.solution}</p>
      <div className="bg-white rounded-lg p-3 border border-gray-200">
        <div className="text-xs text-gray-500">
          <strong>Technical Depth:</strong> {challenge.technical_depth}
        </div>
      </div>
    </div>
  );
}

export default function ProjectDetail() {
  const { id } = useParams();
  const { content } = useContent();
  const toProjectSlug = (title = '') =>
    title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');

  const project = content.projects.find((p) => toProjectSlug(p.title) === decodeURIComponent(id || ''));

  if (!project || !project.caseStudy) {
    return <Navigate to="/projects" replace />;
  }

  const { problem, solution, results, technical_depth } = project.caseStudy;

  return (
    <div className="min-h-screen bg-white pt-16">

      {/* Project Hero */}
      <section className="bg-gradient-to-br from-burgundy-50 to-burgundy-100 border-b border-burgundy-200">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="flex items-start gap-4 mb-6">
            <span className="text-5xl">{project.emoji}</span>
            <div>
              <div className="text-xs font-semibold text-burgundy-700 uppercase tracking-wide mb-2">
                {project.category}
              </div>
              <h1 className="text-4xl font-bold text-gray-900">{project.title}</h1>
            </div>
          </div>
          <p className="text-gray-600 max-w-2xl leading-relaxed mb-8">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map(tech => (
              <span key={tech} className="text-xs bg-burgundy-200 text-burgundy-900 px-3 py-1.5 rounded-full font-medium">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.24-1.28-5.24-5.71 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.44-2.69 5.42-5.26 5.7.41.36.78 1.07.78 2.15v3.19c0 .31.21.67.8.56C20.71 21.38 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
                </svg>
                View Code
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-burgundy-800 text-white text-sm font-medium rounded-lg hover:bg-burgundy-700 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-20 space-y-24">

        {/* 1. Problem Statement */}
        <section>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">The Problem</h2>
            <p className="text-gray-500">Understanding the challenge I was tasked to solve</p>
          </div>

          <div className="bg-burgundy-50 rounded-2xl p-8 border border-burgundy-200 mb-8">
            <p className="text-gray-700 leading-relaxed text-lg">{problem.context}</p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Key Pain Points</div>
            {problem.pain_points.map((pain, i) => (
              <div key={i} className="flex gap-4">
                <div className="text-burgundy-800 font-bold flex-shrink-0">→</div>
                <p className="text-gray-600 leading-relaxed">{pain}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-100 rounded-xl p-6 border border-gray-200">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Goal</div>
            <p className="text-gray-800 font-medium">{problem.goal}</p>
          </div>
        </section>

        {/* 2. Solution */}
        <section>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">The Solution</h2>
            <p className="text-gray-500">How I designed and built the system</p>
          </div>

          <p className="text-gray-700 leading-relaxed text-lg mb-12">{solution.overview}</p>

          {/* Architecture */}
          <div className="mb-16">
            <h3 className="text-xl font-bold text-gray-900 mb-4">System Architecture</h3>
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 mb-4">
              <p className="text-gray-600 text-sm leading-relaxed">{solution.architecture.description}</p>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-16">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Key Features Built</h3>
            <div className="space-y-5">
              {solution.key_features.map((feature, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 hover:border-burgundy-200 transition-colors">
                  <h4 className="font-semibold text-gray-900 mb-2">{feature.name}</h4>
                  <p className="text-gray-600 text-sm mb-3">{feature.description}</p>
                  <div className="bg-gray-50 rounded-lg p-3 text-xs text-gray-500 border border-gray-100">
                    <strong>Technical Implementation:</strong> {feature.technical}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Design Decisions */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">Design Decisions & Trade-offs</h3>
            <div className="space-y-5">
              {solution.design_decisions.map((decision, i) => (
                <div key={i} className="border-l-4 border-burgundy-400 bg-burgundy-50 rounded-r-xl p-6">
                  <h4 className="font-semibold mb-2 text-burgundy-900">{decision.decision}</h4>
                  <p className="text-gray-600 text-sm mb-3"><strong>Rationale:</strong> {decision.rationale}</p>
                  <p className="text-gray-600 text-sm"><strong>Trade-off:</strong> {decision.tradeoff}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Results & Impact */}
        <section>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Results & Impact</h2>
            <p className="text-gray-500">Measurable outcomes of the implementation</p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {results.metrics.map((metric, i) => (
              <MetricCard key={i} metric={metric} />
            ))}
          </div>

          {/* Testimonial */}
          {results.testimonial && (
            <div className="bg-gradient-to-br from-burgundy-50 to-burgundy-100 rounded-2xl p-8 border border-burgundy-200 mb-12">
              <p className="text-gray-800 italic text-lg leading-relaxed mb-4">"{results.testimonial.quote}"</p>
              <div>
                <div className="font-semibold text-gray-900">{results.testimonial.author}</div>
                <div className="text-sm text-gray-600">{results.testimonial.date}</div>
              </div>
            </div>
          )}

          {/* Lessons Learned */}
          {results.lessons_learned && (
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Key Learnings</h3>
              <div className="space-y-3">
                {results.lessons_learned.map((lesson, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="text-burgundy-800 font-bold flex-shrink-0">✓</div>
                    <p className="text-gray-600 leading-relaxed">{lesson}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* 4. Technical Deep-Dive */}
        {technical_depth && (
          <section>
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Technical Deep-Dive</h2>
              <p className="text-gray-500">For engineers who want to understand the implementation</p>
            </div>

            {/* Challenges Overcome */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Challenges & Solutions</h3>
              <div className="space-y-5">
                {technical_depth.challenges_overcome.map((challenge, i) => (
                  <ChallengeCard key={i} challenge={challenge} />
                ))}
              </div>
            </div>
          </section>
        )}

      </div>

      {/* Footer CTA */}
      <section className="bg-burgundy-800 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Interested in working together?</h2>
          <p className="text-burgundy-200 mb-8">Let's discuss how I can contribute to your team.</p>
          <Link to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-burgundy-900 font-semibold rounded-full hover:bg-burgundy-50 transition-colors">
            Get In Touch
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}