import { skills } from '../../data/portfolioData';

export default function SkillsSection({ visibleElements }) {
    return (
        <section id="skills-section" className="section skills-section">
            <div className={`section-heading reveal ${visibleElements.has('skills-title') ? 'visible' : ''}`} data-animate-id="skills-title">
                <div><span className="section-number">03</span><span className="section-kicker">Capabilities</span></div>
                <h2>The tools behind<br /><em>the outcomes.</em></h2>
            </div>
            <div className="skills-grid">
                {skills.map((group, index) => {
                    const Icon = group.icon;
                    return (
                        <article key={group.category} data-animate-id={`skill-${index}`} className={`skill-card reveal ${visibleElements.has(`skill-${index}`) ? 'visible' : ''}`}>
                            <div className="skill-card-top"><span>0{index + 1}</span><Icon size={24} strokeWidth={1.6} /></div>
                            <h3>{group.category}</h3>
                            <div className="skill-items">
                                {group.items.map((item) => <span key={item}>{item}</span>)}
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
