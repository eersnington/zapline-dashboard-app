import { Toaster } from "@/components/ui/toaster";
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { ClerkProvider } from "@clerk/nextjs";
import { PHProvider } from "@/components/posthog/provider";

export const metadata: Metadata = {
  title: "Zapline AI",
  description: "Elevate your CX with an Alexa-like Voicebot",
  creator: "@ZaplineAI",
  keywords: [
    "AI",
    "Customer Support",
    "Voicebot",
    "Zapline AI",
    "Automation",
    "Customer Experience",
    "CX",
    "Voice Assistant",
    "Support Automation",
    "AI Customer Service",
    "Conversational AI",
    "Virtual Assistant",
    "Call Center AI",
    "Shopify Voicebot",
    "Voice API",
    "Salesforce Voice AI",
    "Zendesk Voice AI",
  ],

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://app.zaplineai.com",
    title: "Zapline AI",
    description: "Elevate your CX with an Alexa-like Voicebot",
    siteName: "Zapline AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zapline AI",
    description: "Elevate your CX with an Alexa-like Voicebot",
    images: ["https://app.zaplineai.com/og.png"],
    creator: "@ZaplineAI",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `https://app.zaplineai.com/site.webmanifest`,
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
