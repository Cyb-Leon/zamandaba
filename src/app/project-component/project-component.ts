import { Component, computed, input, signal, HostListener } from '@angular/core';
import { IProject, langicons } from '../projects';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project-component.html',
  styleUrl: './project-component.css',
})
export class ProjectComponent {
  showToast = signal(false);
  showModal = signal(false);

  onMobile(pageUrl: string) {
    document.querySelector('#projectUrl')?.setAttribute('href', pageUrl);
  }

  //take project imports
  readonly myproject = input.required<IProject>();

  //iterate tech stack
  theTech = computed(() => {
    const temp: string[] = [];
    this.myproject().techStack.forEach(tech => {
      langicons.forEach(icon => {
        if (tech === icon.title) {
          temp.push(icon.icoImagUrl);
        }
      });
    });
    return temp;
  });

  imageUrl = computed(() => {
    return this.myproject().previewUrl;
  });

  onSelectDetails() {
    this.showModal.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.showModal.set(false);
    document.body.style.overflow = '';
  }

  // Close modal on Escape key
  @HostListener('document:keydown.escape')
  onEscapeKey() {
    if (this.showModal()) {
      this.closeModal();
    }
  }
}
