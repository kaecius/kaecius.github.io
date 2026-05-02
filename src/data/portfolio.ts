import type { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  greeting: {
    username: "Daniel Cañadillas",
    title: "Staff Software Engineer & Researcher",
    subtitle: "Plan, Build, Validate. Enabling teams through architecture, R&D, and agentic systems.",
  },
  socialLinks: [
    { name: "GitHub", url: "https://github.com/kaecius" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/daniel-canadillas/" },
  ],
  about: {
    bio: "Software engineer with 5+ years of experience evolving from full-stack development to cross-team technical enablement. Currently part of the Enabling Team at Ideable, alongside the CTOs, where I architect systems, drive R&D, and empower teams to ship faster. Specialized in backend development, infrastructure as code with Terraform, and agentic AI workflows — from RAG systems to autonomous coding agents. AWS Cloud Practitioner certified. I focus on bridging the gap between research and production through automation, system design, and continuous learning.",
  },
  skills: [
    {
      category: "AI & Agentic Development",
      skills: [
        { name: "LLM-based workflows" },
        { name: "RAG systems" },
        { name: "Agentic coding systems" },
        { name: "Web scraping" },
        { name: "Codex" },
        { name: "Claude Code" },
        { name: "OpenCode" },
        { name: "Prompt engineering" },
      ],
    },
    {
      category: "Architecture & Methods",
      skills: [
        { name: "System design" },
        { name: "TDD" },
        { name: "Spec-driven development" },
        { name: "ENS compliance" },
        { name: "Mentoring" },
        { name: "Technical enablement" },
      ],
    },
    {
      category: "Cloud & Infra",
      skills: [
        { name: "AWS" },
        { name: "AWS Cloud Practitioner" },
        { name: "Azure" },
        { name: "Terraform" },
        { name: "Docker" },
        { name: "Kubernetes" },
        { name: "Linux" },
      ],
    },
    {
      category: "Languages",
      skills: [
        { name: "Python" },
        { name: "Java" },
        { name: "PHP" },
        { name: "JavaScript/TypeScript" },
        { name: "SQL" },
      ],
    },
    {
      category: "Frameworks",
      skills: [
        { name: "Grails" },
        { name: "Laravel" },
        { name: "React" },
        { name: "Angular" },
        { name: "Vaadin" },
        { name: "Node.js" },
      ],
    },
    {
      category: "Databases",
      skills: [
        { name: "PostgreSQL" },
        { name: "MySQL" },
        { name: "MongoDB" },
      ],
    },
    {
      category: "Tools & Practices",
      skills: [
        { name: "Git" },
        { name: "CI/CD" },
        { name: "Figma-to-code workflows" },
      ],
    },
  ],
  education: [
    {
      schoolName: "Universitat Politècnica de València (UPV)",
      degree: "Bachelor's Degree in Computer Science",
      duration: "2017 - 2021",
      description: "Focus on software engineering, algorithms, and system design.",
    },
    {
      schoolName: "Zabalburu Ikastetxea",
      degree: "High School Diploma in Technology",
      duration: "2015 - 2017",
      description: "Specialization in technology and computer science fundamentals.",
    },
  ],
  experience: [
    {
      role: "Staff Software Engineer",
      company: "Ideable (Enabling Team)",
      date: "2026 - Present",
      location: "Remote",
      description: "Part of the Enabling Team. Responsible for cross-team architecture, R&D, and technical enablement across the organization.",
      bullets: [
        "Defined and bootstrapped core architectures for new projects, enabling feature teams to iterate quickly on solid foundations.",
        "Led internal R&D on agentic AI: built an async agent system for autonomous GitLab issue resolution and MR review.",
        "Created an agentic workflow for the frontend team to accelerate Figma-to-code conversion.",
        "Designed and delivered workshops, courses, and technical talks to upskill teams.",
        "Evaluated emerging technologies and determined viability for production adoption.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Ideable (Oficina Técnica)",
      date: "2021 - 2026",
      location: "Bilbao, Spain → Remote",
      description: "Technical office responsible for the most complex and cross-cutting developments that regular teams couldn't tackle, spanning full-stack, DevOps, infrastructure, and AI.",
      bullets: [
        "<strong>ENS High Compliance AWS Infrastructure</strong>: Architected and fully terraformed a multi-account AWS infrastructure (ALB, ECS, S3, RDS, etc.) meeting the Spanish National Security Scheme (ENS) high-level requirements.",
        "<strong>VisualMLOps Platform</strong>: Co-designed a platform that empowers non-AI experts (e.g., factory quality teams) to train, maintain, and deploy Computer Vision models without writing code.",
        "<strong>High-Resolution Image Viewer</strong>: Architected a visualization system based on OpenSeadragon + IIIF server for viewing high-resolution experiment images with a Google Maps-like experience.",
        "<strong>IoT Water Pump Management</strong>: Designed an AWS IoT Core architecture with Lambda, databases, and Vaadin frontend for managing fire safety water pump devices in buildings.",
        "Mentored interns: one focused on Angular frontend, the other on general software engineering and research.",
        "Handled any technical escalation from feature teams — from infrastructure to code review.",
      ],
    },
    {
      role: "Software Engineering Intern",
      company: "Ideable",
      date: "2021",
      location: "Bilbao, Spain",
      description: "Contributed to the development of digital health platforms and internal tooling.",
      bullets: [
        "Assisted in backend development with Java and Grails.",
        "Participated in agile development processes and code reviews.",
      ],
    },
    {
      role: "Software Developer",
      company: "Zylk",
      date: "2019 - 2021",
      location: "Bilbao, Spain",
      description: "Developed web applications and maintained existing systems for enterprise clients.",
      bullets: [
        "Built and maintained PHP and Laravel applications.",
        "Worked with SQL databases and optimized query performance.",
      ],
    },
  ],
  projects: [
    {
      title: "Personal Portfolio",
      description: "Terminal-inspired portfolio built with Astro 5, dark/light theme, i18n, and custom UI components.",
      techStack: ["Astro", "TypeScript", "CSS", "Playwright"],
      sourceUrl: "https://github.com/kaecius/kaecius.github.io",
      demoUrl: "https://kaecius.github.io",
    },
  ],
  contact: {
    email: "dcanadillas.github@outlook.com",
    linkedin: "https://www.linkedin.com/in/daniel-canadillas/",
  },
};
