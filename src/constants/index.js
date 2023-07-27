import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  git,
  figma,
  postgresql,
  sophie,
  kasa,
  grimoire,
  booki,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer junior',
    icon: frontend,
  },
  {
    title: 'Gestion agile',
    icon: backend,
  },
  {
    title: 'Optimisation SEO et débug',
    icon: ux,
  },
  {
    title: 'React and Node Developer',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  // {
  //   name: 'postgresql',
  //   icon: postgresql,
  // },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
];

const experiences = [
  {
    title: 'Optimisation SEO et débug',
    company_name: 'Openclassrooms',
    icon: coverhunt,
    iconBg: '#333333',
    date: '',
  },
  {
    title: 'Node.js, express, mongoodb',
    company_name: 'Openclassrooms',
    icon: microverse,
    iconBg: '#333333',
    date: '',
  },
  {
    title: 'HTML/CSS, responsive design',
    company_name: 'Openclassrooms',
    icon: kelhel,
    iconBg: '#333333',
    date: '',
  },
  {
    title: 'Javascript, React.js',
    company_name: 'Développeur Web Formation',
    icon: dcc,
    iconBg: '#333333',
    date: 'dec 2022 - aout 2023',
  },
];

const projects = [
  {
    id: 'project-1',
    name: "Site d'une Architecte",
    description: 'Projet réalisé avec Javascript / HTML/CSS avec une partie authentification et ajout de traveaux via un modale',
    tags: [
      {
        name: 'Javascript',
        color: 'blue-text-gradient',
      },
      {
        name: 'HTML',
        color: 'green-text-gradient',
      },
      {
        name: 'CSS',
        color: 'pink-text-gradient',
      },
    ],
    image: sophie,
    repo: 'https://github.com/leo-Msb/O.C-P3',
    // demo: 'https://leo-msb.github.io/O.C-P3/',
  },
  {
    id: 'project-2',
    name: 'Kasa',
    description:
      "Site de location D'hébergements, avec récupération des logements depuis une BDD, cliquable qui renvoie sur une page qui le détail",
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: kasa,
    repo: 'https://github.com/leo-Msb/O.C-P6',
    // demo: 'https://leo-msb.github.io/O.C-P6/',
  },
  {
    id: 'project-3',
    name: 'Notation de livres',
    description: 'Partie backend, mise en place de node.js / API rest / MongoDB avec contrainte de authentification/connexion, gestion BDD et de gestion moyenne de note par livre',
    tags: [
      {
        name: 'node.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'express',
        color: 'green-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'pink-text-gradient',
      },
    ],
    image: grimoire,
    repo: 'https://github.com/leo-Msb/O.C-P7',
    // demo: '',
  },
  {
    id: 'project-4',
    name: 'Booki',
    description: `Intégration de la maquette d'un site de réservation en HTML/CSS en responsive`,
    tags: [
      {
        name: 'html',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'green-text-gradient',
      },
      {
        name: 'figma',
        color: 'pink-text-gradient',
      },
    ],
    image: booki,
    repo: 'https://github.com/leo-Msb/O.C-P2',
    demo: 'https://leo-msb.github.io/O.C-P2/',
  },
  // {
  //   id: 'project-5',
  //   name: 'Nyeusi Fest Site',
  //   description:
  //     'This is a demo concert website for a music festival called Nyeusi.',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: nyeusi,
  //   repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
  //   demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  // },
];

export { services, technologies, experiences, projects };
