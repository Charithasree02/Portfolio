import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Check, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "jangamcharithasree@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="w-full py-32 px-6 md:px-12 bg-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[100px] -z-10 rounded-full transform translate-x-1/2"></div>
      
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full text-primary mb-6">
            <Mail size={24} />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
            Let's build something.
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Whether you have a question about my research, a software engineering opportunity, or just want to say hi, I'll try my best to get back to you!
          </p>

          <Card className="max-w-md mx-auto border-border bg-card/50 backdrop-blur-sm shadow-xl">
            <CardContent className="p-8 flex flex-col items-center gap-6">
              
              <div className="w-full flex items-center justify-between p-4 bg-muted/50 rounded-lg border border-border">
                <span className="font-mono text-sm sm:text-base text-foreground truncate mr-4">
                  {email}
                </span>
                <Button 
                  variant="secondary" 
                  size="sm" 
                  onClick={handleCopyEmail}
                  className="shrink-0"
                >
                  {copied ? (
                    <span className="flex items-center gap-2 text-green-600 dark:text-green-400">
                      <Check size={14} /> Copied
                    </span>
                  ) : (
                    "Copy"
                  )}
                </Button>
              </div>

              <div className="flex items-center justify-center gap-4 w-full">
                <Button variant="outline" className="flex-1 gap-2 group" asChild>
                  <a href="mailto:jangamcharithasree@gmail.com">
                    Email Me <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </Button>
                
                <Button variant="outline" size="icon" asChild>
                  <a href="https://github.com/Charithasree02" target="_blank" rel="noreferrer" aria-label="GitHub">
                    <Github size={20} />
                  </a>
                </Button>
                
                <Button variant="outline" size="icon" asChild>
                  <a href="https://www.linkedin.com/in/charitha-sree-242401290/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <Linkedin size={20} />
                  </a>
                </Button>
              </div>

            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
