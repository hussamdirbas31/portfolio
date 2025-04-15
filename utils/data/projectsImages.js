// utils/data/projectsData.ts
import ecommerce from '@/public/projects/ecommerce.jpg'
import ody from '../../public/projects/crypto.jpg'
import cold from '../../public/projects/cold.jpeg'

export const projectsData = [
  {
    title: "Ecommerce",
    description: "Clothing store (Dashboard, add to cart)",
    imageUrl: ecommerce,
    link: 'https://github.com/hussamdirbas31/E-commerce',
    tech: ["React js", "Firebase", "Redux"]
  },
  {
    title: "ODYSSEY",
    description: "Crypto webpage (figma)",
    imageUrl: ody,
    link: 'https://github.com/hussamdirbas31/odyssey',
    tech: ["Figma", "UI/UX", "Next js "]
  },
  {
    title: "Weather app",
    description: "Daily forecast",
    imageUrl: cold,
    link: 'https://weather-pp.vercel.app/',
    tech: ["Next js", "API Integration"]
  },
]