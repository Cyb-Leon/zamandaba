import { Component, computed, input, signal } from '@angular/core';
import { IProject, langicons } from '../projects';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project-component.html',
  styleUrl: './project-component.css',
})


export class ProjectComponent {
  showToast = signal(false);

  onMobile(pageUrl: string) {
    document.querySelector('#projectUrl')?.setAttribute('href', pageUrl);
  }
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
    this.showToast.set(true);
    const projectUrl = this.myproject().projectUrl;
    
    setTimeout(() => {
      this.showToast.set(false);
      if (projectUrl) {
        window.open(projectUrl, '_blank');
      }
    }, 2000);
  }
}
