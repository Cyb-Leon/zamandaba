import { Component } from '@angular/core';
import { HackathonService } from '../../services/hackathon-service';

@Component({
  selector: 'hackathon-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: '../hackathon-component.css',
})
export class HeaderHackathon {
  //get service &
  //ensuring data persistance
  constructor(private hackathonService : HackathonService){
    this.hackathonService = hackathonService;
  }

  //get the service
  get hackEvent(){
      return this.hackathonService;
  }
}
