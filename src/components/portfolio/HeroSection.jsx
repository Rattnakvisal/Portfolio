import { createElement, useState } from 'react';
import { ArrowDown, ArrowUpRight, Asterisk, Braces, Download, Github, Linkedin, MapPin, Pause, Play } from 'lucide-react';
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
import { usePortraitMotion } from '../../hooks/usePortraitMotion';
import './hero.css';

const marqueeTechnologies = [
    { color: '#ff2d20', icon: SiLaravel, label: 'Laravel', specialty: 'Backend', position: ['88%', '29%'], delay: '-2s' },
    { color: '#02569b', icon: SiFlutter, label: 'Flutter', specialty: 'Mobile', position: ['11%', '59%'], delay: '-3.5s' },
    { color: '#6db33f', icon: SiSpringboot, label: 'Spring Boot' },
    { color: '#087ea4', icon: SiReact, label: 'React', specialty: 'Frontend', position: ['12%', '29%'], delay: '-.5s' },
    { color: '#512bd4', icon: SiDotnet, label: 'ASP.NET', specialty: 'Backend', position: ['89%', '59%'], delay: '-1.5s' },
    { color: '#06b6d4', icon: SiTailwindcss, label: 'Tailwind CSS' },
    { color: '#4479a1', icon: SiMysql, label: 'MySQL', specialty: 'Database', position: ['29%', '86%'], delay: '-4.5s' },
    { color: '#2496ed', icon: SiDocker, label: 'Docker', specialty: 'DevOps', position: ['71%', '86%'], delay: '-2.5s' },
];

function PortraitSkills() {
    return (
        <ul className="portrait-skills" aria-label="Featured skills and specialties">
            {marqueeTechnologies.filter((technology) => technology.position).map((technology) => (
                <li
                    key={technology.label}
                    className="portrait-skill-position"
                    style={{
                        '--skill-x': technology.position[0],
                        '--skill-y': technology.position[1],
                        '--skill-color': technology.color,
                        '--skill-delay': technology.delay,
                    }}
                >
                    <a className="portrait-skill hero-loop" href="#skills-section" aria-label={`${technology.label}, ${technology.specialty} — view skills`}>
                        <span className="portrait-skill-icon">{createElement(technology.icon, { 'aria-hidden': true })}</span>
                        <span className="portrait-skill-copy"><strong>{technology.label}</strong><small>{technology.specialty}</small></span>
                    </a>
                </li>
            ))}
        </ul>
    );
}

function TechnologyTiles({ isClone = false }) {
    return (
        <div className="tech-logo-set" aria-hidden={isClone ? 'true' : undefined} inert={isClone || undefined}>
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
    const [motionPaused, setMotionPaused] = useState(false);
    const portraitRef = usePortraitMotion(motionPaused);

    return (
        <main id="home" className={`hero ${isLoaded ? 'is-loaded' : ''} ${motionPaused ? 'motion-paused' : ''}`} aria-labelledby="hero-heading">
            <div className="hero-ambient" aria-hidden="true" />
            <div className="hero-topline hero-enter" style={{ '--enter-delay': '80ms' }}>
                <div className="hero-availability"><span className="hero-status-dot hero-loop" aria-hidden="true" /> Open to opportunities</div>
                <span className="hero-location"><MapPin size={14} aria-hidden="true" /> Phnom Penh, Cambodia</span>
            </div>
            <div className="hero-inner">
                <div className="hero-copy">
                    <p className="hero-kicker hero-enter" style={{ '--enter-delay': '160ms' }}><span /> Software developer &amp; creative thinker</p>
                    <h1 id="hero-heading">
                        <span className="hero-title-line"><span style={{ '--line-delay': '200ms' }}>Turning ideas</span></span>{' '}
                        <span className="hero-title-line"><span style={{ '--line-delay': '320ms' }}>into digital</span></span>{' '}
                        <span className="hero-title-line hero-title-serif"><em style={{ '--line-delay': '440ms' }}>experiences.</em></span>
                    </h1>
                    <p className="hero-intro hero-enter" style={{ '--enter-delay': '580ms' }}>
                        Hi, I’m <strong>Chun Rattnakvisal.</strong> I bring thoughtful interfaces and reliable systems together — from the first interaction to the database.
                    </p>
                    <div className="hero-actions hero-enter" style={{ '--enter-delay': '680ms' }}>
                        <button className="button button-primary" onClick={onViewProjects}>
                            Explore my work <span className="hero-button-icon"><ArrowUpRight size={18} aria-hidden="true" /></span>
                        </button>
                        <a className="button button-secondary" href={resumePdf} download>
                            Download résumé <Download size={17} aria-hidden="true" />
                        </a>
                    </div>
                    <p className="hero-signoff hero-enter" style={{ '--enter-delay': '760ms' }}>A little design thinking. A lot of care in the code.</p>
                </div>
                <figure className="portrait-wrap hero-enter" style={{ '--enter-delay': '300ms' }}>
                    <div ref={portraitRef} id="portrait-stage" className="portrait-stage">
                        <div className="portrait-halo hero-loop" aria-hidden="true" />
                        <div className="portrait-orbit hero-loop" aria-hidden="true"><span /></div>
                        <div className="portrait-orbit portrait-orbit-inner hero-loop" aria-hidden="true"><span /></div>
                        <div className="portrait-drift hero-loop">
                            <div className="portrait-tilt">
                                <div className="portrait-frame">
                                    <img src={profile} alt="Portrait of Chun Rattnakvisal" width={1024} height={1536} fetchPriority="high" decoding="async" />
                                    <span className="portrait-monogram" aria-hidden="true">CR.</span>
                                    <div className="portrait-image-caption"><span>Design with purpose.</span><span>Build with care.</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="portrait-role hero-loop"><span aria-hidden="true"><Braces size={19} /></span><div><small>The craft</small><strong>Full-stack development</strong></div></div>
                        <Asterisk className="portrait-asterisk hero-loop" size={44} strokeWidth={1.1} aria-hidden="true" />
                        <PortraitSkills />
                    </div>
                    <figcaption className="portrait-caption"><span>Chun Rattnakvisal</span><span>Developer. Maker. Curious mind.</span></figcaption>
                </figure>
            </div>
            <div className="hero-bottom hero-enter" style={{ '--enter-delay': '850ms' }}>
                <div className="hero-socials">
                    <span>Find me online</span>
                    <a href="https://github.com/Rattnakvisal" target="_blank" rel="noreferrer" aria-label="GitHub (opens in a new tab)"><Github size={17} aria-hidden="true" /></a>
                    <a href="https://www.linkedin.com/in/chun-rattnakvisal-3a24a0361/" target="_blank" rel="noreferrer" aria-label="LinkedIn (opens in a new tab)"><Linkedin size={17} aria-hidden="true" /></a>
                </div>
                <button className="hero-scroll-cue" onClick={onViewProjects}><span className="hero-scroll-icon"><ArrowDown className="hero-loop" size={17} aria-hidden="true" /></span> Scroll to discover</button>
                <button className="hero-motion-toggle" onClick={() => setMotionPaused((paused) => !paused)} aria-pressed={motionPaused} aria-label={motionPaused ? 'Resume animations' : 'Pause animations'} aria-controls="portrait-stage hero-technologies">
                    {motionPaused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
                    <span>{motionPaused ? 'Motion paused' : 'Pause motion'}</span>
                </button>
            </div>
            <div id="hero-technologies" className="hero-tech-rail" aria-label="Technologies I work with">
                <div className="tech-rail-intro">
                    <small>Core technologies</small>
                    <strong>Tools of the craft</strong>
                </div>
                <div className="tech-logo-marquee">
                    <div className="tech-logo-track hero-loop">
                        <TechnologyTiles />
                        <TechnologyTiles isClone />
                    </div>
                </div>
            </div>
        </main>
    );
}
