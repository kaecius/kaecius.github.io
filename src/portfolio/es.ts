import type { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  greeting: {
    username: "Daniel Cañadillas",
    title: "Staff Software Engineer & Researcher",
    subtitle: "Habilitando equipos a través de arquitectura, I+D y sistemas agenticos.",
  },
  socialLinks: [
    { name: "GitHub", url: "https://github.com/kaecius" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/daniel-canadillas/" },
  ],
  about: {
    bio: "Ingeniero de software con mentalidad de investigador. Me mueve el trabajo que transforma la forma en que los equipos construyen: arquitecturas que no tienen dueño, tecnologías sin manual, problemas donde la solución no es evidente. Actualmente soy miembro del Enabling Team en Ideable, donde diseño arquitecturas, impulso I+D y potencio a los equipos para que entreguen con mayor velocidad y calidad. Especializado en desarrollo backend, infraestructura como código con Terraform y flujos de IA agentica — desde sistemas RAG hasta agentes de codificación autónomos.",
    quote: "Me centro en cerrar la brecha entre investigación y producción a través de la automatización, el diseño de sistemas y el aprendizaje continuo.",
  },
  currentlyExploring: [
    {
      title: "Arquitecturas agénticas",
      description: "Orquestación multi-agente, patrones de tool-use y flujos de codificación autónomos.",
    },
    {
      title: "RAG y recuperación de conocimiento",
      description: "Estrategias de embedding, búsqueda híbrida y chunking para codebases.",
    },
    {
      title: "Automatización de compliance en infraestructura",
      description: "Policy-as-code, testing con Terraform y enforcement automatizado de seguridad.",
    },
    {
      title: "Evaluación de LLMs",
      description: "Detección de alucinaciones, tradeoffs coste-rendimiento y diseño de benchmarks.",
    },
  ],
  skills: [
    {
      category: "IA y Desarrollo Agentico",
      skills: [
        { name: "Flujos con LLM" },
        { name: "Sistemas RAG" },
        { name: "Sistemas de codificación agentica" },
        { name: "Web scraping" },
        { name: "Codex" },
        { name: "Claude Code" },
        { name: "OpenCode" },
        { name: "Prompt engineering" },
      ],
    },
    {
      category: "Arquitectura y Metodologías",
      skills: [
        { name: "Diseño de sistemas" },
        { name: "TDD" },
        { name: "Desarrollo guiado por especificaciones" },
        { name: "Cumplimiento ENS" },
        { name: "Mentoring" },
        { name: "Habilitación técnica" },
      ],
    },
    {
      category: "Cloud e Infra",
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
      category: "Lenguajes de Programación",
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
      category: "Bases de datos",
      skills: [
        { name: "PostgreSQL" },
        { name: "MySQL" },
        { name: "MongoDB" },
      ],
    },
    {
      category: "Certificaciones",
      skills: [
        { name: "AWS Cloud Practitioner" },
      ],
    },
    {
      category: "Idiomas",
      skills: [
        { name: "Español" },
        { name: "Inglés" },
        { name: "Portugués" },
      ],
    },
    {
      category: "Herramientas",
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
        { name: "Flujos Figma a código" },
      ],
    },
  ],
  education: [
    {
      schoolName: "UPV/EHU — Universidad del País Vasco",
      degree: "Grado en Ingeniería Informática",
      duration: "2017 - 2021",
      description: "Especialización en computación, algoritmos e inteligencia artificial.",
    },
    {
      schoolName: "Zabalburu Ikastetxea",
      degree: "Grado Superior en Desarrollo de Aplicaciones Web",
      duration: "2015 - 2017",
      description: "Especialización en tecnologías de desarrollo web y fundamentos de programación.",
    },
  ],
  experience: [
    {
      role: "Staff Software Engineer",
      company: "Ideable (Enabling Team)",
      companyUrl: "https://ideable.net/",
      date: "2026 - Actualidad",
      location: "Bilbao, España → Remoto",
      description: "Miembro del Enabling Team. Responsable de arquitectura transversal, I+D y habilitación técnica en toda la organización.",
      bullets: [
        "Definí y arranqué arquitecturas core para nuevos proyectos, permitiendo a los equipos iterar rápido sobre bases sólidas.",
        "Dirigí I+D interno en IA agentica: desarrollé un sistema asíncrono con agentes para resolución autónoma de issues de GitLab y revisión de merge requests.",
        "Creé un flujo agentico para el equipo de frontend que acelera la conversión de Figma a código.",
        "Diseñé e impartí talleres, cursos y charlas técnicas para fortalecer las capacidades de los equipos.",
        "Evalué tecnologías emergentes y validé su viabilidad para producción.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Ideable (Oficina Técnica)",
      companyUrl: "https://ideable.net/",
      date: "2021 - 2026",
      location: "Bilbao, España → Remoto",
      description: "Oficina Técnica encargada de los desarrollos más complejos y transversales, aquellos que los equipos regulares no podían abordar, cubriendo full-stack, DevOps, infraestructura e IA.",
      bullets: [
        "<strong>Infraestructura AWS con Cumplimiento ENS Alto</strong>: Diseñé e implementé completamente en Terraform una infraestructura multi-cuenta AWS (ALB, ECS, S3, RDS, etc.) cumpliendo los requisitos de nivel alto del Esquema Nacional de Seguridad (ENS).",
        "<strong>Plataforma VisualMLOps</strong>: Co-diseñé una plataforma que da autonomía a expertos sin conocimientos de IA (p. ej., equipos de calidad de fábrica) para entrenar, mantener y desplegar modelos de Computer Vision sin escribir código.",
        "<strong>Detección de Anomalías en Cuidado de Mayores</strong>: Desarrollé un sistema basado en IA con sensores no intrusivos para monitorizar rutinas diarias y detectar patrones anómalos en el comportamiento de personas mayores.",
        "<strong>Visor de Imágenes de Alta Resolución</strong>: Diseñé la arquitectura de un sistema de visualización para ver imágenes en alta resolución con experiencia tipo Google Maps.",
        "<strong>Gestión de Dispositivos IoT</strong>: Diseñé una arquitectura AWS IoT Core con Lambda, bases de datos y frontend Vaadin para gestionar dispositivos de seguridad conectados a escala.",
        "Mentoricé a becarios.",
        "Gestioné cualquier escalado técnico de los equipos — desde infraestructura hasta revisión de código.",
      ],
    },
    {
      role: "Software Engineering Intern",
      company: "Ideable",
      companyUrl: "https://ideable.net/",
      date: "2021",
      location: "Bilbao, España",
      description: "Participé en el desarrollo de plataformas de software y herramientas internas.",
      bullets: [
        "Colaboré en el desarrollo backend con Java y Grails.",
        "Participé en procesos ágiles y revisiones de código.",
      ],
    },
    {
      role: "Software Developer",
      company: "Zylk",
      companyUrl: "https://www.zylk.net/",
      date: "2019 - 2021",
      location: "Bilbao, España",
      description: "Desarrollé aplicaciones web y mantuve sistemas existentes para clientes empresariales.",
      bullets: [
        "Construí y mantuve aplicaciones PHP y Laravel.",
        "Trabajé con bases de datos SQL y optimicé el rendimiento de las consultas.",
      ],
    },
  ],
  projects: [
    {
      title: "Portfolio Personal",
      description: "Portfolio con estilo terminal construido con Astro 5, tema oscuro/claro, i18n y componentes UI personalizados.",
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
