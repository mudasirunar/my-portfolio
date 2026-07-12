import { jsPDF } from "jspdf";
import "jspdf-autotable";

export const generateAndDownloadResume = () => {
  const doc = new jsPDF();
  let currentY = 25; // Started further down to center content vertically on the page

  // --- Utility functions ---
  const addSectionHeader = (title: string) => {
    currentY += 5; // Added extra space before section headers
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(0);
    doc.text(title.toUpperCase(), 15, currentY);
    currentY += 2;
    doc.setLineWidth(0.5);
    doc.setDrawColor(200); // Light gray line
    doc.line(15, currentY, 195, currentY);
    currentY += 4.5;
    doc.setFont("helvetica", "normal");
  };

  // --- Header ---
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(33, 37, 41);
  doc.text("MUDASIR ALI", 105, currentY, { align: "center" });

  currentY += 6;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.setTextColor(73, 80, 87);
  // More professional tag
  doc.text("Software Engineer | Specializing in Mobile & Web Development", 105, currentY, { align: "center" });

  currentY += 5.5;
  doc.setFontSize(9.5);
  doc.text("Saadi Town, Scheme 33, Karachi  |  +92 326 8920883  |  unarmudasir@gmail.com", 105, currentY, { align: "center" });

  // Fixed spacing and added full URLs so PDF viewers automatically make them clickable
  currentY += 4.5;
  doc.setTextColor(59, 130, 246); // Blue link color
  doc.textWithLink("https://github.com/mudasirunar", 100, currentY, { url: "https://github.com/mudasirunar", align: "right" });
  doc.setTextColor(73, 80, 87);
  doc.text(" | ", 105, currentY, { align: "center" });
  doc.setTextColor(59, 130, 246);
  doc.textWithLink("https://mudasir.tech", 110, currentY, { url: "https://mudasir.tech", align: "left" });

  currentY += 4;
  doc.setDrawColor(0);

  // --- Summary ---
  addSectionHeader("Summary");

  doc.setFontSize(9.5);
  doc.setTextColor(50);
  const aboutText = "Software Engineering graduate with practical experience in Android development, web technologies, backend development, cloud deployment, and AI-powered applications. Experienced in developing native Android applications using Kotlin and Jetpack Compose, with working knowledge of Flutter and Swift (iOS), building responsive web interfaces, creating REST APIs with Python Flask, integrating Firebase services, and deploying production-ready applications using Docker, DigitalOcean, and Vercel. Strong understanding of software engineering principles, MVVM architecture, cloud-based development workflows, and machine learning integration. Passionate about learning modern technologies and building scalable, user-focused software solutions.";
  const splitAbout = doc.splitTextToSize(aboutText, 180);
  doc.text(splitAbout, 15, currentY);
  currentY += splitAbout.length * 4.2 + 2;

  // --- Experience ---
  addSectionHeader("Experience");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(0);
  doc.text("Web Development Intern", 15, currentY);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text("June 2026 - Present", 195, currentY, { align: "right" });

  currentY += 4.5;
  doc.setFont("helvetica", "italic");
  doc.setFontSize(10);
  doc.setTextColor(100);
  doc.text("GitXol", 15, currentY);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(50);

  currentY += 5;
  doc.setFontSize(9.5);
  const expPoints = [
    "Assisted in website development and UI improvements using modern web technologies.",
    "Worked with Google Search Console to improve website indexing and search visibility.",
    "Learned and implemented SEO best practices, including sitemap generation and optimization.",
    "Contributed to content updates, page design improvements, and frontend development tasks.",
    "Collaborated with the development team to enhance website performance and user experience."
  ];
  expPoints.forEach(point => {
    doc.text("•", 15, currentY);
    doc.text(point, 19, currentY);
    currentY += 4.5;
  });

  currentY += 3; // Added extra space after Experience

  // --- Education ---
  addSectionHeader("Education");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(0);
  doc.text("Bachelor of Science in Software Engineering", 15, currentY);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text("Oct 2022 – July 2026", 195, currentY, { align: "right" });

  currentY += 4.5;
  doc.setFont("helvetica", "italic");
  doc.setFontSize(10);
  doc.setTextColor(100);
  doc.text("Sir Syed University of Engineering and Technology", 15, currentY);
  doc.setFont("helvetica", "normal");

  currentY += 4.5;
  doc.setFontSize(9.5);
  doc.setTextColor(50);
  doc.text("Karachi, Pakistan", 15, currentY);

  currentY += 4; // Added extra space after Education

  // --- Projects ---
  addSectionHeader("Projects");

  const projects = [
    {
      title: "AI-Powered Electricity Bill Optimizer (Final Year Project)",
      tech: "Kotlin, Android SDK, Compose, Python, Flask, TensorFlow, Firebase, Docker, DigitalOcean, Vercel",
      desc: "Led the development of a cross-platform energy management system. Developed a responsive Web app, native Android app using Kotlin and Jetpack Compose under MVVM, and Python Flask REST APIs with TensorFlow/Scikit-learn models for bill prediction. Deployed Dockerized backend on DigitalOcean and Web application on Vercel."
    },
    {
      title: "ApplyTrack — Job Application Tracker",
      tech: "Kotlin, Jetpack Compose, Room DB, React, Vite, Firebase, Supabase Storage, WorkManager",
      desc: "Developed an offline-first tracking system with two clients: a native Android app and a React/Vite web companion. Built Room local caching for zero latency, Supabase storage for resume attachments, and scheduled WorkManager sync to Cloud Firestore."
    },
    {
      title: "SmartLedger — AI-Powered Personal Finance Tracker",
      tech: "Kotlin, Jetpack Compose, Room DB, Groq API (AI), MVVM, Retrofit, Coroutines, WorkManager",
      desc: "Built a native Android finance tracker featuring smart ledgers and local Room DB storage. Integrated Groq API to analyze spending patterns and generate monthly financial forecasts and tips, and WorkManager to schedule intelligent reminders."
    }
  ];

  projects.forEach(p => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(33, 37, 41);
    doc.text(p.title, 15, currentY);

    currentY += 4.5;
    doc.setFont("helvetica", "italic");
    doc.setFontSize(8.5);
    doc.setTextColor(100);
    doc.text(`Technologies: ${p.tech}`, 15, currentY);

    currentY += 4.5;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(50);
    const splitDesc = doc.splitTextToSize(p.desc, 180);
    doc.text(splitDesc, 15, currentY);
    currentY += splitDesc.length * 4.2 + 3.5;
  });

  currentY += 1;

  // --- Technical Skills ---
  addSectionHeader("Technical Skills");

  doc.setFontSize(9.5);
  doc.setTextColor(50);

  const skillLines = [
    { category: "Mobile Dev:", skills: "Kotlin, Android SDK, Jetpack Compose, XML, Swift (iOS), Flutter (Dart), Java, MVVM, Room" },
    { category: "Web Dev:", skills: "HTML5, CSS3, JavaScript, React, Vite, Responsive Web Design" },
    { category: "Backend & AI:", skills: "Python, Flask, REST APIs, Docker, Firebase, TensorFlow, Scikit-learn, Pandas" },
    { category: "Tools & Cloud:", skills: "Git, GitHub, Android Studio, Xcode, VS Code, DigitalOcean, Vercel" },
    { category: "Additional:", skills: "SEO, Search Console, Web Optimization, Testing, Debugging, Clean Architecture" }
  ];

  skillLines.forEach(line => {
    doc.setFont("helvetica", "bold");
    doc.text(line.category, 15, currentY);
    doc.setFont("helvetica", "normal");
    doc.text(line.skills, 45, currentY);
    currentY += 5;
  });

  // Save PDF
  doc.save("Mudasir_Ali_Resume.pdf");
};
