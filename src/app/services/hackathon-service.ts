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
        'In 2023, the Web 3.0 African Bank IT Hackathon brought together some of the sharpest young minds in fintech, but no one expected the underdog team to take the crown. We arrived armed with nothing but a shared dream, a stubborn belief in innovation, and a whiteboard full of chaotic ideas. The challenge: build a Web 3.0 financial solution that could empower everyday South Africans.',
        "Hours blurred into code, diagrams, and caffeine. While other teams focused on polished visuals, we zoomed into real problems—access, transparency, and digital trust. Our solution, a blockchain-powered micro-lending ecosystem, allowed users to verify creditworthiness through decentralized identity and earn community-driven trust scores. Simple. Fair. Scalable.",
        'When demo time came, the judges leaned in. The room fell silent as our prototype executed flawlessly—secure transactions, instant verification, and a UI even a first-time user could navigate. Applause erupted. We had done it.',
        "We weren’t just winners. We were proof that African tech talent can shape the future of finance.",
      ],
      techStack: ["Security", "Express", "Node.js", "FinTech", "TailwindCSS", "Java"],
      images: [
        {
          id:0,
          url: "/ABHack.jpeg",
          caption: "The team grinding at 3 AM with energy drinks",
        },
        {
          id:1,
          url: "/ABhack4.JPEG",
          caption: "Presenting our demo to the judges",
        },
        {
          id:2,
          url: "/ABhack2.jpeg",
          caption: "Celebrating after winning Best Technical Innovation",
        },
        {
          id:3,
          url: "/ABhack3.JPEG",
          caption: "The final product: AI-powered personalized quizzes",
        },
      ],
      achievements: [
        " Best Technical Innovation Award",
        " 20 beta testers signed up during demo",
        " Fully functional MVP in 36 hours",
        " Featured on African Bank showcase",
      ],
      repoUrl: "https://github.com/yourusername/ai-study-companion",
      liveUrl: "https://ai-study-companion.vercel.app",
    },
    {
      id: 1,
      title: "ITWeb Security Summit Hackathon",
      tagline: "As businesses are confronted with an increasingly complex cyber threat landscape, staying ahead of developments in cyber security has become more critical than ever.",
      event: "ITWebSS 2025",
      date: "June 2025",
      location: "Sandton, Gauteng",
      story: [
        "At the ITWeb Security Summit Hackathon, the energy felt different—sharper, faster, and deeply technical. Our team entered the arena not as favourites, but as defenders determined to prove that strong security doesn’t require massive budgets, just focused minds and disciplined strategy. The challenge revolved around defensive security: detect, protect, respond.",
        'From the first hour, we dove into logs, threat intelligence feeds, and suspicious network activity. While other teams chased flashy exploits, we built a resilient defensive ecosystem—a lightweight SIEM with real-time anomaly detection, automated alert triage, and a dashboard designed for stressed analysts fighting off attacks in real time.',
        "Midway through, simulated breaches increased. Our system held. Alerts fired. Our response scripts kicked in. We adapted, patched, hardened, and detected again. Judges watched as our setup blocked a complex lateral-movement attempt almost instantly.",
        'When final rankings were announced and we placed fourth, we didn’t feel defeated. We felt validated. In a field of brilliant offensive hackers, we proved defense can shine just as bright.',
      ],
      techStack: ["WireShark", "Node.js", "burp suite", "MITRE ATT&CK®", "VirusTotal"],
      images: [
        {
          id:0,
          url: "/ITwebhack2.JPEG",
          caption: "EcoTrack mobile interface showing daily challenges",
        },
        {
          id:1,
          url: "/ITWebhack.JPEG",
          caption: "Forth placement for defense among offensive teams",
        },
        {
          id:2,
          url: "/ITwebhack3.JPEG",
          caption: "The SSHACK25 venue—beautiful Mandela Square",
        },
        {
          id:3,
          url: "/ITwebhack4.JPEG",
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
