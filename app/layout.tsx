import { Outfit } from "next/font/google";
import "./globals.css";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import { ThemeProvider } from "./components/ThemeProvider";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

const outfit = Outfit({
    variable: "--font-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "Mernet Technologies | Software Development & ICT Solutions",
        template: "%s | Mernet Technologies",
    },
    description:
        "Mernet Technologies delivers custom software development and intelligent ICT solutions. We build scalable business systems, web applications, and secure digital infrastructure for growing organizations.",
    keywords: [
        "software development Tanzania",
        "ICT solutions",
        "business systems",
        "inventory management system",
        "church management system",
        "restaurant management system",
        "web application development",
    ],
    authors: [{ name: "Mernet Technologies" }],
    creator: "Mernet Technologies",
    publisher: "Mernet Technologies",

    openGraph: {
        title: "Mernet Technologies | Software Development & ICT Solutions",
        description:
            "Transform your operations with custom-built business systems and intelligent ICT solutions designed for performance, security, and scalability.",
        siteName: "Mernet Technologies",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Mernet Technologies | Software & ICT Solutions",
        description:
            "A software development company delivering secure, scalable business systems and intelligent ICT solutions.",
        creator: "@mernet",
    },

    robots: {
        index: true,
        follow: true,
    },
};

function SoftBackdrop() {
    return (
        <div className="fixed inset-0 -z-10 pointer-events-none transition-colors duration-300">
            <div 
                className="absolute left-1/2 top-20 -translate-x-1/2 w-[980px] h-[460px] rounded-full blur-3xl"
                style={{ background: 'var(--backdrop-1)' }}
            />
            <div 
                className="absolute right-12 bottom-10 w-[420px] h-[220px] rounded-full blur-2xl"
                style={{ background: 'var(--backdrop-2)' }}
            />
        </div>
    );
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="light" suppressHydrationWarning>
            <body className={outfit.variable}>
                <ThemeProvider>
                    <SoftBackdrop />
                    <Navbar />
                    {children}
                    <Analytics />
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
