import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { take, tap } from 'rxjs/operators';
import { ConditionsAndZip } from './conditions-and-zip.type';
import { CookieUtil } from './cookie-util';
import { CurrentConditions } from './current-conditions/current-conditions.type';
import { Forecast } from './forecasts-list/forecast.type';

@Injectable()
export class WeatherService {
  static URL = 'http://api.openweathermap.org/data/2.5';
  static APPID = '5a4b2d457ecbef9eb2a71e480b947604';
  static ICON_URL =
    'https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/';
  currentConditions: ConditionsAndZip[] = [];
  expTime: number;
  public addErrorSubject = new Subject();

  constructor(private http: HttpClient) {}

  checkExpTime() {
    const expTimeStr = localStorage.getItem('exp_time');
    // if exp_time was removed from local storage, it would automatically set to 7200 seconds (2 hours)
    this.expTime =
      expTimeStr && !isNaN(Number(expTimeStr)) ? Number(expTimeStr) : 7200;
    localStorage.setItem('exp_time', this.expTime.toString());
  }

  addCurrentConditions(zipcode: string) {
    this.checkExpTime();
    const cookiedConditionStr = CookieUtil.getCookie(
      'condition' + '_' + zipcode
    );
    if (cookiedConditionStr) {
      const cachedCondition = JSON.parse(
        cookiedConditionStr
      ) as CurrentConditions;
      this.currentConditions.push({ zip: zipcode, data: cachedCondition });
    } else {
      this.http
        .get<CurrentConditions>(
          `${WeatherService.URL}/weather?zip=${zipcode},us&units=imperial&APPID=${WeatherService.APPID}`
        )
        .pipe(take(1))
        .subscribe(
          (res) => {
            this.currentConditions.push({
              zip: zipcode,
              data: res,
            });
            CookieUtil.setCookie(
              'condition' + '_' + zipcode,
              JSON.stringify(res),
              this.expTime
            );
          },
          () => {
            this.addErrorSubject.next();
          }
        );
    }
  }

  getForecast(zipcode: string): Observable<Forecast> {
    this.checkExpTime();
    // Here we make a request to get the forecast data from the API. Note the use of backticks and an expression to insert the zipcode
    const cookiedForecastStr = CookieUtil.getCookie('forecast' + '_' + zipcode);
    if (cookiedForecastStr) {
      return of(JSON.parse(cookiedForecastStr) as Forecast);
    } else {
      return this.http
        .get<Forecast>(
          `${WeatherService.URL}/forecast/daily?zip=${zipcode},us&units=imperial&cnt=5&APPID=${WeatherService.APPID}`
        )
        .pipe(
          tap((res) =>
            CookieUtil.setCookie(
              'forecast' + '_' + zipcode,
              JSON.stringify(res),
              this.expTime
            )
          )
        );
    }
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
