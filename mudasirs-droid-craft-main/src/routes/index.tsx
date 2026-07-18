import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/Portfolio";
import previewImg from "../assets/preview.png";

export const Route = createFileRoute("/")({
  head: () => ({
    title: "Mudasir Ali — Android Developer | Kotlin & Jetpack Compose",
    meta: [
      { name: "description", content: "Portfolio of Mudasir Ali, a Software Engineer specializing in mobile technologies across native & cross-platform frameworks (Kotlin, Flutter, iOS/Swift) and full-stack web solutions." },
      { property: "og:title", content: "Mudasir Ali — Android Developer | Kotlin & Jetpack Compose" },
      { property: "og:description", content: "Portfolio of Mudasir Ali, a Software Engineer specializing in native & cross-platform mobile apps and full-stack web solutions." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mudasir.tech/" },
      { property: "og:image", content: `https://mudasir.tech${previewImg}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Mudasir Ali — Android Developer | Kotlin & Jetpack Compose" },
      { name: "twitter:description", content: "Portfolio of Mudasir Ali, a Software Engineer specializing in native & cross-platform mobile apps and full-stack web solutions." },
      { name: "twitter:image", content: `https://mudasir.tech${previewImg}` },
    ],
    links: [
      { rel: "canonical", href: "https://mudasir.tech/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" },
    ],
  }),
  component: Portfolio,
});
