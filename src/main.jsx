import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, Building2, CheckCircle2, ChevronDown, ChevronRight,
  Globe2, Images, Mail, MapPin, Menu, MessageCircle, Phone, Play,
  Send, ShieldCheck, Sparkles, Target, Users, X
} from "lucide-react";
import "./styles.css";

const businesses = [
  { title: "Aurelion Healthcare", tag: "Healthcare", text: "Patient-first healthcare initiatives designed around trust, technology and better outcomes.", icon: "01" },
  { title: "Aurelion Infra", tag: "Infrastructure", text: "Building future-ready spaces with disciplined execution and a long-term view.", icon: "02" },
  { title: "Aurelion Ventures", tag: "Investments", text: "Backing ambitious ideas, strong operators and businesses built for sustainable growth.", icon: "03" },
  { title: "Aurelion Digital", tag: "Technology", text: "Digital products and platforms that connect businesses with modern customers.", icon: "04" }
];

const projects = [
  { title: "Aurelion Global Headquarters", category: "Corporate", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85" },
  { title: "Healthcare Campus", category: "Healthcare", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=85" },
  { title: "Urban Business District", category: "Infrastructure", image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=85" },
  { title: "Digital Innovation Studio", category: "Technology", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85" },
  { title: "Premium Hospitality Concept", category: "Hospitality", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85" },
  { title: "Future Living", category: "Real Estate", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85" }
];

const stats = [
  ["12+", "Years of vision"],
  ["4", "Business verticals"],
  ["25+", "Active initiatives"],
  ["8", "Markets explored"]
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [showVideo, setShowVideo] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  const filters = ["All", "Corporate", "Healthcare", "Infrastructure", "Technology", "Hospitality", "Real Estate"];

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
          <a className="brand" href="#home" onClick={closeMenu}>
            <img className="brand-logo" src="/aurelion-global-logo.png" alt="Aurelion Global" />
          </a>

          <button className="menu-btn" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>

          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            {["About", "Businesses", "Projects", "Gallery", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
            ))}
            <a className="nav-cta" href="#contact" onClick={closeMenu}>Start a conversation <ArrowUpRight size={16} /></a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-grid"></div>
          <div className="container hero-content">
            <div className="eyebrow"><span></span> AURELION GLOBAL CORPORATE WEBSITE</div>
            <h1>Building businesses.<br /><em>Creating impact.</em></h1>
            <p>One group. Multiple possibilities. Aurelion Global brings together ambitious businesses, enduring partnerships and projects built for the future.</p>
            <div className="hero-actions">
              <a href="#businesses" className="btn btn-primary">Explore our businesses <ArrowUpRight size={18} /></a>
              <button className="btn btn-ghost" onClick={() => setShowVideo(true)}><span className="play"><Play size={14} fill="currentColor" /></span> Watch overview</button>
            </div>
            <div className="hero-proof">
              <div className="avatars"><span>AG</span><span>IN</span><span>DX</span></div>
              <div><strong>Growing with purpose</strong><small>People, partnerships & progress</small></div>
            </div>
          </div>
          <div className="hero-image" aria-hidden="true">
            <div className="hero-logo-badge"><img src="/aurelion-global-logo.png" alt="" /></div>
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=90" alt="" />
            <div className="hero-image-overlay"></div>
            <div className="floating-card"><span>01</span><strong>Vision into value</strong><small>Across every business we build.</small></div>
          </div>
          <div className="scroll-indicator"><span></span> SCROLL TO EXPLORE</div>
        </section>

        <section id="about" className="section about">
          <div className="container split">
            <div>
              <div className="section-label">01 / WHO WE ARE</div>
              <h2>A corporate group with a <span>long-term view.</span></h2>
            </div>
            <div className="about-copy">
              <p className="lead">Aurelion Global is built around a simple belief: meaningful businesses are created when vision, execution and responsibility move together.</p>
              <p>We bring together diverse business interests under one connected ecosystem, creating opportunities to collaborate, scale and deliver value. From healthcare and infrastructure to technology and investments, our approach stays consistent — think boldly, act responsibly and build for tomorrow.</p>
              <a href="#businesses" className="text-link">Discover the Aurelion approach <ChevronRight size={18} /></a>
            </div>
          </div>
          <div className="container stats">
            {stats.map(([num, label]) => <div className="stat" key={label}><strong>{num}</strong><span>{label}</span></div>)}
          </div>
        </section>

        <section id="businesses" className="section dark-section">
          <div className="container">
            <div className="section-head light">
              <div><div className="section-label">02 / OUR BUSINESSES</div><h2>Many sectors.<br /><span>One shared standard.</span></h2></div>
              <p>Our businesses operate independently while sharing the values, capabilities and ambition of the Aurelion Global ecosystem.</p>
            </div>
            <div className="business-grid">
              {businesses.map((business) => (
                <article className="business-card" key={business.title}>
                  <div className="card-top"><span>{business.icon}</span><ArrowUpRight /></div>
                  <small>{business.tag}</small>
                  <h3>{business.title}</h3>
                  <p>{business.text}</p>
                  <a href="#contact">Explore business <ChevronRight size={16} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section projects">
          <div className="container">
            <div className="section-head">
              <div><div className="section-label">03 / PROJECT PORTFOLIO</div><h2>Ideas that become <span>real-world impact.</span></h2></div>
              <a className="outline-link" href="#gallery">View gallery <ArrowUpRight size={17} /></a>
            </div>
            <div className="filters">
              {filters.map(filter => <button key={filter} className={activeFilter === filter ? "active" : ""} onClick={() => setActiveFilter(filter)}>{filter}</button>)}
            </div>
            <div className="project-grid">
              {filteredProjects.map((project) => (
                <article className="project-card" key={project.title}>
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <div className="project-overlay"><span>{project.category}</span><h3>{project.title}</h3><ArrowUpRight /></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section vision">
          <div className="container vision-box">
            <div className="vision-icon"><Target size={28} /></div>
            <div><div className="section-label">OUR PHILOSOPHY</div><h2>Think beyond today.</h2><p>We measure progress by what remains valuable tomorrow — trusted relationships, resilient businesses, responsible growth and better experiences for the communities we serve.</p></div>
            <div className="vision-actions"><a href="#contact" className="btn btn-primary">Partner with us <ArrowUpRight size={18} /></a></div>
          </div>
        </section>

        <section id="gallery" className="section gallery">
          <div className="container">
            <div className="section-head">
              <div><div className="section-label">04 / IMAGE GALLERY</div><h2>A closer look at <span>our world.</span></h2></div>
              <p>Selected visuals from our people, places, projects and working environments.</p>
            </div>
            <div className="gallery-grid">
              {projects.slice(0, 5).map((item, i) => <div className={`gallery-item g${i + 1}`} key={item.title}><img src={item.image} alt={item.title} loading="lazy" /><span>{String(i + 1).padStart(2, "0")}</span></div>)}
            </div>
          </div>
        </section>

        <section className="section services">
          <div className="container service-grid">
            {[
              [Globe2, "Connected ecosystem", "Cross-business capabilities, partnerships and opportunities."],
              [Users, "People first", "Strong teams and trusted relationships at the heart of growth."],
              [ShieldCheck, "Built responsibly", "Governance, quality and long-term thinking in every initiative."],
              [Sparkles, "Always evolving", "Continuous improvement driven by technology and fresh ideas."]
            ].map(([Icon, title, text]) => <div className="service" key={title}><Icon size={26} /><h3>{title}</h3><p>{text}</p></div>)}
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="container contact-grid">
            <div className="contact-info">
              <div className="section-label light-label">05 / GET IN TOUCH</div>
              <h2>Let’s build <span>what’s next.</span></h2>
              <p>Have a partnership opportunity, project enquiry or business conversation in mind? Tell us a little about it.</p>
              <div className="contact-items">
                <a href="mailto:hello@aurelionglobal.com"><Mail size={19} /><span><small>Email us</small>hello@aurelionglobal.com</span></a>
                <a href="tel:+919876543210"><Phone size={19} /><span><small>Call us</small>+91 98765 43210</span></a>
                <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer"><MessageCircle size={19} /><span><small>WhatsApp</small>Start a conversation</span></a>
                <div><MapPin size={19} /><span><small>Head office</small>Hyderabad, Telangana, India</span></div>
              </div>
              <div className="map-placeholder"><iframe title="Aurelion Global location" src="https://www.google.com/maps?q=Hyderabad%2C%20Telangana%2C%20India&output=embed" loading="lazy"></iframe></div>
            </div>
            <div className="form-card">
              <div className="form-head"><h3>Send an enquiry</h3><span>We’ll get back to you shortly.</span></div>
              {submitted ? <div className="success"><CheckCircle2 size={42} /><h3>Thank you!</h3><p>Your enquiry has been received. We’ll be in touch soon.</p><button className="btn btn-primary" onClick={() => setSubmitted(false)}>Send another enquiry</button></div> :
              <form onSubmit={submitForm}>
                <div className="field-row"><label>Full name<input required name="name" placeholder="Your name" /></label><label>Company<input name="company" placeholder="Company name" /></label></div>
                <div className="field-row"><label>Email<input required type="email" name="email" placeholder="you@company.com" /></label><label>Phone<input name="phone" placeholder="+91" /></label></div>
                <label>Enquiry type<select name="type" defaultValue="Partnership"><option>Partnership</option><option>Business enquiry</option><option>Project enquiry</option><option>Media & press</option><option>Careers</option></select></label>
                <label>Message<textarea required name="message" rows="5" placeholder="Tell us how we can help..."></textarea></label>
                <button className="btn btn-primary submit" type="submit">Send enquiry <Send size={17} /></button>
                <small className="form-note">By submitting, you agree to be contacted regarding your enquiry.</small>
              </form>}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-top">
          <a className="brand footer-brand" href="#home"><img className="brand-logo" src="/aurelion-global-logo.png" alt="Aurelion Global" /></a>
          <p>Building businesses. Creating impact.</p>
          <div className="footer-links"><a href="#about">About</a><a href="#businesses">Businesses</a><a href="#projects">Projects</a><a href="#contact">Contact</a></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Aurelion Global. All rights reserved.</span><span>Privacy · Terms · Accessibility</span></div>
      </footer>

      <a className="whatsapp-float" href="https://wa.me/919876543210" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle size={25} /></a>

      {showVideo && <div className="modal" onClick={() => setShowVideo(false)}><div className="modal-card" onClick={e => e.stopPropagation()}><button className="modal-close" onClick={() => setShowVideo(false)}><X /></button><div className="fake-video"><Play size={42} fill="currentColor" /><span>Corporate overview video</span><small>Replace this panel with your YouTube/Vimeo embed.</small></div></div></div>}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);