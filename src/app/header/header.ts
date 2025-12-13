import { Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LogoComponent } from "../logo-component/logo-component";
import { ILangIcons, langicons } from '../projects';

@Component({
  selector: 'app-header',
  imports: [LogoComponent],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  private router = inject(Router);

  //my easter egg for interests
  onLogo() {
    this.router.navigate(['']);
  }
  //
  theTech = computed(() => {
    const temp: ILangIcons[] = [];
    for (let index = 12; index < langicons.length; index++) {
      const element = langicons[index];
      temp.push(element)
    }
    return temp;
  })

  onHackathon() {
    // this.router.navigate(['/hackat']);
    this.router.navigate(['/hackathon']);

  }
  onProjects() {
    this.router.navigate(['']);
   }
}
