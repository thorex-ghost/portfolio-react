export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  avatar: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'CEO',
    company: 'LUXE DIGITAL',
    content: 'THOREX STACK delivered an exceptional website that perfectly captured our brand identity. The 3D animations and performance optimization exceeded our expectations. Our conversion rates increased by 45%.',
    avatar: '/avatars/sarah.jpg',
    rating: 5,
  },
  {
    id: '2',
    name: 'Marcus Webb',
    role: 'Creative Director',
    company: 'NOVA TECH',
    content: 'Working with THOREX STACK was a dream. His attention to detail, technical expertise, and creative vision resulted in a product that both our team and users love. Truly a master of his craft.',
    avatar: '/avatars/marcus.jpg',
    rating: 5,
  },
  {
    id: '3',
    name: 'Amara Okafor',
    role: 'Founder',
    company: 'ZATYFITS',
    content: 'The AI-powered virtual fitting room THOREX STACK built transformed our online shopping experience. Complex technical requirements were delivered with elegance and precision.',
    avatar: '/avatars/amara.jpg',
    rating: 5,
  },
  {
    id: '4',
    name: 'David Park',
    role: 'Product Manager',
    company: 'NEXUS AI',
    content: 'Incredible work on the analytics dashboard. The real-time data visualizations are both beautiful and functional. THOREX STACK is a rare blend of designer and engineer.',
    avatar: '/avatars/david.jpg',
    rating: 5,
  },
]