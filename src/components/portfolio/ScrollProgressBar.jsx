export default function ScrollProgressBar({ progress }) {
    return (
        <div className="fixed top-0 right-0 left-0 z-[60] h-[3px] bg-black/10" aria-hidden="true">
            <div
                className="h-full bg-[#f3532f] transition-all duration-300"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}
