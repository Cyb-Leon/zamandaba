interface Project {
  id: number
  title: string
  previewUrl: string
  techStack: string[]
  projectUrl: string
}

export const DUMMY_PROJECTS: Project[] = [
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
    previewUrl: '/brave_screenshot_korneryard.vercel.app.png',
    techStack: ['React', 'Node.js', 'OpenAI', 'Socket.io'],
    projectUrl: 'https://korneryard.vercel.app/',
  },
  {
    id: 3,
    title: "I'm workin' on it boss",
    previewUrl: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWZ4aHU0bmxwcXpwd3l0NWdjZm42MHN6djhhcXB0bjl3aG83dm5zeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mCRJDo24UvJMA/giphy.gif',
    techStack: ['Vue.js', 'Supabase', 'Tailwind CSS'],
    projectUrl: '#',
  },
]