export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  category: string
  tags: string[]
  date: string
  readTime: string
  author: string
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Immersive 3D Experiences with React Three Fiber',
    excerpt: 'A deep dive into creating performant, interactive 3D web experiences using React Three Fiber and Diedre.',
    content: `# Building Immersive 3D Experiences with React Three Fiber

React Three Fiber (R3F) brings the power of Three.js into the React ecosystem with a declarative, component-based approach. In this post, I'll share what I've learned about building performant 3D experiences.

## Why React Three Fiber?

R3F allows you to write 3D code using JSX, making it familiar to React developers. It handles rendering loops, event management, and scene lifecycle automatically.

## Key Concepts

### 1. The Canvas Component
The Canvas component is the foundation of any R3F scene. It sets up the renderer, camera, and scene.

### 2. Declarative 3D
Instead of imperative scene manipulation, you declare what your scene should look like.

### 3. Use of Diedre
Diedre provides ready-made 3D components and helpers that simplify common tasks.

## Performance Tips

- Use \`useMemo\` for expensive calculations
- Implement level-of-detail (LOD) for complex models
- Use \`useFrame\` sparingly
- Dispose of geometries and materials when unmounted

## Conclusion

Building 3D web experiences is an exciting frontier. With R3F, you can bring your creative vision to life while maintaining the developer experience you love from React.`,
    category: 'WebGL / 3D',
    tags: ['React', 'Three.js', 'WebGL', 'R3F'],
    date: '2025-01-15',
    readTime: '8 min read',
    author: 'THOREX STACK',
  },
  {
    id: '2',
    title: 'The Ultimate Guide to Tailwind CSS Customization',
    excerpt: 'Learn how to extend Tailwind CSS with custom colors, animations, and components that match your brand.',
    content: `# The Ultimate Guide to Tailwind CSS Customization

Tailwind CSS is incredibly powerful out of the box, but its real strength comes from customization. Here's how I extend Tailwind to match complex brand requirements.

## Custom Colors
Define your brand palette in the config file and use it throughout your project.

## Custom Animations
Create unique animations that align with your brand's motion language.

## Component Variants
Use CVa for building component variants with different visual states.

## Conclusion
Customization is where Tailwind truly shines. With these techniques, you can build design systems that are both consistent and unique.`,
    category: 'CSS / Frontend',
    tags: ['Tailwind', 'CSS', 'Design Systems'],
    date: '2024-12-20',
    readTime: '6 min read',
    author: 'THOREX STACK',
  },
  {
    id: '3',
    title: 'From Designer to Developer: My Journey',
    excerpt: 'How transitioning from UI/UX design to full-stack development changed my approach to building products.',
    content: `# From Designer to Developer: My Journey

Three years ago, I was purely a designer. Today, I build full-stack applications. Here's what I learned along the way.

## The Transition
Starting with HTML/CSS, then JavaScript, then frameworks. Each step brought new challenges and insights.

## Why It Matters
Understanding both design and development leads to better products. You can make informed decisions about what's possible and what's practical.

## Key Takeaways
1. Start with the basics
2. Build projects you're passionate about
3. Don't be afraid to make mistakes
4. The design and development skills complement each other beautifully

## Conclusion
The intersection of design and development is where the most interesting work happens.`,
    category: 'Career / Reflections',
    tags: ['Career', 'Design', 'Development'],
    date: '2024-11-05',
    readTime: '5 min read',
    author: 'THOREX STACK',
  },
  {
    id: '4',
    title: 'Optimizing Web Performance in 2025',
    excerpt: 'Practical strategies for making your websites lightning-fast, from image optimization to code splitting.',
    content: `# Optimizing Web Performance in 2025

Performance isn't just a nice-to-have—it's essential for user experience and SEO. Here are the strategies that have made the biggest impact in my projects.

## Core Web Vitals
Focus on LCP, CLS, and INP. These metrics directly impact user experience and search rankings.

## Image Optimization
Modern formats like WebP and AVIF can dramatically reduce file sizes.

## Code Splitting
Lazy load routes and components to reduce initial bundle size.

## Conclusion
Performance is an ongoing process. Monitor, measure, and iterate.`,
    category: 'Performance',
    tags: ['Performance', 'Web', 'Optimization'],
    date: '2024-10-18',
    readTime: '7 min read',
    author: 'THOREX STACK',
  },
  {
    id: '5',
    title: 'Building a Design System That Scales',
    excerpt: 'Lessons learned from creating and maintaining design systems for products with millions of users.',
    content: `# Building a Design System That Scales

Design systems are the backbone of consistent, efficient product development. Here's what I've learned about building systems that actually work.

## Start Small
Don't try to build everything at once. Start with core components and expand as needed.

## Documentation
Great documentation makes your system usable. Include code examples and usage guidelines.

## Governance
Establish processes for updates, feedback, and versioning.

## Conclusion
A good design system is a living thing. It evolves with your product and team.`,
    category: 'Design Systems',
    tags: ['Design', 'Systems', 'UI'],
    date: '2024-09-22',
    readTime: '6 min read',
    author: 'THOREX STACK',
  },
]