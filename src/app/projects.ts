export interface IProject {
  id: number
  projectTitle: string
  previewUrl: string
  techStack: string[]
  projectUrl: string
}

export const DUMMY_PROJECTS: IProject[] = [
  {
    id: 0,
    projectTitle: 'Templeting Startkit in Next.js',
    previewUrl: '/tshepangYouth.png',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Spring Boot', 'Postgress'],
    projectUrl: 'https://youthenrichment-app-wnyu-cyb-leons-projects.vercel.app/',
  },
  {
    id: 1,
    projectTitle: 'Angular Startkit - Java Springboot API ',
    previewUrl: '/touchafrica.netlify.app.png',
    techStack: ['Angular', 'Java', 'Postgress', 'Netlify', 'Tailwind CSS'],
    projectUrl: 'https://touchafrica.netlify.app/',
  },
  {
    id: 2,
    projectTitle: "I'm workin' on it boss",
    previewUrl: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWZ4aHU0bmxwcXpwd3l0NWdjZm42MHN6djhhcXB0bjl3aG83dm5zeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mCRJDo24UvJMA/giphy.gif',
    techStack: ['Python', 'AWS', 'Linux', 'Grafana'],
    projectUrl: '',
  },
]

export interface ILangIcons {
  id: number,
  title: string,
  icoImagUrl: string
}

export const langicons: ILangIcons[] = [

  {
    id: 1,
    title: "Next.js",
    icoImagUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
  },
  {
    id: 2,
    title: "TypeScript",
    icoImagUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
  },
  {
    id: 3,
    title: "Spring Boot",
    icoImagUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"
  },
  {
    id: 4,
    title: "Postgress",
    icoImagUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg"
  },
  {
    id: 5,
    title: "Tailwind CSS",
    icoImagUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
  },

  {
    id: 6,
    title: "Angular",
    icoImagUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg"
  },
  {
    id: 7,
    title: "Linux",
    icoImagUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/archlinux/archlinux-original.svg"
  }
  ,
  {
    id: 8,
    title: "AWS",
    icoImagUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
  },
  {
    id: 9,
    title: "Python",
    icoImagUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
  },
  {
    id: 10,
    title: "Grafana",
    icoImagUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg"
  },
  {
    id: 11,
    title: "Java",
    icoImagUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
  },
  {
    id: 12,
    title: "Netlify",
    icoImagUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg"
  },
  {
    id: 13,
    title: "https://github.com/Cyb-Leon/",
    icoImagUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubcodespaces/githubcodespaces-original.svg"
  }, {
    id: 14,
    title: "https://x.com/zev219",
    icoImagUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg"
  }, {
    id: 15,
    title: "https://za.linkedin.com/in/zamokuhle-ndaba-845452186",
    icoImagUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
  }

]