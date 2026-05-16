import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github, Linkedin, Mail, Phone, Download, ArrowRight, ArrowLeft, Code2, Smartphone,
  Database, Cloud, Cpu, Layers, GitBranch, Sparkles, Briefcase, GraduationCap,
  Palette, Zap, Brain, Send, MapPin, Bug, TestTube, X, ChevronLeft, ChevronRight, ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import profileImg from "@/assets/profile.jpeg";
import { generateAndDownloadResume } from "@/lib/generateResume";

import slCover from "@/assets/smartledger/cover.jpeg";
import slDashboard from "@/assets/smartledger/dashboard.jpg";
import slDashboard2 from "@/assets/smartledger/dashboard_2.jpg";
import slCreate1 from "@/assets/smartledger/create_new_ledger_step1.jpg";
import slCreate2 from "@/assets/smartledger/create_new_ledger_step2.jpg";
import slCreate3 from "@/assets/smartledger/create_new_ledger_step3.jpg";
import slMilk from "@/assets/smartledger/milk_record_screen.jpg";
import slAddElec from "@/assets/smartledger/add_electricty_record_screen.jpg";
import slElec from "@/assets/smartledger/electricity_record_screen.jpg";
import slViewElec from "@/assets/smartledger/view_electricity_screen.jpg";
import slViewExp from "@/assets/smartledger/view_expense_screen.jpg";
import slAna1 from "@/assets/smartledger/analytics_screen.jpg";
import slAna2 from "@/assets/smartledger/analytic_screen_2.jpg";
import slAi from "@/assets/smartledger/ai_insigth_and_prediction.jpg";
import slRestore from "@/assets/smartledger/restore_done_dialog.jpg";
import slBackup from "@/assets/smartledger/backup_options_dialog.jpg";

import waCover from "@/assets/weatherapp/cover.jpeg";
import waScreen1 from "@/assets/weatherapp/screen_1.png";
import waScreen2 from "@/assets/weatherapp/screen_2.png";
import waSearchScreen from "@/assets/weatherapp/search_screen.png";

import bgCover from "@/assets/bentoapp/cover.jpeg";
import bgHome from "@/assets/bentoapp/home_screen.jpg";
import bgAddDialog from "@/assets/bentoapp/add_collection_dialog.jpg";
import bgCustomize1 from "@/assets/bentoapp/customize_tile_screen.jpg";
import bgCustomize2 from "@/assets/bentoapp/customize_tile_screen_2.jpeg";
import bgCollection from "@/assets/bentoapp/collection_screen.jpg";
import bgImageViewer from "@/assets/bentoapp/image_viewer_overlay.jpg";

import taCover from "@/assets/todoapp/cover.jpeg";
import taHome from "@/assets/todoapp/home_screen.png";
import taTasks from "@/assets/todoapp/tasks_screen.png";
import taSearchHighlight from "@/assets/todoapp/search_highligth.png";
import taAiRewrite from "@/assets/todoapp/ai_rewrite_styling_dialog.png";
import taVoiceInput from "@/assets/todoapp/voice_input_bottom_sheet.png";
import taPdfPreview from "@/assets/todoapp/pdf_preview_screen.png";

import piCover from "@/assets/phoneinfo/cover.jpeg";
import piHome from "@/assets/phoneinfo/home_screen.png";
import piAdvance1 from "@/assets/phoneinfo/advance_detail_screen.png";
import piApps from "@/assets/phoneinfo/apps_screen.png";
import piAdvance2 from "@/assets/phoneinfo/advance_detail_screen_2.png";

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

const weatherAppImages = [
  waScreen1,
  waScreen2,
  waSearchScreen
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
  slRestore,
  slBackup
];

import aboCover from "@/assets/aibilloptimizer/cover.jpeg";
import aboLogin from "@/assets/aibilloptimizer/login_page.png";
import aboHome1 from "@/assets/aibilloptimizer/home_screen.png";
import aboHome2 from "@/assets/aibilloptimizer/home_screen_2.png";
import aboSetup from "@/assets/aibilloptimizer/setup_profile.png";
import aboPred1 from "@/assets/aibilloptimizer/prediction_screen_1.png";
import aboPred2 from "@/assets/aibilloptimizer/prediction_screen_2.png";
import aboLoad1 from "@/assets/aibilloptimizer/load_forecaster_screen_1.png";
import aboLoad2 from "@/assets/aibilloptimizer/load_forecaster_screen_2.png";
import aboNepra from "@/assets/aibilloptimizer/nepra_tarif_screen.png";
import aboSim from "@/assets/aibilloptimizer/simulator_screen.png";

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

    <div className="bg-muted/30 p-6 rounded-2xl border border-border/50">
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
          <Badge key={t} variant="secondary" className="px-3 py-1 text-xs">{t}</Badge>
        ))}
      </div>
    </div>

    <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
      <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
        <Download className="w-5 h-5 text-primary" /> Installation Steps
      </h4>
      <ol className="list-decimal list-inside space-y-2 text-base">
        <li><strong>Clone the Repository:</strong> <code className="bg-background px-2 py-1 rounded border text-xs ml-1">git clone https://github.com/mudasirunar/SmartLedger.git</code></li>
        <li><strong>Open in Android Studio:</strong> Launch and select Open an existing project.</li>
        <li><strong>Configure API Key:</strong> Create a <code>local.properties</code> file in the root and add: <code className="bg-background px-2 py-1 rounded border text-xs block mt-1 w-fit">GROQ_API_KEY="YOUR_KEY"</code></li>
        <li><strong>Sync Project:</strong> Download all necessary dependencies.</li>
        <li><strong>Run the App:</strong> Select emulator or physical device.</li>
      </ol>
      <div className="mt-6 pt-6 border-t border-primary/10 flex flex-wrap justify-center gap-4">
        <a href="https://github.com/mudasirunar/SmartLedger/releases/tag/v1.2" target="_blank" rel="noreferrer">
          <Button size="lg" className="rounded-full shadow-glow bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
            <Download className="w-5 h-5 mr-2" /> Download APK
          </Button>
        </a>
        <a href="https://github.com/mudasirunar/SmartLedger" target="_blank" rel="noreferrer">
          <Button size="lg" variant="outline" className="rounded-full w-full sm:w-auto">
            <Github className="w-5 h-5 mr-2" /> View Source Code
          </Button>
        </a>
      </div>
    </div>
  </div>
);

const WeatherAppDesc = () => (
  <div className="space-y-8 text-sm text-muted-foreground pb-6">
    <div>
      <h3 className="text-3xl font-bold text-foreground mb-4">WeatherApp</h3>
      <p className="text-base leading-relaxed">
        WeatherApp is a feature-rich Android application designed to deliver accurate, real-time weather data and 24-hour forecasts. Built with a focus on seamless user experience, the app dynamically changes its visual appearance based on the current weather conditions.
      </p>
      <p className="text-base leading-relaxed mt-3">
        It leverages the OpenWeather API for robust data fetching and integrates device location services to automatically display local weather information, while also allowing users to search and save their favorite cities globally.
      </p>
    </div>

    <div className="bg-muted/30 p-6 rounded-2xl border border-border/50">
      <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-primary" /> Key Features
      </h4>
      <ul className="space-y-3 list-none">
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" /> <span><strong>Real-Time Weather:</strong> Instant access to current temperature, "feels like", humidity, wind speed, visibility, and barometric pressure.</span></li>
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" /> <span><strong>24-Hour Forecast:</strong> Detailed hourly predictions to help plan your day, including temperature variances and expected peaks.</span></li>
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" /> <span><strong>Solar Metrics:</strong> Accurate sunrise and sunset times dynamically adjusted to the local timezone.</span></li>
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" /> <span><strong>Auto-Detect Location:</strong> Automatically fetches your current location's weather using GPS and Fused Location Provider.</span></li>
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" /> <span><strong>Global City Search:</strong> Find weather data for any city worldwide using the integrated geocoding search.</span></li>
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" /> <span><strong>Dynamic Animated Backgrounds:</strong> Custom Canvas-based animations for Clear, Cloudy, Rain, Snow, Thunderstorm, Mist, and Smoke.</span></li>
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" /> <span><strong>Save Favorite Cities:</strong> Persist your favorite searched locations locally for quick access using a swipeable pager interface.</span></li>
      </ul>
    </div>

    <div>
      <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
        <Cloud className="w-5 h-5 text-purple" /> API Integration & Location
      </h4>
      <p className="mb-4 text-base">Powered by the <strong>OpenWeather API</strong> and <strong>Google Play Services Location</strong>:</p>
      <ul className="space-y-3">
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-purple mt-2 shrink-0" /><span><strong>Robust Fetching:</strong> Uses Current Weather, 5-Day/3-Hour Forecast, and Geocoding APIs via Retrofit with graceful error handling.</span></li>
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-purple mt-2 shrink-0" /><span><strong>Battery Efficient:</strong> Fetches highly accurate coordinate data using Fused Location Provider with minimal battery drain.</span></li>
        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-purple mt-2 shrink-0" /><span><strong>Dynamic Permissions:</strong> Prompts users for location access gracefully with fallback manual search functionality.</span></li>
      </ul>
    </div>

    <div>
      <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
        <Layers className="w-5 h-5 text-teal" /> Architecture & Tech Stack
      </h4>
      <p className="mb-4 text-base">The project strictly adheres to the <strong>MVVM (Model-View-ViewModel)</strong> architectural pattern, ensuring a clean separation of concerns.</p>
      <div className="flex flex-wrap gap-2 mb-2">
        {["Kotlin", "Jetpack Compose", "Material Design 3", "Coroutines & StateFlow", "Retrofit2 & Gson", "Room Database", "FusedLocationProviderClient", "ViewModel"].map(t => (
          <Badge key={t} variant="secondary" className="px-3 py-1 text-xs">{t}</Badge>
        ))}
      </div>
    </div>

    <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
      <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
        <Download className="w-5 h-5 text-primary" /> Installation Steps
      </h4>
      <ol className="list-decimal list-inside space-y-2 text-base">
        <li><strong>Clone the Repository:</strong> <code className="bg-background px-2 py-1 rounded border text-xs ml-1">git clone https://github.com/mudasirunar/WeatherApp.git</code></li>
        <li><strong>Open in Android Studio:</strong> Launch and select Open an existing project.</li>
        <li><strong>API Key Configuration:</strong> Get a free API key from OpenWeatherMap and replace the placeholder key.</li>
        <li><strong>Build and Run:</strong> Sync Gradle and run the app.</li>
      </ol>
      <div className="mt-6 pt-6 border-t border-primary/10 flex flex-wrap justify-center gap-4">
        <a href="https://github.com/mudasirunar/WeatherApp/releases/tag/v1.0" target="_blank" rel="noreferrer">
          <Button size="lg" className="rounded-full shadow-glow bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
            <Download className="w-5 h-5 mr-2" /> Download APK
          </Button>
        </a>
        <a href="https://github.com/mudasirunar/WeatherApp" target="_blank" rel="noreferrer">
          <Button size="lg" variant="outline" className="rounded-full w-full sm:w-auto">
            <Github className="w-5 h-5 mr-2" /> View Source Code
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

    <div className="bg-muted/30 p-6 rounded-2xl border border-border/50">
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
          <Badge key={t} variant="secondary" className="px-3 py-1 text-xs">{t}</Badge>
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

    <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
      <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
        <Download className="w-5 h-5 text-primary" /> Installation Steps
      </h4>
      <ol className="list-decimal list-inside space-y-2 text-base">
        <li><strong>Clone the Repository:</strong> <code className="bg-background px-2 py-1 rounded border text-xs ml-1">git clone https://github.com/mudasirunar/BentoGridApp.git</code></li>
        <li><strong>Open in Android Studio:</strong> Select File {'>'} Open, and navigate to the cloned directory.</li>
        <li><strong>Sync Gradle:</strong> Download all necessary dependencies.</li>
        <li><strong>Run the App:</strong> Connect an Android device or emulator and run.</li>
      </ol>
      <div className="mt-6 pt-6 border-t border-primary/10 flex flex-wrap justify-center gap-4">
        <a href="https://github.com/mudasirunar/BentoGridApp/releases/tag/v1.0" target="_blank" rel="noreferrer">
          <Button size="lg" className="rounded-full shadow-glow bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
            <Download className="w-5 h-5 mr-2" /> Download APK
          </Button>
        </a>
        <a href="https://github.com/mudasirunar/BentoGridApp" target="_blank" rel="noreferrer">
          <Button size="lg" variant="outline" className="rounded-full w-full sm:w-auto">
            <Github className="w-5 h-5 mr-2" /> View Source Code
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

    <div className="bg-muted/30 p-6 rounded-2xl border border-border/50">
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
          <Badge key={t} variant="secondary" className="px-3 py-1 text-xs">{t}</Badge>
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

    <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
      <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
        <Download className="w-5 h-5 text-primary" /> Installation Steps
      </h4>
      <ol className="list-decimal list-inside space-y-3 text-base">
        <li><strong>Clone the Repository:</strong> <code className="bg-background px-2 py-1 rounded border text-xs ml-1">git clone https://github.com/mudasirunar/TodoApp.git</code></li>
        <li><strong>Open in Android Studio:</strong> Select <strong>File &gt; Open</strong> and navigate to the cloned directory.</li>
        <li><strong>Configure API Keys &amp; Firebase:</strong>
          <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-sm">
            <li>Add your Groq API key to <code>local.properties</code>: <code className="bg-background px-2 py-1 rounded border text-xs block mt-1 w-fit">GROQ_API_KEY="your_api_key_here"</code></li>
            <li>Place your <code>google-services.json</code> in the <code>app/</code> directory after setting up Firebase.</li>
          </ul>
        </li>
        <li><strong>Run the App:</strong> Connect an Android device or emulator and click <strong>Run</strong>.</li>
      </ol>
      <div className="mt-8 pt-6 border-t border-primary/10 flex flex-wrap justify-center gap-4">
        <a href="https://github.com/mudasirunar/TodoApp/releases/tag/v2.0" target="_blank" rel="noreferrer">
          <Button size="lg" className="rounded-full shadow-glow bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
            <Download className="w-5 h-5 mr-2" /> Download APK
          </Button>
        </a>
        <a href="https://github.com/mudasirunar/TodoApp" target="_blank" rel="noreferrer">
          <Button size="lg" variant="outline" className="rounded-full w-full sm:w-auto">
            <Github className="w-5 h-5 mr-2" /> View Source Code
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

    <div className="bg-muted/30 p-6 rounded-2xl border border-border/50">
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
          <Badge key={t} variant="secondary" className="px-3 py-1 text-xs">{t}</Badge>
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

    <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
      <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
        <Download className="w-5 h-5 text-primary" /> Installation Steps
      </h4>
      <ol className="list-decimal list-inside space-y-2 text-base">
        <li><strong>Clone the Repository:</strong> <code className="bg-background px-2 py-1 rounded border text-xs ml-1">git clone https://github.com/mudasirunar/PhoneInfo.git</code></li>
        <li><strong>Open in Android Studio:</strong> Select File {'>'} Open, and navigate to the cloned directory.</li>
        <li><strong>Run the App:</strong> Connect an Android device or emulator and run. Grant requested permissions for full diagnostic details.</li>
      </ol>
      <div className="mt-6 pt-6 border-t border-primary/10 flex flex-wrap justify-center gap-4">
        <a href="https://github.com/mudasirunar/PhoneInfo/releases/tag/v1.0" target="_blank" rel="noreferrer">
          <Button size="lg" className="rounded-full shadow-glow bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
            <Download className="w-5 h-5 mr-2" /> Download APK
          </Button>
        </a>
        <a href="https://github.com/mudasirunar/PhoneInfo" target="_blank" rel="noreferrer">
          <Button size="lg" variant="outline" className="rounded-full w-full sm:w-auto">
            <Github className="w-5 h-5 mr-2" /> View Source Code
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

    <div className="bg-muted/30 p-6 rounded-2xl border border-border/50">
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
          <Badge key={t} variant="secondary" className="px-3 py-1 text-xs">{t}</Badge>
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

    <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
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
        <a href="https://bill-optimizer.vercel.app/" target="_blank" rel="noreferrer">
          <Button size="lg" className="rounded-full shadow-glow bg-primary hover:bg-primary/90 text-primary-foreground">
            <ExternalLink className="w-5 h-5 mr-2" /> Open Website
          </Button>
        </a>
        <a href="https://github.com/mudasirunar/bill-optimizer" target="_blank" rel="noreferrer">
          <Button size="lg" variant="outline" className="rounded-full">
            <Github className="w-5 h-5 mr-2" /> View Source Code
          </Button>
        </a>
      </div>
    </div>
  </div>
);

function ProjectModal({ project, onClose, onNavigate }: { project: any, onClose: () => void, onNavigate?: (dir: 'next' | 'prev') => void }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // Reset scroll and image index when project changes
  useEffect(() => {
    setCurrentImage(0);
    const scrollableElements = document.querySelectorAll('.modal-scroll-area');
    scrollableElements.forEach(el => {
      el.scrollTop = 0;
    });
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="modal-scroll-area relative w-full max-w-6xl h-[90vh] glass shadow-card rounded-3xl overflow-y-auto md:overflow-hidden flex flex-col md:flex-row z-10"
        >
          <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
            {onNavigate && (
              <>
                <button
                  onClick={() => onNavigate('prev')}
                  className="w-10 h-10 bg-background/50 backdrop-blur rounded-full flex items-center justify-center hover:bg-background transition-colors border shadow-sm text-foreground"
                  title="Previous Project"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => onNavigate('next')}
                  className="w-10 h-10 bg-background/50 backdrop-blur rounded-full flex items-center justify-center hover:bg-background transition-colors border shadow-sm text-foreground"
                  title="Next Project"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
                <div className="w-px h-6 bg-border mx-1" />
              </>
            )}
            <button
              onClick={onClose}
              className="w-10 h-10 bg-background/50 backdrop-blur rounded-full flex items-center justify-center hover:bg-background transition-colors border shadow-sm"
              title="Close"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>
          </div>

          {/* Image Slider - portrait (phone) or landscape (web app) */}
          {project.images && project.images.length > 0 && (
            project.landscapeImages ? (
              // Wider side-panel for landscape/web app screenshots
              <div className="group w-full md:w-[50%] lg:w-[50%] bg-muted/20 relative flex flex-col items-center justify-center p-5 border-b md:border-b-0 md:border-r shrink-0 min-h-[50vh] md:min-h-0">
                <div className="relative w-full h-[45vh] md:h-[60vh] flex items-center justify-center mx-auto">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImage}
                      src={project.images[currentImage]}
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.97 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 m-auto max-w-full max-h-full w-full object-contain rounded-xl border border-border/60 shadow-lg bg-background"
                      alt={`${project.title} screenshot ${currentImage + 1}`}
                    />
                  </AnimatePresence>
                </div>

                <div className="absolute inset-y-0 left-0 flex items-center justify-start pl-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:transition-opacity md:duration-200">
                  <Button variant="outline" size="icon" className="rounded-full shadow-md bg-background/80 backdrop-blur w-9 h-9 border-border/50 text-foreground" onClick={() => setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length)}>
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center justify-end pr-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:transition-opacity md:duration-200">
                  <Button variant="outline" size="icon" className="rounded-full shadow-md bg-background/80 backdrop-blur w-9 h-9 border-border/50 text-foreground" onClick={() => setCurrentImage((prev) => (prev + 1) % project.images.length)}>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>

                <div className="mt-4 flex flex-wrap justify-center gap-2 w-full px-4">
                  {project.images.map((_: any, i: number) => (
                    <button key={i} onClick={() => setCurrentImage(i)} className={`h-1.5 rounded-full transition-all duration-300 ${i === currentImage ? "w-5 bg-primary" : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"}`} />
                  ))}
                </div>
                <div className="mt-2 text-xs text-muted-foreground font-medium">
                  {currentImage + 1} / {project.images.length}
                </div>
              </div>
            ) : (
              // Portrait layout: side panel for phone screenshots
              <div className="group w-full md:w-[45%] lg:w-[40%] bg-muted/20 relative flex flex-col items-center justify-center p-6 border-b md:border-b-0 md:border-r shrink-0 min-h-[50vh] md:min-h-0">
                <div className="relative w-full h-[45vh] md:h-[60vh] max-w-md flex items-center justify-center mx-auto">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImage}
                      src={project.images[currentImage]}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute m-auto inset-0 max-w-full max-h-full object-contain border border-border/60 shadow-lg rounded-xl bg-background"
                      alt={`${project.title} screenshot ${currentImage + 1}`}
                    />
                  </AnimatePresence>
                </div>

                <div className="absolute inset-y-0 left-0 flex items-center justify-start pl-2 md:pl-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:transition-opacity md:duration-200">
                  <Button variant="outline" size="icon" className="rounded-full shadow-md bg-background/80 backdrop-blur w-10 h-10 border-border/50 text-foreground" onClick={() => setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length)}>
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center justify-end pr-2 md:pr-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:transition-opacity md:duration-200">
                  <Button variant="outline" size="icon" className="rounded-full shadow-md bg-background/80 backdrop-blur w-10 h-10 border-border/50 text-foreground" onClick={() => setCurrentImage((prev) => (prev + 1) % project.images.length)}>
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>

                <div className="mt-8 flex flex-wrap justify-center gap-2 w-full px-4">
                  {project.images.map((_: any, i: number) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImage(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${i === currentImage ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"}`}
                    />
                  ))}
                </div>
                <div className="mt-3 text-xs text-muted-foreground font-medium">
                  {currentImage + 1} / {project.images.length}
                </div>
              </div>
            )
          )}

          {/* Right panel: Details */}
          <div className="modal-scroll-area w-full md:flex-1 p-6 md:p-10 md:overflow-y-auto">
            {project.longDesc ? (
              project.longDesc
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground py-12">
                <Code2 className="w-12 h-12 mb-4 opacity-20" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
                <p>More detailed case study coming soon.</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      title: "SmartLedger",
      tag: "Finance & AI Analytics",
      desc: "AI-powered Android finance tracker with smart ledger management, analytics, budgeting, and predictive insights.",
      tech: ["Kotlin", "XML Layouts", "Room DB", "AI", "Retrofit"],
      gradient: "from-primary to-purple",
      githubLink: "https://github.com/mudasirunar/SmartLedger",
      apkLink: "https://github.com/mudasirunar/SmartLedger/releases/tag/v1.2",
      images: smartLedgerImages,
      longDesc: <SmartLedgerDesc />,
      coverImage: slCover,
    },
    {
      title: "Bento Grid App",
      tag: "Dynamic Layouts",
      desc: "Modern Android app for creating highly customizable, aesthetic visual collections using a dynamic Bento-style grid system.",
      tech: ["Kotlin", "Compose", "Room DB", "MVVM", "Coil"],
      gradient: "from-purple to-pink",
      githubLink: "https://github.com/mudasirunar/BentoGridApp",
      apkLink: "https://github.com/mudasirunar/BentoGridApp/releases/tag/v1.0",
      images: bentoAppImages,
      longDesc: <BentoAppDesc />,
      coverImage: bgCover,
    },
    {
      title: "AI Todo App",
      tag: "Productivity",
      desc: "Task manager enhanced with AI-powered task rewriting and smart productivity assistance.",
      tech: ["Kotlin", "Compose", "Firebase", "MVVM", "Room DB", "Groq API"],
      gradient: "from-purple to-teal",
      githubLink: "https://github.com/mudasirunar/TodoApp",
      apkLink: "https://github.com/mudasirunar/TodoApp/releases/tag/v1.1.1",
      images: todoAppImages,
      longDesc: <TodoAppDesc />,
      coverImage: taCover,
    },
    {
      title: "PhoneInfo",
      tag: "System Diagnostics",
      desc: "Comprehensive Android utility for real-time hardware diagnostics, sensor data, and system metrics.",
      tech: ["Kotlin", "Compose", "StateFlow", "Hardware APIs"],
      gradient: "from-blue-600 to-indigo-800",
      githubLink: "https://github.com/mudasirunar/PhoneInfo",
      apkLink: "https://github.com/mudasirunar/PhoneInfo/releases/tag/v1.0",
      images: phoneInfoImages,
      longDesc: <PhoneInfoDesc />,
      coverImage: piCover,
    },
    {
      title: "WeatherApp",
      tag: "Weather Forecasting",
      desc: "Real-time weather forecasts powered by OpenWeather API with dynamic UI updates and location tracking.",
      tech: ["Kotlin", "Compose", "MVVM", "Room DB", "Retrofit", "OpenWeather API"],
      gradient: "from-teal to-primary",
      githubLink: "https://github.com/mudasirunar/WeatherApp",
      apkLink: "https://github.com/mudasirunar/WeatherApp/releases/tag/v1.0",
      images: weatherAppImages,
      longDesc: <WeatherAppDesc />,
      coverImage: waCover,
    },
    {
      title: "AI Bill Optimizer",
      tag: "Energy Intelligence · FYP",
      desc: "AI-powered electricity bill optimizer using PRECON dataset — Seasonal bill prediction with Random Forest & 24-hour load forecasting with Bi-LSTM.",
      tech: ["Python", "Flask", "TensorFlow", "Bi-LSTM", "Firebase"],
      gradient: "from-yellow-500 to-orange-600",
      githubLink: "https://github.com/mudasirunar/bill-optimizer",
      websiteLink: "https://bill-optimizer.vercel.app/",
      images: aiBillOptimizerImages,
      longDesc: <AiBillOptimizerDesc />,
      coverImage: aboCover,
      landscapeImages: true,
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
                <div
                  className={`relative h-48 overflow-hidden cursor-pointer ${p.coverImage ? 'bg-black' : 'bg-gradient-to-br ' + p.gradient}`}
                  onClick={() => setSelectedProject(p)}
                >
                  {p.coverImage ? (
                    <>
                      <img
                        src={p.coverImage}
                        alt={p.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        style={{
                          imageRendering: 'high-quality' as any,
                          WebkitBackfaceVisibility: 'hidden',
                          transform: 'translateZ(0)',
                          willChange: 'transform'
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 opacity-30" style={{
                        backgroundImage: "radial-gradient(circle at 30% 30%, white 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                      }} />
                      <Smartphone className="absolute top-6 right-6 w-10 h-10 text-white/40 group-hover:scale-110 transition-transform" />
                    </>
                  )}
                  <div className="absolute bottom-4 right-6 text-white z-10 text-right">
                    <div className="text-xs uppercase tracking-wider opacity-90">{p.tag}</div>
                    <div className="text-2xl font-bold mt-1">{p.title}</div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <Badge key={t} variant="secondary" className="rounded-full text-xs">{t}</Badge>
                    ))}
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.websiteLink && (
                      <a href={p.websiteLink} target="_blank" rel="noreferrer">
                        <Button size="sm" className="rounded-full shadow-glow bg-primary hover:bg-primary/90 text-primary-foreground"><ExternalLink className="w-3.5 h-3.5 mr-1" /> Live Demo</Button>
                      </a>
                    )}
                    {p.apkLink && (
                      <a href={p.apkLink} target="_blank" rel="noreferrer">
                        <Button size="sm" className="rounded-full shadow-glow bg-primary hover:bg-primary/90 text-primary-foreground"><Download className="w-3.5 h-3.5 mr-1" /> APK</Button>
                      </a>
                    )}
                    {p.githubLink && (
                      <a href={p.githubLink} target="_blank" rel="noreferrer">
                        <Button size="sm" variant="outline" className="rounded-full"><Github className="w-3.5 h-3.5 mr-1" /> Code</Button>
                      </a>
                    )}
                    <Button size="sm" variant="ghost" className="rounded-full" onClick={() => setSelectedProject(p)}>Details <ArrowRight className="w-3.5 h-3.5 ml-1" /></Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onNavigate={(dir) => {
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
          <p className="text-sm text-muted-foreground mt-1">Building the future, one Android app at a time.</p>
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
