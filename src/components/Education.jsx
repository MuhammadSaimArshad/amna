import { GraduationCap } from 'lucide-react'
import { education } from '../data/portfolioData'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function Education() {
  return (
    <section className="education-section section-pad" id="education">
      <div className="container">
        <Reveal><SectionHeading eyebrow="Learning, year by year" title="Education" description="An academic path shaped by curiosity about animal health, nutrition, and production." /></Reveal>
        <div className="education-timeline">
          {education.map((item, index) => (
            <Reveal key={item.credential} delay={index * 0.07} className="education-row">
              <span className="timeline-node"><GraduationCap size={17} strokeWidth={1.6} /></span>
              <div className="education-date">{item.date}</div>
              <div className="education-details"><h3>{item.credential}</h3><p>{item.institution}</p></div>
              <span className="education-result">{item.result}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
