import { Component, computed, input } from '@angular/core';
import { LogoComponent } from "../logo-component/logo-component";
import { ILangIcons, langicons } from '../projects';

@Component({
  selector: 'app-header',
  imports: [LogoComponent],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {


  theTech = computed(() => {
    const temp: ILangIcons[] = [];
    for (let index = 12; index < langicons.length; index++) {
      const element = langicons[index];
                temp.push(element)
    }
    return temp;
  })

  onHackathon() {


  }
}
