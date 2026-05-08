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
  doc.text("Android Developer | Specializing in Kotlin & Modern App Architecture", 105, currentY, { align: "center" });

  currentY += 5.5;
  doc.setFontSize(9.5);
  doc.text("Karachi, Pakistan  |  +92 326 8920883  |  unarmmudasir@gmail.com", 105, currentY, { align: "center" });

  // Fixed spacing and added full URLs so PDF viewers automatically make them clickable
  currentY += 4.5;
  doc.setTextColor(59, 130, 246); // Blue link color
  doc.textWithLink("linkedin.com/in/mudasir-ali", 100, currentY, { url: "https://www.linkedin.com/in/mudasir-ali-442196261", align: "right" });
  doc.setTextColor(73, 80, 87);
  doc.text(" | ", 105, currentY, { align: "center" });
  doc.setTextColor(59, 130, 246);
  doc.textWithLink("github.com/mudasirunar", 110, currentY, { url: "https://github.com/mudasirunar", align: "left" });

  currentY += 4;
  doc.setDrawColor(0);

  // --- Summary ---
  addSectionHeader("Summary");

  doc.setFontSize(9.5);
  doc.setTextColor(50);
  const aboutText = "Motivated and detail-oriented Android Developer with strong knowledge of modern Android development tools and technologies, including Kotlin, Jetpack Compose, Firebase, and API integration. Passionate about building user-friendly and efficient mobile applications while continuously learning new skills and industry best practices. Seeking an opportunity to collaborate with professional teams, contribute to real-world projects, and further enhance my expertise in Android development through innovation, teamwork, and hands-on experience.";
  const splitAbout = doc.splitTextToSize(aboutText, 180);
  doc.text(splitAbout, 15, currentY);
  currentY += splitAbout.length * 4.2 + 2;

  // --- Experience ---
  addSectionHeader("Experience");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(0);
  doc.text("Junior Android Developer", 15, currentY);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text("Nov 2025 – Present", 195, currentY, { align: "right" });

  currentY += 4.5;
  doc.setFont("helvetica", "italic");
  doc.setFontSize(10);
  doc.setTextColor(100);
  doc.text("AbaciLabs", 15, currentY);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(50);

  currentY += 5;
  doc.setFontSize(9.5);
  const expPoints = [
    "Develop scalable Android features utilizing Kotlin and XML layouts.",
    "Collaborate in building, refining, and optimizing modern Android UI components.",
    "Work closely with senior developers to establish robust application architectures.",
    "Actively participate in real-world development workflows, adhering to agile methodologies."
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
  doc.text("BS Software Engineering", 15, currentY);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text("Oct 2022 - Present", 195, currentY, { align: "right" });

  currentY += 4.5;
  doc.setFont("helvetica", "italic");
  doc.setFontSize(10);
  doc.setTextColor(100);
  doc.text("Sir Syed University of Engineering & Technology", 15, currentY);
  doc.setFont("helvetica", "normal");

  currentY += 4.5;
  doc.setFontSize(9.5);
  doc.setTextColor(50);
  doc.text("Karachi, Pakistan", 15, currentY);

  currentY += 4; // Added extra space after Education

  // --- Projects ---
  addSectionHeader("Projects");

  const projects = [
    { title: "SmartLedger", tech: "Kotlin, Jetpack Compose, AI Integration, MVVM, Retrofit", desc: "AI-enhanced Android finance tracker featuring smart ledgers, behavioral analytics, and predictive insights for personal budgeting." },
    { title: "BentoApp", tech: "Kotlin, Jetpack Compose, Room, Coroutines", desc: "Customizable Bento grid app for creating dynamic collections with flexible layouts, shapes, and media management." },
    { title: "PhoneInfo", tech: "Kotlin, Jetpack Compose, MVVM, System APIs, StateFlow,sensors", desc: "Real-time Android device information and hardware diagnostics tool built with Jetpack Compose." },
    { title: "Weather App", tech: "Kotlin, Retrofit, REST APIs, Jetpack Compose", desc: "Real-time weather application supporting city search, GPS location, and detailed 24-hour forecasting using the OpenWeather API." },
    { title: "AI Todo App", tech: "Kotlin, AI Integration, Room, Firebase", desc: "Intelligent task manager incorporating AI for smart task categorization, organization, and productivity assistance." },
    { title: "AI Energy Management System", tech: "Random Forest, LSTM, Machine Learning, Python, HTML5, CSS3, Firebase", desc: "Advanced electricity bill prediction and load forecasting system employing hybrid machine learning and seasonal intelligence." }
  ];

  projects.forEach(p => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10.5);
    doc.setTextColor(0);
    doc.text(p.title, 15, currentY);

    doc.setFont("helvetica", "italic");
    doc.setFontSize(9);
    doc.setTextColor(120);
    doc.text(p.tech, 195, currentY, { align: "right" });

    currentY += 4.2;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(50);
    const splitDesc = doc.splitTextToSize(p.desc, 180);
    doc.text(splitDesc, 15, currentY);
    currentY += splitDesc.length * 4.2 + 2;
  });

  currentY += 1;

  // --- Technical Skills ---
  addSectionHeader("Technical Skills");

  doc.setFontSize(9.5);
  doc.setTextColor(50);

  const skillLines = [
    { category: "Languages & UI:", skills: "Kotlin, Jetpack Compose, XML Layouts, Android UI, Material 3" },
    { category: "Architecture:", skills: "MVVM, Clean Architecture, State Management" },
    { category: "Networking & Data:", skills: "Retrofit, REST APIs, Coroutines, Room Database, Firebase" },
    { category: "Tools & Integrations:", skills: "Git, GitHub, Dagger Hilt, AI Integration, ML Models" },
    { category: "Quality Assurance:", skills: "Testing & Debugging, Error Handling" } // Added Testing & Debugging
  ];

  skillLines.forEach(line => {
    doc.setFont("helvetica", "bold");
    doc.text(line.category, 15, currentY);
    doc.setFont("helvetica", "normal");
    doc.text(line.skills, 50, currentY);
    currentY += 5;
  });

  // Save PDF
  doc.save("Mudasir_Ali_Resume.pdf");
};
