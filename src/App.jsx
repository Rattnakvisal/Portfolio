import './app.css';
import ContactSection from './components/portfolio/ContactSection';
import EducationSection from './components/portfolio/EducationSection';
import ExperienceSection from './components/portfolio/ExperienceSection';
import HeroSection from './components/portfolio/HeroSection';
import Navbar from './components/portfolio/Navbar';
import ProjectsSection from './components/portfolio/ProjectsSection';
import ScrollProgressBar from './components/portfolio/ScrollProgressBar';
import SkillsSection from './components/portfolio/SkillsSection';
import { usePortfolioPage } from './hooks/usePortfolioPage';

export default function App() {
    const {
        activeSection,
        isLoaded,
        scrollProgress,
        scrollToSection,
        visibleElements,
    } = usePortfolioPage();

    return (
        <div className="site">
            <ScrollProgressBar progress={scrollProgress} />
            <Navbar
                activeSection={activeSection}
                isLoaded={isLoaded}
                onNavigate={scrollToSection}
            />
            <HeroSection
                isLoaded={isLoaded}
                onViewProjects={() => scrollToSection('work')}
            />
            <ProjectsSection visibleElements={visibleElements} />
            <ExperienceSection visibleElements={visibleElements} />
            <SkillsSection visibleElements={visibleElements} />
            <EducationSection visibleElements={visibleElements} />
            <ContactSection visibleElements={visibleElements} />
        </div>
    );
}
