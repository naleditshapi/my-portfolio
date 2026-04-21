export const DEFAULT_CONTENT = {
  general: {
    name: 'Naledi Tshapi',
    tagline: 'Final-Year Information Systems Student',
    heroBio: 'Aspiring Software Developer, QA Tester, and Systems Analyst with a passion for solving real-world problems through technology, data, and clear communication.',
    roles: ['Software Developer', 'QA Tester', 'Systems Analyst'],
    email: 'ntshapi@outlook.com',
    github: 'https://github.com/naleditshapi',
    linkedin: 'www.linkedin.com/in/naledi-tshapi-70620825a/',
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

      // NEW: Case Study Fields
      caseStudy: {
        // Problem Statement - what was the challenge?
        problem: {
          context: 'A local retail business with 3 branches was managing inventory manually using spreadsheets.',
          pain_points: [
            'Stock levels were inconsistent across branches, leading to overselling',
            'No real-time visibility into inventory — managers had to call to check stock',
            'Manual reconciliation took 4 hours per week per branch',
            'Frequent stockouts and excess inventory in different locations',
          ],
          goal: 'Build a centralized system that gives real-time visibility into stock across all branches and automates reconciliation.',
        },

        // Solution - how did you solve it?
        solution: {
          overview: 'I designed a desktop application using Python and SQLite that centralizes inventory management across all three branches.',
          
          architecture: {
            description: 'The system uses a client-server model where each branch has a desktop application that syncs with a central SQLite database.',
            diagram: 'Diagram showing: Branch A/B/C (Desktop clients) → Network → Central SQLite DB → Reports',
          },
          
          key_features: [
            {
              name: 'Real-time Stock Tracking',
              description: 'Barcode scanning updates inventory instantly. When stock falls below threshold, system alerts the manager.',
              technical: 'Tkinter UI + SQLite triggers for real-time alerts',
            },
            {
              name: 'Multi-branch Synchronization',
              description: 'Transfers between branches are logged. If Branch A needs stock, they can request from Branch B with one click.',
              technical: 'Python networking library for data sync, transaction logging',
            },
            {
              name: 'Automated Reconciliation',
              description: 'Monthly physical count vs. system data comparison. Discrepancies flagged for investigation.',
              technical: 'Python script comparing counts, generating reports',
            },
            {
              name: 'Supplier Management',
              description: 'Low-stock alerts trigger automatic purchase orders to suppliers. History tracked for reorder patterns.',
              technical: 'SQLite relationships, Python automation',
            },
          ],

          design_decisions: [
            {
              decision: 'Why SQLite instead of a cloud database?',
              rationale: 'The retail business had limited IT infrastructure and inconsistent internet. SQLite works offline and syncs when connected.',
              tradeoff: 'Offline-first design meant building custom sync logic, but flexibility was worth it.',
            },
            {
              decision: 'Why Tkinter desktop app instead of web?',
              rationale: 'Managers needed offline functionality (no internet at all times), and barcode scanning works better on desktop.',
              tradeoff: 'Deployment is harder, but UX for barcode scanning is superior.',
            },
          ],
        },

        // Results - what impact did it have?
        results: {
          metrics: [
            {
              metric: 'Reconciliation Time',
              before: '4 hours/week per branch',
              after: '15 minutes/week automated',
              impact: '93% reduction in manual work',
            },
            {
              metric: 'Stock Accuracy',
              before: '68% (many discrepancies)',
              after: '99.2% (real-time scanning)',
              impact: 'Reduced shrinkage by estimated $2k/month',
            },
            {
              metric: 'Stockouts',
              before: '3-4 per week',
              after: '0-1 per month',
              impact: 'Improved customer satisfaction, reduced lost sales',
            },
            {
              metric: 'Order Lead Time',
              before: '2-3 days (manual orders)',
              after: '30 min (automated alerts)',
              impact: 'Better stock planning, fewer emergency orders',
            },
          ],

          testimonial: {
            quote: 'This system saved us hours every week. We no longer oversell or run out of stock unexpectedly.',
            author: 'Store Manager, Retail Business',
            date: 'June 2024',
          },

          lessons_learned: [
            'Offline-first design is critical for systems serving non-tech-forward users',
            'Barcode scanning dramatically improved data quality vs. manual entry',
            'Building custom sync logic is complex; next time I\'d consider offline-first frameworks',
            'User training is as important as the system itself — I spent a day training staff',
          ],
        },

        // Technical implementation details
        technical_depth: {
          architecture_diagram: 'ASCII or description of system design',
          
          database_schema: [
            {
              table: 'products',
              fields: 'id, name, sku, category, unit_price, reorder_level',
            },
            {
              table: 'inventory',
              fields: 'id, product_id, branch_id, quantity, last_updated',
            },
            {
              table: 'transactions',
              fields: 'id, product_id, branch_id, type (add/remove/transfer), quantity, timestamp, user_id',
            },
          ],

          challenges_overcome: [
            {
              challenge: 'Data sync between offline clients and central DB',
              solution: 'Implemented a merkle-tree based sync algorithm that only transfers deltas (changed records) rather than entire database.',
              technical_depth: 'This prevented massive sync times when bandwidth was limited.',
            },
            {
              challenge: 'Concurrent updates from multiple branches',
              solution: 'Used SQLite transaction isolation levels to ensure consistency. Added conflict resolution for simultaneous transfers.',
              technical_depth: 'Read the SQLite documentation on SERIALIZABLE transactions.',
            },
            {
              challenge: 'Barcode scanner integration with Tkinter',
              solution: 'Used serial port communication to read scanner input directly into the application.',
              technical_depth: 'Learned about event-driven programming to handle scanner input without blocking the UI.',
            },
          ],
        },
      },

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
      caseStudy: {
        problem: {
          context: 'Leadership relied on fragmented spreadsheets for weekly reporting, creating delays and inconsistent KPI definitions.',
          pain_points: [
            'Manual consolidation took several hours each week',
            'Regional comparisons were inconsistent across teams',
            'Late insight into underperforming categories',
            'Frequent formula errors in spreadsheet reports',
          ],
          goal: 'Provide a reliable self-service dashboard with shared KPI definitions and fast drill-down analysis.',
        },
        solution: {
          overview: 'I built a Power BI dashboard with a cleaned data model, reusable DAX measures, and role-focused pages for executives and analysts.',
          architecture: {
            description: 'Sales exports are cleaned in Power Query, modeled into fact and dimension tables, and visualized through interactive Power BI reports.',
            diagram: 'Data sources -> Power Query -> Star schema -> DAX KPIs -> Dashboard pages',
          },
          key_features: [
            {
              name: 'Executive KPI Overview',
              description: 'Revenue, margin, growth, and order value in one summary panel.',
              technical: 'DAX time-intelligence measures with variance indicators.',
            },
            {
              name: 'Regional and Product Drill-down',
              description: 'Filter by region, category, and date to isolate performance drivers.',
              technical: 'Cross-filtering visuals and hierarchical slicers.',
            },
            {
              name: 'Automated Refresh Workflow',
              description: 'Dashboard updates on schedule ahead of weekly meetings.',
              technical: 'Power BI Service refresh configuration and source credentials.',
            },
          ],
          design_decisions: [
            {
              decision: 'Use a star schema instead of flat tables',
              rationale: 'It improves performance and keeps measure logic maintainable.',
              tradeoff: 'More setup work at the start, better scalability long-term.',
            },
            {
              decision: 'Separate executive and analyst report pages',
              rationale: 'Different audiences need different levels of detail.',
              tradeoff: 'More page maintenance, but clearer usability.',
            },
          ],
        },
        results: {
          metrics: [
            {
              metric: 'Weekly Reporting Time',
              before: '6-8 hours manual compilation',
              after: '45 minutes data checks',
              impact: 'About 85% less reporting effort',
            },
            {
              metric: 'KPI Consistency',
              before: 'Different teams used different formulas',
              after: 'Single KPI model for all users',
              impact: 'Higher trust in decision meetings',
            },
            {
              metric: 'Decision Turnaround',
              before: 'Insights delayed by days',
              after: 'Interactive same-day analysis',
              impact: 'Faster commercial response',
            },
          ],
          testimonial: {
            quote: 'The dashboard replaced spreadsheet chaos with clear, reliable insights.',
            author: 'Sales Operations Lead',
            date: 'August 2024',
          },
          lessons_learned: [
            'Data modeling quality matters more than visual complexity',
            'Shared KPI definitions prevent stakeholder conflict',
            'Refresh reliability is essential for adoption',
          ],
        },
        technical_depth: {
          architecture_diagram: 'Source exports -> ETL -> semantic model -> KPI layer -> interactive reporting',
          challenges_overcome: [
            {
              challenge: 'Inconsistent product naming across source files',
              solution: 'Created mapping tables to standardize labels during ETL.',
              technical_depth: 'Applied merge logic in Power Query before model load.',
            },
            {
              challenge: 'Slow report visuals on large date ranges',
              solution: 'Optimized DAX and reduced high-cardinality fields.',
              technical_depth: 'Reworked measure logic to avoid unnecessary row iterators.',
            },
          ],
        },
      },
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
      caseStudy: {
        problem: {
          context: 'The e-commerce platform had frequent checkout regressions and no consistent release readiness criteria.',
          pain_points: [
            'Manual regression took too long each sprint',
            'Critical bugs escaped to production',
            'Defect reports were inconsistent and hard to reproduce',
            'No clear go/no-go quality signal before release',
          ],
          goal: 'Build a practical QA system that improves regression coverage, defect quality, and release confidence.',
        },
        solution: {
          overview: 'I implemented risk-based test planning, Selenium automation for high-value flows, and structured Jira defect workflows.',
          architecture: {
            description: 'Requirements map to manual and automated test cases; results and defects are tracked through a centralized QA board.',
            diagram: 'Requirements -> Test suite -> Execution -> Defect tracking -> Retest -> Release gate',
          },
          key_features: [
            {
              name: 'Automated Checkout Regression',
              description: 'Automated core user journeys including login, cart, checkout, and confirmation.',
              technical: 'Python Selenium framework with page object pattern.',
            },
            {
              name: 'Defect Workflow Standardization',
              description: 'Introduced severity levels and reproducible bug templates.',
              technical: 'Jira issue types, fields, and workflow statuses.',
            },
            {
              name: 'Release Readiness Dashboard',
              description: 'Tracked pass rates, blockers, and open critical defects per release.',
              technical: 'Jira filters and summary reporting.',
            },
          ],
          design_decisions: [
            {
              decision: 'Use page object model for test automation',
              rationale: 'It isolates UI locator changes and keeps tests maintainable.',
              tradeoff: 'Initial framework setup takes longer but reduces long-term maintenance.',
            },
            {
              decision: 'Blend manual exploratory and automated regression testing',
              rationale: 'Automation handles repetition while manual testing catches experience-level issues.',
              tradeoff: 'Requires disciplined test scope management.',
            },
          ],
        },
        results: {
          metrics: [
            {
              metric: 'Regression Execution Time',
              before: '2 days manual',
              after: '4 hours blended run',
              impact: 'Faster release validation',
            },
            {
              metric: 'Critical Production Defects',
              before: 'Recurring post-release issues',
              after: 'Lower frequency after QA gates',
              impact: 'Improved release stability',
            },
            {
              metric: 'Defect Triage Speed',
              before: 'Extended clarification cycles',
              after: 'Reproducible standardized tickets',
              impact: 'Faster fix turnaround',
            },
          ],
          testimonial: {
            quote: 'We shipped faster with fewer surprises because QA became measurable and repeatable.',
            author: 'Product Owner, E-Commerce Team',
            date: 'September 2024',
          },
          lessons_learned: [
            'Start automation with high-risk customer journeys',
            'Bug report quality directly affects engineering speed',
            'Clear quality gates reduce release anxiety',
          ],
        },
        technical_depth: {
          architecture_diagram: 'Test plan -> automation framework -> defect loop -> quality gate',
          challenges_overcome: [
            {
              challenge: 'Flaky UI tests from async rendering',
              solution: 'Replaced fixed waits with explicit wait strategies.',
              technical_depth: 'Used stable synchronization patterns across page objects.',
            },
            {
              challenge: 'High churn in frontend locators',
              solution: 'Centralized selectors and preferred resilient attributes.',
              technical_depth: 'Reduced brittle xpath dependencies.',
            },
          ],
        },
      },
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
      caseStudy: {
        problem: {
          context: 'Course enrollment relied on manual forms and ad-hoc approvals, causing registration errors and delays.',
          pain_points: [
            'Students lacked clear prerequisite validation',
            'Schedule clashes were found late',
            'Advisor approvals were scattered across emails',
            'Admin teams had limited enrollment visibility',
          ],
          goal: 'Prototype a registration portal that validates eligibility in real time and streamlines approvals.',
        },
        solution: {
          overview: 'I translated policy requirements into system rules and built a React + Node prototype with MySQL-backed validation.',
          architecture: {
            description: 'Frontend forms call backend validation endpoints that evaluate prerequisites, timetables, and enrollment constraints.',
            diagram: 'React UI -> Node API -> Validation rules -> MySQL enrollment data',
          },
          key_features: [
            {
              name: 'Prerequisite Rule Engine',
              description: 'Validates course eligibility before submission.',
              technical: 'Server-side rules mapped from policy documents.',
            },
            {
              name: 'Clash Detection',
              description: 'Detects timetable conflicts while selecting modules.',
              technical: 'Interval overlap checks on session times.',
            },
            {
              name: 'Advisor Approval Queue',
              description: 'Centralized exception handling and decision tracking.',
              technical: 'Role-based workflow with persisted statuses.',
            },
          ],
          design_decisions: [
            {
              decision: 'Enforce core rules on the backend',
              rationale: 'Critical academic constraints should not depend on client behavior.',
              tradeoff: 'More backend complexity for stronger data integrity.',
            },
            {
              decision: 'Build a prototype before full rollout',
              rationale: 'Stakeholders needed fast feedback on rule interpretation and UX.',
              tradeoff: 'Limited early scope, faster validation cycle.',
            },
          ],
        },
        results: {
          metrics: [
            {
              metric: 'Invalid Registration Submissions',
              before: 'Frequent manual corrections',
              after: 'Pre-submit rule checks',
              impact: 'Fewer avoidable admin interventions',
            },
            {
              metric: 'Approval Turnaround',
              before: 'Email-based approval delays',
              after: 'Single workflow queue',
              impact: 'Faster student feedback',
            },
            {
              metric: 'Constraint Visibility',
              before: 'Policy hidden in static documents',
              after: 'Inline guidance and validation messages',
              impact: 'Improved student experience',
            },
          ],
          testimonial: {
            quote: 'The prototype clearly demonstrated how policy and UX can work together in one registration flow.',
            author: 'Academic Administration Coordinator',
            date: 'October 2024',
          },
          lessons_learned: [
            'Domain workshops are essential for complex rule systems',
            'Actionable error messaging reduces support load',
            'Traceability from policy to implementation prevents ambiguity',
          ],
        },
        technical_depth: {
          architecture_diagram: 'Policy rules -> validation service -> registration workflow -> approval states',
          challenges_overcome: [
            {
              challenge: 'Ambiguous exception policies',
              solution: 'Converted policy text into decision tables with stakeholder sign-off.',
              technical_depth: 'Used scenario matrices for edge-case validation.',
            },
            {
              challenge: 'Complex timetable conflict logic',
              solution: 'Normalized session windows and applied deterministic overlap rules.',
              technical_depth: 'Compared interval boundaries across selected modules.',
            },
          ],
        },
      },
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
      caseStudy: {
        problem: {
          context: 'Support staff needed earlier and more consistent identification of at-risk students across modules.',
          pain_points: [
            'Manual analysis took too long each cycle',
            'No standard threshold for intervention',
            'Different data formats across modules',
            'Limited trend visibility over time',
          ],
          goal: 'Build a repeatable analysis pipeline that flags risk early and supports intervention planning.',
        },
        solution: {
          overview: 'I built a Python pipeline for cleaning student data, computing risk indicators, and producing clear advisor-ready visuals.',
          architecture: {
            description: 'Raw exports are standardized, scored using rule-based indicators, and rendered into charts and intervention lists.',
            diagram: 'CSV data -> Pandas cleaning -> Risk scoring -> Visual reports -> Intervention output',
          },
          key_features: [
            {
              name: 'Data Standardization Pipeline',
              description: 'Normalizes grades and handles missing/invalid records.',
              technical: 'Pandas preprocessing and validation steps.',
            },
            {
              name: 'Risk Scoring Engine',
              description: 'Flags students using threshold and trend-based indicators.',
              technical: 'Composite scoring with distribution-aware cutoffs.',
            },
            {
              name: 'Cohort Visual Diagnostics',
              description: 'Generates charts for trend and distribution analysis.',
              technical: 'Matplotlib templates for repeatable report outputs.',
            },
          ],
          design_decisions: [
            {
              decision: 'Prefer interpretable rules over black-box models',
              rationale: 'Academic stakeholders need transparent criteria for interventions.',
              tradeoff: 'Less model complexity but stronger trust and explainability.',
            },
            {
              decision: 'Template-driven reporting',
              rationale: 'Consistent visuals reduce interpretation errors and save time.',
              tradeoff: 'Less custom chart flexibility for faster recurring workflows.',
            },
          ],
        },
        results: {
          metrics: [
            {
              metric: 'Analysis Cycle Time',
              before: '2-3 days manual work',
              after: 'Under 1 hour automated run',
              impact: 'Earlier intervention opportunities',
            },
            {
              metric: 'Risk Detection Consistency',
              before: 'Ad-hoc identification',
              after: 'Standardized thresholds',
              impact: 'More consistent support decisions',
            },
            {
              metric: 'Reporting Effort',
              before: 'Manual chart building',
              after: 'Automated visual exports',
              impact: 'Reduced admin overhead',
            },
          ],
          testimonial: {
            quote: 'This analyser helped us spot declining performance earlier and prioritize support confidently.',
            author: 'Student Success Advisor',
            date: 'July 2024',
          },
          lessons_learned: [
            'Explainability is critical in student-facing analytics',
            'Data quality checks must be first-class pipeline steps',
            'Simple visuals improve decision uptake',
          ],
        },
        technical_depth: {
          architecture_diagram: 'Ingest -> clean -> score -> visualize -> action list',
          challenges_overcome: [
            {
              challenge: 'Inconsistent grading scales between modules',
              solution: 'Normalized all grades to a shared percentage scale.',
              technical_depth: 'Built conversion maps and validation checks for outliers.',
            },
            {
              challenge: 'False positives from isolated poor assessments',
              solution: 'Added trend weighting across multiple assessment points.',
              technical_depth: 'Used rolling performance deltas to stabilize risk flags.',
            },
          ],
        },
      },
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
      caseStudy: {
        problem: {
          context: 'Small teams were tracking bugs through chat and spreadsheets, leading to poor visibility and missed ownership.',
          pain_points: [
            'No single source of truth for defect status',
            'Inconsistent prioritization between team members',
            'Manual follow-ups for assignment updates',
            'No visibility into aging tickets',
          ],
          goal: 'Create a lightweight defect tracker with clear workflows, ownership, and notification support.',
        },
        solution: {
          overview: 'I built a React and Firebase app with structured ticket states, priority labels, and assignment notifications.',
          architecture: {
            description: 'Client app stores tickets in Firestore with authenticated access and cloud-function based event notifications.',
            diagram: 'React UI -> Firebase Auth/Firestore -> Cloud Functions -> Email notifications',
          },
          key_features: [
            {
              name: 'Workflow-Based Ticket States',
              description: 'Tickets move through New, In Progress, In Review, Blocked, and Closed.',
              technical: 'Validated status transitions in UI logic and data writes.',
            },
            {
              name: 'Priority and Severity Labels',
              description: 'Supports objective triage and sprint planning.',
              technical: 'Typed metadata fields and validation rules.',
            },
            {
              name: 'Assignment Notifications',
              description: 'Notifies responsible developers on assignment and high-priority updates.',
              technical: 'Cloud function triggers on ticket field changes.',
            },
          ],
          design_decisions: [
            {
              decision: 'Use Firebase for full-stack speed',
              rationale: 'It reduced setup overhead and enabled fast delivery for a small-team tool.',
              tradeoff: 'Less backend portability in exchange for rapid iteration.',
            },
            {
              decision: 'Keep workflow intentionally simple',
              rationale: 'The target teams needed quick adoption, not enterprise complexity.',
              tradeoff: 'Fewer edge-case states but stronger day-to-day usability.',
            },
          ],
        },
        results: {
          metrics: [
            {
              metric: 'Defect Visibility',
              before: 'Scattered across multiple channels',
              after: 'Centralized searchable backlog',
              impact: 'Reduced dropped issues',
            },
            {
              metric: 'Triage Efficiency',
              before: 'Unstructured discussions',
              after: 'Priority-based ticket sorting',
              impact: 'Faster triage decisions',
            },
            {
              metric: 'Update Communication',
              before: 'Manual reminders',
              after: 'Automatic notifications',
              impact: 'Improved response time',
            },
          ],
          testimonial: {
            quote: 'The app made bug ownership and workflow status obvious to everyone on the team.',
            author: 'Frontend Team Lead',
            date: 'November 2024',
          },
          lessons_learned: [
            'Process clarity often beats feature volume',
            'Notification rules should be targeted to avoid noise',
            'Data validation improves ticket quality downstream',
          ],
        },
        technical_depth: {
          architecture_diagram: 'Ticket events -> data rules -> workflow updates -> notifications',
          challenges_overcome: [
            {
              challenge: 'Invalid state changes between workflow steps',
              solution: 'Implemented explicit transition guard rules.',
              technical_depth: 'Mapped allowed previous and next states for each action.',
            },
            {
              challenge: 'Query performance on larger ticket lists',
              solution: 'Indexed key fields and optimized common filter paths.',
              technical_depth: 'Adjusted Firestore index strategy for frequent views.',
            },
          ],
        },
      },
    }
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
