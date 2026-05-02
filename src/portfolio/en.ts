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
    bio: "Software engineer with a researcher's mindset. I'm drawn to work that changes how teams build — architectures nobody owns, technologies without a manual, problems where the answer isn't obvious. Currently part of the Enabling Team at Ideable, where I architect systems, drive R&D, and empower teams to ship faster. Specialized in backend development, infrastructure as code with Terraform, and agentic AI workflows — from RAG systems to autonomous coding agents.",
    quote: "I focus on bridging the gap between research and production through automation, system design, and continuous learning.",
  },
  currentlyExploring: [
    {
      title: "Agentic architectures",
      description: "Multi-agent orchestration, tool-use patterns, and autonomous coding workflows.",
    },
    {
      title: "RAG & knowledge retrieval",
      description: "Embedding strategies, hybrid search, and chunking approaches for codebases.",
    },
    {
      title: "Infrastructure compliance automation",
      description: "Policy-as-code, Terraform testing, and automated security enforcement.",
    },
    {
      title: "LLM evaluation",
      description: "Hallucination detection, cost-performance tradeoffs, and benchmark design.",
    },
  ],
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
        { name: "Azure" },
        { name: "Terraform" },
        { name: "Docker" },
        { name: "Kubernetes" },
        { name: "Linux" },
      ],
    },
    {
      category: "Programming Languages",
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
      category: "Certifications",
      skills: [
        { name: "AWS Cloud Practitioner" },
      ],
    },
    {
      category: "Languages",
      skills: [
        { name: "Spanish" },
        { name: "English" },
        { name: "Portuguese" },
      ],
    },
    {
      category: "Tools",
      skills: [
        { name: "Git" },
        { name: "GitLab CI/CD" },
        { name: "GitHub CI/CD" },
        { name: "Grafana (LGTM Stack)" },
        { name: "Prometheus" },
        { name: "Postman" },
        { name: "Jira" },
        { name: "Confluence" },
        { name: "VS Code" },
        { name: "IntelliJ / JetBrains" },
        { name: "Roo / Cline" },
        { name: "Figma-to-code workflows" },
      ],
    },
  ],
  education: [
    {
      schoolName: "UPV/EHU — Universidad del País Vasco",
      degree: "Bachelor's Degree in Computer Science",
      duration: "2017 - 2021",
      description: "Specialization in computing, algorithms, and artificial intelligence.",
    },
    {
      schoolName: "Zabalburu Ikastetxea",
      degree: "Higher Vocational Training in Web Application Development",
      duration: "2015 - 2017",
      description: "Specialization in web development technologies and programming fundamentals.",
    },
  ],
  experience: [
    {
      role: "Staff Software Engineer",
      company: "Ideable (Enabling Team)",
      companyUrl: "https://ideable.net/",
      date: "2026 - Present",
      location: "Bilbao, Spain → Remote",
      description: "Part of the Enabling Team. Responsible for cross-team architecture, R&D, and technical enablement across the organization.",
      bullets: [
        "Defined and bootstrapped core architectures for new projects, enabling feature teams to iterate quickly on solid foundations.",
        "Drove internal R&D on agentic AI: built an async agent system for autonomous GitLab issue resolution and MR review.",
        "Created an agentic workflow for the frontend team to accelerate Figma-to-code conversion.",
        "Designed and delivered workshops, courses, and technical talks to upskill teams.",
        "Evaluated emerging technologies and determined viability for production adoption.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Ideable (Oficina Técnica)",
      companyUrl: "https://ideable.net/",
      date: "2021 - 2026",
      location: "Bilbao, Spain → Remote",
      description: "Technical office responsible for the most complex and cross-cutting developments that regular teams couldn't tackle, spanning full-stack, DevOps, infrastructure, and AI.",
      bullets: [
        "<strong>ENS High Compliance AWS Infrastructure</strong>: Architected and fully terraformed a multi-account AWS infrastructure (ALB, ECS, S3, RDS, etc.) meeting the Spanish National Security Scheme (ENS) high-level requirements.",
        "<strong>VisualMLOps Platform</strong>: Co-designed a platform that empowers non-AI experts (e.g., factory quality teams) to train, maintain, and deploy Computer Vision models without writing code.",
        "<strong>Elderly Care Anomaly Detection</strong>: Developed an AI-based system using non-intrusive sensors to monitor daily routines and detect anomalous patterns in elderly people's behavior.",
        "<strong>High-Resolution Image Viewer</strong>: Architected a visualization system for viewing high-resolution images with a Google Maps-like experience.",
        "<strong>IoT Device Management</strong>: Designed an AWS IoT Core architecture with Lambda, databases, and Vaadin frontend for managing connected safety devices at scale.",
        "Mentored interns.",
        "Handled any technical escalation from feature teams — from infrastructure to code review.",
      ],
    },
    {
      role: "Software Engineering Intern",
      company: "Ideable",
      companyUrl: "https://ideable.net/",
      date: "2021",
      location: "Bilbao, Spain",
      description: "Contributed to the development of software platforms and internal tooling.",
      bullets: [
        "Assisted in backend development with Java and Grails.",
        "Participated in agile development processes and code reviews.",
      ],
    },
    {
      role: "Software Developer",
      company: "Zylk",
      companyUrl: "https://www.zylk.net/",
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
