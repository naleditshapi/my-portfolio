import { Link } from 'react-router-dom';
import PageHeader from '../components/layout/PageHeader';
import { useContent } from '../hooks/useContent';

function BlogCard({ post }) {
  return (
    <Link to={`/blog/${post.id}`} className="group block bg-white rounded-2xl p-8 border border-gray-100 hover:border-transparent hover:shadow-lg transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs text-gray-400">{post.date}</span>
        <span className="w-1 h-1 rounded-full bg-gray-300" />
        <span className="text-xs text-gray-400">{post.readTime} min read</span>
      </div>
      <h2 className="font-semibold text-gray-900 text-lg mb-3 leading-snug group-hover:text-burgundy-800 transition-colors">{post.title}</h2>
      <p className="text-gray-400 text-sm leading-relaxed mb-5">{post.excerpt}</p>
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {post.tags.map(tag => (
            <span key={tag} className="text-xs text-burgundy-600 bg-burgundy-50 px-2.5 py-1 rounded-full">{tag}</span>
          ))}
        </div>
        <span className="text-xs font-medium text-burgundy-700 group-hover:gap-2 flex items-center gap-1.5 transition-all">
          Read
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

export default function Blog() {
  const { content } = useContent();
  const posts = [...content.blog].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div>
      <PageHeader
        label="Thoughts & Writing"
        title="Blog"
        subtitle="Reflections on business analysis, QA, data, and the journey of an IS student entering the industry."
      />

      <section className="py-16 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-sm">No posts yet. Check back soon.</p>
            </div>
          ) : (
            <div className="space-y-5">
              {posts.map(post => <BlogCard key={post.id} post={post} />)}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
