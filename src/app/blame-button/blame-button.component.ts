import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blame-button',
  templateUrl: './blame-button.component.html',
  styleUrls: ['./blame-button.component.css']
})
export class BlameButtonComponent {
  @Input() name!: string;

  blame(name: string) {
    window.alert('No one likes ' + name + '!');
  }
}
