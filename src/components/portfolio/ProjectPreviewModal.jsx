import { X } from 'lucide-react';

export default function ProjectPreviewModal({ closeBtnRef, project, onClose }) {
    if (!project) {
        return null;
    }

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="preview-title"
            onClick={onClose}
        >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity" />

            <div
                className="modal-enter relative z-50 mx-auto w-full max-w-4xl overflow-hidden rounded-2xl bg-white text-black shadow-2xl transition-all"
                onClick={(event) => event.stopPropagation()}
                style={{ maxWidth: 1100 }}
            >
                <div className="flex justify-end p-4">
                    <button
                        ref={closeBtnRef}
                        onClick={onClose}
                        className="rounded-full p-2 hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-lime-400"
                        aria-label="Close preview"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <div className="p-6">
                    <h3 id="preview-title" className="mb-4 text-2xl tracking-tight">
                        {project.title}
                    </h3>
                    <div
                        className="mb-4 w-full overflow-hidden rounded-md bg-gray-100"
                        style={{ maxHeight: '60vh' }}
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="h-full w-full object-contain"
                            loading="lazy"
                        />
                    </div>

                    <p className="mb-4 text-gray-700">{project.description}</p>

                    <div className="mb-6 flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                            <span
                                key={tech}
                                className="rounded border px-3 py-1 text-sm text-gray-800"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-3">
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-md bg-lime-400 px-4 py-2 font-bold text-black"
                        >
                            Open Project
                        </a>
                        <button
                            onClick={onClose}
                            className="rounded-md border-2 border-black px-4 py-2 font-bold text-black"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
