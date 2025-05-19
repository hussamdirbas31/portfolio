import { StaticImageData } from 'next/image'

// Import images using relative paths from public folder
import ecommerce from '../../public/projects/ecommerce.jpg'
import ody from '../../public/projects/crypto.jpg'
import cold from '../../public/projects/cold.jpeg'
import pixel from '../../public/projects/pixelcraft.jpg'
import chatify from '../../public/projects/chatify.jpg'

interface ProjectData {
  title: string
  description: string
  imageUrl: StaticImageData
  link: string
  tech: string[]
}

export const projectsData: ProjectData[] = [
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
    tech: ["Figma", "UI/UX", "Next js"]
  },
  {
    title: "Weather app",
    description: "Daily forecast",
    imageUrl: cold,
    link: 'https://weather-pp.vercel.app/',
    tech: ["Next js", "API Integration"]
  },
  {
    title: "PixelCraft",
    description: "Image Gallery",
    imageUrl: pixel,
    link: 'https://pixels-wheat.vercel.app/',
    tech: ["Next js", "API Integration"]
  },
  {
    title: "Chatify",
    description: "Social media app",
    imageUrl: chatify,
    link: 'https://github.com/hussamdirbas31/Chatify',
    tech: ["Next js", "Mocked data", "Firebase Authentication"]
  },
]