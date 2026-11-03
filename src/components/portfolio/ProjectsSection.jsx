import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { projects } from '../../data/portfolioData';
import ProjectPreviewModal from './ProjectPreviewModal';

function ProjectEntry({ index, project, onPreview }) {
    return (
        <li>
            <article
                className="project-entry"
                aria-labelledby={`project-title-${index}`}
            >
                <span className="project-entry-number" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                </span>
                <div className="project-entry-heading">
                    <span className="project-entry-type">{project.type}</span>
                    <h3 id={`project-title-${index}`}>
                        <button type="button" className="project-preview-trigger" onClick={() => onPreview(project)} aria-haspopup="dialog" aria-label={`View project details: ${project.title}`}>
                            {project.title}
                        </button>
                    </h3>
                </div>
                <div className="project-entry-details">
                    <p>{project.description}</p>
                    <ul className="project-entry-tech" aria-label="Technologies used">
                        {project.tech.map((tech) => <li key={tech}>{tech}</li>)}
                    </ul>
                </div>
                <div className="project-entry-action">
                    <span className="project-entry-arrow" aria-hidden="true"><ArrowUpRight size={25} /></span>
                    <span className="project-action-label" aria-hidden="true">Details</span>
                    <a className="project-source-link" href={project.link} target="_blank" rel="noreferrer" aria-label={`${project.title} source code on GitHub (opens in a new tab)`}>GitHub <ArrowUpRight size={12} aria-hidden="true" /></a>
                </div>
            </article>
        </li>
    );
}

export default function ProjectsSection({ visibleElements }) {
    const [selectedProject, setSelectedProject] = useState(null);
    const isVisible = visibleElements.has('projects-title');

    return (
        <section id="projects-section" className="section projects-section" aria-labelledby="projects-heading">
            <div className={`section-heading reveal ${isVisible ? 'visible' : ''}`} data-animate-id="projects-title">
                <div><span className="section-number">01</span><span className="section-kicker">Selected work</span></div>
                <h2 id="projects-heading">Projects built for<br /><em>real-world use.</em></h2>
                <p>A selection of full-stack products where I worked across interface design, business logic, databases, and deployment-ready structure.</p>
            </div>
            <div className={`project-index reveal ${isVisible ? 'visible' : ''}`}>
                <div className="project-index-heading">
                    <p>The project index <span>{String(projects.length).padStart(2, '0')}</span></p>
                    <span>From interface to database</span>
                </div>
                <ol className="project-list">
                    {projects.map((project, index) => <ProjectEntry key={project.title} index={index} project={project} onPreview={setSelectedProject} />)}
                </ol>
                <p className="project-index-note">Select a project to explore its interface, features, and technology.</p>
            </div>
            {selectedProject && <ProjectPreviewModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
        </section>
    );
}
