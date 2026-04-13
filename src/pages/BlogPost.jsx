import { useParams, Link, Navigate } from 'react-router-dom';
import { useContent } from '../hooks/useContent';

export default function BlogPost() {
  const { id } = useParams();
  const { content } = useContent();
  const post = content.blog.find(p => p.id === id);

  if (!post) return <Navigate to="/blog" replace />;

  const paragraphs = post.content.split('\n\n').filter(Boolean);

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero */}
      <div className="bg-gray-50 border-b border-gray-100 pt-16 pb-14">
        <div className="max-w-3xl mx-auto px-6">
          <Link to="/blog" className="inline-flex items-center gap-2 text-xs font-medium text-gray-400 hover:text-gray-700 transition-colors mb-8">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            All posts
          </Link>

          <div className="flex items-center gap-3 mb-5">
            <span className="text-sm text-gray-400">{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span className="text-sm text-gray-400">{post.readTime} min read</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-5">{post.title}</h1>
          <p className="text-gray-500 text-base leading-relaxed mb-6">{post.excerpt}</p>

          <div className="flex flex-wrap gap-1.5">
            {post.tags.map(tag => (
              <span key={tag} className="text-xs text-burgundy-600 bg-burgundy-50 px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="py-14">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose-sm text-gray-600 leading-relaxed space-y-6">
            {paragraphs.map((para, i) => {
              if (para.startsWith('**') && para.endsWith('**') && para.split('\n').length === 1) {
                return <h2 key={i} className="text-xl font-bold text-gray-900 mt-8 mb-2">{para.replace(/\*\*/g, '')}</h2>;
              }
              const formatted = para.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
              return <p key={i} dangerouslySetInnerHTML={{ __html: formatted }} />;
            })}
          </div>

          <div className="mt-16 pt-10 border-t border-gray-100">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-burgundy-700 hover:text-burgundy-900 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Back to all posts
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
