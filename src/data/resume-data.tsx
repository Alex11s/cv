import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Flores Alexis Gastón",
  initials: "FG",
  location: "Córdoba, Argentina",
  locationLink: "https://www.google.com/maps/place/Córdoba",
  about:
    "Computer Systems Analyst",
  summary:
    "Comencé mis estudios en el año 2020 y me recibí en 2023 de Analista Universitario en Sistemas de Computación, durante mi trayectoria académica aprendí de forma autodidacta muchas habilidades, comenzando por la edición de imágenes y finalizando en la programación web, lo que me dio una gran base en lógica y creatividad.",
  avatarUrl: "https://pbs.twimg.com/profile_images/1761210809470889984/AGBeHD2v_400x400.jpg",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "floresgaston248@gmail.com",
    tel: null,
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Alex11s",
        icon: GitHubIcon,
      },
      {
        name: "LindkedIn",
        url: "www.linkedin.com/in/floresgaston",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/_alex11s",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Universidad Siglo 21",
      degree: "Computer Systems Analyst",
      start: "2020",
      end: "2023",
    },
  ],
  skills: [
    "JavaScript",
    "Photoshop",
    "Visual Studio Code",
  ],
  projects: [
    {
      title: "Flores Gastón Portafolio",
      techStack: [
        "HTML",
        "CSS",
      ],
      description: "Portafolio usando HTML y CSS",
      link: {
        label: "",
        href: "https://portfoliofloresgaston.vercel.app/",
      },
    },
  ],
} as const;
