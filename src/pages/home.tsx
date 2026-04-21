import React from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Achievements from "@/components/achievements";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className="min-h-[100dvh] bg-background font-sans text-foreground selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <main className="flex flex-col items-center w-full">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <footer className="w-full border-t py-8 text-center text-sm text-muted-foreground flex flex-col items-center justify-center">
        <p>© {new Date().getFullYear()} Charitha Sree. All rights reserved.</p>
        <p className="mt-1 font-mono text-xs opacity-50">Designed with intent.</p>
      </footer>
    </div>
  );
}
