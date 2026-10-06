import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github, Linkedin, Mail, Phone, Download, ArrowRight, ArrowLeft, Code2, Smartphone,
  Database, Cloud, Cpu, Layers, GitBranch, Sparkles, Briefcase, GraduationCap,
  Palette, Zap, Brain, Send, MapPin, Bug, TestTube, X, ChevronLeft, ChevronRight, ExternalLink, Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import profileImg from "@/assets/profile.webp";
import { generateAndDownloadResume } from "@/lib/generateResume";
import { logAnalyticsEvent } from "@/lib/firebase";

import anasLogo from "@/assets/exp-edu-cert-logos/anas_tech_logo.webp";
import gitxolLogo from "@/assets/exp-edu-cert-logos/gitxol_logo.webp";
import ibmLogo from "@/assets/exp-edu-cert-logos/ibm_logo.webp";
import ssuetLogo from "@/assets/exp-edu-cert-logos/ssuet_logo.webp";

import slCover from "@/assets/smartledger/cover.webp";
import slDashboard from "@/assets/smartledger/dashboard.webp";
import slDashboard2 from "@/assets/smartledger/dashboard_2.webp";
import slCreate1 from "@/assets/smartledger/create_new_ledger_step1.webp";
import slCreate2 from "@/assets/smartledger/create_new_ledger_step2.webp";
import slCreate3 from "@/assets/smartledger/create_new_ledger_step3.webp";
import slMilk from "@/assets/smartledger/milk_record_screen.webp";
import slAddElec from "@/assets/smartledger/add_electricty_record_screen.webp";
import slElec from "@/assets/smartledger/electricity_record_screen.webp";
import slViewElec from "@/assets/smartledger/view_electricity_screen.webp";
import slViewExp from "@/assets/smartledger/view_expense_screen.webp";
import slAna1 from "@/assets/smartledger/analytics_screen.webp";
import slAna2 from "@/assets/smartledger/analytic_screen_2.webp";
import slAi from "@/assets/smartledger/ai_insigth_and_prediction.webp";
import slBackup from "@/assets/smartledger/backup_options_dialog.webp";

import atCover from "@/assets/applytrack/cover.webp";
import atAddEdit from "@/assets/applytrack/addeditscreen.webp";
import atApplication from "@/assets/applytrack/applictaionscreen.webp";
import atDashboard1 from "@/assets/applytrack/dashboard1.webp";
import atDashboard2 from "@/assets/applytrack/dashboard2.webp";
import atSetting from "@/assets/applytrack/settingscreen.webp";
import atView1 from "@/assets/applytrack/viewscreen1.webp";
import atView2 from "@/assets/applytrack/viewscreen2.webp";
import atView3 from "@/assets/applytrack/viewscreen3.webp";
import atWebLogin from "@/assets/applytrack/webapp_login_screen.webp";
import atWebDashboard from "@/assets/applytrack/web_dashboard.webp";
import atWebApplications from "@/assets/applytrack/webapp_applictaions_screen.webp";
import atWebDetail from "@/assets/applytrack/webapp_detail_screen.webp";

import bgCover from "@/assets/bentoapp/cover.webp";
import bgHome from "@/assets/bentoapp/home_screen.webp";
import bgAddDialog from "@/assets/bentoapp/add_collection_dialog.webp";
import bgCustomize1 from "@/assets/bentoapp/customize_tile_screen.webp";
import bgCustomize2 from "@/assets/bentoapp/customize_tile_screen_2.webp";
import bgCollection from "@/assets/bentoapp/collection_screen.webp";
import bgImageViewer from "@/assets/bentoapp/image_viewer_overlay.webp";

import taCover from "@/assets/todoapp/cover.webp";
import taHome from "@/assets/todoapp/home_screen.webp";
import taTasks from "@/assets/todoapp/tasks_screen.webp";
import taSearchHighlight from "@/assets/todoapp/search_highligth.webp";
import taAiRewrite from "@/assets/todoapp/ai_rewrite_styling_dialog.webp";
import taVoiceInput from "@/assets/todoapp/voice_input_bottom_sheet.webp";
import taPdfPreview from "@/assets/todoapp/pdf_preview_screen.webp";

import piCover from "@/assets/phoneinfo/cover.webp";
import piHome from "@/assets/phoneinfo/home_screen.webp";
import piAdvance1 from "@/assets/phoneinfo/advance_detail_screen.webp";
import piApps from "@/assets/phoneinfo/apps_screen.webp";
import piAdvance2 from "@/assets/phoneinfo/advance_detail_screen_2.webp";

const phoneInfoImages = [
  piHome,
  piAdvance1,
  piApps,
  piAdvance2
];

const todoAppImages = [
  taHome,
  taTasks,
  taSearchHighlight,
  taAiRewrite,
  taVoiceInput,
  taPdfPreview
];

const bentoAppImages = [
  bgHome,
  bgAddDialog,
  bgCustomize1,
  bgCustomize2,
  bgCollection,
  bgImageViewer
];

const applyTrackImages = [
  atDashboard1,
  atDashboard2,
  atApplication,
  atView1,
  atView2,
  atView3,
  atAddEdit,
  atSetting
  ,
  atWebLogin,
  atWebDashboard,
  atWebApplications,
  atWebDetail
];

const smartLedgerImages = [
  slDashboard,
  slDashboard2,
  slCreate1,
  slCreate2,
  slCreate3,
  slMilk,
  slAddElec,
  slElec,
  slViewElec,
  slViewExp,
  slAna1,
  slAna2,
  slAi,
  slBackup
];

import aboCover from "@/assets/aibilloptimizer/cover.webp";
import aboLogin from "@/assets/aibilloptimizer/login_page.webp";
import aboHome1 from "@/assets/aibilloptimizer/home_screen.webp";
import aboHome2 from "@/assets/aibilloptimizer/home_screen_2.webp";
import aboSetup from "@/assets/aibilloptimizer/setup_profile.webp";
import aboPred1 from "@/assets/aibilloptimizer/prediction_screen_1.webp";
import aboPred2 from "@/assets/aibilloptimizer/prediction_screen_2.webp";
import aboLoad1 from "@/assets/aibilloptimizer/load_forecaster_screen_1.webp";
import aboLoad2 from "@/assets/aibilloptimizer/load_forecaster_screen_2.webp";
import aboNepra from "@/assets/aibilloptimizer/nepra_tarif_screen.webp";
import aboSim from "@/assets/aibilloptimizer/simulator_screen.webp";

const aiBillOptimizerImages = [
  aboLogin,
  aboHome1,
  aboHome2,
  aboSetup,
  aboPred1,
  aboPred2,
  aboLoad1,
  aboLoad2,
  aboNepra,
  aboSim
];

const PROJECT_LINKS = {
  smartLedger: {
    github: "https://github.com/mudasirunar/SmartLedger",
    apk: "https://github.com/mudasirunar/SmartLedger/releases/latest",
  },
  bentoGrid: {
    github: "https://github.com/mudasirunar/BentoGridApp",
    apk: "https://github.com/mudasirunar/BentoGridApp/releases/latest",
  },
  todoApp: {
    github: "https://github.com/mudasirunar/TodoApp",
    apk: "https://github.com/mudasirunar/TodoApp/releases/latest",
  },
  phoneInfo: {
    github: "https://github.com/mudasirunar/PhoneInfo",
    apk: "https://github.com/mudasirunar/PhoneInfo/releases/latest",
  },
  applyTrack: {
    github: "https://github.com/mudasirunar/ApplyTrack",
    apk: "https://github.com/mudasirunar/ApplyTrack/releases/latest",
    website: "https://apply-track-web.vercel.app",
  },
  billOptimizer: {
    github: "https://github.com/mudasirunar/bill-optimizer",
    website: "https://bill-optimizer.vercel.app/",
  },
};

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
          <span className="text-gradient">Mudasir</span>.tech
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
        <div className="hidden md:block w-[110px]" /> {/* Spacer matching logo width to keep menu centered */}
      </nav>
    </header>
  );
}

function Hero() {
  const stack = [
    { name: "Kotlin & Android", icon: Smartphone },
    { name: "iOS & Swift", icon: Smartphone },
    { name: "Flutter & Dart", icon: Layers },
    { name: "Jetpack Compose", icon: Palette },
    { name: "React & Web Dev", icon: Code2 },
    { name: "Firebase", icon: Cloud },
  ];
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      <div className="blob bg-primary w-[500px] h-[500px] -top-20 -left-20 animate-blob" />
      <div className="blob bg-purple w-[400px] h-[400px] top-40 -right-10 animate-blob" style={{ animationDelay: "3s" }} />
      <div className="blob bg-teal w-[350px] h-[350px] bottom-0 left-1/3 animate-blob" style={{ animationDelay: "6s" }} />

      <div className="relative z-10 mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial="hidden" animate="show" variants={stagger}>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
            Hi, I'm <br />
            <span className="text-gradient">Mudasir Ali</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-4 text-xl md:text-2xl font-medium text-muted-foreground">
            Software Engineer | Specializing in Mobile & Web Development
          </motion.p>
          <motion.p variants={fadeUp} className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl">
            Building high-performance mobile apps and modern web interfaces with clean architecture,
            AI integration, and intuitive user experiences.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#projects" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto rounded-full shadow-glow">
                View Projects <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </a>
            <a href="#contact" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full">
                Contact Me
              </Button>
            </a>
            <Button size="lg" variant="ghost" className="w-full sm:w-auto rounded-full" onClick={() => {
              generateAndDownloadResume();
              logAnalyticsEvent("download_resume", { source: "hero" });
            }}><Download className="w-4 h-4 mr-1" /> Resume</Button>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-2">
            {stack.map((s) => (
              <div
                key={s.name}
                className="rounded-full px-3 py-1.5 flex items-center gap-1.5 text-xs font-medium border border-border/60 bg-muted/80 text-foreground"
                style={{
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                }}
              >
                <s.icon className="w-3.5 h-3.5 text-primary shrink-0" /> {s.name}
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
              <img
                src={profileImg}
                alt="Mudasir Ali - Software Engineer & Mobile Developer"
                width={768}
                height={768}
                fetchPriority="high"
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-2 glass rounded-2xl px-4 py-3 shadow-card">
              <div className="flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-xs text-muted-foreground">Building</div>
                  <div className="text-sm font-semibold">Mobile Apps</div>
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
    { label: "Mobile Projects", value: "10+" },
    { label: "Web Projects", value: "5+" },
    { label: "Technologies", value: "20+" },
  ];
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="About Me" title="Passionate about modern mobile & web development" />
        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="lg:col-span-3 space-y-4">
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed">
              I am a Software Engineering graduate from <span className="text-foreground font-semibold">Sir Syed University of Engineering and Technology (SSUET), Karachi</span>, driven by a passion for engineering scalable, high-performance mobile applications, intuitive web platforms, and AI-powered digital solutions.
            </motion.p>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed">
              My core expertise spans <span className="text-foreground font-semibold">mobile engineering across native and cross-platform ecosystems</span> (Kotlin, Jetpack Compose, Flutter/Dart, iOS/Swift), paired with clean architecture, RESTful API integration, and modern cloud workflows. Currently, I am expanding production mobile apps as a Flutter Developer Intern at <span className="text-foreground font-semibold">ANAS Technologies</span>, while enhancing web performance, SEO, and indexing as a Web Development Intern at <span className="text-foreground font-semibold">GitXol</span>.
            </motion.p>
            <motion.div variants={fadeUp} className="grid grid-cols-3 gap-4 pt-6">
              {stats.map((s) => (
                <Card key={s.label} className="p-5 rounded-2xl border-0 shadow-card glass">
                  <div className="text-3xl font-bold text-gradient">{s.value}</div>
                  <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.label}</div>
                </Card>
              ))}
            </motion.div>
            <motion.div variants={fadeUp} className="pt-2">
              <Card className="p-4 sm:p-5 rounded-2xl border-0 shadow-card glass hover:shadow-glow transition-shadow flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-teal" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Location & Availability</div>
                  <div className="text-sm font-semibold text-foreground">Karachi, Pakistan <span className="text-muted-foreground font-normal">· Open to remote & hybrid roles.</span></div>
                </div>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="lg:col-span-2 space-y-4">
            <motion.div variants={fadeUp}>
              <Card className="p-6 rounded-2xl border-0 shadow-card hover:shadow-glow transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white p-2 flex items-center justify-center shrink-0 shadow-sm border border-border/40 overflow-hidden ring-2 ring-primary/10">
                    <img src={anasLogo} alt="ANAS Technologies" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Experience</div>
                    <div className="font-semibold mt-1">Flutter Developer Intern</div>
                    <div className="text-sm text-muted-foreground">ANAS Technologies · Sept 2026 – Present</div>
                  </div>
                </div>
              </Card>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Card className="p-6 rounded-2xl border-0 shadow-card hover:shadow-glow transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white p-2 flex items-center justify-center shrink-0 shadow-sm border border-border/40 overflow-hidden ring-2 ring-primary/10">
                    <img src={gitxolLogo} alt="GitXol" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Experience</div>
                    <div className="font-semibold mt-1">Web Development Intern</div>
                    <div className="text-sm text-muted-foreground">GitXol · June 2026 – Present</div>
                  </div>
                </div>
              </Card>
            </motion.div>
            <motion.div variants={fadeUp}>
              <a
                href="https://www.coursera.org/account/accomplishments/specialization/D2BYZFQ9ADK7"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <Card className="p-6 rounded-2xl border-0 shadow-card hover:shadow-glow transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white p-2 flex items-center justify-center shrink-0 shadow-sm border border-border/40 overflow-hidden ring-2 ring-primary/10">
                      <img src={ibmLogo} alt="IBM" className="w-full h-full object-contain" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs uppercase tracking-wider text-muted-foreground">Certification</span>
                        <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <div className="font-semibold mt-1 text-foreground group-hover:text-primary transition-colors">
                        IBM iOS & Android Mobile App Developer
                      </div>
                      <div className="text-sm text-muted-foreground">Coursera · August 2026</div>
                    </div>
                  </div>
                </Card>
              </a>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Card className="p-6 rounded-2xl border-0 shadow-card hover:shadow-glow transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white p-2 flex items-center justify-center shrink-0 shadow-sm border border-border/40 overflow-hidden ring-2 ring-primary/10">
                    <img src={ssuetLogo} alt="SSUET" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Education</div>
                    <div className="font-semibold mt-1">BS Software Engineering</div>
                    <div className="text-sm text-muted-foreground">Sir Syed University & Technology (SSUET) · Oct 2022 – July 2026</div>
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
    { name: "Kotlin", level: 90 },
    { name: "Jetpack Compose", level: 85 },
    { name: "Room Database", level: 80 },
    { name: "MVVM Architecture", level: 78 },
    { name: "Retrofit / REST APIs", level: 75 },
    { name: "Firebase", level: 75 },
    { name: "Flutter & Dart", level: 65 },
    { name: "React & Web Dev", level: 60 },
    { name: "iOS & Swift", level: 55 },
  ];
  const additional = [
    "XML Layouts", "Coroutines & Flow", "Clean Architecture", "AI Integration",
    "Responsive UI", "State Management", "Git & GitHub", "Material 3",
    "Dagger Hilt", "Android UI", "Vercel & Cloudflare", "SEO & Search Console",
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
                  "Clean, scalable mobile & web architectures",
                  "Responsive & native UI/UX across devices",
                  "Offline-first sync & robust local caching",
                  "Reliable APIs & secure cloud databases",
                  "Intelligent features & custom AI integrations",
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
    { icon: Smartphone, title: "Mobile App Development", desc: "Building high-performance native Android and cross-platform mobile applications using Kotlin, Jetpack Compose, Swift, and Flutter." },
    { icon: Code2, title: "Frontend Web Development", desc: "Creating beautiful, interactive, and responsive web interfaces using modern frameworks like React and Vite with clean styling." },
    { icon: Layers, title: "Cloud & Deployment", desc: "Setting up production-ready deployment pipelines using Vercel hosting, Cloudflare DNS/caching, and DigitalOcean server management." },
    { icon: Cloud, title: "Firebase Integration", desc: "Implementing secure authentication workflows, real-time Cloud Firestore databases, and push notifications for mobile and web." },
    { icon: Zap, title: "API Integration & Backend", desc: "Building Python Flask REST APIs and developing robust networking layers for seamless data fetching and communication." },
    { icon: Brain, title: "AI & Machine Learning", desc: "Integrating custom TensorFlow/Scikit-learn models and connecting external AI APIs like Groq or Gemini for smart forecasting." },
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

const SmartLedgerDesc = () => (
  <div className="space-y-8 text-sm text-muted-foreground pb-6">
    <div>
      <h3 className="text-3xl font-bold text-foreground mb-4">SmartLedger - AI-Powered Finance & Ledger Management</h3>
      <p className="text-base leading-relaxed">
        SmartLedger is a feature-rich Android application designed for seamless finance management and ledger tracking. By combining dynamic record-keeping with powerful AI integrations, SmartLedger empowers users to meticulously track expenses, manage daily logs, and gain actionable financial insights.
      </p>
      <p className="text-base leading-relaxed mt-3">
        Whether you are logging utility bills, everyday expenses, or managing a custom budget, SmartLedger makes personal finance intelligent, intuitive, and highly secure.
      </p>
    </div>

    <div className="bg-card/30 dark:bg-card/15 backdrop-blur-xl p-6 rounded-2xl border border-border/50 dark:border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
      <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-primary" /> Key Features
      </h4>
      <ul className="space-y-3 list-none">
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" /> <span><strong>Dynamic Ledger Management:</strong> Create highly customized ledgers tailored to your needs. Support for Single Date, Month-Only, and Start/End Date ranges.</span></li>
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" /> <span><strong>Comprehensive Expense Tracking:</strong> Manage daily logs effortlessly. Add titles, amounts, descriptions, and attach up to multiple receipt photos.</span></li>
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" /> <span><strong>Smart Notification System:</strong> Intelligent reminders for daily logs with direct input and quick-reply actions, including a fallback auto-reminder mechanism.</span></li>
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" /> <span><strong>AI-Powered Financial Assistant:</strong> Integrates with Groq API to analyze your data, offering spending predictions and personalized optimization tips.</span></li>
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" /> <span><strong>Advanced Analytics:</strong> Interactive, beautiful charts providing a visual breakdown of your financial distribution.</span></li>
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" /> <span><strong>Smart Backup & Restore:</strong> Local and Google Drive backup options with an intelligent restore mechanism that safely ignores duplicates.</span></li>
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" /> <span><strong>Safe Deletion (Trash Bin):</strong> An automated safety net that holds deleted records and purges them after 15 days.</span></li>
      </ul>
    </div>

    <div>
      <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
        <Brain className="w-5 h-5 text-purple" /> AI Features & Insights
      </h4>
      <p className="mb-4 text-base">SmartLedger leverages the <strong>Groq API</strong> to provide intelligent financial foresight:</p>
      <ul className="space-y-3">
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-purple mt-2 shrink-0" /><span><strong>Spending Predictions:</strong> The AI analyzes historical data to forecast future estimated costs and quantities (e.g., utility consumption for upcoming winter).</span></li>
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-purple mt-2 shrink-0" /><span><strong>Optimization Tips:</strong> Generates practical, context-aware suggestions to help users reduce their overall expenditure.</span></li>
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-purple mt-2 shrink-0" /><span><strong>Data-Driven Insights:</strong> Helps users identify irregular spending patterns by evaluating past completed months against current trends.</span></li>
      </ul>
    </div>

    <div>
      <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
        <Layers className="w-5 h-5 text-teal" /> Architecture & Tech Stack
      </h4>
      <p className="mb-4 text-base">The application follows a <strong>modular layered architecture inspired by Clean Architecture principles</strong>, with separation between UI, data, and networking layers.</p>
      <div className="flex flex-wrap gap-2 mb-2">
        {["Kotlin", "Material Design 3", "Room Database (KSP)", "Retrofit2 & Gson", "Coroutines & Flow", "WorkManager", "MPAndroidChart", "Glide & PhotoView"].map(t => (
          <span key={t} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-foreground/[0.05] dark:bg-white/[0.06] text-foreground/80 dark:text-foreground/85 border border-foreground/10 dark:border-white/10 backdrop-blur-md hover:bg-foreground/[0.09] dark:hover:bg-white/[0.12] hover:text-foreground transition-colors">{t}</span>
        ))}
      </div>
    </div>

    <div className="bg-primary/5 dark:bg-primary/[0.04] backdrop-blur-xl p-6 rounded-2xl border border-primary/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.03)]">
      <h4 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
        <Smartphone className="w-5 h-5 text-primary" /> Get the App
      </h4>
      <p className="text-base text-muted-foreground mb-6">
        Experience SmartLedger directly on your Android device. Download the pre-built APK to start managing your finances, or view the complete Kotlin source code on GitHub.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a href={PROJECT_LINKS.smartLedger.apk} target="_blank" rel="noreferrer">
          <Button
            size="lg"
            className="relative overflow-hidden group/modalbtn rounded-full shadow-glow bg-primary hover:bg-primary/95 text-primary-foreground font-medium transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 hover:shadow-[0_6px_25px_rgba(59,130,246,0.4)] w-full sm:w-auto"
          >
            <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover/modalbtn:translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out" />
            <Download className="w-5 h-5 mr-2 transition-transform duration-200 group-hover/modalbtn:translate-y-0.5" /> Download APK
          </Button>
        </a>
        <a href={PROJECT_LINKS.smartLedger.github} target="_blank" rel="noreferrer">
          <Button
            size="lg"
            variant="outline"
            className="relative rounded-full border border-border/80 dark:border-white/15 bg-secondary/30 hover:bg-primary/10 text-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 hover:shadow-[0_0_18px_rgba(59,130,246,0.2)] group/modalcode font-medium w-full sm:w-auto"
          >
            <Github className="w-5 h-5 mr-2 transition-transform duration-300 ease-out group-hover/modalcode:rotate-12 group-hover/modalcode:scale-110" /> View Source Code
          </Button>
        </a>
      </div>
    </div>
  </div>
);

const ApplyTrackDesc = () => (
  <div className="space-y-8 text-sm text-muted-foreground pb-6">
    <div>
      <h3 className="text-3xl font-bold text-foreground mb-4">ApplyTrack — Job Application Tracker</h3>
      <p className="text-base leading-relaxed">
        ApplyTrack is an offline‑first job application tracker built for people who want a fast, reliable way to manage opportunities from both mobile and the browser.
      </p>
      <ul className="mt-3 space-y-2 text-sm list-none">
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> <span><strong>Two clients:</strong> a native Android app (Kotlin + Jetpack Compose) and a React + Vite web companion.</span></li>
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> <span><strong>Offline‑first:</strong> local-first persistence with immediate reads/writes (Room on Android, local cache on web).</span></li>
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> <span><strong>Attachments & previews:</strong> resumes, cover letters, screenshots and PDF/image viewers.</span></li>
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> <span><strong>Analytics & dashboard:</strong> status distribution, conversion rates, monthly activity and quick summaries.</span></li>
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> <span><strong>Cloud sync:</strong> metadata in Firebase Firestore, binary attachments in Supabase Storage; background/scheduled sync when online.</span></li>
      </ul>
    </div>

    <div className="bg-card/30 dark:bg-card/15 backdrop-blur-xl p-6 rounded-2xl border border-border/50 dark:border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
      <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-primary" /> Key Features
      </h4>
      <div className="space-y-4">
        <div>
          <strong className="text-foreground">Application Tracking & Organization</strong>
          <ul className="mt-2 space-y-2 ml-1 text-sm list-none">
            <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> <span><strong>Comprehensive Job Tracking:</strong> Manage company details, roles, application dates, statuses, and preparation notes.</span></li>
            <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> <span><strong>Interview Pipeline Management:</strong> Keep track of applications through various stages, from applied to offer or rejection.</span></li>
            <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> <span><strong>Document Management:</strong> Attach resumes, cover letters, and screenshots directly to applications.</span></li>
            <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> <span><strong>Smart Search & Filtering:</strong> Quickly find applications and organize your job hunt efficiently.</span></li>
          </ul>
        </div>
        <div>
          <strong className="text-foreground">Dashboard & Analytics</strong>
          <ul className="mt-2 space-y-2 ml-1 text-sm list-none">
            <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> <span><strong>Interactive Analytics Dashboard:</strong> Visualize total applications, active interviews, offers, and rejection ratios.</span></li>
            <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> <span><strong>Career Insights:</strong> Gain a clear overview of your progress with clean and informative statistics.</span></li>
            <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> <span><strong>Real-Time Updates:</strong> Dashboard metrics update instantly as applications change.</span></li>
          </ul>
        </div>
        <div>
          <strong className="text-foreground">Offline-First Experience</strong>
          <ul className="mt-2 space-y-2 ml-1 text-sm list-none">
            <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> <span><strong>Local-First Architecture:</strong> All data is stored locally for instant access and zero-latency interactions.</span></li>
            <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> <span><strong>Background Cloud Synchronization:</strong> Seamlessly sync applications and attachments whenever internet connectivity is restored.</span></li>
            <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> <span><strong>Google Sign-In & Guest Mode:</strong> Start using the app immediately and optionally migrate to a cloud account later.</span></li>
            <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> <span><strong>Data Backup & Restore:</strong> Export and import your entire application data, including documents and attachments, as a single ZIP archive for easy backups, device migration, and offline portability.</span></li>
          </ul>
        </div>
      </div>
    </div>

    <div>
      <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
        <Database className="w-5 h-5 text-purple" /> Architecture & Data Synchronization
      </h4>
      <p className="mb-4 text-base">ApplyTrack leverages Supabase and Cloud Firestore behind a secure offline caching layer:</p>
      <ul className="space-y-3">
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-purple mt-2 shrink-0" /><span><strong>Supabase Storage:</strong> Secure cloud storage for document attachments like resumes and cover letters.</span></li>
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-purple mt-2 shrink-0" /><span><strong>Room Database Cache:</strong> Acts as the fast local source of truth, enabling immediate data read/writes with zero network latency.</span></li>
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-purple mt-2 shrink-0" /><span><strong>WorkManager Sync:</strong> Schedules background synchronization workers to push local updates to Firebase and Supabase.</span></li>
      </ul>
    </div>

    <div>
      <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
        <Layers className="w-5 h-5 text-teal" /> Tech Stack
      </h4>
      <div className="flex flex-wrap gap-2 mb-2">
        {[
          "Kotlin",
          "Jetpack Compose",
          "Room Database",
          "Firebase Authentication",
          "Cloud Firestore",
          "Supabase Storage",
          "WorkManager",
          "Coroutines & Flow",
          "React 19",
          "Vite 8",
          "TypeScript",
        ].map((t) => (
          <span key={t} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-foreground/[0.05] dark:bg-white/[0.06] text-foreground/80 dark:text-foreground/85 border border-foreground/10 dark:border-white/10 backdrop-blur-md hover:bg-foreground/[0.09] dark:hover:bg-white/[0.12] hover:text-foreground transition-colors">{t}</span>
        ))}
      </div>
    </div>

    <div>
      <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
        <Zap className="w-5 h-5 text-yellow-500" /> Future Improvements
      </h4>
      <ul className="space-y-3">
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 shrink-0" /><span><strong>Resume Builder:</strong> Design and build resumes directly inside the app using premium templates.</span></li>
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 shrink-0" /><span><strong>Interview Reminders:</strong> Push notifications and calendar integration for upcoming interview slots.</span></li>
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 shrink-0" /><span><strong>PDF Export:</strong> Export the complete history and analytical dashboard of your job search to a PDF report.</span></li>
      </ul>
    </div>

    <div className="bg-primary/5 dark:bg-primary/[0.04] backdrop-blur-xl p-6 rounded-2xl border border-primary/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.03)]">
      <h4 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
        <ExternalLink className="w-5 h-5 text-primary" /> Access ApplyTrack
      </h4>
      <p className="text-base text-muted-foreground mb-6">
        Access ApplyTrack as a native Android APK for an offline-first mobile experience, or open the web app in your browser for desktop access. Source code is available on GitHub.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a href={PROJECT_LINKS.applyTrack.apk} target="_blank" rel="noreferrer">
          <Button
            size="lg"
            className="relative overflow-hidden group/modalbtn rounded-full shadow-glow bg-primary hover:bg-primary/95 text-primary-foreground font-medium transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 hover:shadow-[0_6px_25px_rgba(59,130,246,0.4)] w-full sm:w-auto"
          >
            <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover/modalbtn:translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out" />
            <Download className="w-5 h-5 mr-2 transition-transform duration-200 group-hover/modalbtn:translate-y-0.5" /> Download APK
          </Button>
        </a>
        {PROJECT_LINKS.applyTrack.website && (
          <a href={PROJECT_LINKS.applyTrack.website} target="_blank" rel="noreferrer">
            <Button
              size="lg"
              className="relative overflow-hidden group/modalbtn rounded-full shadow-glow bg-primary hover:bg-primary/95 text-primary-foreground font-medium transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 hover:shadow-[0_6px_25px_rgba(59,130,246,0.4)] w-full sm:w-auto"
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover/modalbtn:translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out" />
              <ExternalLink className="w-5 h-5 mr-2 transition-transform duration-200 group-hover/modalbtn:-translate-y-0.5 group-hover/modalbtn:translate-x-0.5" /> Visit Web App
            </Button>
          </a>
        )}
        <a href={PROJECT_LINKS.applyTrack.github} target="_blank" rel="noreferrer">
          <Button
            size="lg"
            variant="outline"
            className="relative rounded-full border border-border/80 dark:border-white/15 bg-secondary/30 hover:bg-primary/10 text-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 hover:shadow-[0_0_18px_rgba(59,130,246,0.2)] group/modalcode font-medium w-full sm:w-auto"
          >
            <Github className="w-5 h-5 mr-2 transition-transform duration-300 ease-out group-hover/modalcode:rotate-12 group-hover/modalcode:scale-110" /> View Source Code
          </Button>
        </a>
      </div>
    </div>
  </div>
);

const BentoAppDesc = () => (
  <div className="space-y-8 text-sm text-muted-foreground pb-6">
    <div>
      <h3 className="text-3xl font-bold text-foreground mb-4">Bento Grid App</h3>
      <p className="text-base leading-relaxed">
        Bento Grid App is a modern Android application that empowers users to curate stunning visual collections using a flexible, dynamic Bento-style grid system.
      </p>
      <p className="text-base leading-relaxed mt-3">
        By allowing the creation of named collections, the app offers a highly aesthetic and customizable way to organize images, notes, and memories into beautifully balanced layouts.
      </p>
    </div>

    <div className="bg-card/30 dark:bg-card/15 backdrop-blur-xl p-6 rounded-2xl border border-border/50 dark:border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
      <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-primary" /> Features
      </h4>
      <div className="space-y-4">
        <div>
          <strong className="text-foreground">Grid System & Collections</strong>
          <ul className="mt-2 space-y-2 ml-1 text-sm list-none">
            <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> <span><strong>Dynamic Bento Layout:</strong> Intelligent grid system that auto-aligns items.</span></li>
            <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> <span><strong>Multiple Shape Variations:</strong> Rectangular (Square, Tall, Wide, Small) and clipping shapes (Edged, Rounded, Circular).</span></li>
            <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> <span><strong>Custom Collections:</strong> Create, edit, and organize multiple themed collections.</span></li>
          </ul>
        </div>
        <div>
          <strong className="text-foreground">UI/UX & Image Handling</strong>
          <ul className="mt-2 space-y-2 ml-1 text-sm list-none">
            <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> <span><strong>Rich Customization:</strong> Customize tile colors, text styling, typography, and content alignment.</span></li>
            <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> <span><strong>Immersive Experience:</strong> Edge-to-edge design with dynamic status bar handling and smooth animations.</span></li>
            <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> <span><strong>Advanced Image Viewer:</strong> Full-screen overlay with pinch-to-zoom and swipe-to-dismiss.</span></li>
          </ul>
        </div>
      </div>
    </div>

    <div>
      <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
        <Layers className="w-5 h-5 text-teal" /> Bento Grid System
      </h4>
      <p className="mb-4 text-base">The heart of Bento Grid is its advanced first-fit packing algorithm that dynamically arranges tiles to eliminate wasted space while maintaining the iconic "Bento Box" visual flow.</p>
      <ul className="space-y-3">
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-teal mt-2 shrink-0" /><span><strong>Grid Dimensions & Shapes:</strong> Relies on a 4-column system supporting Square (2x2), Wide (4x1 / 4x2), Tall (2x4), and Small (1x2 / 2x1) tiles.</span></li>
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-teal mt-2 shrink-0" /><span><strong>Intelligent Auto-Alignment:</strong> The layout algorithm scans the grid from top-left to bottom-right, identifying the first available slot that fits the tile's exact dimensions without overlapping.</span></li>
      </ul>
    </div>

    <div>
      <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
        <Cloud className="w-5 h-5 text-purple" /> Image Handling & Architecture
      </h4>
      <p className="mb-4 text-base">The application strictly follows the <strong>MVVM (Model-View-ViewModel)</strong> architectural pattern.</p>
      <ul className="space-y-3 mb-6">
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-purple mt-2 shrink-0" /><span><strong>Upload & Optimization:</strong> Images are automatically downscaled and compressed (optimized to an 800px width) before being saved securely.</span></li>
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-purple mt-2 shrink-0" /><span><strong>Data Layer:</strong> Consists of BentoDatabase, BentoDao, and Entity classes. Provides reactive streams (Flow) of the stored collections.</span></li>
      </ul>
      <div className="flex flex-wrap gap-2 mb-2">
        {["Kotlin", "Jetpack Compose", "Material Design 3", "Room Database", "Coil", "ZoomImage", "Coroutines & StateFlow", "MVVM"].map(t => (
          <span key={t} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-foreground/[0.05] dark:bg-white/[0.06] text-foreground/80 dark:text-foreground/85 border border-foreground/10 dark:border-white/10 backdrop-blur-md hover:bg-foreground/[0.09] dark:hover:bg-white/[0.12] hover:text-foreground transition-colors">{t}</span>
        ))}
      </div>
    </div>

    <div>
      <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
        <Zap className="w-5 h-5 text-yellow-500" /> Future Improvements
      </h4>
      <ul className="space-y-3">
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 shrink-0" /><span><strong>Cloud Sync:</strong> Firebase or Google Drive integration to securely back up collections.</span></li>
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 shrink-0" /><span><strong>Drag & Drop Editing:</strong> Allow manual reordering of tiles within the grid.</span></li>
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 shrink-0" /><span><strong>Collaborative Collections:</strong> Share collections via a link for multi-user contributions.</span></li>
      </ul>
    </div>

    <div className="bg-primary/5 dark:bg-primary/[0.04] backdrop-blur-xl p-6 rounded-2xl border border-primary/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.03)]">
      <h4 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
        <Smartphone className="w-5 h-5 text-primary" /> Get the App
      </h4>
      <p className="text-base text-muted-foreground mb-6">
        Start curating beautiful bento layouts for your images and notes. Download the pre-built APK file directly to your phone, or check out the codebase on GitHub.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a href={PROJECT_LINKS.bentoGrid.apk} target="_blank" rel="noreferrer">
          <Button
            size="lg"
            className="relative overflow-hidden group/modalbtn rounded-full shadow-glow bg-primary hover:bg-primary/95 text-primary-foreground font-medium transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 hover:shadow-[0_6px_25px_rgba(59,130,246,0.4)] w-full sm:w-auto"
          >
            <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover/modalbtn:translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out" />
            <Download className="w-5 h-5 mr-2 transition-transform duration-200 group-hover/modalbtn:translate-y-0.5" /> Download APK
          </Button>
        </a>
        <a href={PROJECT_LINKS.bentoGrid.github} target="_blank" rel="noreferrer">
          <Button
            size="lg"
            variant="outline"
            className="relative rounded-full border border-border/80 dark:border-white/15 bg-secondary/30 hover:bg-primary/10 text-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 hover:shadow-[0_0_18px_rgba(59,130,246,0.2)] group/modalcode font-medium w-full sm:w-auto"
          >
            <Github className="w-5 h-5 mr-2 transition-transform duration-300 ease-out group-hover/modalcode:rotate-12 group-hover/modalcode:scale-110" /> View Source Code
          </Button>
        </a>
      </div>
    </div>
  </div>
);

const TodoAppDesc = () => (
  <div className="space-y-8 text-sm text-muted-foreground pb-6">
    <div>
      <h3 className="text-3xl font-bold text-foreground mb-4">TodoApp</h3>
      <p className="text-base leading-relaxed">
        TodoApp is a modern, feature-rich task management application designed to boost productivity. It goes beyond simple task lists by seamlessly integrating AI to refine and rewrite your tasks, voice input for hands-free data entry, and robust cloud sync to keep your projects updated across all your devices.
      </p>
    </div>

    <div className="bg-card/30 dark:bg-card/15 backdrop-blur-xl p-6 rounded-2xl border border-border/50 dark:border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
      <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-primary" /> Key Features
      </h4>
      <ul className="space-y-4 list-none">
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" /> <span><strong>Cloud Sync & Authentication:</strong> Seamlessly syncs your tasks and collections across multiple devices in real-time using Firebase. Includes offline support, robust conflict resolution, and seamless account linking via Google Sign-In.</span></li>
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" /> <span><strong>Voice-to-Text Entry:</strong> Integrated speech recognition allows you to quickly add or append text to tasks hands-free using your device's microphone.</span></li>
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" /> <span><strong>AI-Powered Task Rewriting:</strong> Utilizes the Groq API (running the <code>llama-3.3-70b-versatile</code> model) to instantly rewrite task descriptions. Users can choose between Standard, Professional, and Casual styles to match the context of their work.</span></li>
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" /> <span><strong>Dynamic Search with Highlights:</strong> Instantly filter collections and tasks from the dashboard. The application dynamically highlights matching search queries directly within the text for rapid navigation and context discovery.</span></li>
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" /> <span><strong>Organized Collections:</strong> Group tasks into overarching projects or collections. Pin high-priority collections to the top of your workspace for immediate access.</span></li>
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" /> <span><strong>Visual Progress Tracking:</strong> Get a quick overview of your productivity with multi-color progress bars that dynamically reflect the ratio of completed tasks, including specialized indicators for "Favorited" tasks.</span></li>
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" /> <span><strong>PDF Preview & Export:</strong> Preview beautifully formatted PDF documents of your task collections before seamlessly exporting them for sharing or offline tracking. Customizable settings allow you to include or exclude summaries, favorites, and task statuses.</span></li>
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" /> <span><strong>Data Backup & Restore:</strong> Safely export and backup your entire workspace (including app settings and task data) locally or securely via Google Drive integration. Import your <code>.zip</code> backups at any time to restore your state.</span></li>
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" /> <span><strong>Interactive UI/UX:</strong> Built entirely with Jetpack Compose, featuring smooth swipe-to-dismiss actions, haptic feedback, spring-physics animations, and an intuitive, modern aesthetic.</span></li>
      </ul>
    </div>

    <div>
      <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
        <Cpu className="w-5 h-5 text-primary" /> Tech Stack
      </h4>
      <div className="flex flex-wrap gap-2 mb-2">
        {["Kotlin", "Jetpack Compose", "MVVM Architecture", "Room Database", "Firebase Firestore", "Firebase Authentication", "Android Credential Manager", "WorkManager", "Retrofit", "Coroutines & Flow", "Gson"].map(t => (
          <span key={t} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-foreground/[0.05] dark:bg-white/[0.06] text-foreground/80 dark:text-foreground/85 border border-foreground/10 dark:border-white/10 backdrop-blur-md hover:bg-foreground/[0.09] dark:hover:bg-white/[0.12] hover:text-foreground transition-colors">{t}</span>
        ))}
      </div>
    </div>

    <div>
      <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
        <Layers className="w-5 h-5 text-teal" /> Architecture
      </h4>
      <p className="mb-4 text-base">This project follows the <strong>MVVM (Model-View-ViewModel)</strong> architectural pattern to ensure a clean separation of concerns and a highly testable, maintainable codebase.</p>
      <ul className="space-y-3">
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-teal mt-2 shrink-0" /><span><strong>Model:</strong> Room Database acts as the fast local source of truth (<code>TodoGroupEntity</code>), while <code>SyncManager</code> coordinates with Firebase Firestore for real-time remote syncing.</span></li>
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-teal mt-2 shrink-0" /><span><strong>ViewModel:</strong> <code>TodoViewModel</code> manages the UI state, handles business logic (like the custom Undo/Redo stack), and acts as the bridge between the UI and the local repository using Kotlin Flows.</span></li>
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-teal mt-2 shrink-0" /><span><span><strong>View:</strong> Jetpack Compose screens (<code>DashboardScreen</code>, <code>AddTodoScreen</code>) observe the ViewModel's state flows and reactively render the UI.</span></span></li>
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-teal mt-2 shrink-0" /><span><strong>Network & Background Layer:</strong> A decoupled <code>AiHelper</code> object leverages Retrofit to handle asynchronous API calls to the Groq API. <code>SyncWorker</code> and <code>SyncManager</code> use WorkManager to guarantee eventual consistency for offline edits.</span></li>
      </ul>
    </div>

    <div className="bg-primary/5 dark:bg-primary/[0.04] backdrop-blur-xl p-6 rounded-2xl border border-primary/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.03)]">
      <h4 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
        <Smartphone className="w-5 h-5 text-primary" /> Get the App
      </h4>
      <p className="text-base text-muted-foreground mb-6">
        Enhance your daily productivity with AI-driven task organization. Download the installer APK directly to your Android device, or study the source code on GitHub.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a href={PROJECT_LINKS.todoApp.apk} target="_blank" rel="noreferrer">
          <Button
            size="lg"
            className="relative overflow-hidden group/modalbtn rounded-full shadow-glow bg-primary hover:bg-primary/95 text-primary-foreground font-medium transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 hover:shadow-[0_6px_25px_rgba(59,130,246,0.4)] w-full sm:w-auto"
          >
            <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover/modalbtn:translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out" />
            <Download className="w-5 h-5 mr-2 transition-transform duration-200 group-hover/modalbtn:translate-y-0.5" /> Download APK
          </Button>
        </a>
        <a href={PROJECT_LINKS.todoApp.github} target="_blank" rel="noreferrer">
          <Button
            size="lg"
            variant="outline"
            className="relative rounded-full border border-border/80 dark:border-white/15 bg-secondary/30 hover:bg-primary/10 text-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 hover:shadow-[0_0_18px_rgba(59,130,246,0.2)] group/modalcode font-medium w-full sm:w-auto"
          >
            <Github className="w-5 h-5 mr-2 transition-transform duration-300 ease-out group-hover/modalcode:rotate-12 group-hover/modalcode:scale-110" /> View Source Code
          </Button>
        </a>
      </div>
    </div>
  </div>
);

const PhoneInfoDesc = () => (
  <div className="space-y-8 text-sm text-muted-foreground pb-6">
    <div>
      <h3 className="text-3xl font-bold text-foreground mb-4">PhoneInfo</h3>
      <p className="text-base leading-relaxed">
        PhoneInfo is a modern Android utility application designed to provide comprehensive details about your device's hardware and software. Built with a clean, glassmorphic UI using Jetpack Compose, the app surfaces real-time metrics ranging from CPU and memory usage to battery health and sensor availability. It serves as a powerful, professional-grade diagnostic tool to help you understand the exact capabilities and status of your device.
      </p>
    </div>

    <div className="bg-card/30 dark:bg-card/15 backdrop-blur-xl p-6 rounded-2xl border border-border/50 dark:border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
      <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-primary" /> Key Features
      </h4>
      <div className="space-y-4">
        <div>
          <strong className="text-foreground">Device Overview & Diagnostics</strong>
          <ul className="mt-2 space-y-2 ml-1 text-sm list-none">
            <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> <span><strong>Quick-Glance Dashboard:</strong> Real-time core metrics like RAM usage, storage, CPU name, and battery health.</span></li>
            <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> <span><strong>Advanced Hardware Diagnostics:</strong> Deep-dives into System & Identity, CPU & Memory, Camera Specs, Connectivity, Battery Analytics, and Sensors.</span></li>
          </ul>
        </div>
        <div>
          <strong className="text-foreground">App Management & Connectivity</strong>
          <ul className="mt-2 space-y-2 ml-1 text-sm list-none">
            <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> <span><strong>Application Management:</strong> Categorized app lists detailing exact storage footprints with sorting and search.</span></li>
            <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> <span><strong>Internet Speed Test:</strong> Integrated secure network speed test (via Speakeasy) directly from the Wi-Fi details.</span></li>
          </ul>
        </div>
      </div>
    </div>

    <div>
      <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
        <Database className="w-5 h-5 text-purple" /> Data Collected
      </h4>
      <ul className="space-y-3">
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-purple mt-2 shrink-0" /><span><strong>CPU & Memory:</strong> Architecture, real-time core frequencies, thermal temp, RAM availability, and VM heap allocation.</span></li>
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-purple mt-2 shrink-0" /><span><strong>Battery & Display:</strong> Health status, temperature (°C), voltage, charging source, refresh rate (Hz), and density (DPI).</span></li>
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-purple mt-2 shrink-0" /><span><strong>Network & OS:</strong> Wi-Fi SSID, link speed, cellular operator, Android version, SDK level, and build fingerprint.</span></li>
      </ul>
    </div>

    <div>
      <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
        <Layers className="w-5 h-5 text-teal" /> Architecture & Tech Stack
      </h4>
      <p className="mb-4 text-base">Engineered using a clean <strong>MVVM (Model-View-ViewModel)</strong> architecture:</p>
      <ul className="space-y-3 mb-6">
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-teal mt-2 shrink-0" /><span><strong>ViewModel:</strong> Central data engine polling hardware APIs and system files via Coroutines.</span></li>
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-teal mt-2 shrink-0" /><span><strong>State Management:</strong> Real-time background polling safely formatted into presentation-ready states via StateFlow.</span></li>
      </ul>
      <div className="flex flex-wrap gap-2 mb-2">
        {["Kotlin", "Jetpack Compose", "Navigation Compose", "MVVM", "Coroutines & StateFlow", "System APIs"].map(t => (
          <span key={t} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-foreground/[0.05] dark:bg-white/[0.06] text-foreground/80 dark:text-foreground/85 border border-foreground/10 dark:border-white/10 backdrop-blur-md hover:bg-foreground/[0.09] dark:hover:bg-white/[0.12] hover:text-foreground transition-colors">{t}</span>
        ))}
      </div>
    </div>

    <div>
      <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
        <Zap className="w-5 h-5 text-yellow-500" /> Future Improvements
      </h4>
      <ul className="space-y-3">
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 shrink-0" /><span><strong>Hardware Diagnostics Testing:</strong> Interactive modules to test screen touch accuracy, speakers, mic, and vibration.</span></li>
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 shrink-0" /><span><strong>Benchmark Metrics:</strong> Add CPU and GPU stress-testing capabilities.</span></li>
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 shrink-0" /><span><strong>Export Device Report:</strong> Ability to export the entire diagnostic report as a PDF.</span></li>
      </ul>
    </div>

    <div className="bg-primary/5 dark:bg-primary/[0.04] backdrop-blur-xl p-6 rounded-2xl border border-primary/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.03)]">
      <h4 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
        <Smartphone className="w-5 h-5 text-primary" /> Get the App
      </h4>
      <p className="text-base text-muted-foreground mb-6">
        Run instant diagnostic scans and monitor system metrics on your device. Download the pre-compiled APK directly to your phone, or view the implementation code on GitHub.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a href={PROJECT_LINKS.phoneInfo.apk} target="_blank" rel="noreferrer">
          <Button
            size="lg"
            className="relative overflow-hidden group/modalbtn rounded-full shadow-glow bg-primary hover:bg-primary/95 text-primary-foreground font-medium transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 hover:shadow-[0_6px_25px_rgba(59,130,246,0.4)] w-full sm:w-auto"
          >
            <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover/modalbtn:translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out" />
            <Download className="w-5 h-5 mr-2 transition-transform duration-200 group-hover/modalbtn:translate-y-0.5" /> Download APK
          </Button>
        </a>
        <a href={PROJECT_LINKS.phoneInfo.github} target="_blank" rel="noreferrer">
          <Button
            size="lg"
            variant="outline"
            className="relative rounded-full border border-border/80 dark:border-white/15 bg-secondary/30 hover:bg-primary/10 text-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 hover:shadow-[0_0_18px_rgba(59,130,246,0.2)] group/modalcode font-medium w-full sm:w-auto"
          >
            <Github className="w-5 h-5 mr-2 transition-transform duration-300 ease-out group-hover/modalcode:rotate-12 group-hover/modalcode:scale-110" /> View Source Code
          </Button>
        </a>
      </div>
    </div>
  </div>
);

const AiBillOptimizerDesc = () => (
  <div className="space-y-8 text-sm text-muted-foreground pb-6">
    <div>
      <h3 className="text-3xl font-bold text-foreground mb-2">AI Bill Optimizer</h3>
      <p className="text-xs text-muted-foreground mb-4 flex items-center gap-1.5">
        <GraduationCap className="w-4 h-4 text-primary shrink-0" />
        Final Year Project (FYP 2026) &mdash; Sir Syed University of Engineering and Technology (SSUET)
      </p>
      <p className="text-base leading-relaxed">
        Bridging the gap between unpredictable energy costs and consumer awareness through Seasonal Intelligence and Predictive Analytics. In Pakistan's volatile energy landscape, consumers often struggle with "bill shock" due to complex slab-based tariffs and seasonal spikes. This project serves as a sophisticated Energy Intelligence System that understands user behavior — not just tracks data.
      </p>
    </div>

    <div className="bg-card/30 dark:bg-card/15 backdrop-blur-xl p-6 rounded-2xl border border-border/50 dark:border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
      <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
        <Brain className="w-5 h-5 text-primary" /> The AI Engine: Multi-Model Intelligence
      </h4>
      <div className="space-y-5">
        <div>
          <strong className="text-foreground">1. Seasonal Bill Predictor (Long-Term)</strong>
          <p className="mt-1 mb-2 text-sm">Powered by <strong>Random Forest Regression</strong>, analyzing monthly consumption patterns against the PRECON dataset.</p>
          <ul className="mt-2 space-y-2 ml-1 text-sm list-none">
            <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> <span><strong>KNN Archetype Matching:</strong> Identifies a user's "Energy Twin" by comparing their usage signature against real-world Pakistani households.</span></li>
            <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> <span><strong>Seasonal Scaling:</strong> Dynamically adjusts appliance weights (HVAC vs. Refrigeration) based on monthly thermal coefficients for Pakistan's climate.</span></li>
            <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> <span><strong>Recency-Weighted Calibration:</strong> Exponential decay algorithm ensures lifestyle changes are reflected in predictions faster than old, irrelevant data.</span></li>
          </ul>
        </div>
        <div>
          <strong className="text-foreground">2. 24-Hour Load Forecaster (Short-Term)</strong>
          <p className="mt-1 mb-2 text-sm">Powered by a <strong>Bidirectional LSTM (Bi-LSTM)</strong> network for daily forecasting.</p>
          <ul className="mt-2 space-y-2 ml-1 text-sm list-none">
            <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> <span><strong>Sequential Learning:</strong> Analyzes the last 48 hours of usage to predict consumption spikes for the next 24 hours.</span></li>
            <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> <span><strong>Layer Normalization:</strong> Handles high variance in residential load data, providing a "Pre-Warning" before users hit peak-hour thresholds.</span></li>
          </ul>
        </div>
      </div>
    </div>

    <div>
      <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
        <Zap className="w-5 h-5 text-yellow-500" /> Key Technical Modules
      </h4>
      <ul className="space-y-3">
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 shrink-0" /><span><strong>NEPRA Tariff Engine:</strong> Custom-built logic with Slab-Logic Awareness, FPA, Quarter Tariff Adjustments, and Electricity Duty for near-100% accurate bill estimates.</span></li>
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 shrink-0" /><span><strong>Consumption Simulator:</strong> A "Digital Twin" for your home — simulate unit consumption over a custom period and stress-test individual appliances to see their immediate cost impact.</span></li>
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 shrink-0" /><span><strong>PRECON Dataset:</strong> Grounded in the first-of-its-kind Pakistani residential electricity dataset, ensuring models are culturally and geographically relevant.</span></li>
      </ul>
    </div>

    <div>
      <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
        <Layers className="w-5 h-5 text-teal" /> Architecture & Tech Stack
      </h4>
      <p className="mb-4 text-base">A decoupled, scalable architecture designed for high performance:</p>
      <ul className="space-y-3 mb-6">
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-teal mt-2 shrink-0" /><span><strong>Backend:</strong> Flask (Python) as the API gateway, orchestrating TensorFlow/Keras models and logic engines.</span></li>
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-teal mt-2 shrink-0" /><span><strong>Frontend:</strong> Premium dark-theme dashboard built with HTML5/CSS3, using Chart.js for real-time visualization of load curves.</span></li>
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-teal mt-2 shrink-0" /><span><strong>Database:</strong> Firebase Firestore for real-time cloud sync, acting as the "AI Memory" for user profiles and historical trends.</span></li>
      </ul>
      <div className="flex flex-wrap gap-2 mb-2">
        {["Python", "Flask", "TensorFlow / Keras", "Random Forest", "Bi-LSTM", "Firebase", "Chart.js", "PRECON Dataset"].map(t => (
          <span key={t} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-foreground/[0.05] dark:bg-white/[0.06] text-foreground/80 dark:text-foreground/85 border border-foreground/10 dark:border-white/10 backdrop-blur-md hover:bg-foreground/[0.09] dark:hover:bg-white/[0.12] hover:text-foreground transition-colors">{t}</span>
        ))}
      </div>
    </div>

    <div>
      <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
        <Cpu className="w-5 h-5 text-purple" /> Future Roadmap
      </h4>
      <ul className="space-y-3">
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-purple mt-2 shrink-0" /><span><strong>IoT Integration:</strong> Real-time data fetching via smart meters (ESP32/Arduino).</span></li>
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-purple mt-2 shrink-0" /><span><strong>Solar ROI Calculator:</strong> Predict savings by switching to solar based on the AI-calculated load profile.</span></li>
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-purple mt-2 shrink-0" /><span><strong>Mobile App:</strong> Expanding the mobile ecosystem for on-the-go energy management.</span></li>
      </ul>
    </div>

    <div className="bg-primary/5 dark:bg-primary/[0.04] backdrop-blur-xl p-6 rounded-2xl border border-primary/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.03)]">
      <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-primary" /> Quick User Guide
      </h4>
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li><strong>Sign In:</strong> Log in with email &amp; password or Google Sign-In.</li>
        <li><strong>Setup Profile:</strong> Enter household details (rooms, appliances) and optionally add historical bill records for better accuracy.</li>
        <li><strong>View Predictions:</strong> See your AI-generated seasonal bill estimate, Energy Twin match, and slab cost breakdown.</li>
        <li><strong>24-Hour Load Forecast:</strong> Check hourly consumption predictions to avoid peak-hour overages.</li>
        <li><strong>Simulate Appliances:</strong> Toggle appliances in the Simulator to instantly see the impact on your monthly bill.</li>
      </ol>
      <div className="mt-6 pt-6 border-t border-primary/10 flex items-center justify-center gap-4 flex-wrap">
        <a href={PROJECT_LINKS.billOptimizer.website} target="_blank" rel="noreferrer">
          <Button
            size="lg"
            className="relative overflow-hidden group/modalbtn rounded-full shadow-glow bg-primary hover:bg-primary/95 text-primary-foreground font-medium transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 hover:shadow-[0_6px_25px_rgba(59,130,246,0.4)]"
          >
            <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover/modalbtn:translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out" />
            <ExternalLink className="w-5 h-5 mr-2 transition-transform duration-200 group-hover/modalbtn:-translate-y-0.5 group-hover/modalbtn:translate-x-0.5" /> Open Website
          </Button>
        </a>
        <a href={PROJECT_LINKS.billOptimizer.github} target="_blank" rel="noreferrer">
          <Button
            size="lg"
            variant="outline"
            className="relative rounded-full border border-border/80 dark:border-white/15 bg-secondary/30 hover:bg-primary/10 text-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 hover:shadow-[0_0_18px_rgba(59,130,246,0.2)] group/modalcode font-medium"
          >
            <Github className="w-5 h-5 mr-2 transition-transform duration-300 ease-out group-hover/modalcode:rotate-12 group-hover/modalcode:scale-110" /> View Source Code
          </Button>
        </a>
      </div>
    </div>
  </div>
);

function ProjectModal({
  project,
  navDirection = 0,
  onClose,
  onNavigate
}: {
  project: any;
  navDirection?: number;
  onClose: () => void;
  onNavigate?: (dir: 'next' | 'prev') => void;
}) {
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [prevProjectTitle, setPrevProjectTitle] = useState(project?.title);

  // Synchronously reset image index and direction when project changes
  // to prevent old index bleed and aggressive jump transitions
  if (project?.title !== prevProjectTitle) {
    setPrevProjectTitle(project?.title);
    setCurrentImage(0);
    setDirection(0);
  }

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // Reset scroll when project changes
  useEffect(() => {
    const scrollableElements = document.querySelectorAll('.modal-scroll-area');
    scrollableElements.forEach(el => {
      el.scrollTop = 0;
    });
  }, [project?.title]);

  // Predictive Image Preload Algorithm:
  // Proactively loads adjacent images into the browser cache
  useEffect(() => {
    if (!project?.images || project.images.length === 0) return;
    const total = project.images.length;
    const toPreload = [
      (currentImage + 1) % total,
      (currentImage + 2) % total,
      (currentImage - 1 + total) % total,
    ];
    toPreload.forEach((idx) => {
      const img = new Image();
      img.src = project.images[idx];
    });
  }, [currentImage, project]);

  if (!project) return null;

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentImage((prev) => (prev + newDirection + project.images.length) % project.images.length);
  };

  const slideVariants: any = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : dir < 0 ? -80 : 0,
      opacity: 0,
      scale: 0.94,
      filter: "blur(4px)",
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        x: { duration: 0.42, ease: [0.16, 1, 0.3, 1] as const },
        scale: { duration: 0.42, ease: [0.16, 1, 0.3, 1] as const },
        opacity: { duration: 0.32, ease: "easeOut" },
        filter: { duration: 0.32, ease: "easeOut" },
      },
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 80 : dir > 0 ? -80 : 0,
      opacity: 0,
      scale: 0.94,
      filter: "blur(4px)",
      transition: {
        x: { duration: 0.38, ease: [0.16, 1, 0.3, 1] as const },
        scale: { duration: 0.38, ease: [0.16, 1, 0.3, 1] as const },
        opacity: { duration: 0.28, ease: "easeIn" },
        filter: { duration: 0.28, ease: "easeIn" },
      },
    }),
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/35 backdrop-blur-sm"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="modal-scroll-area relative w-full max-w-6xl h-[90vh] bg-white/20 dark:bg-slate-950/25 backdrop-blur-2xl rounded-3xl border border-white/35 dark:border-white/15 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.35),inset_0_-1px_1px_rgba(255,255,255,0.05)] overflow-y-auto md:overflow-hidden flex flex-col md:flex-row z-10"
        >
          <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
            {onNavigate && (
              <>
                <button
                  onClick={() => onNavigate('prev')}
                  className="w-10 h-10 bg-white/40 dark:bg-white/10 hover:bg-white/60 dark:hover:bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/40 dark:border-white/15 shadow-sm hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group/navprev text-foreground"
                  title="Previous Project"
                >
                  <ArrowLeft className="w-5 h-5 transition-transform duration-200 group-hover/navprev:-translate-x-0.5" />
                </button>
                <button
                  onClick={() => onNavigate('next')}
                  className="w-10 h-10 bg-white/40 dark:bg-white/10 hover:bg-white/60 dark:hover:bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/40 dark:border-white/15 shadow-sm hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group/navnext text-foreground"
                  title="Next Project"
                >
                  <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover/navnext:translate-x-0.5" />
                </button>
                <div className="w-px h-6 bg-white/20 dark:bg-white/10 mx-1" />
              </>
            )}
            <button
              onClick={onClose}
              className="w-10 h-10 bg-white/40 dark:bg-white/10 hover:bg-white/60 dark:hover:bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/40 dark:border-white/15 hover:border-rose-500/50 hover:text-rose-500 shadow-sm hover:shadow-[0_0_15px_rgba(244,63,94,0.3)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group/navclose text-foreground"
              title="Close"
            >
              <X className="w-5 h-5 transition-transform duration-200 group-hover/navclose:rotate-90" />
            </button>
          </div>

          {/* Image Slider - Pure Translucent iOS Liquid Glass Stage with Fluid Width Transition */}
          {project.images && project.images.length > 0 && (() => {
            const isLandscape = Boolean(project.landscapeImages || (project.title === "ApplyTrack" && currentImage >= 8));

            return (
              <div className={`group w-full ${isLandscape ? "md:w-[50%] lg:w-[52%]" : "md:w-[45%] lg:w-[40%]"} bg-white/10 dark:bg-white/[0.03] backdrop-blur-xl relative flex flex-col items-center justify-center p-4 sm:p-6 border-b md:border-b-0 md:border-r border-white/20 dark:border-white/10 shrink-0 min-h-[50vh] md:min-h-0 select-none overflow-hidden transition-[width] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]`}>
                <div className={`relative w-full h-[45vh] md:h-[60vh] ${isLandscape ? "max-w-xl lg:max-w-2xl px-2 sm:px-4" : "max-w-md px-2 sm:px-4"} flex items-center justify-center mx-auto`}>
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={project.title}
                      initial={{
                        opacity: 0,
                        scale: 0.94,
                        filter: "blur(6px)",
                        y: navDirection !== 0 ? 10 : 0,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        filter: "blur(0px)",
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.94,
                        filter: "blur(6px)",
                        y: navDirection !== 0 ? -10 : 0,
                      }}
                      transition={{
                        duration: 0.38,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="w-full h-full flex items-center justify-center relative"
                    >
                      <AnimatePresence initial={false} custom={direction}>
                        <motion.img
                          key={currentImage}
                          custom={direction}
                          variants={slideVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          drag="x"
                          dragConstraints={{ left: 0, right: 0 }}
                          dragElastic={0.2}
                          onDragEnd={(_e, { offset, velocity }) => {
                            const swipe = Math.abs(offset.x) * velocity.x;
                            if (offset.x < -40 || swipe < -800) {
                              paginate(1);
                            } else if (offset.x > 40 || swipe > 800) {
                              paginate(-1);
                            }
                          }}
                          src={project.images[currentImage]}
                          loading="eager"
                          fetchPriority="high"
                          decoding="async"
                          className="absolute m-auto inset-0 max-w-full max-h-full object-contain border border-white/40 dark:border-white/15 rounded-2xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.08),0_10px_20px_-3px_rgba(0,0,0,0.18),0_18px_24px_-6px_rgba(0,0,0,0.12)] dark:shadow-[0_4px_8px_-1px_rgba(0,0,0,0.35),0_12px_24px_-3px_rgba(0,0,0,0.65),0_20px_28px_-6px_rgba(0,0,0,0.45)] cursor-grab active:cursor-grabbing"
                          style={{
                            imageRendering: "high-quality" as any,
                            WebkitBackfaceVisibility: "hidden",
                            transform: "translateZ(0)",
                            willChange: "transform, opacity, filter",
                          }}
                          alt={`${project.title} - High-resolution application screenshot ${currentImage + 1} of ${project.images.length}`}
                        />
                      </AnimatePresence>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Unified Bottom Controls Bar: Prev Button, Dot Indicators, Next Button */}
                <div className="mt-4 flex items-center justify-center gap-2.5 w-full px-4 z-20">
                  <button
                    type="button"
                    className="w-8 h-8 min-w-[32px] min-h-[32px] p-0 rounded-full shadow-sm bg-white/60 hover:bg-white/90 dark:bg-slate-900/70 dark:hover:bg-slate-900/95 backdrop-blur-xl border border-white/50 dark:border-white/20 hover:border-primary/50 text-foreground hover:shadow-[0_0_12px_rgba(59,130,246,0.35)] hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center cursor-pointer"
                    onClick={() => paginate(-1)}
                    title="Previous screenshot"
                  >
                    <ChevronLeft className="w-4 h-4 transition-transform duration-200 hover:-translate-x-0.5" />
                  </button>

                  <div className="h-8 min-h-[32px] px-3.5 rounded-full bg-white/50 dark:bg-white/10 backdrop-blur-xl border border-white/40 dark:border-white/20 flex items-center gap-1.5 shadow-sm">
                    {project.images.map((_: any, i: number) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => {
                          setDirection(i > currentImage ? 1 : -1);
                          setCurrentImage(i);
                        }}
                        className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                          i === currentImage ? "w-5 bg-primary shadow-[0_0_10px_rgba(59,130,246,0.6)]" : "w-2 bg-muted-foreground/40 hover:bg-muted-foreground/70"
                        }`}
                        title={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    className="w-8 h-8 min-w-[32px] min-h-[32px] p-0 rounded-full shadow-sm bg-white/60 hover:bg-white/90 dark:bg-slate-900/70 dark:hover:bg-slate-900/95 backdrop-blur-xl border border-white/50 dark:border-white/20 hover:border-primary/50 text-foreground hover:shadow-[0_0_12px_rgba(59,130,246,0.35)] hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center cursor-pointer"
                    onClick={() => paginate(1)}
                    title="Next screenshot"
                  >
                    <ChevronRight className="w-4 h-4 transition-transform duration-200 hover:translate-x-0.5" />
                  </button>
                </div>
                <div className="mt-2 text-xs text-muted-foreground font-medium z-10">
                  {currentImage + 1} / {project.images.length}
                </div>
              </div>
            );
          })()}

          {/* Right panel: Details - Pure Translucent iOS Liquid Glass Stage with Directional Reveal */}
          <div className="modal-scroll-area relative w-full md:flex-1 p-6 md:p-10 md:overflow-y-auto bg-white/[0.05] dark:bg-white/[0.02] backdrop-blur-xl">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={project.title}
                initial={{
                  opacity: 0,
                  x: 30,
                  y: 10,
                  filter: "blur(4px)",
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  x: -30,
                  y: -10,
                  filter: "blur(4px)",
                }}
                transition={{
                  duration: 0.38,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="w-full min-h-full"
              >
                {project.longDesc ? (
                  project.longDesc
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground py-12">
                    <Code2 className="w-12 h-12 mb-4 opacity-20" />
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
                    <p>More detailed case study coming soon.</p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

function ProjectSpotlightCard({
  children,
  className = "",
  onClick,
  onMouseEnter,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
}) {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => {
        setIsHovered(true);
        if (onMouseEnter) onMouseEnter();
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: -1000, y: -1000 });
      }}
      onClick={onClick}
      className={`group relative rounded-3xl border border-border/70 dark:border-white/10 bg-card/95 dark:bg-card/50 backdrop-blur-xl transition-all duration-500 ease-out hover:-translate-y-2.5 hover:shadow-[0_28px_60px_-15px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_32px_75px_-15px_rgba(0,0,0,0.8)] hover:border-primary/50 dark:hover:border-primary/50 overflow-hidden flex flex-col ${className}`}
    >
      {/* Subtle, refined ambient arrow tracker glow (luminous clean sky/slate light, zero harsh neon purple/pink) */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: isHovered
            ? `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(56, 189, 248, 0.12), rgba(148, 163, 184, 0.05) 45%, transparent 75%)`
            : "none",
        }}
      />
      {children}
    </div>
  );
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [projectNavDir, setProjectNavDir] = useState<number>(0);

  const projects = [
    {
      title: "SmartLedger",
      tag: "Finance & AI Analytics",
      tagStyles: {
        bg: "bg-teal-500/10 dark:bg-teal-500/15",
        border: "border-teal-500/30",
        text: "text-teal-700 dark:text-teal-400",
        dot: "bg-teal-500 dark:bg-teal-400",
      },
      desc: "AI-powered Android finance tracker with smart ledger management, analytics, budgeting, and predictive insights.",
      desktopDesc: "An intelligent personal finance and ledger tracking platform built with Kotlin and Room Database. Combines dynamic single, monthly, and custom date-range ledgers with Groq API AI models for predictive seasonal expense forecasting. Features multi-receipt photo attachments, smart reminders with quick-replies, interactive financial charts, automated Google Drive backups, and a 15-day safe-deletion trash bin.",
      tech: ["Kotlin", "XML Layouts", "Room DB", "AI", "Retrofit"],
      gradient: "from-primary to-purple",
      githubLink: PROJECT_LINKS.smartLedger.github,
      apkLink: PROJECT_LINKS.smartLedger.apk,
      images: smartLedgerImages,
      longDesc: <SmartLedgerDesc />,
      coverImage: slCover,
      previewScreen: slDashboard,
      deviceType: "phone",
    },
    {
      title: "ApplyTrack",
      tag: "Career & Job Hunt Cache",
      tagStyles: {
        bg: "bg-blue-500/10 dark:bg-blue-500/15",
        border: "border-blue-500/30",
        text: "text-blue-700 dark:text-blue-400",
        dot: "bg-blue-500 dark:bg-blue-400",
      },
      desc: "Offline-first career tracker with native Android and React+Vite web clients — local-first storage, background cloud sync, attachments, and an analytics dashboard.",
      desktopDesc: "An offline-first career application tracking ecosystem featuring dual clients: a native Kotlin & Jetpack Compose Android app and a React 19 + Vite web companion. Employs local-first persistence with zero-latency Room DB reads, background cloud sync via WorkManager to Firebase Firestore, Supabase Storage for resume and letter attachments, and an interactive conversion pipeline analytics dashboard.",
      tech: ["Kotlin", "Compose", "Supabase", "Firebase", "React", "Vite", "MVVM"],
      gradient: "from-blue-500 to-teal",
      githubLink: PROJECT_LINKS.applyTrack.github,
      apkLink: PROJECT_LINKS.applyTrack.apk,
      websiteLink: PROJECT_LINKS.applyTrack.website,
      images: applyTrackImages,
      longDesc: <ApplyTrackDesc />,
      coverImage: atCover,
      previewScreen: atDashboard1,
      deviceType: "phone",
    },
    {
      title: "Bento Grid App",
      tag: "Dynamic Layouts",
      tagStyles: {
        bg: "bg-purple-500/10 dark:bg-purple-500/15",
        border: "border-purple-500/30",
        text: "text-purple-700 dark:text-purple-400",
        dot: "bg-purple-500 dark:bg-purple-400",
      },
      desc: "Modern Android app for creating highly customizable, aesthetic visual collections using a dynamic Bento-style grid system.",
      desktopDesc: "A modern Android application for curating aesthetic visual collections with a dynamic 4-column Bento grid system. Powered by an intelligent first-fit packing algorithm that auto-aligns Rectangular (Square, Tall, Wide, Small) and Clipped shapes to eliminate wasted space, featuring automated 800px image optimization, Room DB persistence, and an interactive full-screen pinch-to-zoom viewer.",
      tech: ["Kotlin", "Compose", "Room DB", "MVVM", "Coil"],
      gradient: "from-purple to-pink",
      githubLink: PROJECT_LINKS.bentoGrid.github,
      apkLink: PROJECT_LINKS.bentoGrid.apk,
      images: bentoAppImages,
      longDesc: <BentoAppDesc />,
      coverImage: bgCover,
      previewScreen: bgHome,
      deviceType: "phone",
    },
    {
      title: "AI Todo App",
      tag: "Productivity",
      tagStyles: {
        bg: "bg-indigo-500/10 dark:bg-indigo-500/15",
        border: "border-indigo-500/30",
        text: "text-indigo-700 dark:text-indigo-400",
        dot: "bg-indigo-500 dark:bg-indigo-400",
      },
      desc: "Task manager enhanced with AI-powered task rewriting and smart productivity assistance.",
      desktopDesc: "A feature-rich productivity suite combining Jetpack Compose with the Groq API (LLaMA-3.3-70B) for context-aware task rewriting across Standard, Professional, and Casual styles. Features real-time multi-device cloud synchronization via Firebase Firestore, hands-free voice-to-text input, dynamic in-line search highlighting, visual progress indicators, and custom PDF preview and export.",
      tech: ["Kotlin", "Compose", "Firebase", "MVVM", "Room DB", "Groq API"],
      gradient: "from-purple to-teal",
      githubLink: PROJECT_LINKS.todoApp.github,
      apkLink: PROJECT_LINKS.todoApp.apk,
      images: todoAppImages,
      longDesc: <TodoAppDesc />,
      coverImage: taCover,
      previewScreen: taHome,
      deviceType: "phone",
    },
    {
      title: "PhoneInfo",
      tag: "System Diagnostics",
      tagStyles: {
        bg: "bg-cyan-500/10 dark:bg-cyan-500/15",
        border: "border-cyan-500/30",
        text: "text-cyan-700 dark:text-cyan-400",
        dot: "bg-cyan-500 dark:bg-cyan-400",
      },
      desc: "Comprehensive Android utility for real-time hardware diagnostics, sensor data, and system metrics.",
      desktopDesc: "A professional-grade hardware and system diagnostics utility built with Jetpack Compose and Kotlin StateFlow. Delivers real-time monitoring of CPU core frequencies, thermal loads, RAM and VM heap allocation, battery health and charging metrics, display refresh rates, categorized app storage footprint analysis, and an integrated Speakeasy Wi-Fi speed test.",
      tech: ["Kotlin", "Compose", "StateFlow", "Hardware APIs"],
      gradient: "from-blue-600 to-indigo-800",
      githubLink: PROJECT_LINKS.phoneInfo.github,
      apkLink: PROJECT_LINKS.phoneInfo.apk,
      images: phoneInfoImages,
      longDesc: <PhoneInfoDesc />,
      coverImage: piCover,
      previewScreen: piHome,
      deviceType: "phone",
    },
    {
      title: "AI Bill Optimizer",
      tag: "Energy Intelligence · FYP",
      tagStyles: {
        bg: "bg-emerald-500/10 dark:bg-emerald-500/15",
        border: "border-emerald-500/30",
        text: "text-emerald-700 dark:text-emerald-400",
        dot: "bg-emerald-500 dark:bg-emerald-400",
      },
      desc: "AI-powered electricity bill optimizer using PRECON dataset — Seasonal bill prediction with Random Forest & 24-hour load forecasting with Bi-LSTM.",
      desktopDesc: "A Final Year Project (FYP at SSUET) energy intelligence system developed to combat Pakistan's slab tariff bill shock using the real-world PRECON residential dataset. Combines Random Forest regression with KNN 'Energy Twin' archetype matching for long-term seasonal forecasting, a Bidirectional LSTM neural network for 24-hour load forecasting, and a digital twin consumption simulator with NEPRA tariff logic.",
      tech: ["Python", "Flask", "TensorFlow", "Bi-LSTM", "Firebase"],
      gradient: "from-emerald-500 to-teal-700",
      githubLink: PROJECT_LINKS.billOptimizer.github,
      websiteLink: PROJECT_LINKS.billOptimizer.website,
      images: aiBillOptimizerImages,
      longDesc: <AiBillOptimizerDesc />,
      coverImage: aboCover,
      previewScreen: aboHome1,
      deviceType: "browser",
      landscapeImages: true,
    },
  ];

  const renderProjectActions = (p: any) => (
    <div className="flex flex-wrap items-center gap-2.5 pt-2">
      {/* Button Style 1: Primary Action (APK / Live Demo / Website) */}
      {/* Features Micro-Lift, Shimmer Sweep, and Dynamic Icon Movement */}
      {p.title === "ApplyTrack" ? (
        <>
          {p.apkLink && (
            <a
              href={p.apkLink}
              target="_blank"
              rel="noreferrer"
              onClick={() => logAnalyticsEvent("project_click", { project_title: p.title, link_type: "apk" })}
            >
              <Button
                size="sm"
                className="relative overflow-hidden group/primary rounded-full shadow-glow bg-primary hover:bg-primary/95 text-primary-foreground font-medium transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 hover:shadow-[0_4px_20px_rgba(59,130,246,0.35)]"
              >
                <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover/primary:translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out" />
                <Download className="w-3.5 h-3.5 mr-1.5 transition-transform duration-200 group-hover/primary:translate-y-0.5" /> APK
              </Button>
            </a>
          )}
          {p.websiteLink && (
            <a
              href={p.websiteLink}
              target="_blank"
              rel="noreferrer"
              onClick={() => logAnalyticsEvent("project_click", { project_title: p.title, link_type: "live_demo" })}
            >
              <Button
                size="sm"
                className="relative overflow-hidden group/primary rounded-full shadow-glow bg-primary hover:bg-primary/95 text-primary-foreground font-medium transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 hover:shadow-[0_4px_20px_rgba(59,130,246,0.35)]"
              >
                <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover/primary:translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out" />
                <ExternalLink className="w-3.5 h-3.5 mr-1.5 transition-transform duration-200 group-hover/primary:-translate-y-0.5 group-hover/primary:translate-x-0.5" /> Website
              </Button>
            </a>
          )}
        </>
      ) : (
        <>
          {p.websiteLink && (
            <a
              href={p.websiteLink}
              target="_blank"
              rel="noreferrer"
              onClick={() => logAnalyticsEvent("project_click", { project_title: p.title, link_type: "live_demo" })}
            >
              <Button
                size="sm"
                className="relative overflow-hidden group/primary rounded-full shadow-glow bg-primary hover:bg-primary/95 text-primary-foreground font-medium transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 hover:shadow-[0_4px_20px_rgba(59,130,246,0.35)]"
              >
                <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover/primary:translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out" />
                <ExternalLink className="w-3.5 h-3.5 mr-1.5 transition-transform duration-200 group-hover/primary:-translate-y-0.5 group-hover/primary:translate-x-0.5" /> Live Demo
              </Button>
            </a>
          )}
          {p.apkLink && (
            <a
              href={p.apkLink}
              target="_blank"
              rel="noreferrer"
              onClick={() => logAnalyticsEvent("project_click", { project_title: p.title, link_type: "apk" })}
            >
              <Button
                size="sm"
                className="relative overflow-hidden group/primary rounded-full shadow-glow bg-primary hover:bg-primary/95 text-primary-foreground font-medium transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 hover:shadow-[0_4px_20px_rgba(59,130,246,0.35)]"
              >
                <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover/primary:translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out" />
                <Download className="w-3.5 h-3.5 mr-1.5 transition-transform duration-200 group-hover/primary:translate-y-0.5" /> APK
              </Button>
            </a>
          )}
        </>
      )}

      {/* Button Style 2: Secondary Developer Action (Code / GitHub) */}
      {/* Features Luminous Border Glow, Micro-Lift, and GitHub Icon Tilt */}
      {p.githubLink && (
        <a
          href={p.githubLink}
          target="_blank"
          rel="noreferrer"
          onClick={() => logAnalyticsEvent("project_click", { project_title: p.title, link_type: "code" })}
        >
          <Button
            size="sm"
            variant="outline"
            className="relative rounded-full border border-border/80 dark:border-white/15 bg-secondary/30 hover:bg-primary/10 text-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] group/code font-medium"
          >
            <Github className="w-3.5 h-3.5 mr-1.5 transition-transform duration-300 ease-out group-hover/code:rotate-12 group-hover/code:scale-110" /> Code
          </Button>
        </a>
      )}

      {/* Button Style 3: Tertiary Exploration Action (Details / Deep Dive) */}
      {/* Features Framed Pill Slide, Micro-Lift, and Kinetic Arrow Spring */}
      <Button
        size="sm"
        variant="ghost"
        className="relative rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/70 dark:hover:bg-white/10 border border-transparent hover:border-border/60 dark:hover:border-white/10 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 group/details font-medium"
        onClick={() => {
          setProjectNavDir(0);
          setSelectedProject(p);
          logAnalyticsEvent("project_click", { project_title: p.title, link_type: "details" });
        }}
      >
        <span>Details</span>
        <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 ease-out group-hover/details:translate-x-1.5" />
      </Button>
    </div>
  );

  return (
    <section id="projects" className="relative py-20 sm:py-24 px-4 sm:px-6 bg-soft-gradient">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <SectionHeader
            eyebrow="Projects"
            title="Selected Work"
            subtitle="A curated showcase of high-performance mobile apps, AI integrations, and full-stack systems."
          />
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="space-y-8 sm:space-y-10"
        >
          {projects.map((p, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div key={p.title} variants={fadeUp}>
                <ProjectSpotlightCard
                  className="p-6 sm:p-8 lg:p-10"
                  onMouseEnter={() => {
                    if (p.images && p.images.length > 0) {
                      p.images.slice(0, 3).forEach((src: string) => {
                        const img = new Image();
                        img.src = src;
                      });
                    }
                  }}
                >
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Story / Details Column */}
                    <div
                      className={`lg:col-span-7 flex flex-col justify-center space-y-5 ${
                        !isEven ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${
                            p.tagStyles?.bg || "bg-primary/10"
                          } ${p.tagStyles?.text || "text-primary"} ${
                            p.tagStyles?.border || "border-primary/20"
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                              p.tagStyles?.dot || "bg-primary"
                            }`}
                          />
                          {p.tag}
                        </span>
                      </div>

                      <div>
                        <h3
                          onClick={() => {
                            setProjectNavDir(0);
                            setSelectedProject(p);
                            logAnalyticsEvent("project_click", { project_title: p.title, link_type: "details" });
                          }}
                          className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground hover:text-primary cursor-pointer transition-colors"
                        >
                          {p.title}
                        </h3>
                        {/* Mobile concise description (< lg screens) */}
                        <p className="mt-3 text-muted-foreground text-sm sm:text-base leading-relaxed lg:hidden">
                          {p.desc}
                        </p>
                        {/* Desktop rich expanded description (lg+ screens) to fill space */}
                        <p className="mt-3 text-muted-foreground text-sm lg:text-[15px] leading-relaxed hidden lg:block">
                          {p.desktopDesc || p.desc}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {p.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-full text-xs font-medium px-3 py-1 border border-foreground/10 dark:border-white/10 bg-foreground/[0.05] dark:bg-white/[0.06] text-foreground/80 dark:text-foreground/85 backdrop-blur-md"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="pt-2">
                        {renderProjectActions(p)}
                      </div>
                    </div>

                    {/* 3D Depth Visual Showcase Stage */}
                    <div
                      onClick={() => {
                        setProjectNavDir(0);
                        setSelectedProject(p);
                        logAnalyticsEvent("project_click", { project_title: p.title, link_type: "details" });
                      }}
                      className={`lg:col-span-5 relative aspect-[16/11] sm:aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-950 cursor-pointer flex items-center justify-center p-4 border border-border/60 dark:border-white/10 group-hover:shadow-2xl transition-all ${
                        !isEven ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      {/* Atmospheric Blurred Backdrop */}
                      {p.coverImage ? (
                        <img
                          src={p.coverImage}
                          alt={`${p.title} atmospheric background UI`}
                          loading="lazy"
                          decoding="async"
                          className="absolute inset-0 w-full h-full object-cover blur-sm opacity-40 scale-110 group-hover:scale-115 transition-transform duration-700 ease-out"
                        />
                      ) : (
                        <div className={`absolute inset-0 bg-gradient-to-tr ${p.gradient} opacity-20`} />
                      )}
                      <div className="absolute inset-0 bg-black/40" />

                      {/* Foreground Device Chassis */}
                      {p.deviceType === "browser" ? (
                        /* Desktop Browser Mockup for Web Apps */
                        <div className="relative z-10 w-[94%] sm:w-[90%] rounded-xl overflow-hidden shadow-2xl border border-white/20 bg-slate-950 transform group-hover:scale-105 transition-all duration-500 ease-out">
                          <div className="h-6 sm:h-7 bg-slate-900/95 px-3 flex items-center justify-between border-b border-white/10">
                            <div className="flex items-center gap-1.5">
                              <div className="w-2 h-2 rounded-full bg-rose-500/80" />
                              <div className="w-2 h-2 rounded-full bg-amber-500/80" />
                              <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
                            </div>
                            <span className="text-[10px] text-slate-400 font-mono truncate max-w-[180px]">
                              {p.title.toLowerCase().replace(/\s+/g, "-")}.web
                            </span>
                            <div className="w-6" />
                          </div>
                          <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                            <img
                              src={p.previewScreen || p.coverImage}
                              alt={`${p.title} live interface preview`}
                              loading="lazy"
                              decoding="async"
                              className="w-full h-full object-cover object-top"
                            />
                          </div>
                        </div>
                      ) : (
                        /* Sleek 3D Phone Chassis for Native Mobile Apps */
                        <div
                          className={`relative z-10 w-[140px] sm:w-[165px] md:w-[175px] aspect-[9/18.5] rounded-[2rem] p-[5px] bg-gradient-to-b from-slate-600 via-slate-800 to-slate-950 shadow-2xl border border-white/20 transform ${
                            isEven ? "-rotate-3" : "rotate-3"
                          } group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 ease-out`}
                        >
                          <div className="w-full h-full rounded-[1.7rem] overflow-hidden bg-black relative">
                            <img
                              src={p.previewScreen || p.coverImage}
                              alt={`${p.title} live mobile application preview`}
                              loading="lazy"
                              decoding="async"
                              className="w-full h-full object-cover object-top"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </ProjectSpotlightCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          navDirection={projectNavDir}
          onClose={() => {
            setSelectedProject(null);
            setProjectNavDir(0);
          }}
          onNavigate={(dir) => {
            const dirVal = dir === 'next' ? 1 : -1;
            setProjectNavDir(dirVal);
            const idx = projects.findIndex(p => p.title === selectedProject.title);
            if (dir === 'next') setSelectedProject(projects[(idx + 1) % projects.length]);
            else setSelectedProject(projects[(idx - 1 + projects.length) % projects.length]);
          }}
        />
      )}
    </section>
  );
}

function Experience() {
  const items = [
    {
      type: "work", logo: anasLogo, title: "Flutter Developer Intern",
      org: "ANAS Technologies", date: "Sept 2026 – Present",
      location: undefined,
      points: [
        "Developing cross-platform mobile applications using Flutter framework and Dart programming language",
        "Designing and implementing responsive, modern mobile UIs adhering to best UI/UX practices",
        "Integrating RESTful APIs and Firebase backend services for authentication, database, and real-time features",
        "Implementing clean architecture and robust state management for scalable mobile apps",
        "Collaborating on real-world mobile app features, debugging, and continuous performance optimization",
      ],
    },
    {
      type: "work", logo: gitxolLogo, title: "Web Development Intern",
      org: "GitXol", date: "June 2026 – Present",
      location: undefined,
      points: [
        "Assisted in website development and UI improvements using modern web technologies",
        "Worked with Google Search Console to improve website indexing and search visibility",
        "Learned and implemented SEO best practices, including sitemap generation and optimization",
        "Contributed to content updates, page design improvements, and frontend development tasks",
        "Collaborated with the development team to enhance website performance and user experience",
      ],
    },
    {
      type: "cert", logo: ibmLogo, title: "IBM iOS and Android Mobile App Developer",
      org: "IBM · Coursera Professional Certificate", date: "August 2026",
      location: undefined,
      points: [
        "Completed professional specialization covering native and cross-platform mobile app development",
        "Built and deployed applications across Android (Kotlin/Java), iOS (Swift), Flutter & Dart, and React Native",
        "Applied Generative AI techniques and prompt engineering to accelerate mobile development workflows and code quality",
        "Implemented end-to-end SDLC workflows, responsive web interfaces with React, modern UI/UX design, and Git/GitHub",
        "Gained hands-on proficiency in mobile app databases, push notifications, API integration, and app publishing",
      ],
      certificateUrl: "https://www.coursera.org/account/accomplishments/specialization/D2BYZFQ9ADK7",
    },
    {
      type: "edu", logo: ssuetLogo, title: "Bachelor of Science in Software Engineering",
      org: "Sir Syed University of Engineering & Technology, Karachi", date: "Oct 2022 – July 2026",
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
                key={`${it.title}-${it.org}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-20"
              >
                <div className="absolute left-0 top-2 w-12 h-12 rounded-2xl bg-white p-2 flex items-center justify-center shadow-card border border-border/40 overflow-hidden ring-2 ring-primary/20">
                  <img
                    src={it.logo}
                    alt={`${it.org} organization logo`}
                    loading="lazy"
                    decoding="async"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
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
                  {it.certificateUrl && (
                    <div className="mt-4 pt-1">
                      <a
                        href={it.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex"
                      >
                        <Button size="sm" variant="outline" className="rounded-full gap-1.5 text-xs font-medium hover:text-primary hover:border-primary">
                          View Certificate <ExternalLink className="w-3.5 h-3.5" />
                        </Button>
                      </a>
                    </div>
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
      logAnalyticsEvent("contact_form_submit", { status: "success" });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error(error);
      logAnalyticsEvent("contact_form_submit", { status: "failed", error: error instanceof Error ? error.message : String(error) });
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const cards = [
    { icon: Mail, label: "Email", value: "unarmudasir@gmail.com", href: "mailto:unarmudasir@gmail.com" },
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
          <div className="font-display font-bold text-lg"><span className="text-gradient">Mudasir</span>.tech</div>
          <p className="text-sm text-muted-foreground mt-1">Engineering high-performance mobile & web solutions.</p>
        </div>
        <div className="flex items-center gap-2">
          {[
            { icon: Github, href: "https://github.com/mudasirunar" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/mudasir-ali-442196261" },
            { icon: Mail, href: "mailto:unarmudasir@gmail.com" },
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
