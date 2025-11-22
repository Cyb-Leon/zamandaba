import { Component, Input, input } from '@angular/core';
import { langicons } from '../langicons';



@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.html',
  styleUrl: './project.css',
})


export class Project {
  @Input() projectUrl!: string;
  @Input() previewUrl!: string;
  @Input() projectTitle!: string;
  @Input() icoImagUrl!: string;
  @Input() iconTitle!: string;
  // accept external input

  onSelectDetails() {
    // const randomIndex = Math.floor(Math.random() * 3)
    // this.choseProject = projects[randomIndex];
  }
}
