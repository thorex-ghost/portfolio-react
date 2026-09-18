export interface Skill {
  name: string
  level: number
  category: 'frontend' | 'backend' | 'design' | 'tools'
}

export const skills: Skill[] = [
  { name: 'React / Next.js', level: 95, category: 'frontend' },
  { name: 'TypeScript', level: 90, category: 'frontend' },
  { name: 'Three.js / R3F', level: 85, category: 'frontend' },
  { name: 'JavaScript (ES6+)', level: 95, category: 'frontend' },
  { name: 'HTML5 / CSS3', level: 98, category: 'frontend' },
  { name: 'Tailwind CSS', level: 92, category: 'frontend' },
  { name: 'Node.js / Express', level: 88, category: 'backend' },
  { name: 'Python / FastAPI', level: 80, category: 'backend' },
  { name: 'PostgreSQL / Supabase', level: 85, category: 'backend' },
  { name: 'MongoDB', level: 75, category: 'backend' },
  { name: 'Figma', level: 88, category: 'design' },
  { name: 'Adobe Creative Suite', level: 85, category: 'design' },
  { name: 'GSAP / Framer Motion', level: 90, category: 'design' },
  { name: 'AWS / Vercel', level: 82, category: 'tools' },
  { name: 'Docker', level: 78, category: 'tools' },
  { name: 'Git / GitHub', level: 92, category: 'tools' },
]