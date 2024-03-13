import { Component, inject, OnInit, Signal } from '@angular/core';
import { WeatherService } from '../weather.service';
import { LocationService } from '../location.service';
import { Router } from '@angular/router';
import { ConditionsAndZip } from '../conditions-and-zip.type';
import { take } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css'],
})
export class CurrentConditionsComponent {
  private weatherService = inject(WeatherService);
  protected locationService = inject(LocationService);
  locationsSubscription$: Subscription;
  currentConditionsByZip: ConditionsAndZip[] = [];

  constructor(private router: Router) {
    this.currentConditionsByZip = this.weatherService.currentConditions;
  }

  ngOnInit() {
    this.locationService.initLocations();
    this.listenLocationMode();
  }

  listenLocationMode() {
    this.locationsSubscription$ =
      this.locationService.locationsSubject.subscribe((value) => {
        if (value.mode === 'get') {
          const cachedConditions = JSON.parse(
            localStorage.getItem('conditionsByZip')
          ) as ConditionsAndZip[];
          this.locationService.locations.forEach((location) => {
            this.weatherService.initCurrentConditions(
              location,
              cachedConditions
            );
          });
        } else if (value.mode === 'create') {
          this.weatherService.addCurrentConditions(value.currentZip);
        } else if (value.mode === 'remove') {
          this.weatherService.removeCurrentConditions(value.selectedIndex);
        }
      });
  }

  showForecast(zipcode: string) {
    this.weatherService.currentConditions = [];
    this.router.navigate(['/forecast', zipcode]);
  }

  removeTab($event: number) {
    this.locationService.removeLocation($event);
  }

  ngOnDestroy() {
    this.locationsSubscription$.unsubscribe();
  }
}
