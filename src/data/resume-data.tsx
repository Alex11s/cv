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
    email: "bartosz.jarocki@hey.com",
    tel: "+48530213401",
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
  /*work: [
    {
      company: "Parabol",
      link: "https://parabol.co",
      badges: ["Remote"],
      title: "Senior Full Stack Developer",
      logo: ParabolLogo,
      start: "2021",
      end: "2024",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
    },
    {
      company: "Clevertech",
      link: "https://clevertech.biz",
      badges: ["Remote"],
      title: "Lead Android Developer → Full Stack Developer",
      logo: ClevertechLogo,
      start: "2015",
      end: "2021",
      description:
        "Created Android mobile apps and led teams for companies like Vision Media, DKMS, or AAA. Built live streaming application for Evercast from scratch. Technologies: Android, Kotlin, React, TypeScript, GraphQL",
    },
    {
      company: "Jojo Mobile",
      link: "https://bsgroup.eu/",
      badges: [],
      title: "Android Developer → Lead Android Developer",
      logo: JojoMobileLogo,
      start: "2git12",
      end: "2015",
      description:
        "Built an Android team, created Android apps for biggest Polish companies like LOT, Polskie Radio, Agora, PolskaPress",
    },
    {
      company: "Nokia Siemens Networks",
      link: "https://www.nokia.com",
      badges: [],
      title: "C/C++ Developer",
      logo: NSNLogo,
      start: "2010",
      end: "2012",
      description: "Creating and testing software for LTE base stations",
    },
  ],*/
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
