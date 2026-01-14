import { Component, computed, inject, OnInit, signal, effect } from '@angular/core';
import { Router } from '@angular/router';
import { LogoComponent } from "../logo-component/logo-component";
import { ILangIcons, langicons } from '../projects';

interface Skill {
  name: string;
  level: number;
  color: string;
}

@Component({
  selector: 'app-header',
  imports: [LogoComponent],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  private router = inject(Router);

  skills: Skill[] = [
    { name: 'Linux', level: 85, color: '#FCC419' },
    { name: 'Security', level: 78, color: '#FF6B6B' },
    { name: 'GenAI', level: 82, color: '#4ECDC4' },
    { name: 'CLI', level: 90, color: '#95E1D3' },
    { name: 'Big Data', level: 75, color: '#A8DADC' },
    { name: 'Development', level: 88, color: '#F38181' }
  ];

  currentSkillIndex = signal(0);
  currentSkill = computed(() => this.skills[this.currentSkillIndex()]);

  theTech = computed(() => {
    const temp: ILangIcons[] = [];
    for (let index = 12; index < langicons.length; index++) {
      const element = langicons[index];
      temp.push(element);
    }
    return temp;
  });

  ngOnInit() {
    // Rotate skills every 3 seconds
    setInterval(() => {
      this.currentSkillIndex.update(i => (i + 1) % this.skills.length);
    }, 3000);
  }

  onLogo() {
    this.router.navigate(['']);
  }

  onHackathon() {
    this.router.navigate(['/hackathon']);
  }

  onProjects() {
    this.router.navigate(['']);
  }
  onProjects() {
    this.router.navigate(['']);
   }
}
