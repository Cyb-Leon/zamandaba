import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { ProjectComponent } from "./project-component/project-component";
import { DUMMY_PROJECTS } from './projects';
import { HackathonComponent } from "./hackathon-component/hackathon-component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, ProjectComponent, HackathonComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  projects = DUMMY_PROJECTS;
}
