export default function ScrollProgressBar({ progress }) {
    return (
        <div className="fixed top-0 right-0 left-0 z-50 h-1 bg-white/10">
            <div
                className="h-full bg-gradient-to-r from-lime-400 via-emerald-400 to-cyan-400 transition-all duration-300"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}
