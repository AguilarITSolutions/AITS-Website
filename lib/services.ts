import { Cog, Code2, CloudCog, Wrench, type LucideIcon } from "lucide-react";

export interface Service {
  slug: string;
  name: string;
  summary: string;
  description: string;
  icon: LucideIcon;
  highlights: string[];
}

export const services: Service[] = [
  {
    slug: "process-analysis-automation",
    name: "Process Analysis & Automation",
    summary:
      "Automate repetitive tasks and streamline processes to save time and money.",
    description:
      "We map how your team actually works today, find the manual, error-prone steps eating up your staff's time, and replace them with automated workflows. The result is fewer hand-offs, fewer mistakes, and hours back in your team's week.",
    icon: Cog,
    highlights: [
      "Workflow and process audits",
      "Robotic process automation (RPA)",
      "Integration between existing tools and systems",
      "Reporting and monitoring for automated processes",
    ],
  },
  {
    slug: "custom-application-development",
    name: "Custom Application Development",
    summary:
      "Tailored solutions to meet your unique business needs and requirements.",
    description:
      "Off-the-shelf software rarely fits a growing business perfectly. We design and build custom web and internal applications shaped around how your business actually operates, from the first requirements conversation through launch and support.",
    icon: Code2,
    highlights: [
      "Custom web and internal tools",
      "API design and integration",
      "User experience and interface design",
      "Ongoing support and iteration",
    ],
  },
  {
    slug: "system-cloud-migration",
    name: "System & Cloud Migration",
    summary:
      "Modernize your systems and migrate to the cloud for improved scalability and security.",
    description:
      "Aging on-premise infrastructure slows teams down and adds risk. We plan and execute migrations to modern cloud platforms with minimal downtime, so your systems come out the other side more secure, more reliable, and easier to scale.",
    icon: CloudCog,
    highlights: [
      "Cloud readiness assessments",
      "Migration planning and execution",
      "Security and compliance hardening",
      "Cost optimization post-migration",
    ],
  },
  {
    slug: "system-enhancement-extension",
    name: "System Enhancement & Extension",
    summary:
      "Enhance existing applications to match your changing business needs.",
    description:
      "Your business doesn't stand still, and neither should your software. We extend and enhance existing applications and systems with new features, integrations, and performance improvements, without a costly rebuild.",
    icon: Wrench,
    highlights: [
      "Feature additions to existing systems",
      "Third-party integrations",
      "Performance and reliability improvements",
      "Legacy system modernization",
    ],
  },
];
