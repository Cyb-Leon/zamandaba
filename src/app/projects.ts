interface Project {
  id: number
  title: string
  previewUrl: string
  techStack: string[]
  projectUrl: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'TshepangYouth - NGO [service system]',
    previewUrl: '/tshepangYouth.png',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Spring Boot', 'Postgress'],
    projectUrl: 'https://youthenrichment-app-wnyu-cyb-leons-projects.vercel.app/',
  },
  {
    id: 2,
    title: 'AI Chat Application',
    previewUrl: '/sleek-ai-chat-interface.jpg',
    techStack: ['React', 'Node.js', 'OpenAI', 'Socket.io'],
    projectUrl: 'https://youthenrichment-app-wnyu-cyb-leons-projects.vercel.app/',
  },
  {
    id: 3,
    title: 'Task Management App',
    previewUrl: '/minimalist-task-management-board.jpg',
    techStack: ['Vue.js', 'Supabase', 'Tailwind CSS'],
    projectUrl: '#',
  },
]