export interface Project {
  id: string
  title: string
  description: string
  category: string
  tech: string[]
  image: string
  liveLink: string
  githubLink: string
  year: number
  featured: boolean
}

// Fallback seed used when Supabase is not configured or returns no rows.
// Mirrors the real portfolio_projects schema fields.
export const seedProjects: Project[] = [
  {
    id: 'seed-1',
    title: 'THOREX WATCHES',
    description:
      'Luxury watch retail brand and e-commerce platform for Nigerian men 18–35, built with a full Supabase-backed catalog and checkout.',
    category: 'E-commerce',
    tech: ['React', 'Supabase', 'HTML/CSS'],
    image: '/projects/project-1.jpg',
    liveLink: 'https://thorexwatches.netlify.app',
    githubLink: '',
    year: 2024,
    featured: true,
  },
  {
    id: 'seed-2',
    title: 'CASHLUXE',
    description:
      'Luxury streetwear e-commerce platform with a multi-page Supabase-connected frontend.',
    category: 'E-commerce / Fashion',
    tech: ['React', 'Supabase'],
    image: '/projects/project-2.jpg',
    liveLink: '',
    githubLink: '',
    year: 2024,
    featured: false,
  },
  {
    id: 'seed-3',
    title: 'ZATYFITS WOMAN',
    description: 'Luxury African women\'s couture and ready-to-wear fashion brand.',
    category: 'E-commerce / Fashion',
    tech: ['E-commerce', 'Branding'],
    image: '/projects/project-3.jpg',
    liveLink: '',
    githubLink: '',
    year: 2024,
    featured: false,
  },
  {
    id: 'seed-4',
    title: 'LUXE GALORE',
    description:
      'Affordable luxury lifestyle brand covering jewelry, perfumes, beauty, and gifting.',
    category: 'E-commerce / Lifestyle',
    tech: ['E-commerce', 'Retail'],
    image: '/projects/project-4.jpg',
    liveLink: '',
    githubLink: '',
    year: 2024,
    featured: false,
  },
  {
    id: 'seed-5',
    title: 'WEALTH EVENT & DECOR',
    description:
      'Black-and-gold themed event and decor booking site with a fixed-price, booking-only flow.',
    category: 'Booking Platform',
    tech: ['Booking System', 'Events'],
    image: '/projects/project-5.jpg',
    liveLink: '',
    githubLink: '',
    year: 2024,
    featured: false,
  },
  {
    id: 'seed-6',
    title: 'NEXUS AI DASHBOARD',
    description:
      'AI agent dashboard with live Claude API integration for managing automated workflows.',
    category: 'AI / Automation',
    tech: ['React', 'Claude API'],
    image: '/projects/project-6.jpg',
    liveLink: '',
    githubLink: '',
    year: 2024,
    featured: false,
  },
  {
    id: 'seed-7',
    title: 'JADMAFSON',
    description:
      'Converted a civil/heavy-industrial engineering company\'s site into a high-conversion lead-capture funnel.',
    category: 'Lead Generation / B2B',
    tech: ['Lead Gen', 'Web Design'],
    image: '/projects/project-7.jpg',
    liveLink: '',
    githubLink: '',
    year: 2024,
    featured: false,
  },
  {
    id: 'seed-8',
    title: 'SOCIAL CONTENT TOOL',
    description:
      'Installable progressive web app that generates social media content for retail brands.',
    category: 'PWA / Automation',
    tech: ['PWA', 'Automation'],
    image: '/projects/project-8.jpg',
    liveLink: '',
    githubLink: '',
    year: 2023,
    featured: false,
  },
]