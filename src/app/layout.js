import { Bricolage_Grotesque, DM_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import ScrollReveal from "@/components/ScrollReveal";
import { profile } from "@/data/profile";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["opsz"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const description = `${profile.name} is a software engineer who builds full-stack web and mobile apps.`;

export const metadata = {
  title: {
    default: `${profile.name} | ${profile.title}`,
    template: `%s | ${profile.name}`,
  },
  description,
  openGraph: {
    title: `${profile.name} | ${profile.title}`,
    description,
    type: "website",
  },
};

// Runs before the page paints, so a saved dark theme doesn't flash light first.
const setInitialTheme = `try {
  var saved = localStorage.getItem("theme");
  var dark = matchMedia("(prefers-color-scheme: dark)").matches;
  document.documentElement.dataset.theme = saved || (dark ? "dark" : "light");
} catch (e) {}`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
      </head>
      <body className={`${bricolage.variable} ${dmMono.variable} p-2 antialiased sm:p-4`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-50 focus:rounded-full focus:bg-surface focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <div className="mx-auto flex max-w-[1240px] flex-col gap-2 sm:gap-4">
          <Nav />
          <main id="main" className="flex flex-col gap-2 sm:gap-4">
            {children}
          </main>
          <Footer />
        </div>
        <ScrollReveal />
      </body>
    </html>
  );
}
