import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mudasir Ali — Android Developer | Kotlin & Jetpack Compose" },
      { name: "description", content: "Portfolio of Mudasir Ali, Android developer specializing in Kotlin, Jetpack Compose, and AI-powered mobile experiences." },
      { property: "og:title", content: "Mudasir Ali — Android Developer" },
      { property: "og:description", content: "Building modern Android apps with clean architecture and AI-powered features." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" },
    ],
  }),
  component: Portfolio,
});
