import { Component, computed, input, signal, HostListener, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IProject, langicons } from '../projects';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project-component.html',
  styleUrl: './project-component.css',
})
export class ProjectComponent {
  private sanitizer = inject(DomSanitizer);
  
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

  // Sanitized URL for iframe
  safeProjectUrl = computed((): SafeResourceUrl | null => {
    const url = this.myproject().projectUrl;
    if (url) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
    return null;
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
