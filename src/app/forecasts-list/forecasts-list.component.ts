import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { WeatherService } from '../weather.service';
import { Forecast } from './forecast.type';

@Component({
  selector: 'app-forecasts-list',
  templateUrl: './forecasts-list.component.html',
  styleUrls: ['./forecasts-list.component.css'],
})
export class ForecastsListComponent {
  zipcode: string;
  forecast: Forecast;

  constructor(protected weatherService: WeatherService, route: ActivatedRoute) {
    route.params.pipe(take(1)).subscribe((params) => {
      this.zipcode = params['zipcode'];
      weatherService
        .getForecast(this.zipcode)
        .pipe(take(1))
        .subscribe((res) => {
          this.forecast = res;
        });
    });
  }
}
