import { useEffect, useState } from 'react';

const sectionIds = {
    home: 'home',
    work: 'projects-section',
    experience: 'experience-section',
    education: 'education-section',
    skills: 'skills-section',
    contact: 'contact-section',
};

export function usePortfolioPage() {
    const [activeSection, setActiveSection] = useState('home');
    const [isLoaded, setIsLoaded] = useState(false);
    const [visibleElements, setVisibleElements] = useState(() => new Set());
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const loadFrame = window.requestAnimationFrame(() => setIsLoaded(true));
        let scrollFrame;
        const handleScroll = () => {
            window.cancelAnimationFrame(scrollFrame);
            scrollFrame = window.requestAnimationFrame(() => setScrollY(window.scrollY));
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.cancelAnimationFrame(loadFrame);
            window.cancelAnimationFrame(scrollFrame);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const revealObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleElements((previous) => {
                            const next = new Set(previous);
                            next.add(entry.target.dataset.animateId);
                            return next;
                        });
                    }
                });
            },
            { threshold: 0.08, rootMargin: '0px 0px -60px' },
        );

        document.querySelectorAll('[data-animate-id]').forEach((element) => revealObserver.observe(element));
        return () => revealObserver.disconnect();
    }, []);

    useEffect(() => {
        const sectionObserver = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
                if (visible) {
                    const match = Object.entries(sectionIds).find(([, id]) => id === visible.target.id);
                    if (match) setActiveSection(match[0]);
                }
            },
            { rootMargin: '-25% 0px -60%', threshold: [0, 0.1, 0.25] },
        );

        Object.values(sectionIds).forEach((id) => {
            const section = document.getElementById(id);
            if (section) sectionObserver.observe(section);
        });
        return () => sectionObserver.disconnect();
    }, []);

    const scrollToSection = (sectionName) => {
        setActiveSection(sectionName);
        document.getElementById(sectionIds[sectionName])?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollRange = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const scrollProgress = Math.min(100, Math.max(0, (scrollY / scrollRange) * 100));

    return { activeSection, isLoaded, scrollProgress, scrollToSection, visibleElements };
}
