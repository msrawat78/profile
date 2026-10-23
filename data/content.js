/**
 * ============================================================
 * SITE CONTENT DATA
 * ============================================================
 * Edit this file to update your portfolio website content.
 * The frontend reads from this object and renders automatically.
 * No HTML editing required for content changes.
 * ============================================================
 */

window.SITE_DATA = {

  /* ----------------------------------------------------------
   * META & SEO
   * ---------------------------------------------------------- */
  meta: {
    siteTitle: "Manvirender Singh Rawat — Data & AI Consultant, Trainer & Practitioner",
    siteDescription: "Independent Data & AI Consultant with 18+ years of experience in analytics strategy, AI/LLM implementation, business intelligence, and enterprise digital transformation. Corporate trainer with 10,000+ professionals trained.",
    siteUrl: "https://msrawat78.github.io",  // UPDATE with your actual GitHub Pages URL
    ogImage: "assets/images/og-card.png",     // Social share preview image
    faviconPath: "assets/icons/favicon.ico",
    language: "en",
    author: "Manvirender Singh Rawat",
  },

  /* ----------------------------------------------------------
   * PERSONAL INFO & HERO
   * ---------------------------------------------------------- */
  hero: {
    name: "Manvirender Singh Rawat",
    shortName: "Manu",
    title: "Fractional CDO | Data & AI Transformation",
    headline: "Turn Messy Data Into Trusted Decisions - Without the Agency Overhead.",
    subtext: "Helping growing companies build automated BI infrastructure, scalable data pipelines, and production-ready AI workflows in weeks, not months. 18+ years of enterprise transformation experience and 10,000+ professionals trained.",
    availability: "Remote / Hybrid / Fractional / Full-time",
    ctaButtons: [
      { label: "Book a 20-minute Strategy Call", link: "https://calendly.com/klaymatrix-support/30min", icon: "calendar",  style: "primary" },
      { label: "Explore Training",     link: "#training",                                     icon: "education", style: "secondary" },
      { label: "View Projects",        link: "#projects",                                     icon: "code",      style: "outline" },
    ],
    // Photo / headshot — add path when available
    photo: "assets/images/profile-photo.jpg", // UPDATE: add your professional photo
  },

  /* ----------------------------------------------------------
   * NAVIGATION
   * ---------------------------------------------------------- */
  nav: {
    logo: "MSR",  // Short logo text (or path to logo image)
    links: [
      { label: "Home",                 href: "#home" },
      { label: "Services",            href: "#services" },
      { label: "Training",            href: "#training" },
      { label: "Projects",            href: "#projects" },
      { label: "Built",               href: "#built" },
      { label: "Experience",          href: "#experience" },
      { label: "Ideas",               href: "#ideas" },
      { label: "Contact",             href: "#contact" },
    ],
  },

  /* ----------------------------------------------------------
   * SECTION: WHAT I DO (SERVICES)
   * ---------------------------------------------------------- */
  services: {
    sectionTitle: "How We Can Work Together",
    sectionIntro: "Looking for a senior practitioner without the layers of a traditional agency? I partner directly with teams for rapid advisory sprints, custom data/AI architecture, and hands-on corporate training.",
    engagementPaths: [
      {
        title: "Data & BI Architecture Audit - 1 Week",
        description: "Review your stack, bottlenecks, and spreadsheet-heavy workflows; receive a prioritized architecture roadmap and cost-efficiency plan.",
      },
      {
        title: "AI Automation & LLM Jumpstart - 2 Weeks",
        description: "Scope and build a working LLM or automation prototype inside your environment, with a clear path to production.",
      },
      {
        title: "Fractional CDO / Analytics Leadership",
        description: "Ongoing part-time data leadership: strategy, team direction, governance, architecture decisions, and delivery oversight.",
      },
    ],
    items: [
      {
        title: "Data Analytics & Business Intelligence",
        description: "KPI dashboards, MIS reporting, Power BI, SAP Analytics Cloud, Tableau. Building a single source of truth your org actually believes.",
        icon: "chart-bar",
        audiences: ["startup", "enterprise", "technical"], solutions: ["analytics"],
        keywords: ["Power BI", "Tableau", "SAP Analytics Cloud", "Spotfire", "KPI Dashboards"],
      },
      {
        title: "Data Engineering & Integration",
        description: "ETL pipelines, Azure Data Factory, medallion architecture, API integrations. Migrating fragile Excel dependencies into structured, automated BI.",
        icon: "database",
        audiences: ["enterprise", "technical"], solutions: ["analytics", "ai"],
        keywords: ["Azure Data Factory", "ETL Pipelines", "Medallion Architecture", "PostgreSQL", "MySQL"],
      },
      {
        title: "Data Science & Predictive Modeling",
        description: "Regression, classification, neural networks, time series, statistical modelling. Turning data into decisions with rigorous methodology.",
        icon: "brain",
        audiences: ["startup", "enterprise", "technical"], solutions: ["analytics", "ai"],
        keywords: ["Scikit-learn", "Python", "R", "Statistical Modelling", "Time Series"],
      },
      {
        title: "AI-Enabled Automation & Applications",
        description: "LLM orchestration, ChatGPT API and Claude API integration, prompt engineering, Power BI + Claude automation for intelligent reporting.",
        icon: "robot",
        audiences: ["startup", "enterprise", "technical"], solutions: ["ai"],
        keywords: ["LLM Orchestration", "ChatGPT API", "Claude API", "Prompt Engineering"],
      },
      {
        title: "Advisory & Project Support",
        description: "Solution architecture, technical proposals, effort estimation, pre-sales support, and fractional CDO engagements for growing companies.",
        icon: "handshake",
        audiences: ["startup", "enterprise"], solutions: ["ai", "analytics"],
        keywords: ["Solution Architecture", "Pre-sales", "Fractional CDO", "Agile Delivery"],
      },
    ],
  },

  /* ----------------------------------------------------------
   * SECTION: TRAINING & WORKSHOPS
   * ---------------------------------------------------------- */
  training: {
    sectionTitle: "Training & Workshops",
    sectionIntro: "Practical, hands-on training designed for working professionals. No slides-only sessions — every workshop involves real data, real tools, and real problem-solving.",
    highlights: [
      "10,000+ professionals trained across corporate, academic, and government settings",
      "Visiting faculty at TISS Mumbai for 7+ years — Data Science curriculum for postgraduate cohorts",
      "Visiting Faculty at SCMHRD Pune",
      "Lead Trainer for national-level government workshops (MoHFW / WHO / FHI 360)",
      "Corporate hackathon design and facilitation",
    ],
    offerings: [
      {
        title: "Power BI & Business Intelligence",
        description: "From fundamentals to DAX, data modeling, and enterprise dashboard design. Tailored for analysts and business teams.",
        format: "Workshop / Bootcamp",
        duration: "1–5 days",
      },
      {
        title: "Python for Data Analysis",
        description: "Hands-on Python programming with pandas, numpy, and visualization. Designed for professionals transitioning into analytics.",
        format: "Bootcamp / Cohort",
        duration: "2–8 weeks",
      },
      {
        title: "Data Science & Machine Learning",
        description: "Regression, classification, model evaluation, and real-world ML workflows. Emphasis on practical, job-ready skills.",
        format: "Bootcamp / Cohort",
        duration: "4–12 weeks",
      },
      {
        title: "Applied AI & Prompt Engineering",
        description: "LLM orchestration, API integration, chain-of-thought prompting, context memory, and tokenization. For teams building AI-enabled workflows.",
        format: "Workshop / Masterclass",
        duration: "1–3 days",
      },
      {
        title: "Analytics Strategy for Leaders",
        description: "Data architecture audits, BI maturity assessment, building analytics teams, and defining KPI frameworks. For CXOs and senior managers.",
        format: "Advisory Workshop",
        duration: "Half-day / Full-day",
      },
    ],
    institutions: ["TISS Mumbai", "SCMHRD Pune", "JIPMER Puducherry", "Various Corporate Clients"],
  },

  /* ----------------------------------------------------------
   * SECTION: SELECTED PROJECTS
   * ---------------------------------------------------------- */
  projects: {
    sectionTitle: "Selected Projects",
    sectionIntro: "Selected hands-on engagements framed around the challenge, delivery, and outcome. Tools and platforms are listed on every project.",
    items: [
      {
        title: "Enterprise BI Infrastructure & Analytics Function",
        client: "PPN Solutions",
        role: "Fractional Head of Data Analytics",
        period: "2023 – 2026",
        problem: "Organization needed a complete data analytics function — from architecture to BI infrastructure to delivery governance.",
        contribution: "Owned end-to-end analytics: designed Azure-based pipelines, built Power BI reporting on medallion architecture, created SAP Analytics Cloud reports, and implemented Power BI + Claude API automation.",
        tech: ["Azure Data Factory", "Power BI", "SAP Analytics Cloud", "SAP SuccessFactors", "Claude API", "Medallion Architecture"],
        audiences: ["enterprise", "technical"], solutions: ["analytics", "ai"],
        type: "consulting",
        // demoUrl: "",  // Add if available
        // repoUrl: "",  // Add if available
      },
      {
        title: "Analytics Practice — Multi-Client Consulting",
        client: "Klaymatrix Data Labs",
        role: "Founder & Head of Data Science",
        period: "2017 – Present",
        problem: "Multiple organizations needed analytics capabilities — from data engineering to production AI deployments — without hiring full teams.",
        contribution: "Built analytics practice from scratch. Led technical pre-sales, designed solution architectures, developed Python + ChatGPT API orchestration pipelines, deployed production AWS environments. Clients included Ernst & Young India, Microsave Consulting, Mergermarkets/Acuris, ORATS (USA).",
        tech: ["Python", "ChatGPT API", "AWS EC2", "Load Balancer", "Route 53", "Power BI"],
        audiences: ["startup", "enterprise", "technical"], solutions: ["analytics", "ai"],
        type: "consulting",
      },
      {
        title: "National Health Accounts for India",
        client: "NHSRC, MoHFW, Govt. of India",
        role: "Data Consultant (Core Team)",
        period: "2015 – 2016",
        problem: "India needed its first national health accounts — requiring configuration of WHO's global data production tool, massive data aggregation, and policy dashboards for government decision-makers.",
        contribution: "Configured WHO global data production tool for India. Designed automated aggregation pipelines and validation frameworks. Built policy dashboard. Contributed to flagship published Government of India reports.",
        tech: ["Python", "Data Pipelines", "Dashboard Design", "WHO Data Tools"],
        audiences: ["enterprise", "technical"], solutions: ["analytics"],
        type: "consulting",
        publications: [
          "National Health Accounts Estimates for India 2013–14",
          "National Health Accounts Guidelines for India 2016",
          "Health Insurance Expenditures in India 2013–14",
        ],
      },
      {
        title: "Strategic Information System — WHO",
        client: "World Health Organization",
        role: "Independent Consultant",
        period: "2016 – 2017",
        problem: "A national strategic information program needed data collection systems, automated file generation, dashboards, and data triangulation to strengthen cluster-level information systems.",
        contribution: "Designed data collection system, automated data file generation, built dashboards, and led data triangulation and situation analysis.",
        tech: ["Data Architecture", "Dashboard Design", "Automated Reporting"],
        audiences: ["enterprise", "technical"], solutions: ["analytics"],
        type: "consulting",
      },
      {
        title: "National-Scale M&E Database Architecture",
        client: "FHI 360",
        role: "Data Consultant",
        period: "2012 – 2015",
        problem: "National program needed database architecture covering 600+ geographic units with automated state-level reporting — replacing entirely manual processes.",
        contribution: "Designed national-scale database architecture and automated state-level report generation across 600+ geographic units, replacing entirely manual processes. Delivered national-level training for government M&E officers and epidemiologists.",
        tech: ["Database Architecture", "Python", "Automated Reporting", "Training"],
        audiences: ["enterprise", "technical"], solutions: ["analytics", "training"],
        type: "consulting",
      },
      {
        title: "Quantitative Options Research Tools",
        client: "ORATS (USA)",
        role: "Quantitative Analyst",
        period: "2013 – 2016",
        problem: "A premier options analytics vendor needed quantitative tools for index-based research and dividend computation.",
        contribution: "Developed quantitative tools for index options research, designed dividend computation algorithm, set up cloud VM environments.",
        tech: ["Python", "Quantitative Finance", "Cloud VMs", "Algorithm Design"],
        audiences: ["startup", "technical"], solutions: ["analytics", "ai"],
        type: "consulting",
      },
    ],
  },

  /* ----------------------------------------------------------
   * SECTION: THINGS I'VE BUILT
   * ---------------------------------------------------------- */
  built: {
    sectionTitle: "Things I've Built",
    sectionIntro: "Hands-on AI tools and interactive dashboards — some production, some prototypes. All built hands-on.",
    items: [
      {
        title: "AI Resume Builder",
        description: "Create a resume from scratch or upload an existing one to refine it with AI. The app uses conversational assistance to help shape experience into a clear, polished resume.",
        label: "Production App",
        image: "project snippets/ai resume builder.png",
        tech: ["Python", "Streamlit", "ChatGPT API", "Claude API"],
        demoUrl: "https://ai-resume-builder-manu.streamlit.app/",
        repoUrl: "https://github.com/msrawat78",  // UPDATE with specific repo URL if different
      },
      {
        title: "Content Creator",
        description: "Turn ideas into ready-to-share content in formats such as social carousels, cheatsheets, and learning roadmaps, using reusable HTML templates.",
        label: "AI Content Tool",
        image: "project snippets/content creator.png",
        tech: ["Python", "HTML", "Jinja2 Templates"],
      },
      {
        title: "DataVet",
        description: "A lightweight data cleaning and transformation tool for preparing messy data. Regex-powered bulk cleaning helps apply consistent fixes across many values at once.",
        label: "Data Tool",
        image: "project snippets/datavet.png",
        tech: ["Python", "Regular Expressions"],
      },
      {
        title: "SportOps",
        description: "A sports club booking app that helps manage member reservations and coordinate access to club activities.",
        label: "Web App",
        image: "project snippets/sportops.png",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
      },
    ],
  },

  /* ----------------------------------------------------------
   * SECTION: EXPERIENCE & EXPERTISE
   * ---------------------------------------------------------- */
  experience: {
    sectionTitle: "Experience & Expertise",
    sectionIntro: "18+ years across consulting, enterprise, government, and academia — with a consistent thread of turning messy data into trusted decisions.",

    timeline: [
      {
        role: "Founder & Head of Data Science",
        org: "Klaymatrix Data Labs",
        period: "Apr 2017 – Present",
        type: "founder",
      },
      {
        role: "Head of Data Analytics (Fractional)",
        org: "PPN Solutions",
        period: "Sep 2023 – May 2026",
        type: "fractional",
      },
      
      {
        role: "Head of Data Science",
        org: "Cynoteck Technology Solutions",
        period: "May 2023 – Mar 2024",
        type: "leadership",
      },
      {
        role: "Data Science Practitioner Faculty",
        org: "Tata Institute of Social Sciences (TISS)",
        period: "Mar 2018 – May 2025",
        type: "academic",
      },
      {
        role: "Visiting Faculty",
        org: "SCMHRD Pune",
        period: "Jul 2021 – Sep 2021",
        type: "academic",
      },
      {
        role: "Independent Consultant",
        org: "World Health Organization (WHO)",
        period: "Nov 2016 – Mar 2017",
        type: "consulting",
      },
      {
        role: "Quantitative Analyst",
        org: "ORATS (USA)",
        period: "Dec 2013 – Oct 2016",
        type: "consulting",
      },
      {
        role: "Data Consultant",
        org: "NHSRC, MoHFW, Govt. of India",
        period: "Aug 2015 – Aug 2016",
        type: "consulting",
      },
      {
        role: "Data Consultant",
        org: "FHI 360",
        period: "Dec 2012 – May 2015",
        type: "consulting",
      },
      {
        role: "Business Analyst (reporting to Group CTO)",
        org: "Bharti Airtel Ltd.",
        period: "Nov 2009 – Sep 2012",
        type: "corporate",
      },
      {
        role: "Research Associate, Investment Research",
        org: "Evalueserve Pvt. Ltd.",
        period: "Mar 2007 – Sep 2009",
        type: "corporate",
      },
    ],

    education: [
      {
        degree: "PGDM (Finance)",
        institution: "Symbiosis Institute of Management Studies, Pune",
        period: "2005 – 2007",
      },
      {
        degree: "B.Tech. — Production Engineering",
        institution: "College of Technology, G.B. Pant University, Pantnagar",
        period: "1999 – 2003",
      },
    ],

    certifications: [
      "Kaggle Competitions",
      "Python for Data Analysis",
      "Six Sigma (Project-based)",
      "Agile / Scrum",
    ],

    industries: [
      "Finance & Investment Research",
      "Healthcare & Public Health",
      "Telecom",
      "HR & SuccessFactors",
      "Government & Development Sector",
      "Manufacturing",
    ],

    coreSkills: [
      { category: "Leadership", skills: "Fractional CDO, Analytics Vertical Building, Team Building, P&L Management, Agile Delivery" },
      { category: "AI & LLM", skills: "LLM Orchestration, ChatGPT API, Claude API, Power BI + Claude, Prompt Engineering" },
      { category: "Cloud", skills: "AWS (EC2, Load Balancer, Route 53), Azure (ADF, Pipelines), GCP" },
      { category: "Data Engineering", skills: "ETL Pipelines, Azure Data Factory, Medallion Architecture, API Integration, MySQL, PostgreSQL" },
      { category: "BI & Visualization", skills: "Power BI, SAP Analytics Cloud, Tableau, Spotfire, KPI Dashboards" },
      { category: "ML & Analytics", skills: "Scikit-learn, Regression, Classification, Neural Networks, Time Series" },
      { category: "Programming", skills: "Python, R, VBA/Macros, Advanced Excel, Process Automation" },
      { category: "Commercial", skills: "Solution Architecture, Technical Proposals, Effort Estimation, Pre-sales, Client Management" },
    ],

    publications: [
      {
        title: "UN-Water Synthesis Report on Water and Sanitation (SDG Goal 6)",
        publisher: "United Nations",
        year: "2018",
      },
      {
        title: "National Health Accounts Estimates for India 2013–14",
        publisher: "NHSRC, MoHFW, Govt. of India",
        year: "2016",
        note: "Core Team",
      },
      {
        title: "National Health Accounts Guidelines for India 2016",
        publisher: "NHSRC, MoHFW, Govt. of India",
        year: "2016",
        note: "Core Team",
      },
      {
        title: "Health Insurance Expenditures in India 2013–14",
        publisher: "NHSRC, MoHFW, Govt. of India",
        year: "2016",
        note: "Core Team",
      },
    ],

    trustStrip: [
      { label: "Years Experience", value: "18+" },
      { label: "Professionals Trained", value: "10,000+" },
      { label: "B.Tech & MBA", value: "✓" },
      { label: "Published Reports", value: "UN & Govt. of India" },
    ],
  },

  /* ----------------------------------------------------------
   * SECTION: IDEAS & CONTENT
   * ---------------------------------------------------------- */
  ideas: {
    sectionTitle: "Ideas & Content",
    sectionIntro: "Sharing practical insights on data, analytics, and AI through video tutorials, demonstrations, and educational content.",
    youtube: {
      channelName: "Data Science with Manu",
      channelUrl: "https://youtube.com/@DatasciencewithManu",
      // Featured videos — add YouTube video IDs or full URLs
      featuredVideos: [
        // {
        //   title: "Video Title",
        //   videoId: "YOUTUBE_VIDEO_ID",  // e.g., "dQw4w9WgXcQ"
        //   description: "Brief description of what the video covers.",
        // },
      ],
    },
    // Articles, blog posts, or other content
    articles: [
      // {
      //   title: "Article Title",
      //   url: "https://...",
      //   description: "Brief description.",
      //   platform: "Medium",  // or "LinkedIn", "Blog", etc.
      // },
    ],
  },

  /* ----------------------------------------------------------
   * SECTION: CONTACT
   * ---------------------------------------------------------- */
  contact: {
    sectionTitle: "Let's Talk",
    sectionIntro: "Whether you need a fractional data leader, a hands-on consultant for a specific project, or a corporate trainer for your team — I'm happy to discuss.",
    email: "msrawat78@gmail.com",
    phone: "+91-9971796261",  // Set to null if you don't want phone displayed on site
    calendly: "https://calendly.com/klaymatrix-support/30min",
    calendlyLabel: "Book a Free 20-min Discussion",
    socialLinks: [
      { platform: "LinkedIn",  url: "https://linkedin.com/in/manvirender-singh-rawat", icon: "linkedin" },
      { platform: "GitHub",    url: "https://github.com/msrawat78",                    icon: "github" },
      { platform: "YouTube",   url: "https://youtube.com/@DatasciencewithManu",         icon: "youtube" },
    ],
    companyLink: {
      label: "Klaymatrix Data Labs",
      url: "https://www.klaymatrix.com",
      description: "For company-led consulting and structured training offerings",
    },
    academyLink: {
      label: "Klaymatrix Academy",
      url: "https://www.klaymatrix.com",  // UPDATE with actual academy URL if different
      description: "Self-paced training courses",
    },
  },

  /* ----------------------------------------------------------
   * FOOTER
   * ---------------------------------------------------------- */
  footer: {
    copyright: "Manvirender Singh Rawat",
    tagline: "Built with care, not with frameworks.",
    // Additional footer links
    links: [
      { label: "Klaymatrix Data Labs", url: "https://www.klaymatrix.com" },
    ],
  },
};

