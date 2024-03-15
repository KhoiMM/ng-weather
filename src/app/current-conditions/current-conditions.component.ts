import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConditionsAndZip } from '../conditions-and-zip.type';
import { LocationService } from '../location.service';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css'],
})
export class CurrentConditionsComponent {
  private weatherService = inject(WeatherService);
  protected locationService = inject(LocationService);
  locationsSubscription$: Subscription;
  addErrorSubscription$: Subscription;
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
          this.locationService.locations.forEach((location) => {
            this.weatherService.addCurrentConditions(location);
          });
        } else if (value.mode === 'create') {
          this.weatherService.addCurrentConditions(value.currentZip);
        } else if (value.mode === 'remove') {
          this.weatherService.removeCurrentConditions(value.selectedIndex);
        }
      });

    this.addErrorSubscription$ = this.weatherService.addErrorSubject.subscribe(
      () => {
        this.locationService.locations.pop();
        localStorage.setItem(
          'locations',
          JSON.stringify(this.locationService.locations)
        );
      }
    );
  }

  showForecast(zipcode: string) {
    this.weatherService.currentConditions = [];
    this.locationService.locations = [];
    this.router.navigate(['/forecast', zipcode]);
  }

  removeTab($event: number) {
    this.locationService.removeLocation($event);
  }

  ngOnDestroy() {
    this.locationsSubscription$.unsubscribe();
    this.addErrorSubscription$.unsubscribe();
  }
}
