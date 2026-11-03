import { useEffect, useRef } from 'react';

export function usePortraitMotion(paused) {
    const portraitRef = useRef(null);

    useEffect(() => {
        const portrait = portraitRef.current;
        if (!portrait) return;

        const motionQuery = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
        let frame;

        const reset = () => {
            window.cancelAnimationFrame(frame);
            portrait.style.setProperty('--portrait-rotate-x', '0deg');
            portrait.style.setProperty('--portrait-rotate-y', '0deg');
            portrait.style.setProperty('--portrait-shift-x', '0px');
            portrait.style.setProperty('--portrait-shift-y', '0px');
        };

        const move = (event) => {
            if (paused || !motionQuery.matches || event.pointerType === 'touch') return;
            const bounds = portrait.getBoundingClientRect();
            const x = Math.max(-1, Math.min(1, (event.clientX - bounds.left) / bounds.width * 2 - 1));
            const y = Math.max(-1, Math.min(1, (event.clientY - bounds.top) / bounds.height * 2 - 1));

            window.cancelAnimationFrame(frame);
            frame = window.requestAnimationFrame(() => {
                portrait.style.setProperty('--portrait-rotate-x', `${-y * 3}deg`);
                portrait.style.setProperty('--portrait-rotate-y', `${x * 4}deg`);
                portrait.style.setProperty('--portrait-shift-x', `${x * 5}px`);
                portrait.style.setProperty('--portrait-shift-y', `${y * 5}px`);
            });
        };

        // Freeze the decorative loops when the portrait leaves the viewport.
        const visibilityObserver = new IntersectionObserver(([entry]) => {
            portrait.dataset.inView = String(entry.isIntersecting);
            if (!entry.isIntersecting) reset();
        });
        visibilityObserver.observe(portrait);

        reset();
        portrait.addEventListener('pointermove', move);
        portrait.addEventListener('pointerleave', reset);
        motionQuery.addEventListener('change', reset);
        window.addEventListener('blur', reset);

        return () => {
            reset();
            visibilityObserver.disconnect();
            portrait.removeEventListener('pointermove', move);
            portrait.removeEventListener('pointerleave', reset);
            motionQuery.removeEventListener('change', reset);
            window.removeEventListener('blur', reset);
        };
    }, [paused]);

    return portraitRef;
}
