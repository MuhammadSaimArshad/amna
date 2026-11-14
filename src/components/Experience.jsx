import { BriefcaseBusiness, MapPin } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function Experience() {
  return (
    <section className="experience-section section-pad" id="experience">
      <div className="container experience-grid">
        <Reveal><SectionHeading eyebrow="Learning beyond the classroom" title="Practical experience" description="Hands-on exposure in a professional veterinary and livestock setting." /></Reveal>
        <Reveal className="experience-entry" delay={0.1}>
          <div className="experience-mark"><BriefcaseBusiness size={21} strokeWidth={1.5} /></div>
          <div className="experience-entry-content">
            <div className="experience-meta"><span>INTERNSHIP TRAINEE</span><span className="experience-duration">4 months</span></div>
            <h3>Veterinary &amp; Livestock Sector</h3>
            <p className="experience-place"><MapPin size={15} /> Civil Veterinary Hospital, Dahranwala</p>
            <p className="experience-description">Completed four months of practical internship training as part of the BS Animal Sciences program, gaining exposure to the professional veterinary hospital and livestock working environment.</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
