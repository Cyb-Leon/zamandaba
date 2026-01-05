import { Component } from '@angular/core';
import { HackathonService } from '../../services/hackathon-service';

@Component({
  selector: 'app-bottom-nav',
  imports: [],
  templateUrl: './bottom-nav.html',
  styleUrl: '../hackathon-component.css',
})
export class BottomNav {
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

