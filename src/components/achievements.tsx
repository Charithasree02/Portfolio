import React from "react";
import { motion } from "framer-motion";
import { Trophy, Award, Zap, Star, Users, Code2 } from "lucide-react";

const ACHIEVEMENTS = [
  {
    icon: <Star className="w-5 h-5" />,
    title: "Amazon ML School",
    period: "Aug 2025",
    description: "Selected for Amazon's flagship ML training program in advanced AI/ML — a highly competitive, invite-only program.",
    highlight: true,
  },
  {
    icon: <Award className="w-5 h-5" />,
    title: "SAP Hackfest 2025 Finalist",
    period: "Jun 2025",
    description: "Ranked Top 75 out of 5000+ participants globally with TradeGenie at SAP's international hackathon.",
    highlight: true,
  },
  {
    icon: <Trophy className="w-5 h-5" />,
    title: "Runner — Amaravati Quantum Valley Hackathon",
    period: "2025",
    description: "Developed a secure quantum image transmission prototype using Quantum Error Correction Codes, Superdense Coding, and Eavesdropping Detection. Implemented on IBM Qiskit cloud and real IBM quantum hardware.",
    highlight: true,
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "HackVega 2025 — Bright Star of Tech Brilliance",
    period: "Jun 2025",
    description: "Awarded 'Bright Star of Tech Brilliance' at HackVega coding contest; received Certificate of Merit.",
    highlight: false,
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "AlgoU Accelerator Camp",
    period: "May 2025 – Present",
    description: "Top 1.4% of 40,000 participants. Mentored directly by engineers from Google, Apple, Grab, and Alphagrep.",
    highlight: false,
  },
  {
    icon: <Award className="w-5 h-5" />,
    title: "AWS Certified Cloud Practitioner",
    period: "2025",
    description: "Earned AWS Certification as a Cloud Practitioner, validating foundational cloud infrastructure knowledge.",
    highlight: false,
  },
  {
    icon: <Code2 className="w-5 h-5" />,
    title: "CodeChef 2-Star Rating",
    period: "Ongoing",
    description: "Achieved 2-star rating on CodeChef through consistent competitive programming performance.",
    highlight: false,
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Campus Leadership",
    period: "Amrita University",
    description: "Tech Lead in Student Affairs at Amrita; led the Robotics Club and contributed to the ReLU AI/ML Club.",
    highlight: false,
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="w-full py-24 px-6 md:px-12 bg-muted/20">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
            Achievements & Awards
          </h2>
          <div className="w-12 h-1 bg-primary mb-4"></div>
          <p className="text-muted-foreground max-w-xl">
            Recognition across hackathons, competitive programming, and leadership.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {ACHIEVEMENTS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
            >
              <div
                className={`relative flex gap-4 p-5 rounded-xl border transition-all duration-300 hover:border-primary/50 group
                  ${item.highlight
                    ? "bg-primary/5 border-primary/20"
                    : "bg-card/40 border-border"
                  }`}
                data-testid={`achievement-${index}`}
              >
                {item.highlight && (
                  <div className="absolute top-3 right-3">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  </div>
                )}
                <div
                  className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mt-0.5
                    ${item.highlight ? "bg-primary/15 text-primary" : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"}`}
                >
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-semibold text-foreground text-sm leading-snug">
                      {item.title}
                    </h3>
                    <span className="text-xs font-mono text-muted-foreground shrink-0">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
