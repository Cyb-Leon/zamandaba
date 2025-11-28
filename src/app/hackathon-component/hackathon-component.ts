import { Component, Input, input } from '@angular/core';
import { Hackathon } from './hackathon-data';

@Component({
  selector: 'app-hackathon-component',
  imports: [],
  templateUrl: './hackathon-component.html',
  styleUrl: './hackathon-component.css',
})
export class HackathonComponent {
  //vm gets one hackathon project - gives you access to the hackathon table in data server
  readonly vm = input.required<Hackathon>();


  //** 
  // which hackathon [project are we on] 
  //    */

  currentIndex = 0;
  currentHackathon = this.buyisaVMdata();

  //asidale ngoVM, idata lakhe sesinalo
  /*
  * first asiqalaze ukuthi uVM unani
  */

  async buyisaVMdata() {
    return this.vm();
  }

  // Methods
  nextHackathon = () => {
    if (this.currentIndex < this.hackathons.length - 1) {
      this.currentIndex++
      this.currentHackathon = this.hackathons[this.currentIndex]
      scrollToTop()
    }
  }

  prevHackathon = () => {
    if (this.currentIndex > 0) {
      this.currentIndex--
      this.currentHackathon = this.hackathons[this.currentIndex]
      scrollToTop()
    }
  }

  selectHackathon = (index) => {
    this.currentIndex = index
    this.currentHackathon = this.hackathons[index]
    scrollToTop()
  }

  scrollToTop() {
    $window.scrollTo(0, 0)
  }



}
