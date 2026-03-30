import { navigationItems } from '../../data/portfolioData';

export default function Navbar({ activeSection, isLoaded, onNavigate }) {
    return (
        <nav className="fixed top-0 right-0 left-0 z-40 px-3 pt-3 sm:px-5 sm:pt-4">
            <div className="mx-auto max-w-7xl rounded-[24px] border border-white/10 bg-black/70 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl">
                <div className="flex h-[68px] items-center justify-between px-5 sm:h-[74px] sm:px-6 lg:px-8">
                <div
                    className={`text-[1.75rem] leading-none tracking-tighter transition-all duration-700 sm:text-[1.95rem] ${
                        isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
                    }`}
                >
                    <span className="text-white">Chun Rattnakvisal</span>
                    <span className="text-lime-400">.</span>
                </div>
                <div
                    className={`flex items-center gap-1.5 transition-all duration-700 delay-300 sm:gap-2 md:gap-3 ${
                        isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
                    }`}
                >
                    {navigationItems.map((item, index) => (
                        <button
                            key={item.label}
                            onClick={() => onNavigate(item.section)}
                            className={`group relative inline-flex h-9 items-center justify-center rounded-full px-2.5 text-[11px] font-bold leading-none tracking-wider transition-all duration-300 sm:h-10 sm:px-3.5 sm:text-xs md:min-w-[74px] md:text-sm ${
                                activeSection === item.section
                                    ? 'bg-white/[0.06] text-lime-300'
                                    : 'text-white hover:bg-white/[0.04] hover:text-lime-400'
                            }`}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {item.label}
                            <span
                                className={`absolute bottom-1.5 left-1/2 h-0.5 -translate-x-1/2 bg-lime-400 transition-all duration-300 ${
                                    activeSection === item.section
                                        ? 'w-8'
                                        : 'w-0 group-hover:w-7'
                                }`}
                            />
                        </button>
                    ))}
                </div>
            </div>
            </div>
        </nav>
    );
}
