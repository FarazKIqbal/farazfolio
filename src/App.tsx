import { useEffect, useState, type FormEvent, type CSSProperties } from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Award,
  Check,
  Code2,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  LoaderCircle,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  X,
} from "lucide-react";
import { milestones, navigation, projects, skillGroups, softSkills, technologyStack } from "./data";

const githubUrl = "https://github.com/FarazKIqbal";
const linkedInUrl = "https://www.linkedin.com/in/faraz-k-iqbal";

interface ContactInfo {
  contactEmail: string;
  contactPhone: string;
}

function useContactConfig(): ContactInfo | null {
  const [config, setConfig] = useState<ContactInfo | null>(null);
  useEffect(() => {
    fetch("/api/config")
      .then((r) => r.json())
      .then(setConfig)
      .catch(() => setConfig({ contactEmail: "", contactPhone: "" }));
  }, []);
  return config;
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="Faraz Iqbal — back to top">
          <span className="brand-mark" aria-hidden="true">FK<span>+</span></span>
          <span className="brand-copy">
            <strong>FARAZ IQBAL</strong>
            <small>PORTFOLIO / 2026</small>
          </span>
        </a>
        <button
          className="mobile-menu-button"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
        <nav id="primary-navigation" className={`primary-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
          {navigation.map((item, index) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              <span className="nav-index">0{index + 1}</span>{item.label}
            </a>
          ))}
        </nav>
        <a className="header-availability" href="#contact">
          <span className="availability-dot" /> OPEN TO OPPORTUNITIES
        </a>
      </div>
    </header>
  );
}

function SectionHeading({ index, eyebrow, title, detail }: { index: string; eyebrow: string; title: string; detail?: string }) {
  return (
    <div className="section-heading">
      <div className="section-index"><span>{index}</span><i /></div>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={`section-title-${index}`}>{title}</h2>
        {detail && <p className="section-detail">{detail}</p>}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero section-wrap" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow hero-eyebrow"><span className="availability-dot" /> KOCHI, INDIA <span className="eyebrow-divider">/</span> AI × FULL STACK</p>
        <h1 id="hero-title">Faraz<br /><span>Karukappadath</span><br /><em>Iqbal<span className="title-period">.</span></em></h1>
        <p className="hero-role">Full Stack Developer <span>|</span> AI Engineer</p>
        <p className="hero-tagline">Building fair, explainable, real-time AI systems that turn complex signals into clearer decisions.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">Explore selected work <ArrowDownRight size={17} /></a>
          <a className="button button-quiet" href="#contact">Let’s talk <ArrowRight size={17} /></a>
        </div>
        <div className="hero-socials">
          <a href={githubUrl} target="_blank" rel="noreferrer noopener"><Github size={16} /> GitHub <span className="placeholder-label"></span><ArrowUpRight size={13} /></a>
          <a href={linkedInUrl} target="_blank" rel="noreferrer noopener"><Linkedin size={16} /> LinkedIn <span className="placeholder-label"></span><ArrowUpRight size={13} /></a>
        </div>
      </div>

      <div className="hero-visual" role="img" aria-label="Abstract orbital illustration representing fairness, explainability, and real-time systems">
        <div className="visual-topline"><span>FIELD NOTES / 01</span><span>BUILDING WITH INTENT</span></div>
        <div className="orbit-stage">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />
          <div className="orbit-core"><span>AI</span><small>+ STACK</small></div>
          <span className="orbit-node node-a">FAIRNESS</span>
          <span className="orbit-node node-b">EXPLAINABILITY</span>
          <span className="orbit-node node-c">REAL-TIME</span>
          <span className="orbit-cross cross-a">+</span>
          <span className="orbit-cross cross-b">+</span>
        </div>
        <div className="visual-caption">
          <div><span className="caption-number">01—03</span><p>Human-centered AI.<br />Systems that make sense.</p></div>
          <ArrowDown size={17} aria-hidden="true" />
        </div>
        <div className="visual-grid" aria-hidden="true" />
      </div>

      <div className="hero-stack-row">
        <div className="stack-label"><span>TOOLKIT</span><span>01 — 09</span></div>
        <div className="tech-stack" aria-label="Technologies">
          {technologyStack.map(({ name, Icon }) => (
            <span className="tech-item" key={name} title={name}>
              <Icon aria-hidden="true" /><span>{name}</span>
            </span>
          ))}
        </div>
      </div>
      <a className="hero-scroll" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
    </section>
  );
}

function About() {
  return (
    <section className="about-section section-wrap" id="about" aria-labelledby="about-title">
      <div className="about-rail"><span>PROFILE / 01</span><i /></div>
      <div className="about-content">
        <div className="about-intro">
          <p className="eyebrow">A little context</p>
          <h2 id="about-title">Curious about the<br /><span>why behind the model.</span></h2>
        </div>
        <div className="about-copy">
          <p>I’m a recent computer science graduate and builder working across applied AI and full-stack product development. I’m drawn to problems where software needs to be useful, understandable, and thoughtfully engineered.</p>
          <p>From explainable credit evaluation to document-grounded question answering, I like turning a promising idea into a system people can actually use.</p>
          <div className="education-card">
            <div className="education-icon"><GraduationCap size={18} /></div>
            <div>
              <span className="micro-label">EDUCATION / CLASS OF 2026</span>
              <strong>B.Tech, Computer Science</strong>
              <p>Govt. Model Engineering College, Kochi</p>
            </div>
            <div className="education-score"><span>CGPA</span><strong>8.41</strong></div>
          </div>
          <div className="location-line"><MapPin size={14} /> Kodungallur, Thrissur, Kerala <span>·</span> Recent B.Tech graduate</div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className="project-card">
      <div className="project-card-head">
        <span className="project-number">{project.number} / 05</span>
        <span className="project-category">{project.category}</span>
      </div>
      <div className="project-title-row">
        <h3>{project.name}</h3>
        <span className="role-badge">{project.role}</span>
      </div>
      <p className="project-description">{project.description}</p>
      <div className="tag-list" aria-label={`${project.name} technologies`}>
        {project.technologies.map((tech) => <span className="tech-tag" key={tech}>{tech}</span>)}
      </div>
    </article>
  );
}

function Work() {
  return (
    <section className="work-section section-wrap section-block" id="work" aria-labelledby="section-title-02">
      <SectionHeading index="02" eyebrow="Selected work" title="Projects with a point of view." detail="Applied machine learning, useful interfaces, and systems built around real problems." />
      <div className="project-grid">
        {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
      </div>
      <div className="work-footnote"><span className="footnote-line" /></div>
    </section>
  );
}

function Skills() {
  return (
    <section className="skills-section section-wrap section-block" id="skills" aria-labelledby="section-title-03">
      <SectionHeading index="03" eyebrow="Technical range" title="A toolkit for the full loop." detail="From shaping a model to shipping the interface around it." />
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.index}>
            <div className="skill-card-header"><span>{group.index}</span><h3>{group.title}</h3><Code2 size={17} /></div>
            <div className="skill-list">
              {group.skills.map((skill) => (
                <div className="skill-row" key={skill.name}>
                  <div className="skill-label"><span>{skill.name}</span><span className="skill-percent">{skill.value}%</span></div>
                  <div className="skill-track" role="img" aria-label={`${skill.name}: ${skill.value}% proficiency`}>
                    <span className="skill-fill" style={{ "--skill-value": `${skill.value}%` } as CSSProperties} />
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
      <div className="soft-skills"><span className="micro-label">HOW I WORK</span><div>{softSkills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>
    </section>
  );
}

function Journey() {
  return (
    <section className="journey-section section-wrap section-block" id="journey" aria-labelledby="section-title-04">
      <div className="journey-heading">
        <SectionHeading index="04" eyebrow="Recognition & learning" title="Small milestones. A wider horizon." detail="Achievements, certifications, and rooms that sparked new ideas." />
      </div>
      <div className="milestone-list">
        {milestones.map((item) => (
          <article className="milestone-row" key={item.number}>
            <span className="milestone-number">{item.number}</span>
            <div className="milestone-icon">{item.type === "Certification" ? <Award size={17} /> : <GraduationCap size={17} />}</div>
            <div className="milestone-main"><span className="micro-label">{item.type}</span><h3>{item.title}</h3><p>{item.detail}</p></div>
            <span className="milestone-source">{item.source}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function ResumeAction() {
  const resumePath = "/resume.pdf";
  const [message, setMessage] = useState("");
  const [checking, setChecking] = useState(false);

  async function handleResumeDownload() {
    setChecking(true);
    setMessage("");
    try {
      const response = await fetch(resumePath, { method: "HEAD", cache: "no-store" });
      if (!response.ok) {
        setMessage("Resume PDF not uploaded yet. Add your final file as public/resume.pdf; this button will download it automatically.");
        return;
      }
      const link = document.createElement("a");
      link.href = resumePath;
      link.download = "Faraz-Karukappadath-Iqbal-Resume.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch {
      setMessage("Resume PDF not uploaded yet. Add your final file as public/resume.pdf to enable the download.");
    } finally {
      setChecking(false);
    }
  }

  return (
    <div className="resume-action-wrap">
      <button className="button button-outline" type="button" onClick={() => void handleResumeDownload()} disabled={checking} aria-busy={checking}>
        {checking ? <>Checking file <LoaderCircle size={15} className="spin" /></> : <>Download resume <Download size={16} /></>}
      </button>
      <span className="resume-placeholder"></span>
      {message && <span className="resume-message" role="status">{message}</span>}
    </div>
  );
}

function Contact() {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<{ kind: "success" | "error"; message: string } | null>(null);
  const config = useContactConfig();
  const contactEmail = config?.contactEmail ?? "";
  const contactPhone = config?.contactPhone ?? "";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
      company: String(formData.get("company") ?? ""),
    };
    setSending(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({})) as { message?: string };
      if (!response.ok) throw new Error(result.message || "Your message could not be sent right now. Please email Faraz directly.");
      form.reset();
      setStatus({ kind: "success", message: result.message || "Thanks — your message has been sent to Faraz." });
    } catch (error) {
      setStatus({ kind: "error", message: error instanceof Error ? error.message : "Something went wrong. Please email Faraz directly." });
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="contact-section section-wrap section-block" id="contact" aria-labelledby="section-title-06">
      <SectionHeading index="06" eyebrow="Start a conversation" title="Have a good problem?" detail="For AI/ML and full-stack roles, collaborations, or a thoughtful technical conversation." />
      <div className="contact-layout">
        <div className="contact-details">
          <p className="contact-lede">The most interesting work starts with a clear question. Tell me what you’re building.</p>
          <a className="contact-detail-link" href={`mailto:${contactEmail}`}><span className="contact-icon"><Mail size={17} /></span><span><small>EMAIL</small><strong>{contactEmail}</strong></span><ArrowUpRight size={15} /></a>
          <div className="contact-detail-link no-link"><span className="contact-icon"><MapPin size={17} /></span><span><small>LOCATION</small><strong>Kodungallur, Thrissur, Kerala</strong></span></div>
          <div className="contact-availability"><span className="availability-dot" /><span>Open to AI/ML and full-stack opportunities</span></div>
          <ResumeAction />
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-topline"><span>CONTACT / FORM 01</span><span>ALL FIELDS REQUIRED</span></div>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" autoComplete="name" maxLength={100} required placeholder="Your name" />
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" maxLength={254} required placeholder="you@example.com" />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={5} maxLength={5000} minLength={10} required placeholder="A few lines about the opportunity or idea…" />
          <div className="honeypot" aria-hidden="true"><label htmlFor="company">Leave this field empty</label><input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" /></div>
          <button className="button button-primary submit-button" type="submit" disabled={sending}>
            {sending ? <>Sending <LoaderCircle size={16} className="spin" /></> : <>Send message <Send size={16} /></>}
          </button>
          {status && <p className={`form-status ${status.kind}`} role="status" aria-live="polite">{status.kind === "success" ? <Check size={15} /> : <Mail size={15} />}{status.message}</p>}
          <p className="form-footnote">Your message is sent directly to Faraz. Prefer email? <a href={`mailto:${contactEmail}`}>Write to him here.</a></p>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer section-wrap">
      <div className="footer-line" />
      <div className="footer-content">
        <a className="brand footer-brand" href="#top"><span className="brand-mark" aria-hidden="true">FK<span>+</span></span><span className="brand-copy"><strong>FARAZ IQBAL</strong><small>BUILD FAIR. BUILD CLEAR.</small></span></a>
        <p>Designed with intent <span>·</span> Kodungallur, Kerala</p>
        <a className="back-to-top" href="#top">Back to top <ArrowUpRight size={14} /></a>
        <span className="copyright">© {new Date().getFullYear()} FARAZ KARUKAPPADATH IQBAL</span>
        <a className="footer-link" href="/privacy.html">Privacy Policy</a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Work />
        <Skills />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
