import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/Portfolio";
import previewImg from "../assets/preview.png";
import profileImg from "../assets/profile.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    title: "Mudasir Ali — Software Engineer | Mobile (Android, Flutter, iOS) & Web Developer",
    meta: [
      { name: "description", content: "Portfolio of Mudasir Ali — Software Engineer specializing in high-performance native & cross-platform mobile apps (Android, Kotlin, Jetpack Compose, Flutter, iOS/Swift) and full-stack web solutions. Based in Karachi, Pakistan." },
      { name: "keywords", content: "Mudasir Ali, Mudasir, Software Engineer, Android Developer, Flutter Developer, iOS Developer, Mobile App Developer, Web Developer, Kotlin, Jetpack Compose, Swift, React, Next.js, Karachi, Pakistan, mudasir.tech, Portfolio" },
      { name: "author", content: "Mudasir Ali" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "theme-color", content: "#090d16" },

      // Open Graph / Facebook / LinkedIn
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Mudasir Ali — Portfolio" },
      { property: "og:locale", content: "en_US" },
      { property: "og:url", content: "https://mudasir.tech/" },
      { property: "og:title", content: "Mudasir Ali — Software Engineer | Mobile & Web Developer" },
      { property: "og:description", content: "Portfolio of Mudasir Ali — Software Engineer specializing in high-performance Android, Flutter, iOS, and modern web applications." },
      { property: "og:image", content: `https://mudasir.tech${previewImg}` },
      { property: "og:image:alt", content: "Mudasir Ali - Software Engineer Portfolio Preview" },

      // Twitter Cards
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Mudasir Ali — Software Engineer | Mobile & Web Developer" },
      { name: "twitter:description", content: "Portfolio of Mudasir Ali — Software Engineer specializing in high-performance Android, Flutter, iOS, and modern web applications." },
      { name: "twitter:image", content: `https://mudasir.tech${previewImg}` },
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
          "@type": "Person",
          name: "Mudasir Ali",
          url: "https://mudasir.tech/",
          image: `https://mudasir.tech${profileImg}`,
          jobTitle: "Software Engineer",
          description: "Software Engineer specializing in native & cross-platform mobile apps (Kotlin, Jetpack Compose, Flutter, iOS/Swift) and full-stack web solutions.",
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "Sir Syed University of Engineering and Technology",
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Karachi",
            addressCountry: "PK",
          },
          sameAs: [
            "https://github.com/mudasirunar",
            "https://www.linkedin.com/in/mudasir-ali-442196261",
          ],
          knowsAbout: [
            "Android Development",
            "Kotlin",
            "Jetpack Compose",
            "Flutter",
            "Dart",
            "iOS Development",
            "Swift",
            "React",
            "TypeScript",
            "Full-Stack Web Development",
            "Mobile App Architecture",
          ],
        }),
      },
    ],
  }),
  component: Portfolio,
});
