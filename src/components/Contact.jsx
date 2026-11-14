import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { contact } from '../data/portfolioData'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function Contact() {
  return (
    <section className="contact-section section-pad" id="contact">
      <div className="container">
        <div className="contact-top">
          <Reveal><SectionHeading eyebrow="Open to meaningful connections" title="Let’s connect" description="For professional opportunities, academic collaboration, and discussions related to animal nutrition and feed formulation." /></Reveal>
          <Reveal className="contact-actions" delay={0.12}>
            <a className="button button-green" href={`mailto:${contact.email}`}>Email me <ArrowUpRight size={16} /></a>
            <a className="button button-outline" href={`tel:${contact.phoneLink}`}><Phone size={15} /> Call Amna</a>
          </Reveal>
        </div>
        <div className="contact-details">
          <Reveal className="contact-detail"><span className="contact-icon"><Mail size={18} /></span><div><span>Email</span><a href={`mailto:${contact.email}`}>{contact.email}</a></div><ArrowUpRight size={15} /></Reveal>
          <Reveal className="contact-detail" delay={0.07}><span className="contact-icon"><Phone size={18} /></span><div><span>Phone</span><a href={`tel:${contact.phoneLink}`}>{contact.phone}</a></div><ArrowUpRight size={15} /></Reveal>
          <Reveal className="contact-detail" delay={0.14}><span className="contact-icon"><MapPin size={18} /></span><div><span>Location</span><p>{contact.location}</p></div></Reveal>
        </div>
      </div>
    </section>
  )
}
