import { ArrowRight, ArrowUpRight, CodeXml } from 'lucide-react';
import { projects } from '../../data/portfolioData';

function ProjectCard({ index, project }) {
    return (
        <article className="project-card" style={{ '--project-accent': project.color }}>
            <a
                className="project-image"
                href={project.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.title} on GitHub`}
            >
                <img src={project.image} alt={`${project.title} interface preview`} loading="lazy" />
                <span className="project-index">Featured / 0{index + 1}</span>
                <span className="project-view" aria-hidden="true"><ArrowUpRight size={22} /></span>
            </a>
            <div className="project-info">
                <div className="project-meta">
                    <p className="project-type"><CodeXml size={14} /> {project.type}</p>
                    <span>2025—26</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-list">
                    {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
                </div>
                <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                    View on GitHub <ArrowRight size={17} />
                </a>
            </div>
        </article>
    );
}

export default function ProjectsSection({ visibleElements }) {
    const isVisible = visibleElements.has('projects-title');

    return (
        <section id="projects-section" className="section projects-section">
            <div className={`section-heading reveal ${isVisible ? 'visible' : ''}`} data-animate-id="projects-title">
                <div><span className="section-number">01</span><span className="section-kicker">Selected work</span></div>
                <h2>Projects built for<br /><em>real-world use.</em></h2>
                <p>A selection of full-stack products where I worked across interface design, business logic, databases, and deployment-ready structure.</p>
            </div>
            <div className={`project-grid reveal ${isVisible ? 'visible' : ''}`}>
                {projects.map((project, index) => <ProjectCard key={project.title} index={index} project={project} />)}
            </div>
        </section>
    );
}
