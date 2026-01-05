import { Component, OnInit, inject } from '@angular/core';
import { Header } from '../header/header';
import { ProjectComponent } from '../project-component/project-component';
import { DUMMY_PROJECTS } from '../projects';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-projects-page',
  imports: [Header, ProjectComponent],
  templateUrl: './projects-page.html',
  styleUrl: './projects-page.css',
})
export class ProjectsPage implements OnInit {
  private seoService = inject(SeoService);
  projects = DUMMY_PROJECTS;

  ngOnInit(): void {
    this.seoService.setHomeSeo();
  }
}

