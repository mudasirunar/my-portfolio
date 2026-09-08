import { jsPDF } from "jspdf";
import "jspdf-autotable";

export const generateAndDownloadResume = () => {
  const doc = new jsPDF();
  let currentY = 16;

  // --- Utility functions ---
  const addSectionHeader = (title: string) => {
    currentY += 4;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(0);
    doc.text(title.toUpperCase(), 15, currentY);
    currentY += 1.6;
    doc.setLineWidth(0.4);
    doc.setDrawColor(200); // Light gray line
    doc.line(15, currentY, 195, currentY);
    currentY += 3.8;
    doc.setFont("helvetica", "normal");
  };

  // --- Header ---
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.setTextColor(33, 37, 41);
  doc.text("MUDASIR ALI", 105, currentY, { align: "center" });

  currentY += 5.5;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(73, 80, 87);
  doc.text("Software Engineer | Mobile Developer", 105, currentY, { align: "center" });

  currentY += 4.8;
  doc.setFontSize(9.2);
  doc.text("Saadi Town, Karachi  |  +92 326 8920883  |  unarmudasir@gmail.com", 105, currentY, { align: "center" });

  currentY += 4;
  doc.setTextColor(59, 130, 246);
  doc.textWithLink("https://github.com/mudasirunar", 100, currentY, { url: "https://github.com/mudasirunar", align: "right" });
  doc.setTextColor(73, 80, 87);
  doc.text(" | ", 105, currentY, { align: "center" });
  doc.setTextColor(59, 130, 246);
  doc.textWithLink("https://mudasir.tech", 110, currentY, { url: "https://mudasir.tech", align: "left" });

  currentY += 3;
  doc.setDrawColor(0);

  // --- Summary ---
  addSectionHeader("Summary");

  doc.setFontSize(9);
  doc.setTextColor(50);
  const aboutText = "Software Engineering graduate with practical experience in Android development, cross-platform mobile solutions, web technologies, and backend cloud workflows. Experienced in developing mobile apps with Kotlin, Jetpack Compose, and Flutter/Dart, building responsive web interfaces, creating REST APIs with Python Flask, integrating Firebase services, and deploying production-ready applications with Docker and cloud platforms. Strong foundation in software architecture, MVVM, and machine learning integration.";
  const splitAbout = doc.splitTextToSize(aboutText, 180);
  doc.text(splitAbout, 15, currentY);
  currentY += splitAbout.length * 3.8 + 1.5;

  // --- Experience ---
  addSectionHeader("Experience");

  // ANAS Technologies
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(0);
  doc.text("Flutter Developer Intern", 15, currentY);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.text("Sept 2026 - Present", 195, currentY, { align: "right" });

  currentY += 3.8;
  doc.setFont("helvetica", "italic");
  doc.setFontSize(9);
  doc.setTextColor(100);
  doc.text("ANAS Technologies", 15, currentY);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(50);

  currentY += 4.2;
  doc.setFontSize(8.8);
  const anasPoints = [
    "Developing cross-platform mobile applications using Flutter and Dart with focus on clean architecture.",
    "Designing responsive mobile UI screens and integrating Firebase services (Auth, Firestore, Cloud Functions).",
    "Integrating RESTful APIs and optimizing app performance, state management, and real-time features."
  ];
  anasPoints.forEach(point => {
    doc.text("•", 15, currentY);
    doc.text(point, 19, currentY);
    currentY += 3.8;
  });

  currentY += 1.8;

  // GitXol
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(0);
  doc.text("Web Development Intern", 15, currentY);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.text("June 2026 - Present", 195, currentY, { align: "right" });

  currentY += 3.8;
  doc.setFont("helvetica", "italic");
  doc.setFontSize(9);
  doc.setTextColor(100);
  doc.text("GitXol", 15, currentY);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(50);

  currentY += 4.2;
  doc.setFontSize(8.8);
  const gitxolPoints = [
    "Assisted in frontend web development and UI improvements using modern web technologies.",
    "Utilized Google Search Console to monitor performance, optimize indexing, and boost organic visibility.",
    "Implemented SEO best practices, including XML sitemap optimization and page speed enhancements."
  ];
  gitxolPoints.forEach(point => {
    doc.text("•", 15, currentY);
    doc.text(point, 19, currentY);
    currentY += 3.8;
  });

  currentY += 2;

  // --- Education ---
  addSectionHeader("Education");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(0);
  doc.text("Bachelor of Science in Software Engineering", 15, currentY);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.text("Oct 2022 – July 2026", 195, currentY, { align: "right" });

  currentY += 3.8;
  doc.setFont("helvetica", "italic");
  doc.setFontSize(9);
  doc.setTextColor(100);
  doc.text("Sir Syed University of Engineering and Technology", 15, currentY);
  doc.setFont("helvetica", "normal");

  currentY += 3.8;
  doc.setFontSize(8.8);
  doc.setTextColor(50);
  doc.text("Karachi, Pakistan", 15, currentY);

  currentY += 2;

  // --- Certifications (After Education) ---
  addSectionHeader("Certifications");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(0);
  doc.text("IBM iOS and Android Mobile App Developer", 15, currentY);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.text("August 2026", 195, currentY, { align: "right" });

  currentY += 3.8;
  doc.setFont("helvetica", "italic");
  doc.setFontSize(9);
  doc.setTextColor(100);
  doc.text("IBM Skills Network (Coursera) — Professional Specialization", 15, currentY);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(50);

  currentY += 4.2;
  doc.setFontSize(8.8);
  const certPoints = [
    "Covered full mobile SDLC across Android (Kotlin/Java), iOS (Swift), Flutter & Dart, and React Native.",
    "Engineered projects with Generative AI tools, modern UI/UX design, REST APIs, and app store deployment."
  ];
  certPoints.forEach(point => {
    doc.text("•", 15, currentY);
    doc.text(point, 19, currentY);
    currentY += 3.8;
  });

  currentY += 2;

  // --- Projects ---
  addSectionHeader("Projects");

  const projects = [
    {
      title: "AI-Powered Electricity Bill Optimizer (Final Year Project)",
      tech: "Kotlin, Android SDK, Compose, Python, Flask, TensorFlow, Firebase, Docker, DigitalOcean, Vercel",
      desc: "Cross-platform energy management system. Built responsive Web app, native Android app using Kotlin and Jetpack Compose (MVVM), and Python Flask REST APIs with TensorFlow models for bill prediction. Deployed on DigitalOcean and Vercel."
    },
    {
      title: "ApplyTrack — Job Application Tracker",
      tech: "Kotlin, Jetpack Compose, Room DB, React, Vite, Firebase, Supabase Storage, WorkManager",
      desc: "Offline-first tracking system with two clients: a native Android app and a React/Vite web companion. Built Room local caching for zero latency, Supabase storage for resume attachments, and scheduled WorkManager sync to Cloud Firestore."
    },
    {
      title: "SmartLedger — AI-Powered Personal Finance Tracker",
      tech: "Kotlin, Jetpack Compose, Room DB, Groq API (AI), MVVM, Retrofit, Coroutines, WorkManager",
      desc: "Native Android finance tracker featuring smart ledgers and local Room DB storage. Integrated Groq API to analyze spending patterns and generate monthly financial forecasts, and WorkManager to schedule intelligent reminders."
    }
  ];

  projects.forEach(p => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(33, 37, 41);
    doc.text(p.title, 15, currentY);

    currentY += 3.8;
    doc.setFont("helvetica", "italic");
    doc.setFontSize(8);
    doc.setTextColor(100);
    doc.text(`Technologies: ${p.tech}`, 15, currentY);

    currentY += 3.8;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(50);
    const splitDesc = doc.splitTextToSize(p.desc, 180);
    doc.text(splitDesc, 15, currentY);
    currentY += splitDesc.length * 3.6 + 2;
  });

  currentY += 1;

  // --- Technical Skills ---
  addSectionHeader("Technical Skills");

  doc.setFontSize(8.8);
  doc.setTextColor(50);

  const skillLines = [
    { category: "Mobile Dev:", skills: "Kotlin, Jetpack Compose, Flutter (Dart), Swift (iOS), React Native, Android SDK, XML, MVVM, Room" },
    { category: "Web Dev:", skills: "HTML5, CSS3, JavaScript, React, Vite, Responsive Web Design" },
    { category: "Backend & AI:", skills: "Python, Flask, REST APIs, Generative AI, Docker, Firebase, TensorFlow, Scikit-learn" },
    { category: "Tools & Cloud:", skills: "Git, GitHub, Android Studio, Xcode, VS Code, DigitalOcean, Vercel" },
    { category: "Additional:", skills: "SDLC, UI/UX, App Publishing, SEO, Web Optimization, Testing, Clean Architecture" }
  ];

  skillLines.forEach(line => {
    doc.setFont("helvetica", "bold");
    doc.text(line.category, 15, currentY);
    doc.setFont("helvetica", "normal");
    doc.text(line.skills, 45, currentY);
    currentY += 4.2;
  });

  // Save PDF
  doc.save("Mudasir_Ali_Resume.pdf");
};
