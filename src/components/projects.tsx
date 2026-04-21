import React from "react";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const PROJECTS = [
  {
    name: "TradeGenie",
    description: "SAP Hackfest 2025 Finalist (Top 75/5000+). An AI-powered trade intelligence platform built at SAP's global hackathon, enabling smart market analysis and automated trading decisions.",
    tags: ["SAP", "AI", "FinTech", "Hackathon"],
    github: "https://github.com/Charithasree02/TradeGenine-SAP",
    featured: true
  },
  {
    name: "Bit-Level Fault Coalescing",
    description: "Static program analysis framework that reduces redundant fault injection sites using Control Flow Graph (CFG) and data-flow analysis.",
    tags: ["Python", "Program Analysis", "Research"],
    github: "https://github.com/Charithasree02/bit-level-fault-coalescing",
    featured: true
  },
  {
    name: "Entanglement-Aware Feature Coupling QML",
    description: "Quantum Machine Learning research project exploring entanglement-aware feature coupling for enhanced model performance.",
    tags: ["Python", "Quantum Computing", "Machine Learning"],
    github: "https://github.com/Charithasree02/Entanglement-Aware-Feature-Coupling-QML",
    featured: true
  },
  {
    name: "RAGTestGen",
    description: "An innovative tool leveraging Retrieval-Augmented Generation (RAG) and LLMs to automate and enhance test case generation.",
    tags: ["Java", "RAG", "LLM", "Software Testing"],
    github: "https://github.com/Charithasree02/RAGTestGen",
    featured: false
  },
  {
    name: "WRAP",
    description: "A full-stack web application delivering a seamless, modern user experience with clean architecture and responsive design.",
    tags: ["TypeScript", "React", "Full Stack"],
    github: null,
    featured: false
  },
  {
    name: "Code Guardian",
    description: "An intelligent code review and security analysis tool that automatically detects vulnerabilities, code smells, and quality issues in source code.",
    tags: ["Python", "Security", "Code Analysis"],
    github: null,
    featured: false
  },
  {
    name: "GlowMate",
    description: "A smart skincare and beauty companion app that provides personalized product recommendations and routine tracking based on user skin profiles.",
    tags: ["TypeScript", "React", "AI", "Health Tech"],
    github: null,
    featured: false
  },
  {
    name: "Online Judge",
    description: "A competitive programming judge platform built to compile, execute, and verify code submissions against test cases.",
    tags: ["Python", "Algorithms", "Backend"],
    github: "https://github.com/Charithasree02/OnileJudge",
    featured: false
  },
  {
    name: "Expense Tracker",
    description: "A clean, responsive personal finance application to track daily expenses and visualize spending patterns.",
    tags: ["TypeScript", "React", "Web Dev"],
    github: "https://github.com/Charithasree02/expense-tracker",
    featured: false
  },
  {
    name: "Quantum",
    description: "A collection of quantum computing experiments and simulations, exploring fundamental quantum algorithms and circuits using Qiskit on IBM Quantum hardware.",
    tags: ["Python", "Qiskit", "Quantum Computing"],
    github: "https://github.com/Charithasree02/Quantum",
    featured: false
  },
  {
    name: "Q-MSG",
    description: "A quantum messaging system leveraging quantum communication protocols — superdense coding and quantum key distribution — for secure information transfer.",
    tags: ["Python", "Qiskit", "Quantum", "Security"],
    github: "https://github.com/Charithasree02/Q-MSG",
    featured: false
  }
];

function getIcon(tags: string[]) {
  if (tags.includes("Quantum Computing") || tags.includes("Research")) {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
        <polyline points="14 2 14 8 20 8"/>
        <path d="M12 12v6"/><path d="m9 15 3 3 3-3"/>
      </svg>
    );
  }
  if (tags.includes("Security") || tags.includes("Code Analysis")) {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    );
  }
  if (tags.includes("AI") || tags.includes("LLM") || tags.includes("RAG")) {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4l3 3"/>
      </svg>
    );
  }
  if (tags.includes("FinTech") || tags.includes("Hackathon")) {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    );
  }
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="w-full py-24 px-6 md:px-12 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
              Featured Work
            </h2>
            <div className="w-12 h-1 bg-primary mb-4"></div>
            <p className="text-muted-foreground max-w-xl">
              A selection of my recent research, applications, and tools.
            </p>
          </div>
          <Button variant="outline" asChild>
            <a href="https://github.com/Charithasree02" target="_blank" rel="noreferrer" className="gap-2">
              View all on GitHub <SiGithub size={16} />
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="h-full"
            >
              <Card className="h-full flex flex-col hover:border-primary/50 transition-colors duration-300 group bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 rounded-md bg-primary/10 text-primary">
                      {getIcon(project.tags)}
                    </div>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors p-1"
                        aria-label={`View ${project.name} on GitHub`}
                        data-testid={`link-github-${project.name}`}
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="text-base text-muted-foreground line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-wrap gap-2 pt-4 w-full">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="font-mono text-xs bg-secondary/50">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
