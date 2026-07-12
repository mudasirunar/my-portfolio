import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useLocation,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import favicon from "../assets/favicon.png";
import { logAnalyticsEvent } from "../lib/firebase";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Mudasir Ali | Software Engineer - Mobile & Web Developer" },
      { name: "description", content: "Portfolio of Mudasir Ali, a Software Engineer specializing in mobile technologies across native & cross-platform frameworks (Kotlin, Flutter, iOS/Swift) and full-stack web solutions." },
      { name: "author", content: "Mudasir Ali" },
      { name: "keywords", content: "Mudasir Ali, Software Engineer, Android Developer, iOS Developer, Flutter Developer, React Developer, Kotlin, Jetpack Compose, Karachi, Pakistan, mudasir.tech" },
      { property: "og:title", content: "Mudasir Ali | Software Engineer - Mobile & Web Developer" },
      { property: "og:description", content: "Portfolio of Mudasir Ali, a Software Engineer specializing in native & cross-platform mobile apps and full-stack web solutions." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mudasir.tech" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Mudasir Ali | Software Engineer - Mobile & Web Developer" },
      { name: "twitter:description", content: "Portfolio of Mudasir Ali, a Software Engineer specializing in native & cross-platform mobile apps and full-stack web solutions." },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        type: "image/png",
        href: favicon,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const location = useLocation();

  useEffect(() => {
    logAnalyticsEvent("page_view", {
      page_path: location.pathname,
      page_title: typeof document !== "undefined" ? document.title : "Portfolio",
    });
  }, [location.pathname]);

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
