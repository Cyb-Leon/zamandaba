interface Project {
  id: number
  title: string
  previewUrl: string
  techStack: string[]
  projectUrl: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Dashboard',
    previewUrl: '/modern-ecommerce-dashboard-with-charts.jpg',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    projectUrl: '#',
  },
  {
    id: 2,
    title: 'AI Chat Application',
    previewUrl: '/sleek-ai-chat-interface.jpg',
    techStack: ['React', 'Node.js', 'OpenAI', 'Socket.io'],
    projectUrl: '#',
  },
  {
    id: 3,
    title: 'Task Management App',
    previewUrl: '/minimalist-task-management-board.jpg',
    techStack: ['Vue.js', 'Supabase', 'Tailwind CSS'],
    projectUrl: '#',
  },
]