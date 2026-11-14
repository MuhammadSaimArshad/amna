import { ArrowUpRight, Microscope } from 'lucide-react'
import { researchInterests } from '../data/portfolioData'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function Research() {
  return (
    <section className="research-section section-pad" id="research">
      <div className="container">
        <Reveal><SectionHeading eyebrow="Questions worth exploring" title="Research interests" description="Areas I am curious to explore as my academic journey continues." /></Reveal>
        <div className="research-layout">
          <Reveal className="research-quote-panel">
            <div className="research-quote-mark">“</div>
            <Microscope size={23} strokeWidth={1.4} className="research-microscope" />
            <p>Driven by curiosity.<br /><em>Focused on better<br />animal nutrition.</em></p>
            <span className="research-quote-caption">A direction, not a finished study.</span>
            <div className="quote-lines" />
          </Reveal>
          <div className="research-list">
            {researchInterests.map((interest, index) => (
              <Reveal key={interest} delay={index * 0.05} className="research-item">
                <span>0{index + 1}</span><p>{interest}</p><ArrowUpRight size={16} strokeWidth={1.5} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
