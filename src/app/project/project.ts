import { Component } from '@angular/core';
import { projects } from '../projects';
import { langicons } from '../langicons';



@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.html',
  styleUrl: './project.css',
})


export class Project {
  choseProject = projects;

  langicon = langicons;

  onSelectDetails() {
    // const randomIndex = Math.floor(Math.random() * 3)
    // this.choseProject = projects[randomIndex];
  }
}
