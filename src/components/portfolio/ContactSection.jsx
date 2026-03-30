import { Github, Linkedin, Mail } from 'lucide-react';

export default function ContactSection({ visibleElements }) {
    return (
        <section
            id="contact-section"
            className="relative overflow-hidden bg-lime-400 py-32 text-black"
        >
            <div className="absolute inset-0 opacity-10">
                <div
                    className="absolute top-0 left-0 h-full w-full"
                    style={{
                        backgroundImage:
                            'repeating-linear-gradient(45deg, transparent, transparent 35px, #000 35px, #000 37px)',
                    }}
                />
            </div>

            <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
                <h2
                    data-animate-id="contact-title"
                    className={`mb-8 text-7xl leading-none tracking-tighter transition-all duration-1000 md:text-8xl ${
                        visibleElements.has('contact-title')
                            ? 'scale-100 opacity-100'
                            : 'scale-90 opacity-0'
                    }`}
                >
                    LET'S BUILD
                    <br />
                    SOMETHING
                    <br />
                    AMAZING
                </h2>

                <p
                    data-animate-id="contact-subtitle"
                    className={`mb-12 text-xl font-medium transition-all duration-1000 delay-300 md:text-2xl ${
                        visibleElements.has('contact-subtitle')
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-10 opacity-0'
                    }`}
                >
                    Open to freelance projects, collaborations, and full-time opportunities
                </p>

                <div
                    data-animate-id="contact-buttons"
                    className={`mb-12 flex flex-wrap justify-center gap-6 transition-all duration-1000 delay-500 ${
                        visibleElements.has('contact-buttons')
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-10 opacity-0'
                    }`}
                >
                    <a
                        href="mailto:your.rattnakvisalchun@gmail.com"
                        className="flex items-center gap-2 bg-black px-8 py-4 text-sm font-black tracking-wider text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-black/80"
                    >
                        <Mail className="h-5 w-5" />
                        EMAIL ME
                    </a>
                    <a
                        href="https://github.com/Rattnakvisal"
                        className="flex items-center gap-2 border-4 border-black px-8 py-4 text-sm font-black tracking-wider text-black transition-all duration-300 hover:scale-105 hover:bg-black hover:text-lime-400"
                    >
                        <Github className="h-5 w-5" />
                        GITHUB
                    </a>
                    <a
                        href="https://www.linkedin.com/in/chun-rattnakvisal-3a24a0361/"
                        className="flex items-center gap-2 border-4 border-black px-8 py-4 text-sm font-black tracking-wider text-black transition-all duration-300 hover:scale-105 hover:bg-black hover:text-lime-400"
                    >
                        <Linkedin className="h-5 w-5" />
                        LINKEDIN
                    </a>
                </div>

                <div className="text-sm font-bold tracking-wider">© 2026 ALL RIGHTS RESERVED</div>
            </div>
        </section>
    );
}
