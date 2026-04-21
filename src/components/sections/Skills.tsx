const SKILL_CATEGORIES = [
  {
    title: 'Technical Skills',
    icon: '💻',
    color: 'indigo',
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
    color: 'purple',
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
    color: 'teal',
    skills: [
      { name: 'Jira', level: 75 },
      { name: 'Power BI', level: 70 },
      { name: 'Microsoft Excel', level: 90 },
      { name: 'Figma', level: 65 },
      { name: 'Git & GitHub', level: 75 },
    ],
  },
] as const;

// Color maps for Tailwind classes
const COLOR_MAP = {
  indigo: {
    bar: 'bg-indigo-500',
    badge: 'bg-indigo-100 text-indigo-700',
    header: 'bg-indigo-600',
  },
  purple: {
    bar: 'bg-purple-500',
    badge: 'bg-purple-100 text-purple-700',
    header: 'bg-purple-600',
  },
  teal: {
    bar: 'bg-teal-500',
    badge: 'bg-teal-100 text-teal-700',
    header: 'bg-teal-600',
  },
} as const;

type SkillBarProps = {
  name: string;
  level: number;
  barClass: string;
};

function levelToLabel(level: number): 'Beginner' | 'Intermediate' | 'Advanced' {
  if (!Number.isFinite(level)) return 'Beginner';
  if (level >= 80) return 'Advanced';
  if (level >= 60) return 'Intermediate';
  return 'Beginner';
}

function SkillBar({ name, level, barClass }: SkillBarProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-1">
        <span className="text-gray-700 font-medium">{name}</span>
        <span className="text-gray-400">{levelToLabel(level)}</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2">
        <div
          className={`${barClass} h-2 rounded-full transition-all duration-700`}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

type SkillCategory = typeof SKILL_CATEGORIES[number];

function SkillCard({ category }: { category: SkillCategory }) {
  const colors = COLOR_MAP[category.color];
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {/* Card header */}
      <div className={`${colors.header} px-6 py-4 flex items-center gap-3`}>
        <span className="text-2xl">{category.icon}</span>
        <h3 className="text-white font-bold text-lg">{category.title}</h3>
      </div>
      {/* Skills list */}
      <div className="px-6 py-6">
        {category.skills.map((skill: { name: string; level: number }) => (
          <SkillBar key={skill.name} name={skill.name} level={skill.level} barClass={colors.bar} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-widest">
            What I Know
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Skills</h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((cat) => (
            <SkillCard key={cat.title} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}