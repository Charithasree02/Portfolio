import React from "react";
import { motion } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    title: "Quantum Computing & Information",
    skills: ["Qubits", "Superposition", "Entanglement", "Dirac Notation", "Superdense Coding", "Quantum Communication", "Qiskit", "IBM Quantum Experience"]
  },
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "JavaScript", "Go (learning)"]
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TailwindCSS", "HTML", "CSS"]
  },
  {
    title: "Backend",
    skills: ["Django", "Node.js", "REST APIs"]
  },
  {
    title: "Databases & Querying",
    skills: ["PostgreSQL", "SQL Optimization", "Indexing", "SQLite"]
  },
  {
    title: "Cloud / DevOps",
    skills: ["AWS (EC2)", "Docker", "Kubernetes", "Redis", "CI/CD"]
  },
  {
    title: "AI / ML",
    skills: ["Feature Engineering", "Model Evaluation", "OpenAI GPT API", "Gemini API", "LangChain", "RAG"]
  },
  {
    title: "Tools & CS Fundamentals",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Linear Algebra", "Probability", "DSA", "OOP", "Computer Networks", "Operating Systems"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="w-full py-24 px-6 md:px-12 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
            Technical Skills
          </h2>
          <div className="w-12 h-1 bg-primary mb-4"></div>
          <p className="text-muted-foreground max-w-xl">
            From quantum circuits to full-stack web apps — a broad and growing technical toolkit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="border-l-2 border-primary/30 pl-5"
            >
              <h3 className="text-base font-semibold font-sans mb-4 text-foreground tracking-wide">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <div
                    key={skill}
                    className="px-3 py-1.5 bg-background border border-border rounded-md text-sm font-medium hover:border-primary hover:text-primary transition-colors shadow-sm"
                    data-testid={`skill-${skill}`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
