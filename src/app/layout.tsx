import { Toaster } from "@/components/ui/toaster";
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { ClerkProvider } from "@clerk/nextjs";
import { PHProvider } from "@/components/posthog/provider";

export const metadata: Metadata = {
  title: "FeedbackThing",
  description: "Your only tool needed to get Feedback and Bug Reports",
  creator: "@Sreenington",
  keywords: [
    "Feedback",
    "Bug Reports",
    "FeedbackThing",
    "FeedbackThing Pro",
    "FeedbackThing Pro",
    "Feedback screenshot tool",
    "Feedback screenshot",
    "Feedback tool",
    "Feedback collection saas",
    "Feedback collection widget",
    "features.vote",
    "Features voting app",
    "Features voting producthunt",
  ],

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://feedbackthing.pro",
    title: "FeedbackThing",
    description: "Your only tool needed to get Feedback and Bug Reports",
    siteName: "FeedbackThing",
  },
  twitter: {
    card: "summary_large_image",
    title: "FeedbackThing",
    description: "Your only tool needed to get Feedback and Bug Reports",
    images: ["https://feedbackthing.pro/og.png"],
    creator: "@eersnington",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `https://feedbackthing.pro/site.webmanifest`,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <PHProvider>
        <html lang="en" className={`${GeistSans.variable}`}>
          <body>
            <main>{children}</main>
            <Toaster />
          </body>
        </html>
      </PHProvider>
    </ClerkProvider>
  );
}
