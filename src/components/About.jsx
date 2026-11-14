import { BookOpen, Crosshair, Sprout } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const highlights = [
  { icon: BookOpen, label: 'Academic background', value: 'Animal Sciences' },
  { icon: Sprout, label: 'Specialization', value: 'Animal Nutrition' },
  { icon: Crosshair, label: 'Career focus', value: 'Feed Formulation' },
]

export default function About() {
  return (
    <section className="about-section section-pad" id="about">
      <div className="container">
        <div className="about-grid">
          <Reveal className="about-heading-column"><SectionHeading eyebrow="A little about me" title="About me" /></Reveal>
          <Reveal className="about-copy" delay={0.1}>
            <p>With an academic background in Animal Sciences and ongoing postgraduate studies in Animal Nutrition, I am interested in understanding the relationship between animal nutrition, feed quality, and production efficiency.</p>
            <p>My academic journey has developed my interest in nutritional management, feed formulation, poultry and dairy production, and livestock health management. I aim to contribute to the animal nutrition and feed industry through continuous learning, scientific knowledge, and professional development.</p>
          </Reveal>
        </div>
        <div className="highlight-grid">
          {highlights.map(({ icon: Icon, label, value }, index) => (
            <Reveal key={label} delay={index * 0.08} className="highlight-item">
              <span className="highlight-icon"><Icon size={20} strokeWidth={1.6} /></span>
              <div><p>{label}</p><h3>{value}</h3></div>
              <span className="highlight-number">0{index + 1}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
