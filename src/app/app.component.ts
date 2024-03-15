import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {
    if (!localStorage.getItem('locations')) {
      localStorage.setItem('locations', JSON.stringify([]));
    }

    if (!localStorage.getItem('exp_time')) {
      localStorage.setItem('exp_time', '7200');
    }
  }
}
