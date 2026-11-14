import { Activity, Beef, Bird, FlaskConical, Milk, PawPrint, Wheat } from 'lucide-react'
import { expertise } from '../data/portfolioData'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const iconMap = { nutrition: PawPrint, formula: Wheat, poultry: Bird, dairy: Milk, livestock: Beef, quality: Activity }

export default function Expertise() {
  return (
    <section className="expertise-section section-pad" id="expertise">
      <div className="container">
        <Reveal><SectionHeading eyebrow="Where my curiosity lives" title="Areas of expertise" description="The fields I am studying and building toward through academic work and professional development." /></Reveal>
        <div className="expertise-grid">
          {expertise.map(({ title, description, icon }, index) => {
            const Icon = iconMap[icon]
            return <Reveal key={title} delay={(index % 3) * 0.07} className="expertise-card">
              <span className="expertise-icon"><Icon size={22} strokeWidth={1.5} /></span>
              <span className="expertise-index">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="expertise-rule" />
            </Reveal>
          })}
        </div>
      </div>
    </section>
  )
}
