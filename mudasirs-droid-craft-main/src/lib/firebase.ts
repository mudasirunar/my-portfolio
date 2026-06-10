import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, logEvent, Analytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCpq9LpC35l1Fgw1GGsaZ87ALAuW7sZ11o",
  authDomain: "mudasir-portfolio-27d04.firebaseapp.com",
  projectId: "mudasir-portfolio-27d04",
  storageBucket: "mudasir-portfolio-27d04.firebasestorage.app",
  messagingSenderId: "951503423605",
  appId: "1:951503423605:web:39956c1781108e59d6903c",
  measurementId: "G-YMLTHBJ3SG"
};

let analytics: Analytics | null = null;

// Initialize Firebase only on the client-side (browser)
if (typeof window !== "undefined") {
  const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
  analytics = getAnalytics(app);
}

/**
 * Safely logs an event to Firebase Analytics (runs client-side only).
 */
export const logAnalyticsEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (analytics) {
    logEvent(analytics, eventName, eventParams);
  }
};

export { analytics };
