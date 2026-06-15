import { BookOpenCheck, CalendarDays, GraduationCap } from 'lucide-react';
import { education, educationPhoto } from '../../data/portfolioData';

export default function EducationSection({ visibleElements }) {
    return (
        <section
            id="education-section"
            className="relative overflow-hidden bg-black py-32 text-white"
        >
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-lime-400/40 to-transparent" />
            <div className="absolute -right-24 top-20 h-80 w-80 rounded-full bg-lime-400/10 blur-3xl" />
            <div className="absolute bottom-16 left-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
                <div data-animate-id="education-title">
                    <div
                        className={`mb-6 inline-flex items-center gap-3 border-2 border-lime-400 px-5 py-3 text-sm font-black tracking-[0.24em] text-lime-300 transition-all duration-1000 ${
                            visibleElements.has('education-title')
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-8 opacity-0'
                        }`}
                    >
                        <GraduationCap className="h-5 w-5" />
                        EDUCATION
                    </div>
                    <h2
                        className={`text-6xl leading-none tracking-tighter transition-all duration-1000 delay-150 md:text-7xl ${
                            visibleElements.has('education-title')
                                ? 'translate-x-0 opacity-100'
                                : '-translate-x-16 opacity-0'
                        }`}
                    >
                        LEARNING
                        <br />
                        JOURNEY
                    </h2>

                    <div
                        className={`mt-10 overflow-hidden border border-lime-400/40 bg-white/[0.04] p-3 shadow-[10px_10px_0_rgba(163,230,53,0.18)] transition-all duration-1000 delay-300 ${
                            visibleElements.has('education-title')
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-12 opacity-0'
                        }`}
                    >
                        <img
                            src={educationPhoto}
                            alt="Chun Rattnakvisal"
                            className="aspect-[4/5] w-full object-cover"
                        />
                    </div>
                </div>

                <div className="space-y-6">
                    {education.map((item, index) => (
                        <article
                            key={`${item.school}-${item.period}`}
                            data-animate-id={`education-${index}`}
                            className={`group relative overflow-hidden border border-white/10 bg-white/[0.04] p-6 transition-all duration-700 hover:border-lime-400/70 hover:bg-lime-400/[0.06] md:p-8 ${
                                visibleElements.has(`education-${index}`)
                                    ? 'translate-y-0 opacity-100'
                                    : 'translate-y-16 opacity-0'
                            }`}
                            style={{ transitionDelay: `${index * 140}ms` }}
                        >
                            <div className="absolute -right-12 -bottom-12 h-32 w-32 rotate-45 bg-lime-400/10 transition-transform duration-500 group-hover:rotate-90 group-hover:scale-125" />

                            <div className="relative z-10 flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                                <div>
                                    <h3 className="text-3xl tracking-tight md:text-4xl">
                                        {item.school}
                                    </h3>
                                    <div className="mt-3 inline-flex items-center gap-2 bg-lime-400 px-3 py-1 text-xs font-black tracking-wider text-black">
                                        <CalendarDays className="h-4 w-4" />
                                        {item.period}
                                    </div>
                                </div>
                                <div className="hidden rounded-full border border-white/10 bg-white/[0.04] p-3 text-lime-300 md:block">
                                    <BookOpenCheck className="h-6 w-6" />
                                </div>
                            </div>

                            <div className="relative z-10 mt-6 space-y-3">
                                {item.highlights.map((highlight) => (
                                    <div key={highlight} className="flex gap-3">
                                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-lime-400" />
                                        <p className="font-medium leading-relaxed text-gray-300">
                                            {highlight}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
