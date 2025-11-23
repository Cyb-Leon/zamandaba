import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Project } from "./project/project";
import { DUMMY_PROJECTS } from './projects';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Project],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  projects = DUMMY_PROJECTS;
}
