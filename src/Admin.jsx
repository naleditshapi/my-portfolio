import { useState } from 'react';
import { useContent } from './ContentContext';

const ADMIN_PASSWORD = 'portfolio2025';

function Input({ label, value, onChange, type = 'text', placeholder = '' }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-burgundy-400"
      />
    </div>
  );
}

function Textarea({ label, value, onChange, rows = 3 }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-burgundy-400 resize-y"
      />
    </div>
  );
}

function SectionHeader({ children }) {
  return (
    <h3 className="text-burgundy-800 font-bold text-base border-b border-burgundy-100 pb-2 mb-4">{children}</h3>
  );
}

function SaveButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="mt-4 px-5 py-2 bg-burgundy-800 text-white text-sm font-semibold rounded-lg hover:bg-burgundy-700 transition-colors"
    >
      Save Changes
    </button>
  );
}

function Toast({ message }) {
  return (
    <div className="fixed bottom-6 right-6 bg-green-600 text-white px-5 py-3 rounded-xl shadow-xl text-sm font-medium z-[9999] animate-fadeIn">
      ✓ {message}
    </div>
  );
}

export default function Admin({ onClose }) {
  const { content, updateSection, resetContent } = useContent();
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [activeTab, setActiveTab] = useState('general');
  const [toast, setToast] = useState('');

  const [general, setGeneral] = useState({ ...content.general });
  const [about, setAbout] = useState({
    paragraphs: [...content.about.paragraphs],
    stats: content.about.stats.map(s => ({ ...s })),
  });
  const [skills, setSkills] = useState(
    content.skills.map(cat => ({ ...cat, skills: cat.skills.map(s => ({ ...s })) }))
  );
  const [projects, setProjects] = useState(
    content.projects.map(p => ({ ...p, tech: [...p.tech] }))
  );
  const [resume, setResume] = useState({
    highlights: content.resume.highlights.map(h => ({ ...h })),
    ctaText: content.resume.ctaText,
  });
  const [testimonials, setTestimonials] = useState(
    content.testimonials.map(t => ({ ...t }))
  );
  const [blog, setBlog] = useState(
    content.blog.map(p => ({ ...p, tags: [...p.tags] }))
  );

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(''), 2500);
  };

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
      setPasswordError('');
    } else {
      setPasswordError('Incorrect password. Try again.');
    }
  };

  const save = (section, data, label) => {
    updateSection(section, data);
    showToast(`${label} saved!`);
  };

  const TABS = ['general', 'about', 'skills', 'projects', 'resume', 'testimonials', 'blog'];

  if (!authenticated) {
    return (
      <div className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-8">
          <div className="text-center mb-6">
            <div className="w-14 h-14 bg-burgundy-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-7 h-7 text-burgundy-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900">Admin Access</h2>
            <p className="text-gray-400 text-sm mt-1">Enter your password to continue</p>
          </div>
          <div className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
              placeholder="Password"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-burgundy-400"
              autoFocus
            />
            {passwordError && <p className="text-red-500 text-xs">{passwordError}</p>}
            <button
              onClick={handleLogin}
              className="w-full bg-burgundy-800 text-white font-semibold py-3 rounded-xl hover:bg-burgundy-700 transition-colors"
            >
              Sign In
            </button>
            <button
              onClick={onClose}
              className="w-full text-sm text-gray-400 hover:text-gray-600 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-burgundy-900 rounded-t-2xl">
          <h2 className="text-white font-bold text-lg">Portfolio Admin</h2>
          <div className="flex items-center gap-3">
            <button
              onClick={() => { if (confirm('Reset all content to defaults?')) { resetContent(); onClose(); } }}
              className="text-xs text-burgundy-300 hover:text-white transition-colors"
            >
              Reset to defaults
            </button>
            <button onClick={onClose} className="text-burgundy-300 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex border-b border-gray-100 px-6 gap-1 overflow-x-auto">
          {TABS.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 text-sm font-medium capitalize whitespace-nowrap transition-colors border-b-2 -mb-px ${
                activeTab === tab
                  ? 'border-burgundy-800 text-burgundy-800'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="overflow-y-auto flex-1 p-6">
          {activeTab === 'general' && (
            <div className="space-y-4">
              <SectionHeader>General / Profile</SectionHeader>
              <Input label="Full Name" value={general.name} onChange={v => setGeneral({ ...general, name: v })} />
              <Input label="Tagline" value={general.tagline} onChange={v => setGeneral({ ...general, tagline: v })} />
              <Textarea label="Hero Bio" value={general.heroBio} onChange={v => setGeneral({ ...general, heroBio: v })} />
              <Input label="Email" value={general.email} onChange={v => setGeneral({ ...general, email: v })} type="email" />
              <Input label="GitHub URL" value={general.github} onChange={v => setGeneral({ ...general, github: v })} />
              <Input label="LinkedIn URL" value={general.linkedin} onChange={v => setGeneral({ ...general, linkedin: v })} />
              <Input label="Location" value={general.location} onChange={v => setGeneral({ ...general, location: v })} />
              <Input label="Availability" value={general.availability} onChange={v => setGeneral({ ...general, availability: v })} />
              <SaveButton onClick={() => save('general', general, 'Profile')} />
            </div>
          )}

          {activeTab === 'about' && (
            <div className="space-y-6">
              <div>
                <SectionHeader>About Paragraphs</SectionHeader>
                <div className="space-y-3">
                  {about.paragraphs.map((p, i) => (
                    <div key={i} className="flex gap-2">
                      <Textarea
                        label={`Paragraph ${i + 1}`}
                        value={p}
                        onChange={v => {
                          const updated = [...about.paragraphs];
                          updated[i] = v;
                          setAbout({ ...about, paragraphs: updated });
                        }}
                        rows={3}
                      />
                      <button
                        onClick={() => setAbout({ ...about, paragraphs: about.paragraphs.filter((_, j) => j !== i) })}
                        className="self-end mb-1 text-red-400 hover:text-red-600 text-xs font-medium whitespace-nowrap"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={() => setAbout({ ...about, paragraphs: [...about.paragraphs, ''] })}
                    className="text-sm text-burgundy-700 hover:underline"
                  >
                    + Add paragraph
                  </button>
                </div>
              </div>
              <div>
                <SectionHeader>Stats</SectionHeader>
                <div className="grid grid-cols-2 gap-3">
                  {about.stats.map((stat, i) => (
                    <div key={i} className="bg-gray-50 rounded-xl p-3 space-y-2">
                      <Input label="Value" value={stat.value} onChange={v => {
                        const updated = about.stats.map((s, j) => j === i ? { ...s, value: v } : s);
                        setAbout({ ...about, stats: updated });
                      }} />
                      <Input label="Label" value={stat.label} onChange={v => {
                        const updated = about.stats.map((s, j) => j === i ? { ...s, label: v } : s);
                        setAbout({ ...about, stats: updated });
                      }} />
                    </div>
                  ))}
                </div>
              </div>
              <SaveButton onClick={() => save('about', about, 'About')} />
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="space-y-6">
              {skills.map((cat, ci) => (
                <div key={ci} className="border border-gray-100 rounded-xl p-4">
                  <div className="flex gap-2 mb-3">
                    <Input label="Category Title" value={cat.title} onChange={v => {
                      const updated = skills.map((c, j) => j === ci ? { ...c, title: v } : c);
                      setSkills(updated);
                    }} />
                    <Input label="Icon" value={cat.icon} onChange={v => {
                      const updated = skills.map((c, j) => j === ci ? { ...c, icon: v } : c);
                      setSkills(updated);
                    }} />
                  </div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-2">Skills</p>
                  {cat.skills.map((skill, si) => (
                    <div key={si} className="flex gap-2 items-center mb-2">
                      <input
                        type="text"
                        value={skill.name}
                        onChange={(e) => {
                          const updated = skills.map((c, j) => j === ci
                            ? { ...c, skills: c.skills.map((s, k) => k === si ? { ...s, name: e.target.value } : s) }
                            : c);
                          setSkills(updated);
                        }}
                        className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-burgundy-400"
                        placeholder="Skill name"
                      />
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={skill.level}
                        onChange={(e) => {
                          const updated = skills.map((c, j) => j === ci
                            ? { ...c, skills: c.skills.map((s, k) => k === si ? { ...s, level: Number(e.target.value) } : s) }
                            : c);
                          setSkills(updated);
                        }}
                        className="w-20 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-burgundy-400"
                        placeholder="%"
                      />
                      <button
                        onClick={() => {
                          const updated = skills.map((c, j) => j === ci
                            ? { ...c, skills: c.skills.filter((_, k) => k !== si) }
                            : c);
                          setSkills(updated);
                        }}
                        className="text-red-400 hover:text-red-600 text-xs"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={() => {
                      const updated = skills.map((c, j) => j === ci
                        ? { ...c, skills: [...c.skills, { name: '', level: 75 }] }
                        : c);
                      setSkills(updated);
                    }}
                    className="text-sm text-burgundy-700 hover:underline"
                  >
                    + Add skill
                  </button>
                </div>
              ))}
              <SaveButton onClick={() => save('skills', skills, 'Skills')} />
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="space-y-6">
              {projects.map((proj, pi) => (
                <div key={pi} className="border border-gray-100 rounded-xl p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-gray-700 text-sm">{proj.title || `Project ${pi + 1}`}</p>
                    <button
                      onClick={() => setProjects(projects.filter((_, j) => j !== pi))}
                      className="text-red-400 hover:text-red-600 text-xs font-medium"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Input label="Title" value={proj.title} onChange={v => setProjects(projects.map((p, j) => j === pi ? { ...p, title: v } : p))} />
                    <div className="flex gap-2">
                      <Input label="Category" value={proj.category} onChange={v => setProjects(projects.map((p, j) => j === pi ? { ...p, category: v } : p))} />
                      <Input label="Emoji" value={proj.emoji} onChange={v => setProjects(projects.map((p, j) => j === pi ? { ...p, emoji: v } : p))} />
                    </div>
                  </div>
                  <Textarea label="Description" value={proj.description} onChange={v => setProjects(projects.map((p, j) => j === pi ? { ...p, description: v } : p))} rows={2} />
                  <Input label="Tech (comma separated)" value={proj.tech.join(', ')} onChange={v => setProjects(projects.map((p, j) => j === pi ? { ...p, tech: v.split(',').map(t => t.trim()).filter(Boolean) } : p))} />
                  <Input label="GitHub URL" value={proj.github} onChange={v => setProjects(projects.map((p, j) => j === pi ? { ...p, github: v } : p))} />
                  <Input label="Demo URL" value={proj.demo} onChange={v => setProjects(projects.map((p, j) => j === pi ? { ...p, demo: v } : p))} />
                </div>
              ))}
              <button
                onClick={() => setProjects([...projects, { title: '', category: 'Systems', description: '', tech: [], github: '', demo: '', emoji: '🚀' }])}
                className="text-sm text-burgundy-700 hover:underline font-medium"
              >
                + Add project
              </button>
              <SaveButton onClick={() => save('projects', projects, 'Projects')} />
            </div>
          )}

          {activeTab === 'resume' && (
            <div className="space-y-4">
              <SectionHeader>Resume Highlights</SectionHeader>
              {resume.highlights.map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-3 grid grid-cols-3 gap-3">
                  <Input label="Icon" value={item.icon} onChange={v => {
                    const updated = resume.highlights.map((h, j) => j === i ? { ...h, icon: v } : h);
                    setResume({ ...resume, highlights: updated });
                  }} />
                  <Input label="Title" value={item.title} onChange={v => {
                    const updated = resume.highlights.map((h, j) => j === i ? { ...h, title: v } : h);
                    setResume({ ...resume, highlights: updated });
                  }} />
                  <Input label="Subtitle" value={item.subtitle} onChange={v => {
                    const updated = resume.highlights.map((h, j) => j === i ? { ...h, subtitle: v } : h);
                    setResume({ ...resume, highlights: updated });
                  }} />
                </div>
              ))}
              <Textarea label="Download CTA Text" value={resume.ctaText} onChange={v => setResume({ ...resume, ctaText: v })} rows={2} />
              <SaveButton onClick={() => save('resume', resume, 'Resume')} />
            </div>
          )}

          {activeTab === 'blog' && (
            <div className="space-y-6">
              {blog.map((post, pi) => (
                <div key={pi} className="border border-gray-100 rounded-xl p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-gray-700 text-sm">{post.title || `Post ${pi + 1}`}</p>
                    <button
                      onClick={() => setBlog(blog.filter((_, j) => j !== pi))}
                      className="text-red-400 hover:text-red-600 text-xs font-medium"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Input label="Title" value={post.title} onChange={v => setBlog(blog.map((p, j) => j === pi ? { ...p, title: v } : p))} />
                    <Input label="ID / Slug" value={post.id} onChange={v => setBlog(blog.map((p, j) => j === pi ? { ...p, id: v } : p))} placeholder="my-post-slug" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Input label="Date (YYYY-MM-DD)" value={post.date} onChange={v => setBlog(blog.map((p, j) => j === pi ? { ...p, date: v } : p))} />
                    <Input label="Read Time (mins)" value={String(post.readTime)} onChange={v => setBlog(blog.map((p, j) => j === pi ? { ...p, readTime: Number(v) } : p))} type="number" />
                  </div>
                  <Input label="Tags (comma separated)" value={post.tags.join(', ')} onChange={v => setBlog(blog.map((p, j) => j === pi ? { ...p, tags: v.split(',').map(t => t.trim()).filter(Boolean) } : p))} />
                  <Textarea label="Excerpt" value={post.excerpt} onChange={v => setBlog(blog.map((p, j) => j === pi ? { ...p, excerpt: v } : p))} rows={2} />
                  <Textarea label="Full Content (use blank lines between paragraphs, **Bold** for headings)" value={post.content} onChange={v => setBlog(blog.map((p, j) => j === pi ? { ...p, content: v } : p))} rows={8} />
                </div>
              ))}
              <button
                onClick={() => setBlog([...blog, {
                  id: `post-${Date.now()}`,
                  title: '',
                  excerpt: '',
                  content: '',
                  date: new Date().toISOString().slice(0, 10),
                  tags: [],
                  readTime: 3,
                }])}
                className="text-sm text-burgundy-700 hover:underline font-medium"
              >
                + Add post
              </button>
              <SaveButton onClick={() => save('blog', blog, 'Blog')} />
            </div>
          )}

          {activeTab === 'testimonials' && (
            <div className="space-y-6">
              {testimonials.map((t, ti) => (
                <div key={ti} className="border border-gray-100 rounded-xl p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-gray-700 text-sm">{t.name || `Testimonial ${ti + 1}`}</p>
                    <button
                      onClick={() => setTestimonials(testimonials.filter((_, j) => j !== ti))}
                      className="text-red-400 hover:text-red-600 text-xs font-medium"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <Input label="Name" value={t.name} onChange={v => setTestimonials(testimonials.map((x, j) => j === ti ? { ...x, name: v } : x))} />
                    <Input label="Role" value={t.role} onChange={v => setTestimonials(testimonials.map((x, j) => j === ti ? { ...x, role: v } : x))} />
                    <Input label="Avatar (initials)" value={t.avatar} onChange={v => setTestimonials(testimonials.map((x, j) => j === ti ? { ...x, avatar: v } : x))} />
                  </div>
                  <Textarea label="Quote" value={t.quote} onChange={v => setTestimonials(testimonials.map((x, j) => j === ti ? { ...x, quote: v } : x))} rows={3} />
                </div>
              ))}
              <button
                onClick={() => setTestimonials([...testimonials, { name: '', role: '', avatar: 'XX', quote: '' }])}
                className="text-sm text-burgundy-700 hover:underline font-medium"
              >
                + Add testimonial
              </button>
              <SaveButton onClick={() => save('testimonials', testimonials, 'Testimonials')} />
            </div>
          )}
        </div>
      </div>

      {toast && <Toast message={toast} />}
    </div>
  );
}
