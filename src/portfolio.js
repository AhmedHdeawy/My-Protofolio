import emoji from 'react-easy-emoji';

import googlelogo from './assets/img/icons/common/google.svg'
import github from './assets/img/icons/common/github.svg'
import airbnb from './assets/img/icons/common/airbnbLogo.png'

export const greetings = {
    "name": "Ahmed Hdeawy",
    "title": "Hi all, I'm Ahmed Hdeawy",
    "description": "A passionate Software Engineer Focus on Backend and Mobile App Development having an experience of building Web applications with PHP / Laravel / JavaScript / Vuejs / Nodejs and some other cool libraries and frameworks and Cross Platform Mobile Apps With Flutter and React Native.",
    "resumeLink": "https://cv.hanzla.ga"
}

export const openSource = {
  githubUserName: 'AhmedHdeawy',
};

export const contact = {

}

export const socialLinks = {
    "facebook": "https://www.facebook.com/ahmedhdeawy",
    "twitter": "https://twitter.com/Ahmed_Hdeawy",
    "github": "https://github.com/AhmedHdeawy",
    "linkedin": "https://www.linkedin.com/in/ahmedhdeawy"
}

export const skillsSection = {
    title: 'What I do',
    subTitle: 'CRAZY Software Engineer WHO WANTS TO EXPLORE EVERY TECH STACK',
    skills: [
      emoji(
        '⚡ Build Backend for your web and mobile applications'
      ),
      emoji('⚡ Build Mobile Apps Using Flutter Or React Native'),
      emoji(
        '⚡ System Design and analysis.'
      ),
      emoji('⚡ Building reusable code and libraries for future use'),
      emoji('⚡ Optimization of the application for maximum speed and scalability'),
      emoji('⚡ Implementation of security and data protection'),
      emoji('⚡ Design and implementation of data storage solutions'),
      emoji(
        '⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean'
      ),
    ],

    softwareSkills: [
      {
        skillName: 'php',
        fontAwesomeClassname: 'logos:php',
      },
      {
        skillName: 'Laravel',
        fontAwesomeClassname: 'logos:laravel',
      },
      {
        skillName: 'Javascript',
        fontAwesomeClassname: 'logos:javascript',
      },
      {
        skillName: 'nodejs',
        fontAwesomeClassname: 'logos:nodejs-icon',
      },
      {
        skillName: 'Vuejs',
        fontAwesomeClassname: 'vscode-icons:file-type-vue',
      },
      {
        skillName: 'sql-database',
        fontAwesomeClassname: 'vscode-icons:file-type-sql',
      },
      {
        skillName: 'Redis',
        fontAwesomeClassname: 'logos:redis',
      },
      {
        skillName: 'Rabbitmq',
        fontAwesomeClassname: 'logos:rabbitmq',
      },
      {
        skillName: 'Flutter',
        fontAwesomeClassname: 'logos:flutter',
      },
      {
        skillName: 'React',
        fontAwesomeClassname: 'logos:react',
      },
      {
        skillName: 'git',
        fontAwesomeClassname: 'logos:git-icon',
      },
      {
        skillName: 'docker',
        fontAwesomeClassname: 'logos:docker-icon',
      },
    ],
}


export const SkillBars = [
    {
      Stack: 'Frontend/Design', //Insert stack or technology you have experience in
      progressPercentage: '90', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Backend',
      progressPercentage: '70',
    },
    {
      Stack: 'Programming',
      progressPercentage: '60',
    },
  ]

export const educationInfo = [
    {
      schoolName: 'Alazhar University',
      subHeader: 'Bachelor of Computer Science and Mathematics',
      duration: 'September 2013 - Jun 2017',
      desc: 'Took courses about Software Engineering, Pure Mathematics, Operating Systems, System Design',

    }
]

export const experience = [
  {
    role: 'Software Engineer',
    company: 'Business Valley',
    companylogo: googlelogo,
    date: 'Oct 2020 – Present',
    desc:
      'Software Engineer focus on System Design, Building APIs, Create Features and Fixing Bugs',
    descBullets: [
      'Build E-commerce Application Like Robosto',
      'Using PHP/Laravel, MySQL, Caching, Redis, RabbitMQ, PubSub, AWS',
      'Docker, Git flow, Git Branching, Design Pattern, Clean code, Unit testing',
      'Build Restful APIs, Third party APIs, Algolia',
      "Write CLean Code and Optimize SQL Queries"
    ],
  },
  {
    role: 'Senior Back-end Developer',
    company: 'Robosto',
    companylogo: github,
    date: 'Jan 2021 – Present',
    desc:
      'Senior Back-end Developer focus on Building APIs, Create Features, Fixing Bugs, and Write Unit testing',
    descBullets: [
      'Build Robosto Project',
      'Using PHP/Laravel, MySQL, Caching, Redis, RabbitMQ, PubSub, AWS',
      'Docker, Git flow, Git Branching, Design Pattern, Clean code, Unit testing',
      'Build Restful APIs, Third party APIs, Algolia',
      "Write CLean Code and Optimize SQL Queries"
    ],
  },
  {
    role: 'Full stack and Freelancer Web Developer',
    company: 'NamaaIT',
    companylogo: airbnb,
    date: 'July 2017 – September 2020',
    desc:
      'Full stack Web Developer focus on Backend and Frontend',
    descBullets: [
      'Using PHP/Laravel, Vuejs and Front-end technologies',
      'Build projects like ( ERP System, Medical Consulting System, Knowledge System )',
      'Build Restful APIs',
    ],
  },
]

export const projects = [
  {
    name: "lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    name: "lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    name: "lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    link: {
      name: "hanzla",
      url: "kasjfklsdjf"
    }
  }
]
