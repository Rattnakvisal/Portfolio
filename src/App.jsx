import './app.css';
import ContactSection from './components/portfolio/ContactSection';
import CustomCursor from './components/portfolio/CustomCursor';
import HeroSection from './components/portfolio/HeroSection';
import Navbar from './components/portfolio/Navbar';
import ProjectPreviewModal from './components/portfolio/ProjectPreviewModal';
import ProjectsSection from './components/portfolio/ProjectsSection';
import ScrollProgressBar from './components/portfolio/ScrollProgressBar';
import SkillsSection from './components/portfolio/SkillsSection';
import { usePortfolioPage } from './hooks/usePortfolioPage';

export default function App() {
    const {
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
    } = usePortfolioPage();

    return (
        <div className="min-h-screen overflow-x-hidden bg-black text-white">
            <ScrollProgressBar progress={scrollProgress} />
            <CustomCursor activeSection={activeSection} mousePosition={mousePosition} />
            <Navbar
                activeSection={activeSection}
                isLoaded={isLoaded}
                onNavigate={scrollToSection}
            />
            <HeroSection
                heroCardTransform={heroCardTransform}
                isLoaded={isLoaded}
                onViewProjects={() => scrollToSection('work')}
                scrollY={scrollY}
                spotlightTransform={spotlightTransform}
            />
            <ProjectPreviewModal
                closeBtnRef={closeBtnRef}
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
            <ProjectsSection
                onPreviewProject={setSelectedProject}
                visibleElements={visibleElements}
            />
            <SkillsSection visibleElements={visibleElements} />
            <ContactSection visibleElements={visibleElements} />
        </div>
    );
}
