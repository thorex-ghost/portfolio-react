export interface Experience {
  id: string
  role: string
  company: string
  period: string
  description: string
  skills: string[]
  current?: boolean
}

export const experiences: Experience[] = [
  {
    id: '1',
    role: 'Senior Full-Stack Developer',
    company: 'LUXE DIGITAL',
    period: '2023 - Present',
    description: 'Leading development of premium web experiences for luxury brands. Architecting scalable React/TypeScript applications with 3D integrations.',
    skills: ['React', 'TypeScript', 'Three.js', 'Node.js', 'AWS'],
    current: true,
  },
  {
    id: '2',
    role: 'Frontend Engineer',
    company: 'NOVA TECH',
    period: '2021 - 2023',
    description: 'Built performant, accessible user interfaces for SaaS products serving 1M+ users. Mentored junior developers and established design systems.',
    skills: ['React', 'Vue.js', 'Tailwind', 'GraphQL'],
    current: false,
  },
  {
    id: '3',
    role: 'UI/UX Designer & Developer',
    company: 'CREATIVE STUDIO',
    period: '2020 - 2021',
    description: 'Designed and developed brand websites and web applications with a focus on visual storytelling and conversion optimization.',
    skills: ['Figma', 'Adobe Suite', 'HTML/CSS', 'JavaScript'],
    current: false,
  },
  {
    id: '4',
    role: 'Freelance Web Developer',
    company: 'SELF-EMPLOYED',
    period: '2018 - 2020',
    description: 'Delivered 30+ websites for startups and small businesses. Specialized in e-commerce and portfolio sites with strong SEO performance.',
    skills: ['WordPress', 'Shopify', 'PHP', 'MySQL'],
    current: false,
  },
]