import { Component, OnInit, inject } from '@angular/core';
import { HeaderHackathon } from "./header/header";
import { Hero } from "./hero/hero";
import { Title } from "./title/title";
import { TechStack } from "./tech-stack/tech-stack";
import { Story } from "./story/story";
import { Journey } from "./journey/journey";
import { Achievements } from "./achievements/achievements";
import { LinksCard } from "./links-card/links-card";
import { BottomNav } from "./bottom-nav/bottom-nav";
import { Header } from "../header/header";
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-hackathon-component',
  imports: [Header, Hero, Title, TechStack, Story, Journey, Achievements, LinksCard, BottomNav, HeaderHackathon],
  templateUrl: './hackathon-component.html',
  styleUrl: './hackathon-component.css',
})
export class HackathonComponent implements OnInit {
  private seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.setHackathonSeo();
  }
}
