import { Injectable, Signal, signal } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { CurrentConditions } from './current-conditions/current-conditions.type';
import { ConditionsAndZip } from './conditions-and-zip.type';
import { Forecast } from './forecasts-list/forecast.type';
import { take } from 'rxjs/operators';
import { CACHED_TIME } from './cached-time';

@Injectable()
export class WeatherService {
  static URL = 'http://api.openweathermap.org/data/2.5';
  static APPID = '5a4b2d457ecbef9eb2a71e480b947604';
  static ICON_URL =
    'https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/';
  currentConditions: ConditionsAndZip[] = [];

  constructor(private http: HttpClient) {}

  initCurrentConditions(zipcode: string, cachedConditions: ConditionsAndZip[]) {
    const condition = cachedConditions.find((c) => c.zip === zipcode);
    if (
      condition &&
      condition.calledTime + CACHED_TIME >= new Date().getTime()
    ) {
      this.currentConditions.push(condition);
    } else {
      this.http
        .get<CurrentConditions>(
          `${WeatherService.URL}/weather?zip=${zipcode},us&units=imperial&APPID=${WeatherService.APPID}`
        )
        .pipe(take(1))
        .subscribe((res) => {
          this.currentConditions.push({
            zip: zipcode,
            data: res,
            calledTime: new Date().getTime(),
          });
          localStorage.setItem(
            'conditionsByZip',
            JSON.stringify(this.currentConditions)
          );
        });
    }
  }

  addCurrentConditions(zipcode: string) {
    // Here we make a request to get the current conditions data from the API. Note the use of backticks and an expression to insert the zipcode
    this.http
      .get<CurrentConditions>(
        `${WeatherService.URL}/weather?zip=${zipcode},us&units=imperial&APPID=${WeatherService.APPID}`
      )
      .pipe(take(1))
      .subscribe(
        (condition) => {
          this.currentConditions.push({
            zip: zipcode,
            data: condition,
            calledTime: new Date().getTime(),
          });
          localStorage.setItem(
            'conditionsByZip',
            JSON.stringify(this.currentConditions)
          );
        },
        () => {
          const cachedLocations = JSON.parse(localStorage.getItem('locations')) as string[];
          cachedLocations.pop();
          localStorage.setItem('locations', JSON.stringify(cachedLocations));
        }
      );
  }

  removeCurrentConditions(index: number) {
    if (index !== -1) {
      this.currentConditions.splice(index, 1);
      const cachedConditions = JSON.parse(
        localStorage.getItem('conditionsByZip')
      ) as ConditionsAndZip[];
      cachedConditions.splice(index, 1);
      localStorage.setItem('conditionsByZip', JSON.stringify(cachedConditions));
    }
  }

  // getCurrentConditions(): Signal<ConditionsAndZip[]> {
  //   return this.currentConditions.asReadonly();
  // }

  getForecast(zipcode: string): Observable<Forecast> {
    // Here we make a request to get the forecast data from the API. Note the use of backticks and an expression to insert the zipcode
    return this.http.get<Forecast>(
      `${WeatherService.URL}/forecast/daily?zip=${zipcode},us&units=imperial&cnt=5&APPID=${WeatherService.APPID}`
    );
  }

  getWeatherIcon(id): string {
    if (id >= 200 && id <= 232)
      return WeatherService.ICON_URL + 'art_storm.png';
    else if (id >= 501 && id <= 511)
      return WeatherService.ICON_URL + 'art_rain.png';
    else if (id === 500 || (id >= 520 && id <= 531))
      return WeatherService.ICON_URL + 'art_light_rain.png';
    else if (id >= 600 && id <= 622)
      return WeatherService.ICON_URL + 'art_snow.png';
    else if (id >= 801 && id <= 804)
      return WeatherService.ICON_URL + 'art_clouds.png';
    else if (id === 741 || id === 761)
      return WeatherService.ICON_URL + 'art_fog.png';
    else return WeatherService.ICON_URL + 'art_clear.png';
  }
}
