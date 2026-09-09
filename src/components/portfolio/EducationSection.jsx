import { Award, ArrowUpRight } from 'lucide-react';
import { education } from '../../data/portfolioData';

export default function EducationSection({ visibleElements }) {
    return (
        <section id="education-section" className="education-section">
            <div className="education-inner">
                <div className={`education-title reveal ${visibleElements.has('education-title') ? 'visible' : ''}`} data-animate-id="education-title">
                    <span className="section-kicker">Education</span>
                    <h2>Always<br />curious.</h2>
                    <p>Formal study paired with hands-on professional training.</p>
                </div>
                <div className="education-list">
                    {education.map((item, index) => (
                        <article key={item.school} data-animate-id={`education-${index}`} className={`education-item reveal ${visibleElements.has(`education-${index}`) ? 'visible' : ''}`}>
                            <span>0{index + 1}</span>
                            <div>
                                <p>{item.period}</p>
                                <h3>{item.school}</h3>
                                {item.highlights.map((highlight) => <small key={highlight}>{highlight}</small>)}
                                {item.certificate && (
                                    <a
                                        className="certificate-link"
                                        href={item.certificate.file}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={`${item.certificate.label} (opens in a new tab)`}
                                    >
                                        <span><Award size={16} /> Certificate</span>
                                        <strong>{item.certificate.label}</strong>
                                        <ArrowUpRight size={18} aria-hidden="true" />
                                    </a>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
