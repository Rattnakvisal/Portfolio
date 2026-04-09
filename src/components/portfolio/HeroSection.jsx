import { createElement } from 'react';
import { ArrowRight, Download, Github, Linkedin, Sparkles } from 'lucide-react';
import {
    cardTechIcons,
    heroPills,
    profile,
    profileSkills,
    profileStats,
    resumePdf,
} from '../../data/portfolioData';

export default function HeroSection({
    heroCardTransform,
    isLoaded,
    onViewProjects,
    scrollY,
    spotlightTransform,
}) {
    return (
        <section className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,#14351d_0%,#071008_38%,#000_72%)] pt-[6.5rem] sm:pt-[7rem]">
            <div className="absolute inset-0 opacity-30">
                <div className="hero-grid absolute inset-0" />
                <div
                    className="absolute -left-24 top-28 h-72 w-72 rounded-full bg-lime-400/[0.18] blur-[120px]"
                    style={{ transform: `translateY(${scrollY * 0.22}px)` }}
                />
                <div
                    className="absolute right-0 top-20 h-[32rem] w-[32rem] rounded-full bg-cyan-400/[0.1] blur-[160px]"
                    style={{ transform: `translateY(${scrollY * -0.16}px)` }}
                />
                <div
                    className="absolute bottom-12 left-1/3 h-56 w-56 rounded-full bg-emerald-300/[0.1] blur-[120px]"
                    style={{ transform: spotlightTransform }}
                />
            </div>

            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute inset-y-0 left-[18%] w-px bg-gradient-to-b from-transparent via-lime-400/35 to-transparent" />
                <div className="absolute inset-y-0 right-[20%] w-px bg-gradient-to-b from-transparent via-cyan-400/25 to-transparent" />
                <div className="absolute left-10 top-24 h-24 w-24 rounded-full border border-white/10" />
                <div
                    className="absolute right-10 bottom-24 h-[26rem] w-[26rem] rounded-full border border-fuchsia-400/20"
                    style={{ transform: `translateY(${scrollY * -0.12}px)` }}
                />
            </div>

            <div className="relative z-10 mx-auto grid min-h-[calc(100svh-5.5rem)] max-w-7xl items-center gap-10 px-5 pb-14 sm:px-6 sm:pb-16 lg:min-h-[calc(100svh-6rem)] lg:grid-cols-[minmax(0,1.04fr)_minmax(420px,0.9fr)] lg:gap-12 lg:px-8 xl:gap-16">
                <div
                    className={`w-full max-w-[40rem] transition-all duration-1000 xl:max-w-[43rem] ${
                        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                    }`}
                >
                    <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-2 text-sm tracking-[0.24em] text-lime-300">
                        <Sparkles className="h-4 w-4" />
                        SOFTWARE DEVELOPER
                    </div>

                    <div className="max-w-[39rem]">
                        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-white/50">
                            Portfolio 2026
                        </p>
                        <h1 className="text-[3.5rem] leading-[0.88] tracking-tighter sm:text-[4rem] md:text-[5rem] lg:text-[4.5rem] xl:text-[5rem]">
                            SHAPING
                            <br />
                            <span
                                className="inline-block bg-linear-to-r from-lime-300 via-emerald-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(132,255,104,0.22)]"
                                style={{
                                    animation: 'gradient 8s ease infinite',
                                    backgroundSize: '200% 200%',
                                }}
                            >
                                DIGITAL
                            </span>
                            <br />
                            MOMENTUM
                        </h1>

                        <p className="mt-7 max-w-[34rem] text-lg leading-relaxed text-gray-300/85 sm:text-[1rem] md:text-[1rem]">
                            Passionate software developer crafting modern web solutions with
                            intuitive interfaces, scalable backend systems, and seamless user
                            journeys from start to finish.
                        </p>
                    </div>

                    <div className="mt-7 flex flex-wrap gap-3">
                        {heroPills.map((pill) => (
                            <span
                                key={pill}
                                className="rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 text-sm text-white/80 backdrop-blur-md"
                            >
                                {pill}
                            </span>
                        ))}
                    </div>

                    <div className="mt-10 flex flex-wrap items-center gap-4">
                        <button
                            onClick={onViewProjects}
                            className="group relative overflow-hidden rounded-2xl bg-lime-400 px-8 py-4 text-sm font-black tracking-wider text-black shadow-lg shadow-lime-400/35 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03]"
                        >
                            <span className="relative z-10 inline-flex items-center gap-2">
                                VIEW PROJECTS
                                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                            <span className="absolute inset-0 bg-linear-to-r from-white/0 via-white/35 to-white/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </button>

                        <a
                            href={resumePdf}
                            download
                            className="group inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/[0.03] px-8 py-4 text-sm font-black tracking-wider text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/10"
                        >
                            <Download className="h-4 w-4" />
                            DOWNLOAD CV
                        </a>
                    </div>

                    <div className="mt-7 flex flex-wrap items-center gap-4 text-sm text-white/60">
                        <div className="flex items-center gap-3">
                            <span className="h-2 w-2 rounded-full bg-lime-400 shadow-[0_0_20px_rgba(163,230,53,0.9)]" />
                            Available for internship and freelance
                        </div>
                        <span className="hidden h-px w-8 bg-white/15 md:block" />
                        <span>React, Laravel, PHP, ASP.NET, SQL</span>
                    </div>
                </div>

                <aside
                    className={`relative mx-auto w-full max-w-[460px] transition-all duration-1000 delay-200 lg:max-w-[480px] xl:max-w-[500px] ${
                        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                    }`}
                >
                    <div
                        className="hero-card-shell relative"
                        style={{
                            transform: heroCardTransform,
                            transition: 'transform 260ms ease-out',
                        }}
                    >
                        <div className="absolute -inset-5 rounded-[34px] bg-gradient-to-br from-lime-400/[0.12] via-transparent to-cyan-400/[0.12] blur-3xl" />

                        <div className="hero-card relative overflow-hidden rounded-[30px] border border-white/12 bg-[linear-gradient(145deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] px-5 py-6 shadow-[0_35px_90px_rgba(0,0,0,0.5)] backdrop-blur-2xl sm:px-6 sm:py-7">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(163,230,53,0.2),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.12),transparent_30%)]" />
                            <div className="hero-card-noise absolute inset-0 opacity-25" />
                            <div className="absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-white/60 to-transparent" />

                            <div className="relative z-10">
                                <div className="flex items-center justify-between gap-4">
                                    <div>
                                        <p className="text-[11px] uppercase tracking-[0.32em] text-white/50">
                                            Personal card
                                        </p>
                                        <h2 className="mt-2 text-[1.7rem] tracking-tight sm:text-[1.9rem]">
                                            Chun Rattnakvisal
                                        </h2>
                                    </div>
                                    <div className="rounded-full border border-lime-300/20 bg-lime-400/10 px-3 py-1 text-[11px] text-lime-200 sm:text-xs">
                                        Open to work
                                    </div>
                                </div>

                                <div className="relative mt-7 flex justify-center">
                                    <div className="hero-orbit-ring absolute inset-0 mx-auto h-40 w-40 rounded-full border border-lime-300/25 sm:h-44 sm:w-44" />
                                    <div className="absolute inset-0 mx-auto h-44 w-44 rounded-full border border-white/[0.08] sm:h-48 sm:w-48" />
                                    <div className="hero-tech-orbit absolute left-1/2 top-1/2 h-[15.5rem] w-[15.5rem] -translate-x-1/2 -translate-y-1/2 sm:h-[17rem] sm:w-[17rem]">
                                        {cardTechIcons.map(
                                            ({
                                                angle,
                                                color,
                                                delay,
                                                direction,
                                                duration,
                                                icon,
                                                label,
                                                radius,
                                                size,
                                            }) => (
                                                <div
                                                    key={label}
                                                    className={`hero-tech-badge ${direction === 'reverse' ? 'hero-tech-badge-reverse' : ''}`}
                                                    style={{
                                                        '--angle': angle,
                                                        '--delay': delay,
                                                        '--duration': duration,
                                                        '--radius': radius,
                                                        '--size': size,
                                                    }}
                                                    title={label}
                                                >
                                                    <span
                                                        className="hero-tech-badge-glow"
                                                        style={{ backgroundColor: color }}
                                                    />
                                                    <div
                                                        className="hero-tech-badge-inner"
                                                        style={{ color }}
                                                    >
                                                        {createElement(icon, {
                                                            className:
                                                                'h-4 w-4 sm:h-[18px] sm:w-[18px]',
                                                        })}
                                                        <span className="sr-only">{label}</span>
                                                    </div>
                                                    <span className="hero-tech-badge-label">
                                                        {label}
                                                    </span>
                                                </div>
                                            ),
                                        )}
                                    </div>
                                    <div className="relative overflow-hidden rounded-full border-4 border-lime-400/90 p-1 shadow-[0_0_40px_rgba(163,230,53,0.24)]">
                                        <img
                                            src={profile}
                                            alt="Profile photo"
                                            className="h-40 w-40 rounded-full object-cover sm:h-44 sm:w-44"
                                        />
                                    </div>
                                </div>

                                <div className="mt-6 text-center">
                                    <p className="text-sm uppercase tracking-[0.32em] text-white/50">
                                        Software developer
                                    </p>
                                </div>

                                <div className="mt-5 flex flex-wrap justify-center gap-2">
                                    {profileSkills.map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-full border border-white/12 bg-white/[0.07] px-3 py-1 text-xs text-white/80"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-5 grid grid-cols-2 gap-3">
                                    {profileStats.map((stat) => (
                                        <div
                                            key={stat.label}
                                            className="rounded-2xl border border-white/10 bg-black/20 p-3.5 text-left sm:p-4"
                                        >
                                            <div className="text-xl text-lime-300">
                                                {stat.value}
                                            </div>
                                            <div className="mt-1 text-xs uppercase tracking-[0.25em] text-white/50">
                                                {stat.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-5 flex items-center justify-center gap-3">
                                    <a
                                        href="https://github.com/Rattnakvisal"
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="GitHub"
                                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.06] text-white transition-all duration-300 hover:-translate-y-1 hover:border-lime-300/45 hover:bg-lime-400/12"
                                    >
                                        <Github className="h-5 w-5" />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/chun-rattnakvisal-3a24a0361/"
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="LinkedIn"
                                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.06] text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/45 hover:bg-cyan-400/12"
                                    >
                                        <Linkedin className="h-5 w-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>

            <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 animate-bounce">
                <div className="flex h-11 w-7 justify-center rounded-full border border-white/35 pt-2">
                    <div className="h-2.5 w-1 rounded-full bg-lime-300" />
                </div>
            </div>
        </section>
    );
}
