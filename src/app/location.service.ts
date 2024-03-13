import { Injectable } from '@angular/core';
import { WeatherService } from './weather.service';
import { BehaviorSubject } from 'rxjs';

export const LOCATIONS: string = 'locations';
export interface LocationMode {
  mode: 'get' | 'create' | 'remove';
  currentZip?: string;
  locations: string[];
  selectedIndex?: number;

}

@Injectable()
export class LocationService {
  locations: string[] = [];
  public locationsSubject = new BehaviorSubject<LocationMode>({
    mode: 'get',
    currentZip: '',
    locations: this.locations
  });

  initLocations() {
    let locString = localStorage.getItem(LOCATIONS);
    if (locString) {
      this.locations = JSON.parse(locString);
      this.locationsSubject.next({
        mode: 'get',
        currentZip: '',
        locations: []
      });
    }
  }

  addLocation(zipcode: string) {
    this.locations.push(zipcode);
    localStorage.setItem(LOCATIONS, JSON.stringify(this.locations));
    this.locationsSubject.next({
      mode: 'create',
      currentZip: zipcode,
      locations: this.locations
    });
  }

  removeLocation(index: number) {
    if (index !== -1) {
      this.locations.splice(index, 1);
      localStorage.setItem(LOCATIONS, JSON.stringify(this.locations));
      this.locationsSubject.next({
        mode: 'remove',
        locations: this.locations,
        selectedIndex: index
      });
    }
  } 
}
