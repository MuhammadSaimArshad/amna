import { Check, ClipboardList, UserRound } from 'lucide-react'
import { skills } from '../data/portfolioData'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

function SkillGroup({ title, icon: Icon, items }) {
  return (
    <Reveal className="skill-group">
      <div className="skill-group-heading"><span className="skill-group-icon"><Icon size={19} strokeWidth={1.6} /></span><h3>{title}</h3></div>
      <ul>{items.map((item) => <li key={item}><span className="skill-check"><Check size={12} strokeWidth={2.2} /></span>{item}</li>)}</ul>
    </Reveal>
  )
}

export default function Skills() {
  return (
    <section className="skills-section section-pad" id="skills">
      <div className="container">
        <Reveal><SectionHeading eyebrow="Tools for thoughtful work" title="Professional skills" /></Reveal>
        <div className="skills-grid">
          <SkillGroup title="Technical skills" icon={ClipboardList} items={skills.technical} />
          <SkillGroup title="Professional skills" icon={UserRound} items={skills.professional} />
        </div>
      </div>
    </section>
  )
}
