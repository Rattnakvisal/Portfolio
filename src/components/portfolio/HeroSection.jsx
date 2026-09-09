import { createElement } from 'react';
import { ArrowDownRight, ArrowUpRight, Download, Github, Linkedin } from 'lucide-react';
import {
    SiDocker,
    SiDotnet,
    SiFlutter,
    SiLaravel,
    SiMysql,
    SiReact,
    SiSpringboot,
    SiTailwindcss,
} from 'react-icons/si';
import { profile, resumePdf } from '../../data/portfolioData';

const marqueeTechnologies = [
    { color: '#ff2d20', icon: SiLaravel, label: 'Laravel' },
    { color: '#02569b', icon: SiFlutter, label: 'Flutter' },
    { color: '#6db33f', icon: SiSpringboot, label: 'Spring Boot' },
    { color: '#087ea4', icon: SiReact, label: 'React' },
    { color: '#512bd4', icon: SiDotnet, label: 'ASP.NET' },
    { color: '#06b6d4', icon: SiTailwindcss, label: 'Tailwind CSS' },
    { color: '#4479a1', icon: SiMysql, label: 'MySQL' },
    { color: '#2496ed', icon: SiDocker, label: 'Docker' },
];

function TechnologyTiles({ isClone = false }) {
    return (
        <div className="tech-logo-set" aria-hidden={isClone ? 'true' : undefined} inert={isClone ? '' : undefined}>
            {marqueeTechnologies.map((technology) => (
                <div
                    className="tech-logo-tile"
                    key={technology.label}
                    style={{ '--logo-color': technology.color }}
                >
                    <span className="tech-logo-icon">
                        {createElement(technology.icon, { 'aria-hidden': true })}
                    </span>
                    <span className="tech-logo-copy">
                        <strong>{technology.label}</strong>
                    </span>
                </div>
            ))}
        </div>
    );
}

export default function HeroSection({ isLoaded, onViewProjects }) {
    return (
        <main id="home" className={`hero ${isLoaded ? 'is-loaded' : ''}`}>
            <div className="hero-noise" />
            <div className="hero-inner">
                <div className="hero-copy">
                    <div className="eyebrow"><span /> Available for new opportunities</div>
                    <h1>
                        I build digital
                        <span>products that</span>
                        <em>work beautifully.</em>
                    </h1>
                    <p className="hero-intro">
                        I’m <strong>Chun Rattnakvisal</strong>, a software developer in Phnom Penh crafting thoughtful interfaces and reliable systems from database to browser.
                    </p>
                    <div className="hero-actions">
                        <button className="button button-primary" onClick={onViewProjects}>
                            Explore my work <ArrowDownRight size={18} />
                        </button>
                        <a className="button button-secondary" href={resumePdf} download>
                            Download résumé <Download size={17} />
                        </a>
                    </div>
                    <div className="hero-socials">
                        <span>Find me online</span>
                        <a href="https://github.com/Rattnakvisal" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
                        <a href="https://www.linkedin.com/in/chun-rattnakvisal-3a24a0361/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
                    </div>
                </div>
                <div className="portrait-wrap">
                    <div className="portrait-frame">
                        <img src={profile} alt="Chun Rattnakvisal in a formal suit" />
                        <div className="portrait-caption">
                            <span>Based in</span>
                            <strong>Phnom Penh, Cambodia</strong>
                        </div>
                    </div>
                    <div className="portrait-sticker">Code<br />with<br />intent.</div>
                    <ArrowUpRight className="portrait-arrow" size={56} strokeWidth={1.2} />
                </div>
            </div>
            <div className="hero-tech-rail" aria-label="Technologies I work with">
                <div className="tech-rail-intro">
                    <small>Core technologies</small>
                    <strong>Built for<br />real products</strong>
                </div>
                <div className="tech-logo-marquee">
                    <div className="tech-logo-track">
                        <TechnologyTiles />
                        <TechnologyTiles isClone />
                    </div>
                </div>
            </div>
        </main>
    );
}
