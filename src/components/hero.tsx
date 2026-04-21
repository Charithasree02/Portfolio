import React from "react";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@assets/photo_1776753218200.jpg";

export default function Hero() {
  return (
    <section className="w-full min-h-[100dvh] flex items-center pt-20 pb-16 px-6 md:px-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-[100px]" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
        
        <motion.div 
          className="flex-1 flex flex-col items-start text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-medium tracking-wide"
          >
            Available for opportunities
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-foreground leading-[1.1] mb-6">
            Charitha <br />
            <span className="text-muted-foreground">Sree.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
            CS Student <span className="text-primary mx-2 font-serif">|</span> Software Developer <span className="text-primary mx-2 font-serif">|</span> Researcher
            <br />
            <span className="text-base md:text-lg mt-4 block font-sans">
              Bridging engineering rigor with modern web development.
            </span>
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <Button 
              size="lg" 
              className="gap-2 font-medium"
              onClick={() => {
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Work <ArrowRight size={18} />
            </Button>
            
            <div className="flex items-center gap-2 ml-2">
              <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-primary/10 hover:text-primary">
                <a href="https://github.com/Charithasree02" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <SiGithub className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-primary/10 hover:text-primary">
                <a href="https://www.linkedin.com/in/charitha-sree-242401290/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <FaLinkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-primary/10 hover:text-primary">
                <a href="mailto:jangamcharithasree@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 shrink-0"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
        >
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="relative w-full h-full rounded-full border border-border bg-card p-2 shadow-2xl overflow-hidden">
            <img 
              src={profilePhoto} 
              alt="Charitha Sree" 
              className="w-full h-full object-cover rounded-full hover:scale-105 transition-all duration-500"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
