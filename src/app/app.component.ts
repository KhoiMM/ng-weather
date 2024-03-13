import { Component } from '@angular/core';
import { SwPush, SwUpdate } from '@angular/service-worker';
import { interval } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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

    if (!localStorage.getItem('conditionsByZip')) {
      localStorage.setItem('conditionsByZip', JSON.stringify([]));
    }

    if (!localStorage.getItem('forecasts')) {
      localStorage.setItem('forecasts', JSON.stringify([]));
    }
  }
}
