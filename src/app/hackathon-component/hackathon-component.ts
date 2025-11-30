
import { Component} from '@angular/core';
import { Header } from "./header/header";
import { Hero } from "./hero/hero";
import { Title } from "./title/title";
import { TechStack } from "./tech-stack/tech-stack";
import { Story } from "./story/story";
import { Journey } from "./journey/journey";
import { Achievements } from "./achievements/achievements";
import { LinksCard } from "./links-card/links-card";
import { BottomNav } from "./bottom-nav/bottom-nav";


@Component({
  selector: 'app-hackathon-component',
  imports: [Header, Hero, Title, TechStack, Story, Journey, Achievements, LinksCard, BottomNav],
  templateUrl: './hackathon-component.html',
  styleUrl: './hackathon-component.css',
})
export class HackathonComponent {



}
