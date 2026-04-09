export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 text-center text-sm">
      <div className="max-w-6xl mx-auto px-6">
        <p className="mb-1">
          Designed & built by{' '}
          <span className="text-white font-semibold">Your Name</span>
        </p>
        <p>© {year} · Information Systems Portfolio</p>
      </div>
    </footer>
  );
}