import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight, ArrowUpRight, CheckCircle2, HeartPulse,
  Mail, MapPin, Menu, MessageCircle, Phone, Play, Send,
  Stethoscope, X
} from "lucide-react";
import "./styles.css";

const specialties = [
  "Oncology", "Neurosciences", "Orthopaedics", "Mother & Child",
  "Emergency Care", "Cardiac Sciences", "Diagnostics"
];

const carePrinciples = [
  { number: "01", title: "Patient-first care", text: "Every decision begins with the person in front of us — their needs, their questions and their recovery." },
  { number: "02", title: "Clinical excellence", text: "Experienced teams, thoughtful processes and modern clinical practices working together." },
  { number: "03", title: "Compassion in action", text: "Care that sees beyond a diagnosis, offering clarity, dignity and reassurance at every step." },
  { number: "04", title: "Always evolving", text: "Continuously learning and investing in better experiences, systems and outcomes." }
];

const hospitals = [
  { name: "Aurelion Hospitals — Central", type: "Multispecialty care", image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=85" },
  { name: "Aurelion Women & Children", type: "Women and child health", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=85" },
  { name: "Aurelion Specialty Centre", type: "Advanced specialty care", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=85" }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showHospitalIntro, setShowHospitalIntro] = useState(false);
  const [curtainsOpening, setCurtainsOpening] = useState(false);
  const [redirecting, setRedirecting] = useState(false);
  const hospitalUrl = import.meta.env.VITE_PHANI_HOSPITAL_URL || "https://phani-bhushan-hospitals.vercel.app";
  const openHospitalIntro = (e) => { if (e) e.preventDefault(); setMenuOpen(false); setCurtainsOpening(false); setRedirecting(false); setShowHospitalIntro(true); };
  const enterHospital = () => { if (curtainsOpening) return; setCurtainsOpening(true); window.setTimeout(() => { setRedirecting(true); window.setTimeout(() => { window.location.href = hospitalUrl; }, 450); }, 1450); };
  useEffect(() => { if (!showHospitalIntro) { setCurtainsOpening(false); setRedirecting(false); } }, [showHospitalIntro]);
  const closeMenu = () => setMenuOpen(false);

  const submitForm = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.currentTarget.reset();
  };

  return (
    <div className="app">
      <header className="header">
        <div className="container nav">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="Aurelion Global Hospitals home">
            <img className="brand-logo" src="/aurelion-global-logo.png" alt="Aurelion Global" />
          </a>
          <button className="menu-btn" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            {[ ["Home", "home"], ["About", "about"], ["Hospitals", "hospitals"], ["Careers", "careers"], ["Contact", "contact"] ].map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>
            ))}
            <a className="nav-cta" href="#contact" onClick={closeMenu}>Reach us <ArrowUpRight size={14} /></a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="container hero-layout">
            <div className="hero-content">
              <div className="eyebrow"><span /> AURELION GLOBAL HOSPITALS</div>
              <h1>The art of<br /><em>healing,</em><br />perfected.</h1>
              <p>Aurelion Global is a healthcare company caring for a family of world-class hospitals — beginning with Aurelion Hospitals — where clinical excellence meets profound humanity.</p>
              <div className="hero-actions">
                <a href="#hospital-intro" onClick={openHospitalIntro} className="btn btn-primary">Explore our hospitals <ArrowRight size={15} /></a>
                <a href="#careers" className="btn btn-outline">Join our mission</a>
                <button className="btn btn-watch" onClick={() => setShowVideo(true)}><span className="play"><Play size={11} fill="currentColor" /></span> Watch overview</button>
              </div>
              <div className="hero-note"><span className="gold-dash" /> Thoughtful care. Meaningful outcomes.</div>
            </div>
            <div className="hero-visual">
              <img src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1600&q=90" alt="Contemporary hospital building" />
              <div className="image-wash" />
              <div className="hero-stat"><strong>1,800+</strong><span>BEDS UNDER CARE</span></div>
              <div className="image-index">01 <span>/ 04</span></div>
            </div>
          </div>
          <div className="hero-bottom-line"><span>CARE, WITH PURPOSE</span><span>HYDERABAD · INDIA</span><span>01 — 04</span></div>
        </section>

        <div className="specialty-marquee" aria-label="Hospital specialties">
          <div className="marquee-track">{[...specialties, ...specialties].map((name, index) => <span key={`${name}-${index}`}>{name}<i>✦</i></span>)}</div>
        </div>

        <section id="about" className="section about">
          <div className="container about-layout">
            <div className="about-heading">
              <div className="section-label">A DIFFERENT KIND OF HEALTHCARE</div>
              <h2>A company built<br />to <em>care.</em></h2>
              <p>Aurelion Global brings together people, knowledge and purpose to make high-quality healthcare feel more human.</p>
              <a href="#hospitals" className="text-link">Our approach to care <ArrowRight size={15} /></a>
            </div>
            <div className="principles-grid">
              {carePrinciples.map(item => <article className="principle" key={item.number}>
                <div className="principle-top"><span>{item.number}</span><ArrowUpRight size={16} /></div>
                <h3>{item.title}</h3><p>{item.text}</p>
              </article>)}
            </div>
          </div>
          <div className="container stats-row">
            <div className="stat"><strong>12<span>+</span></strong><small>Years of purpose</small></div>
            <div className="stat"><strong>1,800<span>+</span></strong><small>Beds under care</small></div>
            <div className="stat"><strong>600<span>+</span></strong><small>Clinicians & specialists</small></div>
            <div className="stat"><strong>24<span>/7</span></strong><small>Here when you need us</small></div>
          </div>
        </section>

        <section className="doctor-section">
          <div className="container doctor-layout">
            <div className="doctor-image"><img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1000&q=85" alt="Healthcare professional in a clinical setting" /><span>PEOPLE WHO CARE</span></div>
            <div className="doctor-copy">
              <div className="section-label">CARE IS A COLLECTIVE EFFORT</div>
              <blockquote>“We did not set out just to build hospitals. We set out to build trust — places where the science of medicine meets the soul of care.”</blockquote>
              <p>At Aurelion, every patient journey is shaped by skilled teams, clear communication and a commitment to treating every person with empathy. It is an approach that connects clinical excellence with the small moments that make care feel personal.</p>
              <a href="#about" className="text-link">What guides us <ArrowRight size={15} /></a>
            </div>
          </div>
        </section>

        <section id="hospitals" className="section hospitals">
          <div className="container">
            <div className="section-head">
              <div><div className="section-label">CARE CLOSE TO YOU</div><h2>Our <em>hospitals.</em></h2></div>
              <p>Connected by one purpose, each Aurelion hospital is built around thoughtful experiences, trusted expertise and better care.</p>
            </div>
            <div className="hospital-grid">
              {hospitals.map((hospital, index) => <article className="hospital-card" key={hospital.name}>
                <div className="hospital-image"><img src={hospital.image} alt={hospital.name} loading="lazy" /><span>0{index + 1}</span></div>
                <div className="hospital-meta"><div><small>{hospital.type}</small><h3>{hospital.name}</h3></div><button className="hospital-enter-link" onClick={openHospitalIntro} aria-label={`Explore ${hospital.name}`}><ArrowUpRight size={19} /></button></div>
              </article>)}
            </div>
            <div className="hospitals-bottom"><span>More possibilities for healthier lives.</span><a href="#contact" className="text-link">Find the right care <ArrowRight size={15} /></a></div>
          </div>
        </section>

        <section id="careers" className="careers-section">
          <div className="container careers-content">
            <div className="section-label">MAKE A DIFFERENCE WITH US</div>
            <h2>Care is a calling.<br /><em>Make it yours.</em></h2>
            <p>Join a team where expertise is respected, curiosity is encouraged and every role can make a difference.</p>
            <div className="careers-actions"><a href="#contact" className="btn btn-gold">Explore opportunities <ArrowRight size={15} /></a><a href="#contact" className="btn btn-dark-outline">Partner with us <ArrowUpRight size={15} /></a></div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="container contact-grid">
            <div className="contact-info">
              <div className="section-label">START A CONVERSATION</div>
              <h2>We’re here<br />to <em>listen.</em></h2>
              <p>Questions about our hospitals, a partnership or a career with Aurelion? Reach out and we’ll help you find the right next step.</p>
              <div className="contact-items">
                <a href="mailto:hello@aurelionglobal.com"><Mail size={17} /><span><small>Email</small>hello@aurelionglobal.com</span></a>
                <a href="tel:+919876543210"><Phone size={17} /><span><small>Call</small>+91 98765 43210</span></a>
                <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer"><MessageCircle size={17} /><span><small>WhatsApp</small>Start a conversation</span></a>
                <div><MapPin size={17} /><span><small>Head office</small>Hyderabad, Telangana, India</span></div>
              </div>
              <div className="contact-note"><HeartPulse size={18} /><span>Care, wherever you are in your journey.</span></div>
            </div>
            <div className="form-card">
              <div className="form-head"><h3>Get in touch</h3><span>Share a few details and our team will connect with you.</span></div>
              {submitted ? <div className="success"><CheckCircle2 size={38} /><h3>Thank you.</h3><p>Your enquiry has been received. Our team will be in touch.</p><button className="btn btn-primary" onClick={() => setSubmitted(false)}>Send another enquiry</button></div> :
                <form onSubmit={submitForm}>
                  <div className="field-row"><label>Full name<input required name="name" placeholder="Your name" /></label><label>Company<input name="company" placeholder="Company name" /></label></div>
                  <div className="field-row"><label>Email address<input required type="email" name="email" placeholder="you@example.com" /></label><label>Phone number<input name="phone" placeholder="+91" /></label></div>
                  <label>I’m contacting about<select name="type" defaultValue="Hospital enquiry"><option>Hospital enquiry</option><option>Partnership</option><option>Careers</option><option>Media enquiry</option><option>Other</option></select></label>
                  <label>Message<textarea required name="message" rows="4" placeholder="How can we help?" /></label>
                  <button className="btn btn-primary submit" type="submit">Send enquiry <Send size={15} /></button>
                  <small className="form-note">Your details will only be used to respond to your enquiry.</small>
                </form>}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-main">
          <div className="footer-brand-col"><a className="brand footer-brand" href="#home"><img className="brand-logo" src="/aurelion-global-logo.png" alt="Aurelion Global" /></a><p>Thoughtful care. Meaningful outcomes.</p></div>
          <div className="footer-col"><small>EXPLORE</small><a href="#about">Our philosophy</a><a href="#hospitals">Our hospitals</a><a href="#careers">Careers</a></div>
          <div className="footer-col"><small>GET IN TOUCH</small><a href="mailto:hello@aurelionglobal.com">Email us</a><a href="tel:+919876543210">Call us</a><a href="#contact">Contact</a></div>
          <div className="footer-signoff">Care,<br /><em>together.</em></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Aurelion Global. All rights reserved.</span><span>Privacy · Terms · Accessibility</span></div>
      </footer>

      <a className="whatsapp-float" href="https://wa.me/919876543210" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle size={22} /></a>

      {showHospitalIntro && (
        <div className={`hospital-intro-overlay ${curtainsOpening ? "is-opening" : ""} ${redirecting ? "is-redirecting" : ""}`} role="dialog" aria-modal="true" aria-label="Enter Phani Bhushan Hospitals">
          <button className="intro-close" onClick={() => setShowHospitalIntro(false)} aria-label="Close hospital introduction"><X size={20} /></button>
          <div className="intro-glow" />
          <div className="intro-content">
            <div className="intro-emblem"><HeartPulse size={36} strokeWidth={1.35} /></div>
            <div className="intro-kicker">A NEW CHAPTER IN CARE</div>
            <h2>Phani Bhushan<br /><em>Hospitals</em></h2>
            <p>Compassion at heart. Excellence in every moment.</p>
            <button className="intro-enter-btn" onClick={enterHospital} disabled={curtainsOpening}>
              {curtainsOpening ? "Opening the doors" : "Enter Phani Bhushan Hospitals"} <ArrowRight size={17} />
            </button>
            <button className="intro-skip" onClick={() => { window.location.href = hospitalUrl; }}>Skip intro</button>
          </div>
          <div className="gold-curtain curtain-left" aria-hidden="true"><span /></div>
          <div className="gold-curtain curtain-right" aria-hidden="true"><span /></div>
          {redirecting && <div className="intro-redirect-message">Welcoming you to better care…</div>}
        </div>
      )}

      {showVideo && <div className="modal" role="dialog" aria-modal="true" aria-label="Watch overview" onClick={() => setShowVideo(false)}><div className="modal-card" onClick={e => e.stopPropagation()}><button className="modal-close" aria-label="Close overview" onClick={() => setShowVideo(false)}><X /></button><div className="fake-video"><div className="video-mark"><Stethoscope size={24} /></div><span>The Aurelion approach to care</span><small>Corporate overview</small><button className="video-close" onClick={() => setShowVideo(false)}>Return to website <ArrowRight size={14} /></button></div></div></div>}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
