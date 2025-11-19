import { Component } from '@angular/core';
import { LogoComponent } from "../logo-component/logo-component";

@Component({
  selector: 'app-header',
  imports: [LogoComponent],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
