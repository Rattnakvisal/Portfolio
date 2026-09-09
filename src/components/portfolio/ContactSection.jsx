import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

const email = 'rattnakvisalchun@gmail.com';

export default function ContactSection({ visibleElements }) {
    return (
        <footer id="contact-section" className="contact-section">
            <div className={`contact-inner reveal ${visibleElements.has('contact-title') ? 'visible' : ''}`} data-animate-id="contact-title">
                <p className="contact-kicker">Have a project or opportunity?</p>
                <h2>Let’s make<br /><em>something great.</em></h2>
                <a className="contact-email" href={`mailto:${email}`}>{email}<ArrowUpRight /></a>
                <div className="contact-bottom">
                    <p>© {new Date().getFullYear()} Chun Rattnakvisal</p>
                    <p>Designed &amp; built with care in Phnom Penh.</p>
                    <div>
                        <a href="https://github.com/Rattnakvisal" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={19} /></a>
                        <a href="https://www.linkedin.com/in/chun-rattnakvisal-3a24a0361/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={19} /></a>
                        <a href={`mailto:${email}`} aria-label="Email"><Mail size={19} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
