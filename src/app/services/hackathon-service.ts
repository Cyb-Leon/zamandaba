import { Injectable } from '@angular/core';
import { IHackathondb } from './Ihackathondb';

@Injectable({
  providedIn: 'root',
})
export class HackathonService {

  //get data from hackathon table - the hackathon table in data server
  private Hackathons: IHackathondb[] = [
    {
      id: 0,
      title: "AI Study Companion",
      tagline: "Transforming how students learn with AI-powered personalized study plans",
      event: "HackMIT 2024",
      date: "September 2024",
      location: "Cambridge, MA",
      story: [
        'It started at 2 AM when my teammate spilled coffee on our deployment server. Instead of panicking, we laughed and pivoted to a serverless architecture—a decision that ended up winning us the "Best Technical Innovation" award.',
        "The challenge was clear: students struggle with generic study materials. We wanted to build something that adapts to individual learning styles. Using GPT-4 and a custom spaced repetition algorithm, we created an AI that not only generates personalized quizzes but also identifies knowledge gaps in real-time.",
        'The most memorable moment? When a judge tested our app and said, "This would have saved me in college." That validation made the sleepless nights worth it. We implemented voice-to-text for hands-free studying, dark mode for late-night sessions, and progress tracking that actually motivates.',
        "By the end of the 36 hours, we had a working prototype with 50+ beta testers signed up. The feedback was incredible—students loved how it felt like having a personal tutor available 24/7.",
      ],
      techStack: ["React", "Next.js", "OpenAI GPT-4", "Supabase", "TailwindCSS", "Python"],
      images: [
        {
          url: "/team-coding-hackathon-late-night.jpg",
          caption: "The team grinding at 3 AM with energy drinks",
        },
        {
          url: "/presentation-demo-hackathon-audience.jpg",
          caption: "Presenting our demo to the judges",
        },
        {
          url: "/hackathon-winner-celebration-team.jpg",
          caption: "Celebrating after winning Best Technical Innovation",
        },
        {
          url: "/laptop-screen-showing-ai-study-app-interface.jpg",
          caption: "The final product: AI-powered personalized quizzes",
        },
      ],
      achievements: [
        "🏆 Best Technical Innovation Award",
        "🎯 50+ beta testers signed up during demo",
        "⚡ Fully functional MVP in 36 hours",
        "🌟 Featured on HackMIT showcase",
      ],
      repoUrl: "https://github.com/yourusername/ai-study-companion",
      liveUrl: "https://ai-study-companion.vercel.app",
    },
    {
      id: 1,
      title: "EcoTrack",
      tagline: "Gamifying sustainability one carbon footprint at a time",
      event: "TreeHacks 2024",
      date: "February 2024",
      location: "Stanford, CA",
      story: [
        "Climate change feels overwhelming. We wanted to make sustainability feel achievable and even fun. EcoTrack gamifies your daily eco-friendly actions with a points system, challenges, and community leaderboards.",
        'The inspiration hit when we saw a viral TikTok about "girl math." We thought, what if we applied that viral engagement to environmental action? Within hours, we had a wireframe that turned recycling, biking, and eating local into a competitive game.',
        "The technical challenge was integrating with various APIs—Google Maps for commute tracking, OpenWeather for real-time environmental data, and Stripe for our carbon offset marketplace. Our backend engineer pulled an all-nighter to get the real-time leaderboard working.",
        'The moment a judge said our app "made saving the planet addictive" felt surreal. We ended up with over 200 sign-ups during the demo period and partnerships with three local sustainability organizations.',
      ],
      techStack: ["React Native", "Node.js", "Express", "MongoDB", "Google Maps API", "Stripe"],
      images: [
        {
          url: "/mobile-app-sustainability-tracking-interface.jpg",
          caption: "EcoTrack mobile interface showing daily challenges",
        },
        {
          url: "/hackathon-team-brainstorming-whiteboard.jpg",
          caption: "Brainstorming session on sustainability gamification",
        },
        {
          url: "/stanford-treehacks-venue-coding.jpg",
          caption: "The TreeHacks venue—beautiful Stanford campus",
        },
        {
          url: "/leaderboard-dashboard-eco-challenges.jpg",
          caption: "Community leaderboard driving friendly competition",
        },
      ],
      achievements: [
        "🌱 Most Impactful Social Good Project",
        "📱 200+ sign-ups in 48 hours",
        "🤝 3 local sustainability partnerships",
        "💚 Featured in Stanford Daily",
      ],
      repoUrl: "[REDACTED]",
    },
    {
      id: 2,
      title: "VoiceFlow",
      tagline: "Making voice interfaces accessible for developers everywhere",
      event: "Cal Hacks 2023",
      date: "October 2023",
      location: "Berkeley, CA",
      story: [
        "Voice interfaces are the future, but building them is still too complex. VoiceFlow is a drag-and-drop builder that lets anyone create voice-powered applications without writing a single line of code.",
        "Our designer sketched the entire UI on napkins at the opening ceremony. By midnight, we had a functional prototype. The magic was in our visual programming language—think Scratch but for voice apps.",
        "We integrated with Whisper for speech recognition and ElevenLabs for natural-sounding voice synthesis. The breakthrough came when we added conditional logic blocks, turning our simple builder into a powerful development tool.",
        "Watching non-technical judges build their own voice apps in minutes was the validation we needed. One judge even said it reminded them of the early days of WordPress—democratizing technology for everyone.",
      ],
      techStack: ["Vue.js", "TypeScript", "Whisper AI", "ElevenLabs", "Firebase", "D3.js"],
      images: [
        {
          url: "/drag-and-drop-voice-app-builder-interface.jpg",
          caption: "The drag-and-drop interface we built",
        },
        {
          url: "/berkeley-campus-hackathon-crowd.jpg",
          caption: "Cal Hacks opening ceremony energy",
        },
        {
          url: "/team-demo-voice-interface-judges.jpg",
          caption: "Demoing live voice interactions to amazed judges",
        },
        {
          url: "/whiteboard-flow-diagram-voice-app-architecture.jpg",
          caption: "Mapping out the visual programming language",
        },
      ],
      achievements: [
        "🎤 Best Developer Tool",
        "👥 15+ voice apps created by judges during demos",
        "🚀 Invited to present at Voice Summit",
        "💡 2 VC firms requested follow-up meetings",
      ],
      repoUrl: "https://github.com/yourusername/voiceflow-builder",
      liveUrl: "https://voiceflow-demo.vercel.app",
    },
  ]

  //** 
  // which hackathon [project are we on] 
  //  keep state smart  */

  currentIndex = 0;
  currentHackathon = this.Hackathons[this.currentIndex];

  //asidale ngeCurrent data, idata lakhe sesinalo
  /*
  * first asiqalaze ukuthi uVM unani
  */

  // Methods
  nextHackathon = () => {
    if (this.currentIndex < this.Hackathons.length - 1) {
      this.currentIndex++
      this.currentHackathon = this.Hackathons[this.currentIndex]
      this.scrollToTop()
    }
  }

  prevHackathon = () => {
    if (this.currentIndex > 0) {
      this.currentIndex--
      this.currentHackathon = this.Hackathons[this.currentIndex]
      this.scrollToTop()
    }
  }

  selectHackathon = (index: number) => {
    this.currentIndex = index
    this.currentHackathon = this.Hackathons[index]
    this.scrollToTop()
  }

  scrollToTop() {
    window.scrollTo(0, 0)
  }

  get images (){
    return this.currentHackathon.images
  }

  get numHackathons(){
    return  this.Hackathons;
  }

}
