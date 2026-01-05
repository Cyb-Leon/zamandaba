import { Component, computed } from '@angular/core';
import { HackathonService } from '../../services/hackathon-service';

@Component({
  selector: 'app-journey',
  imports: [],
  templateUrl: './journey.html',
  styleUrl: '../hackathon-component.css',
})

export class Journey {
  
  //get service &
  //ensuring data persistance
  constructor(private hackathonService: HackathonService) {
    this.hackathonService = hackathonService;
  }

  //get the service
  get hackEvent() {
    return this.hackathonService;
  }

  //get journey images
  // justImages = computed(() => {
  //   const temp : IJourneyImg [] = [];
  //   this.hackathonService.images.forEach(imageJ => {

  //         temp.push(imageJ);
  //   })
  //   return temp;

  // });


}
