import { Outfit } from "next/font/google";
import "./globals.css";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import { ThemeProvider } from "./components/ThemeProvider";
import { Metadata } from "next";

const outfit = Outfit({
    variable: "--font-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "Mernet – Digital Agency | Software & ICT Solutions",
        template: "%s | Mernet",
    },
    description:
        "Mernet is a modern digital agency delivering tailored software and intelligent ICT solutions. We help startups and businesses grow through thoughtful design, scalable development, and performance-driven strategy.",
    keywords: [
        "Mernet",
        "digital agency",
        "software development",
        "ICT solutions",
        "web development",
        "UI UX design",
        "startup website",
        "business solutions",
    ],
    authors: [{ name: "Mernet" }],
    creator: "Mernet",
    publisher: "Mernet",

    openGraph: {
        title: "Mernet – Digital Agency | Software & ICT Solutions",
        description:
            "Transform your business with tailored software and intelligent ICT solutions. Strategy, design, development, and growth support.",
        siteName: "Mernet",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Mernet – Digital Agency",
        description:
            "A full-service digital agency helping businesses grow through design, development, and strategy.",
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
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
