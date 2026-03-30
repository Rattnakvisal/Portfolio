import { useEffect, useRef, useState } from 'react';

export function usePortfolioPage() {
    const [activeSection, setActiveSection] = useState('home');
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isLoaded, setIsLoaded] = useState(false);
    const [visibleElements, setVisibleElements] = useState(new Set());
    const [scrollY, setScrollY] = useState(0);
    const [selectedProject, setSelectedProject] = useState(null);
    const closeBtnRef = useRef(null);

    useEffect(() => {
        const rafId = window.requestAnimationFrame(() => {
            setIsLoaded(true);
        });

        const handleMouseMove = (event) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.cancelAnimationFrame(rafId);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleElements(
                            (previous) => new Set([...previous, entry.target.dataset.animateId]),
                        );
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -100px 0px' },
        );

        const elements = document.querySelectorAll('[data-animate-id]');
        elements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!selectedProject) {
            return undefined;
        }

        const timeoutId = setTimeout(() => {
            closeBtnRef.current?.focus();
        }, 50);

        const onKeyDown = (event) => {
            if (event.key === 'Escape') {
                setSelectedProject(null);
            }
        };

        window.addEventListener('keydown', onKeyDown);

        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [selectedProject]);

    const scrollToSection = (sectionName) => {
        setActiveSection(sectionName);

        const sectionMap = {
            home: 0,
            work: document.getElementById('projects-section')?.offsetTop - 80,
            skills: document.getElementById('skills-section')?.offsetTop - 80,
            contact: document.getElementById('contact-section')?.offsetTop - 80,
        };

        window.scrollTo({ top: sectionMap[sectionName] || 0, behavior: 'smooth' });
    };

    const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1440;
    const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 900;
    const pointerX = (mousePosition.x / viewportWidth - 0.5) * 2;
    const pointerY = (mousePosition.y / viewportHeight - 0.5) * 2;
    const scrollRange =
        typeof document !== 'undefined'
            ? Math.max(1, document.documentElement.scrollHeight - viewportHeight)
            : 1;
    const scrollProgress = Math.min(100, Math.max(0, (scrollY / scrollRange) * 100));
    const heroCardTransform = `perspective(1600px) rotateX(${(-pointerY * 5).toFixed(2)}deg) rotateY(${(pointerX * 7).toFixed(2)}deg) translate3d(${(pointerX * 10).toFixed(2)}px, ${(pointerY * -8).toFixed(2)}px, 0)`;
    const spotlightTransform = `translate(${(pointerX * 26).toFixed(2)}px, ${(pointerY * 20).toFixed(2)}px)`;

    return {
        activeSection,
        closeBtnRef,
        heroCardTransform,
        isLoaded,
        mousePosition,
        scrollProgress,
        scrollToSection,
        scrollY,
        selectedProject,
        setSelectedProject,
        spotlightTransform,
        visibleElements,
    };
}
