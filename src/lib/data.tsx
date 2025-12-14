import { Icons } from "@/components/icons";

import { Experience, NavLink, Project, Skill } from "./types";

export const navLinks: NavLink[] = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export const projectsData: Project[] = [
  {
    image: "/images/eventry_img.png",
    title: "Event Booking Website",
    description:
      "A full-stack event booking website that allows users to browse, book, and manage event tickets online.",
    technologies: [
      "Next.js",
      "JavaScript",
      "MongoDB",
      "Resent API",
      "Tailwind CSS",
      "Auth.js",
    ],
    links: {
      demo: "https://event-booking-app-virid.vercel.app/",
      github: "https://github.com/zubayerdev01/event-booking-app",
    },
  },
  {
    image: "/images/eCommerce.png",
    title: "E-commerce Platform",
    description:
      "A scalable e-commerce platform with features like product listings, shopping cart, user authentication, and payment integration.",
    technologies: [
      "React.js",
      "JavaScript",
      "Node.js",
      "MongoDB",
      "Stripe API",
      "Tailwind CSS",
      "Auth.js",
    ],
    links: {
      demo: "https://e-commerce-store-two-nu.vercel.app/",
      github: "https://github.com/zubayerdev01/e-commerce-store",
    },
  },
  {
    image: "/images/cineRantal.png",
    title: " Movie Rental Application",
    description:
      "A movie rental application that allows users to browse, rent, and review movies online.",
    technologies: [
      "React.js",
      "JavaScript",
      "Node.js",
      "MongoDB",
      "Stripe API",
      "Tailwind CSS",
      "Auth.js",
    ],
    links: {
      demo: "https://cine-rental-app-gray.vercel.app/",
      github: "https://github.com/zubayerdev01/cine-rental-app",
    },
  },
  {
    image: "/images/foodDelivery.png",
    title: "Food Order Management System",
    description:
      "A food order management system that enables users to order food online, track deliveries, and manage their orders efficiently.",
    technologies: [
      "React.js",
      "JavaScript",
      "Node.js",
      "MongoDB",
      "Stripe API",
      "Tailwind CSS",
      "Auth.js",
    ],
    links: {
      demo: "https://food-order-management-app.vercel.app/",
      github: "https://github.com/zubayerdev01/food-order-management-app",
    },
  },
] as const;

export const experiencesData: Experience[] = [
  {
    title: "Full Stack Developer",
    company: "Freelance / Personal Projects, Remote",
    description:
      "Developed and deployed full-stack web applications using modern technologies. Focused on building responsive UIs, secure authentication, and scalable backends through self-directed projects simulating real-world requirements.",
    period: "2023 Jan - Present",
    technologies: [
      "Next.js",
      "TypeScript",
      "shadcn/ui",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Personal Projects, Remote",
    description:
      "Built interactive and performant user interfaces with React and Next.js. Implemented authentication, email services, and optimized components for better user experience and performance.",
    period: "2024 Jun - 2025 Dec",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "NextAuth.js",
      "Resend",
      "shadcn/ui",
    ],
  },
  {
    title: "MERN Stack Developer",
    company: "Self-Taught Projects, Remote",
    description:
      "Created complete web applications from scratch, including RESTful APIs, database integration, and deployment. Emphasized clean code, state management, and responsive design.",
    period: "2023 Jul - 2024 May",
    technologies: ["React", "Node.js", "Express", "MongoDB", "TypeScript"],
  },
  {
    title: "Junior Web Developer",
    company: "Learning & Side Projects, Remote",
    description:
      "Gained hands-on experience by building multiple applications, experimenting with modern tools and best practices. Collaborated with open-source concepts and focused on problem-solving.",
    period: "2022 Dec - 2023 Jun",
    technologies: ["React", "JavaScript", "Node.js", "Express", "MongoDB"],
  },
];

export const skillsData: Skill[] = [
  { name: "Sass", icon: <Icons.sass className="size-12" /> },
  { name: "Tailwind", icon: <Icons.tailwind className="size-12" /> },
  { name: "JavaScript", icon: <Icons.javascript className="size-12" /> },
  { name: "TypeScript", icon: <Icons.typescript className="size-12" /> },
  { name: "React", icon: <Icons.react className="size-12" /> },
  { name: "NextJS", icon: <Icons.nextjs className="size-12" /> },
  { name: "NestJS", icon: <Icons.nestjs className="size-12" /> },
  { name: "Prisma", icon: <Icons.prisma className="size-12" /> },
  { name: "Docker", icon: <Icons.docker className="size-12" /> },
];
