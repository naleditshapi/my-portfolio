import { useContent } from '../../hooks/useContent';
import { Link } from 'react-router-dom';

export default function Hero() {
  const { content } = useContent();
  const { name, tagline, heroBio, github, linkedin } = content.general;

  return (
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
              <span className="text-white text-xs font-bold text-center leading-tight">IS<br />2025</span>
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-2 mt-20 text-gray-300">
          <div className="w-8 h-px bg-gray-200" />
          <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}

/*
<section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-16"
    >
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
        {Text content }
        <div className="flex-1 animate-fadeIn">
          { Badge }
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">
            👋 Open to Entry-Level Opportunities
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
            Hi, I'm<br />
            <span className="text-indigo-600">{name}</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-500 font-medium mb-6">
            {tagline}
          </p>

          <p className="text-gray-600 text-lg max-w-xl mb-8 leading-relaxed">
            {heroBio}
          </p>

          {/* CTA Buttons }
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200 shadow-lg shadow-indigo-200"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition-colors duration-200"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links }
          <div className="flex gap-4 mt-8">
            <a
              href="https://github.com/naleditshapi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-800 transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.24-1.28-5.24-5.71 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.44-2.69 5.42-5.26 5.7.41.36.78 1.07.78 2.15v3.19c0 .31.21.67.8.56C20.71 21.38 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/naleditshapi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Avatar / Illustration }
        <div className="flex-shrink-0">
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white text-8xl shadow-2xl shadow-indigo-200">
            👨‍💻
          </div>
        </div>
      </div>
    </section>
*/