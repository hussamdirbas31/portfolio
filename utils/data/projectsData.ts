
interface ProjectData {
  title: string
  description: string
  imageUrl: string
  link: string
  tech: string[]
}

export const projectsData: ProjectData[] = [
  {
    title: "Ecommerce",
    description: "Clothing store (Dashboard, add to cart)",
    imageUrl: 'https://f.top4top.io/p_3426joevp1.jpg',
    link: 'https://github.com/hussamdirbas31/E-commerce',
    tech: ["React js", "Firebase", "Redux"]
  },
  {
    title: "ODYSSEY",
    description: "Crypto webpage (figma)",
    imageUrl: 'https://c.top4top.io/p_3426fayy01.jpg',
    link: 'https://github.com/hussamdirbas31/odyssey',
    tech: ["Figma", "UI/UX", "Next js"]
  },
  {
    title: "Weather app",
    description: "Daily forecast",
    imageUrl: 'https://l.top4top.io/p_3426q08t31.jpeg',
    link: 'https://weather-pp.vercel.app/',
    tech: ["Next js", "API Integration"]
  },
  {
    title: "PixelCraft",
    description: "Image Gallery",
    imageUrl: 'https://g.top4top.io/p_3426puvew2.jpg',
    link: 'https://pixels-wheat.vercel.app/',
    tech: ["Next js", "API Integration"]
  },
  {
    title: "Chatify",
    description: "Social media app",
    imageUrl: 'https://j.top4top.io/p_3426xhny31.jpg',
    link: 'https://github.com/hussamdirbas31/Chatify',
    tech: ["Next js", "Mocke data", "Firebase Authentication"]
  },
]