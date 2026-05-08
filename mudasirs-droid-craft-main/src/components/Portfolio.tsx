import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  Github, Linkedin, Mail, Phone, Download, ArrowRight, Code2, Smartphone,
  Database, Cloud, Cpu, Layers, GitBranch, Sparkles, Briefcase, GraduationCap,
  Palette, Zap, Brain, Send, MapPin, Bug, TestTube
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import profileImg from "@/assets/profile.jpeg";
import { generateAndDownloadResume } from "@/lib/generateResume";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 pt-4">
      <nav className="mx-auto max-w-6xl glass rounded-full px-5 py-3 flex items-center justify-between shadow-card">
        <a href="#home" className="font-display font-bold text-lg tracking-tight">
          <span className="text-gradient">Mudasir</span>.dev
        </a>
        <ul className="hidden md:flex items-center gap-1 text-sm">
          {NAV.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} className="px-3 py-2 rounded-full hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact">
          <Button size="sm" className="rounded-full">Hire Me</Button>
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  const stack = [
    { name: "Kotlin", icon: Code2 },
    { name: "Compose", icon: Palette },
    { name: "Firebase", icon: Cloud },
    { name: "Retrofit", icon: Zap },
    { name: "Room", icon: Database },
    { name: "MVVM", icon: Layers },
    { name: "Coroutines", icon: Cpu },
    { name: "GitHub", icon: GitBranch },
    { name: "Testing", icon: TestTube },
    { name: "Debugging", icon: Bug },
  ];
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      <div className="blob bg-primary w-[500px] h-[500px] -top-20 -left-20 animate-blob" />
      <div className="blob bg-purple w-[400px] h-[400px] top-40 -right-10 animate-blob" style={{ animationDelay: "3s" }} />
      <div className="blob bg-teal w-[350px] h-[350px] bottom-0 left-1/3 animate-blob" style={{ animationDelay: "6s" }} />

      <div className="relative z-10 mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial="hidden" animate="show" variants={stagger}>
          <motion.div variants={fadeUp}>
            <Badge variant="secondary" className="rounded-full px-4 py-1.5 mb-6">
              <Sparkles className="w-3.5 h-3.5 mr-1.5" /> Available for opportunities
            </Badge>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
            Hi, I'm <br />
            <span className="text-gradient">Mudasir Ali</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-4 text-xl md:text-2xl font-medium text-muted-foreground">
            Android Developer | Specializing in Kotlin & Modern App Architecture
          </motion.p>
          <motion.p variants={fadeUp} className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl">
            Building modern Android applications with clean architecture, AI-powered features,
            and intuitive user experiences.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <a href="#projects"><Button size="lg" className="rounded-full shadow-glow">View Projects <ArrowRight className="w-4 h-4 ml-1" /></Button></a>
            <a href="#contact"><Button size="lg" variant="outline" className="rounded-full">Contact Me</Button></a>
            <Button size="lg" variant="ghost" className="rounded-full" onClick={generateAndDownloadResume}><Download className="w-4 h-4 mr-1" /> Resume</Button>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-2">
            {stack.map((s) => (
              <div key={s.name} className="glass rounded-full px-3 py-1.5 flex items-center gap-1.5 text-xs font-medium">
                <s.icon className="w-3.5 h-3.5 text-primary" /> {s.name}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center"
        >
          <div className="relative animate-float">
            <div className="absolute -inset-6 bg-hero-gradient rounded-full blur-2xl opacity-50" />
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden ring-4 ring-background shadow-glow">
              <img src={profileImg} alt="Mudasir Ali" width={768} height={768} className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-2 glass rounded-2xl px-4 py-3 shadow-card">
              <div className="flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-xs text-muted-foreground">Building</div>
                  <div className="text-sm font-semibold">Android Apps</div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <motion.div
      initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}
      variants={stagger} className="max-w-2xl mx-auto text-center mb-14"
    >
      <motion.div variants={fadeUp}>
        <Badge variant="outline" className="rounded-full">{eyebrow}</Badge>
      </motion.div>
      <motion.h2 variants={fadeUp} className="mt-4 text-4xl md:text-5xl font-bold">
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p variants={fadeUp} className="mt-4 text-muted-foreground text-lg">{subtitle}</motion.p>
      )}
    </motion.div>
  );
}

function About() {
  const stats = [
    { label: "Android Projects", value: "10+" },
    { label: "Technologies", value: "15+" },
    { label: "AI Integrations", value: "4" },
  ];
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="About Me" title="Passionate about modern Android Development" />
        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="lg:col-span-3 space-y-4">
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed">
              I’m a final-year Software Engineering student at <span className="text-foreground font-semibold">Sir Syed University of Engineering and Technology, Karachi</span>, passionate about building modern, high-performance Android applications.
            </motion.p>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed">
              I am specializing in <span className="text-foreground font-semibold">Kotlin and Jetpack Compose</span>, focusing on clean UI design, scalable architecture, and AI-integrated mobile experiences. Currently, I’m working as a Junior Android Developer at AbaciLabs, where I contribute to real-world Android projects and continue strengthening my development skills in a professional environment.
            </motion.p>
            <motion.div variants={fadeUp} className="grid grid-cols-3 gap-4 pt-6">
              {stats.map((s) => (
                <Card key={s.label} className="p-5 rounded-2xl border-0 shadow-card glass">
                  <div className="text-3xl font-bold text-gradient">{s.value}</div>
                  <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.label}</div>
                </Card>
              ))}
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="lg:col-span-2 space-y-4">
            <motion.div variants={fadeUp}>
              <Card className="p-6 rounded-2xl border-0 shadow-card hover:shadow-glow transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Education</div>
                    <div className="font-semibold mt-1">BS Software Engineering</div>
                    <div className="text-sm text-muted-foreground">Sir Syed University of Engineering & Technology, Karachi</div>
                  </div>
                </div>
              </Card>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Card className="p-6 rounded-2xl border-0 shadow-card hover:shadow-glow transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple/10 flex items-center justify-center shrink-0">
                    <Briefcase className="w-6 h-6 text-purple" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Experience</div>
                    <div className="font-semibold mt-1">Junior Android Developer</div>
                    <div className="text-sm text-muted-foreground">AbaciLabs · Nov 1 – Present</div>
                  </div>
                </div>
              </Card>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Card className="p-6 rounded-2xl border-0 shadow-card hover:shadow-glow transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-teal" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Based in</div>
                    <div className="font-semibold mt-1">Karachi, Pakistan</div>
                    <div className="text-sm text-muted-foreground">Open to remote roles</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const primary = [
    { name: "Kotlin", level: 88 },
    { name: "Jetpack Compose", level: 85 },
    { name: "XML Layouts", level: 70 },
    { name: "MVVM Architecture", level: 78 },
    { name: "Retrofit / REST APIs", level: 75 },
    { name: "Coroutines", level: 75 },
    { name: "Room Database", level: 80 },
    { name: "Firebase", level: 75 },
  ];
  const additional = [
    "Clean Architecture", "AI Integration", "Responsive UI",
    "State Management", "Git & GitHub", "REST APIs", "Material 3",
    "Dagger Hilt", "Android UI",
  ];
  return (
    <section id="skills" className="relative py-24 px-6 bg-soft-gradient">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="Skills" title="Tools I build with" subtitle="A growing toolkit focused on modern Android development." />
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="p-8 rounded-3xl border-0 shadow-card glass">
            <h3 className="text-xl font-semibold mb-6">Core Stack</h3>
            <div className="space-y-5">
              {primary.map((s, i) => (
                <motion.div key={s.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                >
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium">{s.name}</span>
                    <span className="text-muted-foreground">{s.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <motion.div
                      className="h-full bg-hero-gradient rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.04, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>

          <div className="space-y-6">
            <Card className="p-8 rounded-3xl border-0 shadow-card glass">
              <h3 className="text-xl font-semibold mb-4">Additional</h3>
              <div className="flex flex-wrap gap-2">
                {additional.map((t) => (
                  <span key={t} className="rounded-full px-4 py-2 bg-background border text-sm font-medium hover:border-primary hover:text-primary transition-colors cursor-default">
                    {t}
                  </span>
                ))}
              </div>
            </Card>
            <Card className="p-8 rounded-3xl border-0 shadow-card glass">
              <h3 className="text-xl font-semibold mb-4">What I focus on</h3>
              <ul className="space-y-3 text-muted-foreground">
                {[
                  "Clean, scalable Android architecture",
                  "Beautiful Compose UIs that feel native",
                  "AI-enhanced mobile experiences",
                  "Reliable API integration & state handling",
                  "Robust testing and app performance optimization",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { icon: Smartphone, title: "Android App Development", desc: "Building complete, high-performance Android applications from initial concept and architecture to a fully polished user experience." },
    { icon: Palette, title: "Jetpack Compose UI", desc: "Crafting beautiful, modern, and highly responsive user interfaces using declarative components and Material Design 3." },
    { icon: Cloud, title: "Firebase Integration", desc: "Incorporating seamless backend services including secure authentication, real-time Firestore databases, and push notifications." },
    { icon: Zap, title: "API Integration", desc: "Developing robust and efficient networking layers using Retrofit and Coroutines for seamless data fetching." },
    { icon: Layers, title: "MVVM Architecture", desc: "Structuring applications with scalable, testable, and maintainable architectural patterns for long-term project success." },
    { icon: Brain, title: "AI Service Integration", desc: "Implementing intelligent app features by seamlessly connecting to external AI APIs." },
  ];
  return (
    <section id="services" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="Services" title="What I can build for you" />
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((s) => (
            <motion.div key={s.title} variants={fadeUp}>
              <Card className="group p-7 rounded-3xl border-0 shadow-card hover:shadow-glow hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-2xl bg-hero-gradient flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <s.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      title: "SmartLedger",
      tag: "Featured · AI Finance",
      desc: "AI-powered Android finance tracker with smart ledger management, analytics, budgeting, and predictive insights.",
      tech: ["Kotlin", "Compose", "AI", "MVVM"],
      gradient: "from-primary to-purple",
    },
    {
      title: "Weather App",
      tag: "API Integration",
      desc: "Real-time weather forecasts powered by OpenWeather API with dynamic UI updates.",
      tech: ["Kotlin", "Retrofit", "REST", "Compose"],
      gradient: "from-teal to-primary",
    },
    {
      title: "AI Todo App",
      tag: "Productivity",
      desc: "Task manager enhanced with AI-powered task rewriting and smart productivity assistance.",
      tech: ["Kotlin", "AI", "Room"],
      gradient: "from-purple to-teal",
    },
    {
      title: "AI Energy Management System",
      tag: "Final Year Project",
      desc: "AI-based energy management for the Pakistani grid using PRECON dataset — seasonal bill prediction & 24-hour load forecasting.",
      tech: ["Random Forest", "LSTM", "ML", "Predictive Analytics"],
      gradient: "from-primary via-purple to-teal",
    },
  ];
  return (
    <section id="projects" className="relative py-24 px-6 bg-soft-gradient">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="Projects" title="Selected work" subtitle="A snapshot of apps and systems I've built." />
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((p) => (
            <motion.div key={p.title} variants={fadeUp}>
              <Card className="group rounded-3xl border-0 shadow-card hover:shadow-glow transition-all duration-300 overflow-hidden h-full">
                <div className={`relative h-48 bg-gradient-to-br ${p.gradient} overflow-hidden`}>
                  <div className="absolute inset-0 opacity-30" style={{
                    backgroundImage: "radial-gradient(circle at 30% 30%, white 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }} />
                  <div className="absolute bottom-4 left-6 text-white">
                    <div className="text-xs uppercase tracking-wider opacity-80">{p.tag}</div>
                    <div className="text-2xl font-bold mt-1">{p.title}</div>
                  </div>
                  <Smartphone className="absolute top-6 right-6 w-10 h-10 text-white/40 group-hover:scale-110 transition-transform" />
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <Badge key={t} variant="secondary" className="rounded-full text-xs">{t}</Badge>
                    ))}
                  </div>
                  <div className="mt-5 flex gap-2">
                    <Button size="sm" variant="outline" className="rounded-full"><Github className="w-3.5 h-3.5 mr-1" /> Code</Button>
                    <Button size="sm" variant="ghost" className="rounded-full">Details <ArrowRight className="w-3.5 h-3.5 ml-1" /></Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Experience() {
  const items = [
    {
      type: "work", icon: Briefcase, title: "Junior Android Developer",
      org: "AbaciLabs", date: "Nov 2025 – Present",
      location: undefined,
      points: [
        "Develop Android features using Kotlin and XML layouts",
        "Assist in building and refining Android UI components",
        "Collaborate with senior developers on app architecture",
        "Gain hands-on exposure to real-world development workflows",
      ],
    },
    {
      type: "edu", icon: GraduationCap, title: "BS Software Engineering",
      org: "Sir Syed University of Engineering & Technology", date: "Oct 2022 - Present",
      location: "Karachi, Pakistan",
      points: [],
    },
  ];
  return (
    <section id="experience" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader eyebrow="Journey" title="Experience & Education" />
        <div className="relative">
          <div className="absolute left-6 top-2 bottom-2 w-px bg-border" />
          <div className="space-y-8">
            {items.map((it, i) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-20"
              >
                <div className="absolute left-0 top-2 w-12 h-12 rounded-2xl bg-hero-gradient flex items-center justify-center shadow-glow">
                  <it.icon className="w-6 h-6 text-white" />
                </div>
                <Card className="p-6 rounded-2xl border-0 shadow-card hover:shadow-glow transition-shadow">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold">{it.title}</h3>
                    <span className="text-xs text-muted-foreground">{it.date}</span>
                  </div>
                  <div className="text-primary font-medium text-sm mt-0.5">{it.org}</div>
                  {it.location && (
                    <div className="text-muted-foreground text-sm mt-0.5">{it.location}</div>
                  )}
                  {it.points.length > 0 && (
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      {it.points.map((p) => (
                        <li key={p} className="flex gap-2"><span className="text-primary">▹</span>{p}</li>
                      ))}
                    </ul>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitting(true);
    setStatus("idle");
    try {
      await emailjs.send(
        "service_tuwxhq9",
        "template_absrp3z",
        {
          name: formData.name,
          from_name: formData.name,
          from_email: formData.email,
          message: formData.subject ? `Subject: ${formData.subject}\n\n${formData.message}` : formData.message,
          time: new Date().toLocaleString(),
        },
        "XZAxDwdVdaqy2V4oi"
      );
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const cards = [
    { icon: Mail, label: "Email", value: "unarmmudasir@gmail.com", href: "mailto:unarmmudasir@gmail.com" },
    { icon: Phone, label: "Phone", value: "+92 326 8920883", href: "tel:+923268920883" },
    { icon: Linkedin, label: "LinkedIn", value: "mudasir-ali", href: "https://www.linkedin.com/in/mudasir-ali-442196261" },
    { icon: Github, label: "GitHub", value: "mudasirunar", href: "https://github.com/mudasirunar" },
  ];
  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      <div className="blob bg-primary w-[400px] h-[400px] -top-20 -right-20" />
      <div className="blob bg-purple w-[400px] h-[400px] -bottom-20 -left-20" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeader eyebrow="Contact" title="Let's build something together" subtitle="Got a project, role, or idea? Drop me a message." />
        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 space-y-3">
            {cards.map((c) => (
              <a key={c.label} href={c.href} target="_blank" rel="noreferrer">
                <Card className="p-5 rounded-2xl border-0 shadow-card glass hover:shadow-glow hover:-translate-y-0.5 transition-all flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-hero-gradient flex items-center justify-center shrink-0">
                    <c.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-muted-foreground">{c.label}</div>
                    <div className="font-medium truncate">{c.value}</div>
                  </div>
                </Card>
              </a>
            ))}
            <Card className="p-5 rounded-2xl border-0 shadow-card glass flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-teal/20 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-teal" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Alt Phone</div>
                <div className="font-medium">+92 312 3842557</div>
              </div>
            </Card>
          </div>

          <Card className="lg:col-span-3 p-8 rounded-3xl border-0 shadow-card glass">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Name</label>
                  <Input
                    required
                    className="mt-1.5 rounded-xl"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <Input
                    required
                    type="email"
                    className="mt-1.5 rounded-xl"
                    placeholder="you@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Subject</label>
                <Input
                  className="mt-1.5 rounded-xl"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Message</label>
                <Textarea
                  required
                  className="mt-1.5 rounded-xl min-h-32"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <Button type="submit" disabled={isSubmitting} size="lg" className="rounded-full w-full shadow-glow">
                {isSubmitting ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}
                {!isSubmitting && status !== "success" && <Send className="w-4 h-4 ml-2" />}
              </Button>
              {status === "error" && <p className="text-destructive text-sm text-center">Failed to send message. Please try again.</p>}
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="font-display font-bold text-lg"><span className="text-gradient">Mudasir</span>.dev</div>
          <p className="text-sm text-muted-foreground mt-1">Building the future one Android app at a time.</p>
        </div>
        <div className="flex items-center gap-2">
          {[
            { icon: Github, href: "https://github.com/mudasirunar" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/mudasir-ali-442196261" },
            { icon: Mail, href: "mailto:unarmmudasir@gmail.com" },
          ].map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noreferrer"
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:shadow-glow hover:-translate-y-0.5 transition-all">
              <s.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
        <div className="text-sm text-muted-foreground">© {new Date().getFullYear()} Mudasir Ali</div>
      </div>
    </footer>
  );
}

export function Portfolio() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
