import { experiences } from '../../data/portfolioData';

export default function ExperienceSection({ visibleElements }) {
    return (
        <section id="experience-section" className="section experience-section">
            <div className={`section-heading compact reveal ${visibleElements.has('experience-title') ? 'visible' : ''}`} data-animate-id="experience-title">
                <div><span className="section-number">02</span><span className="section-kicker">Experience</span></div>
                <h2>Learning by<br /><em>building.</em></h2>
            </div>
            <div className="experience-list">
                {experiences.map((experience, index) => (
                    <article key={`${experience.role}-${experience.period}`} data-animate-id={`experience-${index}`} className={`experience-row reveal ${visibleElements.has(`experience-${index}`) ? 'visible' : ''}`}>
                        <p className="experience-period">{experience.period}</p>
                        <div className="experience-main">
                            <h3>{experience.role}</h3>
                            <p className="experience-org">{experience.organization}</p>
                            <p>{experience.description}</p>
                        </div>
                        <div className="tag-list dark">
                            {experience.stack.map((item) => <span key={item}>{item}</span>)}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
