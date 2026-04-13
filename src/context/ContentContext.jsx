// src/context/ContentContext.jsx
import { createContext, useContext, useState } from 'react';
import { DEFAULT_CONTENT } from '../data/content';

const defaultContextValue = {
  content: DEFAULT_CONTENT,
  updateSection: () => {},
  resetContent: () => {},
};

// Export the context itself so useContent hook can access it
export const ContentContext = createContext(defaultContextValue);

function loadContent() {
  try {
    const saved = localStorage.getItem('portfolioContent');
    if (!saved) return DEFAULT_CONTENT;
    const parsed = JSON.parse(saved);
    return {
      general:      { ...DEFAULT_CONTENT.general,      ...parsed.general },
      about:        { ...DEFAULT_CONTENT.about,        ...parsed.about },
      skills:       parsed.skills       || DEFAULT_CONTENT.skills,
      projects:     parsed.projects     || DEFAULT_CONTENT.projects,
      resume:       { ...DEFAULT_CONTENT.resume,       ...parsed.resume },
      testimonials: parsed.testimonials || DEFAULT_CONTENT.testimonials,
      blog:         parsed.blog         || DEFAULT_CONTENT.blog,
    };
  } catch {
    return DEFAULT_CONTENT;
  }
}

export function ContentProvider({ children }) {
  const [content, setContent] = useState(loadContent);

  const updateSection = (section, data) => {
    setContent(prev => {
      const next = { ...prev, [section]: data };
      localStorage.setItem('portfolioContent', JSON.stringify(next));
      return next;
    });
  };

  const resetContent = () => {
    localStorage.removeItem('portfolioContent');
    setContent(DEFAULT_CONTENT);
  };

  return (
    <ContentContext.Provider value={{ content, updateSection, resetContent }}>
      {children}
    </ContentContext.Provider>
  );
}

export { useContent } from '../hooks/useContent';