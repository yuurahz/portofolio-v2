import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@/components/analytics";
import ClientLayout from "./client";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "YuuraHz | Portofolio",
  description:
    "Passionate developer specializing in JavaScript technologies. I create modern web applications with clean code and exceptional user experiences.",
  keywords: [
    "YuuraHz",
    "Adi Saputra",
    "Full Stack Developer",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "AWS",
  ],
  authors: [{ name: "Adi Saputra" }],
  creator: "Adi Saputra",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "http://localhost:3000",
    title: "YuuraHz | Portofolio",
    description:
      "Passionate developer specializing in JavaScript technologies. I create modern web applications with clean code and exceptional user experiences.",
    siteName: "YuuraHz Portfolio",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "YuuraHz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YuuraHz | Portofolio",
    description:
      "Passionate developer specializing in JavaScript technologies. I create modern web applications with clean code and exceptional user experiences.",
    creator: "@yuurahz",
    images: ["/favicon.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense>
        <ClientLayout>{children}</ClientLayout>
      </Suspense>
      <Analytics />
    </>
  );
}

import "./globals.css";
