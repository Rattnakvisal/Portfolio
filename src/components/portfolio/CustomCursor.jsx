export default function CustomCursor({ activeSection, mousePosition }) {
    return (
        <div
            className="pointer-events-none fixed z-50 h-6 w-6 rounded-full border-2 border-lime-400 mix-blend-difference transition-transform duration-150"
            style={{
                left: mousePosition.x - 12,
                top: mousePosition.y - 12,
                transform: activeSection !== 'home' ? 'scale(1.5)' : 'scale(1)',
            }}
        />
    );
}
