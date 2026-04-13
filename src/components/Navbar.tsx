import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useContent } from '../hooks/useContent';

const NAV_LINKS = [
    { label: 'About', to: '/about' },
    { label: 'Projects', to: '/projects' },
    { label: 'Blog', to: '/blog' },
    { label: 'Contact', to: '/contact' },
];

interface NavbarProps {
    onAdminTrigger: () => void;
}

export default function Navbar({ onAdminTrigger }: NavbarProps) {
    const { content } = useContent();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const clickCount = useRef(0);
    const clickTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const location = useLocation();

    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleLogoClick = () => {
        clickCount.current += 1;
        if (clickTimer.current) clearTimeout(clickTimer.current);
        if (clickCount.current >= 5) {
            clickCount.current = 0;
            onAdminTrigger();
        } else {
            clickTimer.current = setTimeout(() => { clickCount.current = 0; }, 1500);
        }
    };

    const firstName = content.general.name.split(' ')[0] || 'Portfolio';

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${scrolled ? 'border-b border-gray-100 shadow-sm' : ''}`}>
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <button onClick={handleLogoClick} className="focus:outline-none select-none">
                    <Link to="/" className="text-burgundy-800 font-bold text-lg tracking-tight hover:text-burgundy-600 transition-colors duration-200">
                        {firstName}
                    </Link>
                </button>

                <ul className="hidden md:flex items-center gap-7">
                    {NAV_LINKS.map((link) => (
                        <li key={link.to}>
                            <NavLink
                                to={link.to}
                                className={({ isActive }) =>
                                    `text-sm font-medium transition-colors duration-200 ${isActive ? 'text-burgundy-800' : 'text-gray-500 hover:text-gray-900'}`
                                }
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                    <li>
                        <Link to="/contact"
                            className="ml-1 px-4 py-2 bg-burgundy-800 text-white text-sm font-medium rounded-full hover:bg-burgundy-700 transition-colors duration-200">
                            Hire Me
                        </Link>
                    </li>
                </ul>

                <button onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-gray-600 focus:outline-none" aria-label="Toggle menu">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {menuOpen
                            ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        }
                    </svg>
                </button>
            </div>

            {menuOpen && (
                <div className="md:hidden bg-white border-t border-gray-50 px-6 pb-5 pt-2 space-y-1">
                    {NAV_LINKS.map((link) => (
                        <NavLink key={link.to} to={link.to}
                            className={({ isActive }) =>
                                `block py-2.5 text-sm font-medium transition-colors ${isActive ? 'text-burgundy-800' : 'text-gray-600 hover:text-burgundy-800'}`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                    <Link to="/contact"
                        className="inline-block mt-2 px-5 py-2 bg-burgundy-800 text-white text-sm font-medium rounded-full hover:bg-burgundy-700 transition-colors">
                        Hire Me
                    </Link>
                </div>
            )}
        </nav>
    );
}
