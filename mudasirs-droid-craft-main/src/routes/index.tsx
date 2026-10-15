import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/Portfolio";
import previewImg from "../assets/preview.webp";
import profileImg from "../assets/profile.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    title: "Mudasir Ali — Software Engineer | Android, Flutter & Web",
    meta: [
      { name: "description", content: "Mudasir Ali is a Software Engineer specializing in high-performance Android (Kotlin, Jetpack Compose), Flutter, and full-stack web apps in Karachi, Pakistan." },
      { name: "keywords", content: "Mudasir Ali, Mudasir, Software Engineer, Android Developer, Flutter Developer, iOS Developer, Mobile App Developer, Web Developer, Kotlin, Jetpack Compose, Swift, React, Vite, Karachi, Pakistan, mudasir.tech, Portfolio" },
      { name: "author", content: "Mudasir Ali" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "theme-color", content: "#090d16" },

      // Open Graph / Facebook / LinkedIn
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Mudasir Ali — Software Engineer" },
      { property: "og:locale", content: "en_US" },
      { property: "og:url", content: "https://mudasir.tech/" },
      { property: "og:title", content: "Mudasir Ali — Software Engineer | Android, Flutter & Web" },
      { property: "og:description", content: "Mudasir Ali is a Software Engineer specializing in high-performance Android (Kotlin, Jetpack Compose), Flutter, and full-stack web apps in Karachi, Pakistan." },
      { property: "og:image", content: `https://mudasir.tech${previewImg}` },
      { property: "og:image:alt", content: "Mudasir Ali - Software Engineer Portfolio Preview" },
      { property: "og:image:width", content: "1024" },
      { property: "og:image:height", content: "589" },
      { property: "og:image:type", content: "image/webp" },

      // Twitter Cards
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Mudasir Ali — Software Engineer | Android, Flutter & Web" },
      { name: "twitter:description", content: "Mudasir Ali is a Software Engineer specializing in high-performance Android (Kotlin, Jetpack Compose), Flutter, and full-stack web apps in Karachi, Pakistan." },
      { name: "twitter:image", content: `https://mudasir.tech${previewImg}` },
      { name: "twitter:image:alt", content: "Mudasir Ali - Software Engineer Portfolio Preview" },
    ],
    links: [
      { rel: "canonical", href: "https://mudasir.tech/" },
      { rel: "preload", as: "image", href: profileImg, type: "image/webp" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ProfilePage",
              "@id": "https://mudasir.tech/#profilepage",
              "url": "https://mudasir.tech/",
              "name": "Mudasir Ali — Software Engineer Portfolio",
              "isPartOf": {
                "@type": "WebSite",
                "@id": "https://mudasir.tech/#website",
                "url": "https://mudasir.tech/",
                "name": "Mudasir Ali — Software Engineer",
                "description": "Portfolio of Mudasir Ali — Software Engineer specializing in Android, Flutter, and Web Development.",
                "inLanguage": "en-US",
              },
              "mainEntity": {
                "@type": "Person",
                "@id": "https://mudasir.tech/#person",
                "name": "Mudasir Ali",
                "url": "https://mudasir.tech/",
                "image": `https://mudasir.tech${profileImg}`,
                "jobTitle": "Software Engineer",
                "description": "Software Engineer specializing in high-performance native & cross-platform mobile apps (Kotlin, Jetpack Compose, Flutter, iOS/Swift) and full-stack web solutions.",
                "alumniOf": {
                  "@type": "CollegeOrUniversity",
                  "name": "Sir Syed University of Engineering and Technology",
                },
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Karachi",
                  "addressCountry": "PK",
                },
                "sameAs": [
                  "https://github.com/mudasirunar",
                  "https://www.linkedin.com/in/mudasir-ali-442196261",
                ],
                "knowsAbout": [
                  "Android Development",
                  "Kotlin",
                  "Jetpack Compose",
                  "Flutter",
                  "Dart",
                  "iOS Development",
                  "Swift",
                  "React",
                  "TypeScript",
                  "Firebase",
                  "Supabase",
                  "Clean Architecture",
                  "MVVM",
                ],
              },
            },
            {
              "@type": "ItemList",
              "@id": "https://mudasir.tech/#projects",
              "name": "Featured Software Applications by Mudasir Ali",
              "itemListElement": [
                {
                  "@type": "SoftwareApplication",
                  "position": 1,
                  "name": "SmartLedger",
                  "operatingSystem": "Android",
                  "applicationCategory": "FinanceApplication",
                  "description": "Intelligent personal finance and ledger tracking application built with Kotlin, Room Database, and predictive analytics.",
                  "url": "https://github.com/mudasirunar/SmartLedger",
                },
                {
                  "@type": "SoftwareApplication",
                  "position": 2,
                  "name": "ApplyTrack",
                  "operatingSystem": "Android, Web",
                  "applicationCategory": "BusinessApplication",
                  "description": "Offline-first job application tracker featuring a native Jetpack Compose Android client and React 19 companion with Supabase Storage.",
                  "url": "https://applytrack.vercel.app/",
                },
                {
                  "@type": "SoftwareApplication",
                  "position": 3,
                  "name": "Mudasir's DroidCraft",
                  "operatingSystem": "Android",
                  "applicationCategory": "DeveloperApplication",
                  "description": "Curated collection of production-grade Jetpack Compose UI architecture patterns and custom design system components.",
                  "url": "https://github.com/mudasirunar/Bento-Grid",
                },
                {
                  "@type": "SoftwareApplication",
                  "position": 4,
                  "name": "AI Todo App",
                  "operatingSystem": "Android",
                  "applicationCategory": "ProductivityApplication",
                  "description": "Modern task management application with real-time Firebase cloud sync and dynamic in-line search highlighting.",
                  "url": "https://github.com/mudasirunar/TodoApp",
                },
                {
                  "@type": "SoftwareApplication",
                  "position": 5,
                  "name": "PhoneInfo",
                  "operatingSystem": "Android",
                  "applicationCategory": "UtilitiesApplication",
                  "description": "Comprehensive Android diagnostic utility for real-time hardware diagnostics and sensor monitoring.",
                  "url": "https://github.com/mudasirunar/PhoneInfo",
                },
                {
                  "@type": "SoftwareApplication",
                  "position": 6,
                  "name": "AI Bill Optimizer (FYP)",
                  "operatingSystem": "Web, Python Backend",
                  "applicationCategory": "UtilitiesApplication",
                  "description": "AI-powered electricity bill optimizer and 24-hour load forecaster using Random Forest and Bi-LSTM neural networks.",
                  "url": "https://bill-optimizer.vercel.app/",
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: Portfolio,
});
