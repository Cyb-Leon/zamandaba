import { Component, computed, input } from '@angular/core';
import { IProject, langicons } from '../projects';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.html',
  styleUrl: './project.css',
})


export class Project {
  //take project imports
  readonly myproject = input.required<IProject>();

  //iterate tech stack
  theTech = computed(() =>{
     const temp: string [] = [];
    this.myproject().techStack.forEach(tech => {
        langicons.forEach(icon =>{
          if (tech === icon.title) {
            temp.push(icon.icoImagUrl)
          }
        })
    });
    return temp;
  })

  imageUrl = computed(() => {
    return this.myproject().previewUrl;
  });
  onSelectDetails() {
    // const randomIndex = Math.floor(Math.random() * 3)
    // this.choseProject = projects[randomIndex];
  }
}
