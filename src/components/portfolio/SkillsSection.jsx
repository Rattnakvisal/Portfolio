import { skills } from '../../data/portfolioData';

export default function SkillsSection({ visibleElements }) {
    return (
        <section id="skills-section" className="relative bg-black py-32">
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage:
                        'repeating-linear-gradient(0deg, transparent, transparent 50px, #fff 50px, #fff 51px)',
                }}
            />

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                <div className="mb-20 text-center" data-animate-id="skills-title">
                    <h2
                        className={`mb-4 text-6xl leading-none tracking-tighter transition-all duration-1000 md:text-7xl ${
                            visibleElements.has('skills-title')
                                ? 'scale-100 opacity-100'
                                : 'scale-95 opacity-0'
                        }`}
                    >
                        TECH STACK
                    </h2>
                    <div
                        className={`mx-auto h-1 bg-lime-400 transition-all duration-1000 delay-300 ${
                            visibleElements.has('skills-title')
                                ? 'w-32 opacity-100'
                                : 'w-0 opacity-0'
                        }`}
                    />
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {skills.map((skillGroup, index) => {
                        const Icon = skillGroup.icon;

                        return (
                            <div
                                key={skillGroup.category}
                                data-animate-id={`skill-${index}`}
                                className={`group border-2 border-white/10 bg-white/5 p-8 transition-all duration-700 hover:border-lime-400 hover:bg-lime-400/5 ${
                                    visibleElements.has(`skill-${index}`)
                                        ? 'translate-x-0 opacity-100'
                                        : index % 2 === 0
                                          ? '-translate-x-20 opacity-0'
                                          : 'translate-x-20 opacity-0'
                                }`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <Icon className="mb-6 h-10 w-10 text-lime-400 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                                <h3 className="mb-6 text-2xl tracking-tight">
                                    {skillGroup.category}
                                </h3>
                                <div className="space-y-2">
                                    {skillGroup.items.map((skill) => (
                                        <div key={skill} className="flex items-center gap-2">
                                            <div className="h-1 w-1 rounded-full bg-lime-400" />
                                            <span className="font-medium text-gray-400">
                                                {skill}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
