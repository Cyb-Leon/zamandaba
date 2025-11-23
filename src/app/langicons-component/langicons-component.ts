import { Component, input } from '@angular/core';

@Component({
  selector: 'app-langicons-component',
  imports: [],
  templateUrl: './langicons-component.html',
  styleUrl: './langicons-component.css',
})
export class LangiconsComponent {
myproject() {
throw new Error('Method not implemented.');
}
 Langicon = input.required<string[]>;


}
