export const DEFAULT_CONTENT = {
  general: {
    name: 'Naledi Tshapi',
    tagline: 'Final-Year Information Systems Student',
    heroBio: 'Aspiring Software Developer, QA Tester, and Systems Analyst with a passion for solving real-world problems through technology, data, and clear communication.',
    roles: ['Software Developer', 'QA Tester', 'Systems Analyst'],
    email: 'ntshapi@outlook.com',
    github: 'https://github.com/naleditshapi',
    linkedin: 'https://linkedin.com/in/naleditshapi',
    location: 'Cape Town, South Africa',
    availability: 'Availabllity Depends on the Opportunity — Let’s Connect!',
  },
  about: {
    paragraphs: [
      "I'm a final-year Information Systems student with a strong foundation in business analysis, software quality assurance, and systems design. I enjoy bridging the gap between technical teams and business stakeholders to deliver solutions that actually work.",
      "My academic journey has equipped me with hands-on experience in requirements gathering, process modelling, data analysis, and testing methodologies. I'm passionate about using technology to solve meaningful problems — whether that's through clean data pipelines, well-structured test plans, or insightful dashboards.",
      "I'm actively seeking entry-level roles as a Business Analyst, QA Tester, Systems Analyst, or Data Analyst where I can grow, contribute, and make a real impact from day one.",
    ],
    stats: [
      { value: '4th', label: 'Year Student' },
      { value: '10+', label: 'Projects Completed' },
      { value: '3+', label: 'Tech Stacks' },
      { value: '2025', label: 'Graduating' },
    ],
  },
  skills: [
    {
      title: 'Technical Skills',
      icon: '💻',
      skills: [
        { name: 'Python', level: 80 },
        { name: 'SQL', level: 85 },
        { name: 'JavaScript', level: 70 },
        { name: 'HTML & CSS', level: 85 },
        { name: 'React', level: 65 },
      ],
    },
    {
      title: 'Business & Systems',
      icon: '📊',
      skills: [
        { name: 'Requirements Gathering', level: 90 },
        { name: 'Process Modelling (BPMN)', level: 80 },
        { name: 'UML Diagrams', level: 75 },
        { name: 'Agile / Scrum', level: 80 },
        { name: 'QA & Testing', level: 85 },
      ],
    },
    {
      title: 'Tools & Platforms',
      icon: '🔧',
      skills: [
        { name: 'Jira', level: 75 },
        { name: 'Power BI', level: 70 },
        { name: 'Microsoft Excel', level: 90 },
        { name: 'Figma', level: 65 },
        { name: 'Git & GitHub', level: 75 },
      ],
    },
  ],
  projects: [
    {
      title: 'Inventory Management System',
      category: 'Systems',
      description: 'Designed and built a full inventory management system with CRUD operations, stock alerts, and supplier tracking for a small retail business.',
      tech: ['Python', 'SQLite', 'Tkinter'],
      github: 'https://github.com/yourusername/inventory-system',
      demo: '',
      emoji: '📦',
      featured: true,
    },
    {
      title: 'Sales Dashboard',
      category: 'Data',
      description: 'Developed an interactive Power BI dashboard analysing 3 years of sales data, surfacing trends, regional breakdowns, and KPIs for management review.',
      tech: ['Power BI', 'Excel', 'SQL'],
      github: '',
      demo: 'https://yourname-dashboard.netlify.app',
      emoji: '📊',
      featured: true,
    },
    {
      title: 'E-Commerce Testing Suite',
      category: 'QA',
      description: 'Created a comprehensive QA test plan and automated test scripts for an e-commerce platform, covering functional, regression, and UAT testing.',
      tech: ['Selenium', 'Python', 'Jira'],
      github: 'https://github.com/yourusername/ecommerce-qa',
      demo: '',
      emoji: '🧪',
      featured: true,
    },
    {
      title: 'University Course Registration Portal',
      category: 'Systems',
      description: 'Conducted requirements analysis and built a prototype web portal for course registration, including UML diagrams and process flows.',
      tech: ['React', 'Node.js', 'MySQL'],
      github: 'https://github.com/yourusername/course-portal',
      demo: 'https://course-portal-demo.vercel.app',
      emoji: '🎓',
      featured: false,
    },
    {
      title: 'Student Performance Analyser',
      category: 'Data',
      description: 'Built a Python data analysis tool that processes student results, generates visualizations, and flags at-risk students using statistical thresholds.',
      tech: ['Python', 'Pandas', 'Matplotlib'],
      github: 'https://github.com/yourusername/student-analyser',
      demo: '',
      emoji: '📈',
      featured: false,
    },
    {
      title: 'Bug Tracking Web App',
      category: 'QA',
      description: 'Developed a lightweight bug-tracking application with priority levels, status workflows, and email notifications for small dev teams.',
      tech: ['React', 'Firebase', 'Tailwind CSS'],
      github: 'https://github.com/yourusername/bug-tracker',
      demo: 'https://bug-tracker-demo.netlify.app',
      emoji: '🐛',
      featured: false,
    },
  ],
  resume: {
    highlights: [
      { icon: '🎓', title: 'BSc Information Systems', subtitle: 'University of Cape Town · 2022 – 2025' },
      { icon: '💼', title: 'IT Intern', subtitle: 'Company Name · Jan 2024 – Jun 2024' },
      { icon: '🏆', title: "Dean's Merit List", subtitle: 'Academic Excellence · 2023' },
      { icon: '📜', title: 'ISTQB Foundation Level', subtitle: 'Software Testing Certification · 2024' },
    ],
    ctaText: 'Want the full picture? Download my CV for a detailed overview of my education, experience, and skills.',
  },
  testimonials: [
    {
      name: 'Dr. Sarah Nkosi',
      role: 'Lecturer, Information Systems',
      avatar: 'SN',
      quote: 'An exceptionally diligent student who consistently demonstrates a strong ability to analyse complex business problems and propose structured, practical solutions. A natural communicator.',
    },
    {
      name: 'James Okonkwo',
      role: 'IT Manager · Internship Supervisor',
      avatar: 'JO',
      quote: 'During their internship, they quickly grasped our systems, contributed meaningfully to our QA process, and proactively identified several workflow inefficiencies. A pleasure to work with.',
    },
    {
      name: 'Amira Petersen',
      role: 'Team Lead · Group Project',
      avatar: 'AP',
      quote: 'Reliable, detail-oriented, and always prepared. They took ownership of our requirements documentation and helped keep the whole team on track. Would recommend without hesitation.',
    },
  ],
  blog: [
    {
      id: 'what-is-business-analysis',
      title: 'What Is Business Analysis — and Why It Matters',
      excerpt: 'Business analysis is often misunderstood as just "gathering requirements." In reality, it sits at the intersection of technology and strategy, and it is one of the most critical roles in any project.',
      content: `Business analysis is often misunderstood as just "gathering requirements." In reality, it sits at the intersection of technology and strategy, and it is one of the most critical roles in any project.

As a Business Analyst, your core job is to understand a problem from the business perspective and translate it into something a technical team can build. This sounds simple, but it requires a rare blend of skills: communication, critical thinking, documentation, and a working knowledge of both business processes and technology.

**Why it matters**

Projects fail for many reasons, but one of the most common is a disconnect between what stakeholders want and what gets built. The BA sits in that gap. By thoroughly eliciting, analysing, and documenting requirements, a good BA ensures that the development team builds the right thing — not just a well-built thing.

**Skills that matter most**

From my studies and internship experience, the skills that make a BA truly effective are: active listening (hearing what stakeholders mean, not just what they say), the ability to model processes clearly using tools like BPMN and UML, and the discipline to write requirements that are testable and unambiguous.

**Getting started**

If you're interested in business analysis as a career, start by reading the BABOK guide, get familiar with process modelling tools, and look for opportunities to bridge the gap between people — even in your current role or studies. The experience of translating a fuzzy business problem into a clear solution is incredibly rewarding.`,
      date: '2025-03-10',
      tags: ['Business Analysis', 'Career'],
      readTime: 4,
    },
    {
      id: 'qa-testing-fundamentals',
      title: 'QA Testing Fundamentals Every Developer Should Know',
      excerpt: 'Quality assurance is not just about finding bugs. It is about building a culture of quality into every stage of the software development lifecycle.',
      content: `Quality assurance is not just about finding bugs. It is about building a culture of quality into every stage of the software development lifecycle.

When I started my QA internship, I quickly realised that testing is far more than clicking around an application and reporting what breaks. A structured QA process involves test planning, test case design, execution, defect tracking, and reporting — and each step requires both technical know-how and clear communication.

**The testing pyramid**

A core concept in QA is the testing pyramid. At the base are unit tests — fast, cheap, and numerous. In the middle are integration tests. At the top are UI/end-to-end tests — valuable but slow and expensive. Good QA strategy relies heavily on the base and is judicious about the top.

**Test case design**

Writing effective test cases is a skill. A good test case has a clear objective, pre-conditions, step-by-step instructions, and an expected result. When I was building the e-commerce test suite, I learned to think about equivalence partitioning and boundary value analysis — techniques that help you test smarter, not just more.

**Tools worth knowing**

For automated testing, Selenium (for web UI) and pytest (for Python) are strong starting points. For test management and defect tracking, Jira and TestRail are industry standards. Even if you never write a line of automation, understanding these tools makes you a better collaborator with any QA team.

**The mindset shift**

The most important lesson: think like a user who wants to break the app, not like a developer who wants it to pass. That mindset shift alone will make you dramatically more effective.`,
      date: '2025-02-20',
      tags: ['QA Testing', 'Software Development'],
      readTime: 5,
    },
    {
      id: 'sql-for-data-analysis',
      title: 'SQL for Data Analysis: Where to Start',
      excerpt: 'SQL is arguably the most useful skill a data analyst can have. It is not glamorous, but virtually every company stores data in a relational database — and SQL is how you get to it.',
      content: `SQL is arguably the most useful skill a data analyst can have. It is not glamorous, but virtually every company stores data in a relational database — and SQL is how you get to it.

When I took my first database module, SQL felt tedious. But once I started using it for real analysis — pulling sales data, joining customer tables, calculating KPIs — I understood why it is considered non-negotiable for data roles.

**Start with the fundamentals**

Before you reach for advanced features, get these absolutely solid: SELECT, WHERE, GROUP BY, ORDER BY, and JOIN. These five concepts cover 80% of day-to-day data analysis work. Practice writing queries on real datasets — Kaggle and the Google BigQuery public datasets are excellent resources.

**Aggregations are your superpower**

COUNT, SUM, AVG, MIN, MAX — combined with GROUP BY — let you summarise massive datasets instantly. Want to know total sales by region for each quarter? That is three lines of SQL. Understanding how aggregations interact with NULL values is a subtle but important detail.

**Window functions level you up**

Once you are comfortable with the basics, window functions are the next big leap. ROW_NUMBER, RANK, LAG, and LEAD let you perform calculations across rows without collapsing results — essential for running totals, rankings, and period-over-period comparisons.

**Build something real**

The best way to learn SQL is to use it on data you care about. Export your university results, analyse your personal finances, or find a dataset that interests you. The moment SQL becomes a tool for answering real questions, it stops feeling like a chore.`,
      date: '2025-01-15',
      tags: ['SQL', 'Data Analysis'],
      readTime: 6,
    },
  ],
};
