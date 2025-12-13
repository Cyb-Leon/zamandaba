import { Component } from '@angular/core';
import { Header } from '../header/header';
import { ProjectComponent } from '../project-component/project-component';
import { DUMMY_PROJECTS } from '../projects';

@Component({
  selector: 'app-projects-page',
  imports: [Header, ProjectComponent],
  templateUrl: './projects-page.html',
  styleUrl: './projects-page.css',
})
export class ProjectsPage {
  projects = DUMMY_PROJECTS;
}

