import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navigationItems } from '../../data/portfolioData';

export default function Navbar({ activeSection, isLoaded, onNavigate }) {
    const [isOpen, setIsOpen] = useState(false);

    const navigate = (section) => {
        onNavigate(section);
        setIsOpen(false);
    };

    return (
        <header className={`site-header ${isLoaded ? 'is-loaded' : ''}`}>
            <nav className="nav-shell" aria-label="Main navigation">
                <button className="brand" onClick={() => navigate('home')} aria-label="Go to home">
                    <span className="brand-mark">CR</span>
                    <span className="brand-copy">Chun Rattnakvisal<small>Software Developer</small></span>
                </button>
                <div className="desktop-nav">
                    {navigationItems.filter((item) => !['home', 'education'].includes(item.section)).map((item) => (
                        <button key={item.section} className={activeSection === item.section ? 'active' : ''} onClick={() => navigate(item.section)}>
                            {item.label}
                        </button>
                    ))}
                </div>
                <button className="nav-cta" onClick={() => navigate('contact')}>
                    Let’s talk <ArrowUpRight size={16} />
                </button>
                <button className="menu-button" onClick={() => setIsOpen((current) => !current)} aria-label="Toggle navigation" aria-expanded={isOpen}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </nav>
            {isOpen ? (
                <div className="mobile-nav">
                    {navigationItems.map((item) => (
                        <button key={item.section} onClick={() => navigate(item.section)}>
                            {item.label}<ArrowUpRight size={18} />
                        </button>
                    ))}
                </div>
            ) : null}
        </header>
    );
}
