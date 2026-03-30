import { ExternalLink } from 'lucide-react';
import { projects } from '../../data/portfolioData';

export default function ProjectsSection({ onPreviewProject, visibleElements }) {
    return (
        <section
            id="projects-section"
            className="relative overflow-hidden bg-white py-32 text-black"
        >
            <div className="absolute top-0 right-0 h-full w-1/3 bg-lime-400/5" />
            <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-gradient-to-tr from-lime-400/10 to-transparent blur-3xl" />

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                <div className="mb-20" data-animate-id="projects-title">
                    <div
                        className={`mb-6 inline-block border-4 border-black px-6 py-3 text-lg font-black tracking-wider transition-all duration-1000 ${
                            visibleElements.has('projects-title')
                                ? 'rotate-[2deg] opacity-100'
                                : 'rotate-[12deg] opacity-0'
                        }`}
                    >
                        SELECTED WORK
                    </div>
                    <h2
                        className={`text-6xl leading-none tracking-tighter transition-all duration-1000 delay-200 md:text-7xl ${
                            visibleElements.has('projects-title')
                                ? 'translate-x-0 opacity-100'
                                : '-translate-x-20 opacity-0'
                        }`}
                    >
                        FEATURED
                        <br />
                        PROJECTS
                    </h2>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <article
                            key={project.title}
                            data-animate-id={`project-${index}`}
                            className={`group relative overflow-hidden bg-black p-8 text-white transition-all duration-700 hover:scale-[1.02] ${
                                visibleElements.has(`project-${index}`)
                                    ? 'translate-y-0 opacity-100'
                                    : 'translate-y-20 opacity-0'
                            }`}
                            style={{
                                transitionDelay: `${index * 150}ms`,
                                boxShadow: `8px 8px 0 ${project.color}40`,
                            }}
                        >
                            <div
                                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-10"
                                style={{ backgroundColor: project.color }}
                            />

                            <div className="relative z-10">
                                <div className="mb-6 flex items-start justify-between">
                                    <h3 className="text-3xl tracking-tight">{project.title}</h3>
                                    <ExternalLink
                                        className="h-6 w-6 transition-transform duration-300 group-hover:rotate-45"
                                        style={{ color: project.color }}
                                    />
                                </div>

                                <p className="mb-6 leading-relaxed text-gray-400">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="border-2 px-3 py-1 text-xs font-bold tracking-wider"
                                            style={{
                                                borderColor: project.color,
                                                color: project.color,
                                            }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-6 flex gap-3">
                                    <button
                                        onClick={() => window.open(project.link, '_blank')}
                                        className="rounded-md bg-white px-4 py-2 font-bold text-black transition hover:opacity-90"
                                    >
                                        Visit
                                    </button>

                                    <button
                                        onClick={() => onPreviewProject(project)}
                                        className="rounded-md border-2 border-white px-4 py-2 font-bold text-white transition hover:bg-white/10"
                                    >
                                        Preview
                                    </button>
                                </div>
                            </div>

                            <div
                                className="absolute -right-10 -bottom-10 h-32 w-32 rotate-45 opacity-20 transition-all duration-700 group-hover:rotate-90 group-hover:scale-150"
                                style={{ backgroundColor: project.color }}
                            />
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
