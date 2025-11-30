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
      title: "Web 3.0 African Bank IT Hackathon challenge 2023",
      tagline: "Transforming how customers enagage with Fintech",
      event: "ABWeb3Hack 2023",
      date: "October 2023",
      location: "Midrand, Gauteng",
      story: [
        'It started at 2 AM when my teammate spilled coffee on our deployment server. Instead of panicking, we laughed and pivoted to a serverless architecture—a decision that ended up winning us the "Best Technical Innovation" award.',
        "The challenge was clear: students struggle with generic study materials. We wanted to build something that adapts to individual learning styles. Using GPT-4 and a custom spaced repetition algorithm, we created an AI that not only generates personalized quizzes but also identifies knowledge gaps in real-time.",
        'The most memorable moment? When a judge tested our app and said, "This would have saved me in college." That validation made the sleepless nights worth it. We implemented voice-to-text for hands-free studying, dark mode for late-night sessions, and progress tracking that actually motivates.',
        "By the end of the 36 hours, we had a working prototype with 50+ beta testers signed up. The feedback was incredible—students loved how it felt like having a personal tutor available 24/7.",
      ],
      techStack: ["React", "Next.js", "OpenAI GPT-4", "Supabase", "TailwindCSS", "Python"],
      images: [
        {
          url: "/ABHack.jpeg",
          caption: "The team grinding at 3 AM with energy drinks",
        },
        {
          url: "/ABhack4.jpeg",
          caption: "Presenting our demo to the judges",
        },
        {
          url: "/ABhack5me.jpeg",
          caption: "Celebrating after winning Best Technical Innovation",
        },
        {
          url: "/ABhack3.jpeg",
          caption: "The final product: AI-powered personalized quizzes",
        },
      ],
      achievements: [
        " Best Technical Innovation Award",
        " 50+ beta testers signed up during demo",
        " Fully functional MVP in 36 hours",
        " Featured on HackMIT showcase",
      ],
      repoUrl: "https://github.com/yourusername/ai-study-companion",
      liveUrl: "https://ai-study-companion.vercel.app",
    },
    {
      id: 1,
      title: "ITWeb Security Summit Hackathon",
      tagline: "Automating application security testing reports and root-cause.",
      event: "ITWebSS 2025",
      date: "June 2025",
      location: "Sandton, Gauteng",
      story: [
        "Climate change feels overwhelming. We wanted to make sustainability feel achievable and even fun. EcoTrack gamifies your daily eco-friendly actions with a points system, challenges, and community leaderboards.",
        'The inspiration hit when we saw a viral TikTok about "girl math." We thought, what if we applied that viral engagement to environmental action? Within hours, we had a wireframe that turned recycling, biking, and eating local into a competitive game.',
        "The technical challenge was integrating with various APIs—Google Maps for commute tracking, OpenWeather for real-time environmental data, and Stripe for our carbon offset marketplace. Our backend engineer pulled an all-nighter to get the real-time leaderboard working.",
        'The moment a judge said our app "made saving the planet addictive" felt surreal. We ended up with over 200 sign-ups during the demo period and partnerships with three local sustainability organizations.',
      ],
      techStack: ["WireShark", "Node.js", "burp suite", "MITRE ATT&CK®", "VirusTotal"],
      images: [
        {
          url: "/ITwebhack2.jpeg",
          caption: "EcoTrack mobile interface showing daily challenges",
        },
        {
          url: "/ITwebhack2.jpeg",
          caption: "Brainstorming session on sustainability gamification",
        },
        {
          url: "/ITwebhack2.jpeg",
          caption: "The TreeHacks venue—beautiful Stanford campus",
        },
        {
          url: "/ITwebhack2.jpeg",
          caption: "Community leaderboard driving friendly competition",
        },
      ],
      achievements: [
        " Most Impactful Social Good Project",
        " 200+ sign-ups in 48 hours",
        " 3 local sustainability partnerships",
        " Featured in Stanford Daily",
      ],
      repoUrl: "[REDACTED]",
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
      // this.scrollToTop()
    }
  }

  prevHackathon = () => {
    if (this.currentIndex > 0) {
      this.currentIndex--
      this.currentHackathon = this.Hackathons[this.currentIndex]
      // this.scrollToTop()
    }
  }

  selectHackathon = (index: number) => {
    this.currentIndex = index
    this.currentHackathon = this.Hackathons[index]
    // this.scrollToTop()
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
