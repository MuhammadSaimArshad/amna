import { ArrowUpRight, Leaf } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <a className="footer-brand" href="#home"><span className="footer-brand-mark"><Leaf size={17} /></span><span>AMNA ARSHAD<small>ANIMAL SCIENCES</small></span></a>
        <p className="footer-specialty">Animal Nutrition <i /> Feed Formulation <i /> Animal Sciences</p>
        <a className="back-to-top" href="#home">Back to top <ArrowUpRight size={15} /></a>
      </div>
      <div className="container footer-bottom"><p>Building knowledge through science and continuous learning.</p><span>© {new Date().getFullYear()} Amna Arshad</span></div>
    </footer>
  )
}
