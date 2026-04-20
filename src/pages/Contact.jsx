import { useState } from 'react';
import PageHeader from '../components/layout/PageHeader';
import { useContent } from '../hooks/useContent';

export default function Contact() {
  const { content } = useContent();
  const { email, github, linkedin, location, availability } = content.general;
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', message: '' });
  };

  const inputClass = "w-full bg-gray-50 border-0 rounded-xl px-4 py-3.5 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-burgundy-300 transition";

  return (
    <div>
      <PageHeader label="Say Hello" title="Get In Touch" subtitle="Open to entry-level opportunities, freelance projects, and interesting conversations." />

      <section className="py-20 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-16">
          {/* Form */}
          <div className="flex-1">
            {sent ? (
              <div className="bg-white rounded-2xl p-12 text-center border border-gray-100">
                <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">Message Sent</h3>
                <p className="text-gray-400 text-sm">Thanks for reaching out. I'll be in touch soon.</p>
                <button onClick={() => setSent(false)} className="mt-5 text-sm text-burgundy-700 hover:underline font-medium">
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Name</label>
                    <input name="name" type="text" required value={form.name} onChange={handleChange}
                      placeholder="Jane Smith" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Email</label>
                    <input name="email" type="email" required value={form.email} onChange={handleChange}
                      placeholder="jane@company.com" className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Message</label>
                  <textarea name="message" required rows={6} value={form.message} onChange={handleChange}
                    placeholder="Hi, I'd love to discuss an opportunity..." className={`${inputClass} resize-none`} />
                </div>
                <button type="submit"
                  className="w-full bg-burgundy-800 text-white font-semibold py-4 rounded-xl hover:bg-burgundy-700 transition-colors duration-200 text-sm">
                  Send Message →
                </button>
              </form>
            )}
          </div>

          {/* Info sidebar */}
          <div className="lg:w-72 space-y-10">
            <div>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-[0.15em] mb-5">Find Me Online</h3>
              <div className="flex gap-3">
                <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                  className="w-10 h-10 bg-white rounded-xl border border-gray-100 flex items-center justify-center text-gray-400 hover:text-burgundy-700 hover:border-burgundy-200 transition-all">
                  <svg style={{width:'18px',height:'18px'}} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                  </svg>
                </a>
                <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                  className="w-10 h-10 bg-white rounded-xl border border-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:border-gray-300 transition-all">
                  <svg style={{width:'18px',height:'18px'}} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.24-1.28-5.24-5.71 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.44-2.69 5.42-5.26 5.7.41.36.78 1.07.78 2.15v3.19c0 .31.21.67.8.56C20.71 21.38 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
                  </svg>
                </a>
                <a href={`mailto:${email}`} aria-label="Email"
                  className="w-10 h-10 bg-white rounded-xl border border-gray-100 flex items-center justify-center text-gray-400 hover:text-burgundy-700 hover:border-burgundy-200 transition-all">
                  <svg style={{width:'18px',height:'18px'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="space-y-5">
              <div>
                <p className="text-xs text-gray-400 font-medium mb-1">Location</p>
                <p className="text-sm text-gray-700">{location}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium mb-1">Email</p>
                <a href={`mailto:${email}`} className="text-sm text-gray-700 hover:text-burgundy-700 transition-colors">{email}</a>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium mb-1">Availability</p>
                <p className="text-sm text-gray-700">{availability}</p>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 text-sm text-green-600 bg-green-50 border border-green-100 px-4 py-2.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
              Open to opportunities
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
