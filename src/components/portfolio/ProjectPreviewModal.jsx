import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ArrowUpRight, Github, X } from 'lucide-react';

export default function ProjectPreviewModal({ project, onClose }) {
    const dialogRef = useRef(null);
    const closeRef = useRef(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        const previousFocus = document.activeElement;
        const previousOverflow = document.body.style.overflow;

        dialog.showModal();
        closeRef.current.focus({ preventScroll: true });
        document.body.style.overflow = 'hidden';

        return () => {
            dialog.close();
            document.body.style.overflow = previousOverflow;
            if (previousFocus instanceof HTMLElement && previousFocus.isConnected) {
                previousFocus.focus({ preventScroll: true });
            }
        };
    }, []);

    const closeOnBackdrop = (event) => {
        if (event.target !== event.currentTarget) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right
            || event.clientY < bounds.top || event.clientY > bounds.bottom) {
            onClose();
        }
    };

    const { caseStudy } = project;

    return createPortal(
        <dialog
            ref={dialogRef}
            className="project-dialog"
            aria-labelledby="case-study-title"
            onCancel={(event) => { event.preventDefault(); onClose(); }}
            onClick={closeOnBackdrop}
        >
            <div className="case-study-toolbar">
                <span>Selected work / Project details</span>
                <button ref={closeRef} type="button" className="case-study-close" onClick={onClose} aria-label="Close project details">
                    <X size={20} aria-hidden="true" />
                </button>
            </div>
            <article className="case-study-content">
                <header className="case-study-header">
                    <p className="case-study-kicker">{project.type}</p>
                    <h2 id="case-study-title">{project.title}</h2>
                    <p className="case-study-summary">{project.description}</p>
                </header>
                <figure className="case-study-image">
                    <img src={project.image} alt={`${project.title} interface showcase`} decoding="async" />
                    <figcaption>Interface showcase / {project.title}</figcaption>
                </figure>
                <dl className="case-study-facts">
                    <div><dt>Context</dt><dd>{caseStudy.context}</dd></div>
                    <div><dt>Focus</dt><dd>{caseStudy.focus}</dd></div>
                </dl>
                <section className="case-study-section" aria-labelledby="case-study-overview">
                    <span className="case-study-label">01 / Overview</span>
                    <div><h3 id="case-study-overview">The project at a glance.</h3><p>{caseStudy.overview}</p></div>
                </section>
                <section className="case-study-section" aria-labelledby="case-study-features">
                    <span className="case-study-label">02 / Features</span>
                    <div>
                        <h3 id="case-study-features">What it brings together.</h3>
                        <ul className="case-study-features">
                            {caseStudy.features.map((feature) => (
                                <li key={feature.title}><h4>{feature.title}</h4><p>{feature.description}</p></li>
                            ))}
                        </ul>
                    </div>
                </section>
                <section className="case-study-section" aria-labelledby="case-study-stack">
                    <span className="case-study-label">03 / Technology</span>
                    <div>
                        <h3 id="case-study-stack">Tools behind the interface.</h3>
                        <ul className="case-study-stack">{project.tech.map((tech) => <li key={tech}>{tech}</li>)}</ul>
                    </div>
                </section>
                <footer className="case-study-footer">
                    <a className="case-study-source" href={project.link} target="_blank" rel="noreferrer">
                        <Github size={18} aria-hidden="true" /> View source code <ArrowUpRight size={18} aria-hidden="true" />
                        <span className="project-link-note"> (opens in a new tab)</span>
                    </a>
                    <button type="button" className="case-study-back" onClick={onClose}>Back to projects</button>
                </footer>
            </article>
        </dialog>,
        document.body,
    );
}
