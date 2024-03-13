import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { ActivatedRoute } from '@angular/router';
import { Forecast } from './forecast.type';
import { CACHED_TIME } from 'app/cached-time';

@Component({
  selector: 'app-forecasts-list',
  templateUrl: './forecasts-list.component.html',
  styleUrls: ['./forecasts-list.component.css'],
})
export class ForecastsListComponent {
  zipcode: string;
  forecast: Forecast;

  constructor(protected weatherService: WeatherService, route: ActivatedRoute) {
    route.params.subscribe((params) => {
      const cachedForecasts = JSON.parse(
        localStorage.getItem('forecasts')
      ) as Forecast[];
      this.zipcode = params['zipcode'];
      let index = -1;
      const forecast = cachedForecasts.find((f, i) => {
        if (f.zipcode === this.zipcode) {
          index = i;
          return true;
        }
        return false;
      });
      if (
        forecast &&
        forecast.calledTime + CACHED_TIME >= new Date().getTime()
      ) {
        this.forecast = forecast;
      }

      if (
        !forecast ||
        (forecast && forecast.calledTime + CACHED_TIME < new Date().getTime())
      ) {
        cachedForecasts.splice(index, 1);
        weatherService.getForecast(this.zipcode).subscribe((data) => {
          this.forecast = data;
          cachedForecasts.push({
            ...this.forecast,
            zipcode: this.zipcode,
            calledTime: new Date().getTime(),
          });
          localStorage.setItem('forecasts', JSON.stringify(cachedForecasts));
        });
      }
    });
  }
}
