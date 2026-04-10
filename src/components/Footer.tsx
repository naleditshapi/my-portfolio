import { useContent } from '../ContentContext';

export default function Footer() {
  const { content } = useContent();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-burgundy-400 font-bold text-sm">{content.general.name}</span>
        <p className="text-gray-600 text-xs">
          © {year} · Information Systems Portfolio
        </p>
        <div className="flex items-center gap-1.5 text-xs text-gray-600">
          <span className="w-1.5 h-1.5 rounded-full bg-burgundy-700" />
          Built with React & Tailwind
        </div>
      </div>
    </footer>
  );
}
