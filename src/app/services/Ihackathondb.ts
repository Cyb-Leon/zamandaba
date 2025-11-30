export interface IHackathondb {
  id: number,
  title: string
  tagline: string
  event: string
  date: string
  location: string
  story: string[]
  techStack: string[]
  images: {
    url: string
    caption: string
  }[]
  achievements?: string[]
  repoUrl?: string
  liveUrl?: string
}