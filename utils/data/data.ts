import { StaticImageData } from 'next/image';
import ecommerce from '../../public/ecommerce.jpg';
import cold from '../../public/cold.jpeg';
import crypto from '../../public/crypto.jpg';
import chatify from '../../public/chatify.jpg';
import pixels from '../../public/pixelcraft.jpg';
import nafir from '../../public/nafir.jpg';
import ghiath from '../../public/ghiath.jpg';
//images added
interface ProjectData {
  title: string;
  description: string;
  imageUrl: StaticImageData;
  link: string;
  tech: string[];
}

export const projectsData: ProjectData[] = [
  {
    title: "Nafir",
    description: "A Sudanese initiative supporting skill development and professional networking for Sudanese individuals.",
    imageUrl: nafir,
    link: 'https://portal.nafir.net/',
    tech: ["Next js", "Framer Motion", "Zod"]
  },
  {
    title: "Motion Designer Portfolio",
    description: "Portfolio website for a motion designer with smooth animations and interactions.",
    imageUrl: ghiath,
    link: 'https://ghiathdaheer.vercel.app/',
    tech: ["Next js", "Framer Motion", "Lenis"]
  },
  {
    title: "Ecommerce",
    description: "Clothing store (Dashboard, add to cart)",
    imageUrl: ecommerce,
    link: 'https://artizia-miniclone.web.app/',
    tech: ["React js", "Firebase", "Redux"]
  },
  {
    title: "ODYSSEY",
    description: "Crypto webpage (figma)",
    imageUrl: crypto,
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
    imageUrl: pixels,
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
];