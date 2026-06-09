import { BriefcaseBusiness, CalendarDays } from 'lucide-react';
import { experiences } from '../../data/portfolioData';

export default function ExperienceSection({ visibleElements }) {
    return (
        <section
            id="experience-section"
            className="relative overflow-hidden bg-black py-32 text-white"
        >
            <div className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-white/10 lg:block" />
            <div className="absolute top-20 left-0 h-72 w-72 rounded-full bg-lime-400/10 blur-3xl" />
            <div className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                <div className="mb-20 max-w-3xl" data-animate-id="experience-title">
                    <div
                        className={`mb-6 inline-flex items-center gap-3 border-2 border-lime-400 px-5 py-3 text-sm font-black tracking-[0.24em] text-lime-300 transition-all duration-1000 ${
                            visibleElements.has('experience-title')
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-8 opacity-0'
                        }`}
                    >
                        <BriefcaseBusiness className="h-5 w-5" />
                        EXPERIENCE
                    </div>
                    <h2
                        className={`text-6xl leading-none tracking-tighter transition-all duration-1000 delay-150 md:text-7xl ${
                            visibleElements.has('experience-title')
                                ? 'translate-x-0 opacity-100'
                                : '-translate-x-16 opacity-0'
                        }`}
                    >
                        PRACTICAL
                        <br />
                        EXPERIENCE
                    </h2>
                </div>

                <div className="space-y-8">
                    {experiences.map((experience, index) => (
                        <article
                            key={`${experience.role}-${experience.period}`}
                            data-animate-id={`experience-${index}`}
                            className={`relative grid gap-6 border border-white/10 bg-white/[0.04] p-6 transition-all duration-700 hover:border-lime-400/70 hover:bg-lime-400/[0.06] md:p-8 lg:grid-cols-[0.85fr_1.15fr] ${
                                visibleElements.has(`experience-${index}`)
                                    ? 'translate-y-0 opacity-100'
                                    : 'translate-y-16 opacity-0'
                            }`}
                            style={{ transitionDelay: `${index * 140}ms` }}
                        >
                            <div className="absolute -left-2 top-8 hidden h-4 w-4 rounded-full border-4 border-black bg-lime-400 shadow-[0_0_0_6px_rgba(163,230,53,0.14)] lg:block" />

                            <div>
                                <div className="mb-5 inline-flex items-center gap-2 bg-lime-400 px-3 py-1 text-xs font-black tracking-wider text-black">
                                    <CalendarDays className="h-4 w-4" />
                                    {experience.period}
                                </div>
                                <h3 className="text-3xl tracking-tight md:text-4xl">
                                    {experience.role}
                                </h3>
                                <p className="mt-2 text-sm font-bold uppercase tracking-[0.22em] text-lime-300">
                                    {experience.organization}
                                </p>
                                <p className="mt-6 max-w-xl leading-relaxed text-gray-400">
                                    {experience.description}
                                </p>
                            </div>

                            <div className="flex flex-col justify-between gap-6">
                                <div className="space-y-3">
                                    {experience.highlights.map((highlight) => (
                                        <div key={highlight} className="flex gap-3">
                                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-lime-400" />
                                            <p className="font-medium leading-relaxed text-gray-300">
                                                {highlight}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {experience.stack.map((item) => (
                                        <span
                                            key={item}
                                            className="border border-white/15 px-3 py-1 text-xs font-bold tracking-wider text-lime-200"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
