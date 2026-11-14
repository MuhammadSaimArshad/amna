import { ArrowUpRight, Compass } from 'lucide-react'
import Reveal from './Reveal'

export default function CareerVision() {
  return (
    <section className="vision-section section-pad" id="vision">
      <div className="container vision-inner">
        <Reveal className="vision-icon"><Compass size={29} strokeWidth={1.2} /></Reveal>
        <Reveal className="vision-copy" delay={0.08}>
          <p className="eyebrow">Looking ahead</p>
          <h2>My professional<br /><em>vision</em></h2>
          <p className="vision-description">My goal is to develop a professional career in Animal Nutrition and Feed Formulation, contributing to improved nutritional management, feed quality, and animal production. I aspire to apply my academic knowledge, strengthen my technical capabilities, and grow through practical experience and research-oriented opportunities.</p>
          <a href="#contact" className="vision-link">Start a conversation <ArrowUpRight size={16} /></a>
        </Reveal>
        <div className="vision-side-note">SCIENCE · NUTRITION · GROWTH</div>
      </div>
    </section>
  )
}
