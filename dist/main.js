(self["webpackChunkng_weather"] = self["webpackChunkng_weather"] || []).push([["main"],{

/***/ 6108:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 440);
/* harmony import */ var _app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css?ngResource */ 4688);
/* harmony import */ var _app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4280);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let AppComponent = class AppComponent {
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
  static #_ = this.ctorParameters = () => [];
};
AppComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AppComponent);


/***/ }),

/***/ 5204:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 168);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 1904);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 6108);
/* harmony import */ var _zipcode_entry_zipcode_entry_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zipcode-entry/zipcode-entry.component */ 900);
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./location.service */ 3628);
/* harmony import */ var _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forecasts-list/forecasts-list.component */ 3089);
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./weather.service */ 1412);
/* harmony import */ var _current_conditions_current_conditions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./current-conditions/current-conditions.component */ 1368);
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-page/main-page.component */ 8692);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing */ 4680);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 3712);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/service-worker */ 7676);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ 6716);
/* harmony import */ var _tabs_tab_group_tab_group_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tabs/tab-group/tab-group.component */ 9640);
/* harmony import */ var _tabs_tab_tab_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tabs/tab/tab.component */ 5384);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















let AppModule = class AppModule {};
AppModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _zipcode_entry_zipcode_entry_component__WEBPACK_IMPORTED_MODULE_1__.ZipcodeEntryComponent, _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_3__.ForecastsListComponent, _current_conditions_current_conditions_component__WEBPACK_IMPORTED_MODULE_5__.CurrentConditionsComponent, _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__.MainPageComponent, _tabs_tab_group_tab_group_component__WEBPACK_IMPORTED_MODULE_9__.TabGroupComponent, _tabs_tab_tab_component__WEBPACK_IMPORTED_MODULE_10__.TabComponent],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule, _app_routing__WEBPACK_IMPORTED_MODULE_7__.routing, _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__.ServiceWorkerModule.register('/ngsw-worker.js', {
    enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.production
  })],
  providers: [_location_service__WEBPACK_IMPORTED_MODULE_2__.LocationService, _weather_service__WEBPACK_IMPORTED_MODULE_4__.WeatherService],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
})], AppModule);


/***/ }),

/***/ 4680:
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routing: () => (/* binding */ routing)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecasts-list/forecasts-list.component */ 3089);
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-page/main-page.component */ 8692);



const appRoutes = [{
  path: '',
  component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__.MainPageComponent
}, {
  path: 'forecast/:zipcode',
  component: _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_0__.ForecastsListComponent
}];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(appRoutes, {
  useHash: true
});

/***/ }),

/***/ 5636:
/*!********************************!*\
  !*** ./src/app/cached-time.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CACHED_TIME: () => (/* binding */ CACHED_TIME)
/* harmony export */ });
// export const CACHED_TIME = 2 * 60 * 60 * 1000;
const CACHED_TIME = 5 * 1000;

/***/ }),

/***/ 1368:
/*!********************************************************************!*\
  !*** ./src/app/current-conditions/current-conditions.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrentConditionsComponent: () => (/* binding */ CurrentConditionsComponent)
/* harmony export */ });
/* harmony import */ var _current_conditions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current-conditions.component.html?ngResource */ 3044);
/* harmony import */ var _current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./current-conditions.component.css?ngResource */ 6016);
/* harmony import */ var _current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weather.service */ 1412);
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../location.service */ 3628);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 4040);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let CurrentConditionsComponent = class CurrentConditionsComponent {
  constructor(router) {
    this.router = router;
    this.weatherService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_weather_service__WEBPACK_IMPORTED_MODULE_2__.WeatherService);
    this.locationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_location_service__WEBPACK_IMPORTED_MODULE_3__.LocationService);
    this.currentConditionsByZip = [];
    this.currentConditionsByZip = this.weatherService.currentConditions;
  }
  ngOnInit() {
    this.locationService.initLocations();
    this.listenLocationMode();
  }
  listenLocationMode() {
    this.locationsSubscription$ = this.locationService.locationsSubject.subscribe(value => {
      if (value.mode === 'get') {
        const cachedConditions = JSON.parse(localStorage.getItem('conditionsByZip'));
        this.locationService.locations.forEach(location => {
          this.weatherService.initCurrentConditions(location, cachedConditions);
        });
      } else if (value.mode === 'create') {
        this.weatherService.addCurrentConditions(value.currentZip);
      } else if (value.mode === 'remove') {
        this.weatherService.removeCurrentConditions(value.selectedIndex);
      }
    });
    this.addErrorSubscription$ = this.weatherService.addErrorSubject.subscribe(() => {
      this.locationService.locations.pop();
      localStorage.setItem('locations', JSON.stringify(this.locationService.locations));
    });
  }
  showForecast(zipcode) {
    this.weatherService.currentConditions = [];
    this.locationService.locations = [];
    this.router.navigate(['/forecast', zipcode]);
  }
  removeTab($event) {
    this.locationService.removeLocation($event);
  }
  ngOnDestroy() {
    this.locationsSubscription$.unsubscribe();
    this.addErrorSubscription$.unsubscribe();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
  }];
};
CurrentConditionsComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-current-conditions',
  template: _current_conditions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CurrentConditionsComponent);


/***/ }),

/***/ 3089:
/*!************************************************************!*\
  !*** ./src/app/forecasts-list/forecasts-list.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForecastsListComponent: () => (/* binding */ ForecastsListComponent)
/* harmony export */ });
/* harmony import */ var _forecasts_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecasts-list.component.html?ngResource */ 8464);
/* harmony import */ var _forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forecasts-list.component.css?ngResource */ 8444);
/* harmony import */ var _forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weather.service */ 1412);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var app_cached_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/cached-time */ 5636);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let ForecastsListComponent = class ForecastsListComponent {
  constructor(weatherService, route) {
    this.weatherService = weatherService;
    route.params.subscribe(params => {
      const cachedForecasts = JSON.parse(localStorage.getItem('forecasts'));
      this.zipcode = params['zipcode'];
      let index = -1;
      const forecast = cachedForecasts.find((f, i) => {
        if (f.zipcode === this.zipcode) {
          index = i;
          return true;
        }
        return false;
      });
      if (forecast && forecast.calledTime + app_cached_time__WEBPACK_IMPORTED_MODULE_3__.CACHED_TIME >= new Date().getTime()) {
        this.forecast = forecast;
      }
      if (!forecast || forecast && forecast.calledTime + app_cached_time__WEBPACK_IMPORTED_MODULE_3__.CACHED_TIME < new Date().getTime()) {
        cachedForecasts.splice(index, 1);
        weatherService.getForecast(this.zipcode).subscribe(data => {
          this.forecast = data;
          cachedForecasts.push({
            ...this.forecast,
            zipcode: this.zipcode,
            calledTime: new Date().getTime()
          });
          localStorage.setItem('forecasts', JSON.stringify(cachedForecasts));
        });
      }
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _weather_service__WEBPACK_IMPORTED_MODULE_2__.WeatherService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
  }];
};
ForecastsListComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-forecasts-list',
  template: _forecasts_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ForecastsListComponent);


/***/ }),

/***/ 3628:
/*!*************************************!*\
  !*** ./src/app/location.service.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LOCATIONS: () => (/* binding */ LOCATIONS),
/* harmony export */   LocationService: () => (/* binding */ LocationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2112);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


const LOCATIONS = 'locations';
let LocationService = class LocationService {
  constructor() {
    this.locations = [];
    this.locationsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({
      mode: 'get',
      currentZip: '',
      locations: this.locations
    });
  }
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
  addLocation(zipcode) {
    this.locations.push(zipcode);
    localStorage.setItem(LOCATIONS, JSON.stringify(this.locations));
    this.locationsSubject.next({
      mode: 'create',
      currentZip: zipcode,
      locations: this.locations
    });
  }
  removeLocation(index) {
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
};
LocationService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()], LocationService);


/***/ }),

/***/ 8692:
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainPageComponent: () => (/* binding */ MainPageComponent)
/* harmony export */ });
/* harmony import */ var _main_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page.component.html?ngResource */ 6488);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let MainPageComponent = class MainPageComponent {};
MainPageComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  selector: 'app-main-page',
  template: _main_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], MainPageComponent);


/***/ }),

/***/ 9640:
/*!*******************************************************!*\
  !*** ./src/app/tabs/tab-group/tab-group.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabGroupComponent: () => (/* binding */ TabGroupComponent)
/* harmony export */ });
/* harmony import */ var _tab_group_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab-group.component.html?ngResource */ 7384);
/* harmony import */ var _tab_group_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab-group.component.css?ngResource */ 6360);
/* harmony import */ var _tab_group_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tab_group_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _tab_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tab/tab.component */ 5384);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let TabGroupComponent = class TabGroupComponent {
  constructor() {
    this.removeTabEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
  }
  ngOnInit() {
    setTimeout(() => {
      if (this.tabs.length) {
        const activeTabs = this.tabs.filter(tab => tab.active);
        if (activeTabs.length === 0) {
          this.selectTab(this.tabs.first);
        }
      }
    }, 0);
  }
  selectTab(tab) {
    this.tabs.forEach(tab => tab.active = false);
    tab.active = true;
  }
  removeTab(index) {
    this.tabs[index] = false;
    this.removeTabEvent.emit(index);
    setTimeout(() => {
      if (this.tabs.length) {
        const activeTabs = this.tabs.filter(tab => tab.active);
        if (activeTabs.length === 0) {
          this.selectTab(this.tabs.first);
        }
      }
    }, 0);
  }
  static #_ = this.propDecorators = {
    tabs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ContentChildren,
      args: [_tab_tab_component__WEBPACK_IMPORTED_MODULE_2__.TabComponent]
    }],
    removeTabEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }]
  };
};
TabGroupComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-tab-group',
  template: _tab_group_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_tab_group_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TabGroupComponent);


/***/ }),

/***/ 5384:
/*!*******************************************!*\
  !*** ./src/app/tabs/tab/tab.component.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabComponent: () => (/* binding */ TabComponent)
/* harmony export */ });
/* harmony import */ var _tab_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab.component.html?ngResource */ 9908);
/* harmony import */ var _tab_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab.component.css?ngResource */ 3004);
/* harmony import */ var _tab_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tab_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4280);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let TabComponent = class TabComponent {
  constructor() {
    this.active = false;
  }
  static #_ = this.propDecorators = {
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    active: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  };
};
TabComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-tab',
  template: _tab_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_tab_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TabComponent);


/***/ }),

/***/ 1412:
/*!************************************!*\
  !*** ./src/app/weather.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeatherService: () => (/* binding */ WeatherService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4640);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3712);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5944);
/* harmony import */ var _cached_time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cached-time */ 5636);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WeatherService_1;





let WeatherService = class WeatherService {
  static #_ = WeatherService_1 = this;
  static #_2 = this.URL = 'http://api.openweathermap.org/data/2.5';
  static #_3 = this.APPID = '5a4b2d457ecbef9eb2a71e480b947604';
  static #_4 = this.ICON_URL = 'https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/';
  constructor(http) {
    this.http = http;
    this.currentConditions = [];
    this.addErrorSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  }
  initCurrentConditions(zipcode, cachedConditions) {
    const condition = cachedConditions.find(c => c.zip === zipcode);
    if (condition && condition.calledTime + _cached_time__WEBPACK_IMPORTED_MODULE_0__.CACHED_TIME >= new Date().getTime()) {
      this.currentConditions.push(condition);
    } else {
      this.http.get(`${WeatherService_1.URL}/weather?zip=${zipcode},us&units=imperial&APPID=${WeatherService_1.APPID}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1)).subscribe(res => {
        this.currentConditions.push({
          zip: zipcode,
          data: res,
          calledTime: new Date().getTime()
        });
        localStorage.setItem('conditionsByZip', JSON.stringify(this.currentConditions));
      });
    }
  }
  addCurrentConditions(zipcode) {
    // Here we make a request to get the current conditions data from the API. Note the use of backticks and an expression to insert the zipcode
    this.http.get(`${WeatherService_1.URL}/weather?zip=${zipcode},us&units=imperial&APPID=${WeatherService_1.APPID}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1)).subscribe(condition => {
      this.currentConditions.push({
        zip: zipcode,
        data: condition,
        calledTime: new Date().getTime()
      });
      localStorage.setItem('conditionsByZip', JSON.stringify(this.currentConditions));
    }, () => {
      this.addErrorSubject.next();
    });
  }
  removeCurrentConditions(index) {
    if (index !== -1) {
      this.currentConditions.splice(index, 1);
      const cachedConditions = JSON.parse(localStorage.getItem('conditionsByZip'));
      cachedConditions.splice(index, 1);
      localStorage.setItem('conditionsByZip', JSON.stringify(cachedConditions));
    }
  }
  getForecast(zipcode) {
    // Here we make a request to get the forecast data from the API. Note the use of backticks and an expression to insert the zipcode
    return this.http.get(`${WeatherService_1.URL}/forecast/daily?zip=${zipcode},us&units=imperial&cnt=5&APPID=${WeatherService_1.APPID}`);
  }
  getWeatherIcon(id) {
    if (id >= 200 && id <= 232) return WeatherService_1.ICON_URL + 'art_storm.png';else if (id >= 501 && id <= 511) return WeatherService_1.ICON_URL + 'art_rain.png';else if (id === 500 || id >= 520 && id <= 531) return WeatherService_1.ICON_URL + 'art_light_rain.png';else if (id >= 600 && id <= 622) return WeatherService_1.ICON_URL + 'art_snow.png';else if (id >= 801 && id <= 804) return WeatherService_1.ICON_URL + 'art_clouds.png';else if (id === 741 || id === 761) return WeatherService_1.ICON_URL + 'art_fog.png';else return WeatherService_1.ICON_URL + 'art_clear.png';
  }
  static #_5 = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient
  }];
};
WeatherService = WeatherService_1 = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()], WeatherService);


/***/ }),

/***/ 900:
/*!**********************************************************!*\
  !*** ./src/app/zipcode-entry/zipcode-entry.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZipcodeEntryComponent: () => (/* binding */ ZipcodeEntryComponent)
/* harmony export */ });
/* harmony import */ var _zipcode_entry_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zipcode-entry.component.html?ngResource */ 248);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../location.service */ 3628);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ZipcodeEntryComponent = class ZipcodeEntryComponent {
  constructor(service) {
    this.service = service;
  }
  addLocation(zipcode) {
    this.service.addLocation(zipcode);
  }
  static #_ = this.ctorParameters = () => [{
    type: _location_service__WEBPACK_IMPORTED_MODULE_1__.LocationService
  }];
};
ZipcodeEntryComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: "app-zipcode-entry",
  template: _zipcode_entry_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], ZipcodeEntryComponent);


/***/ }),

/***/ 6716:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
  production: false
};

/***/ }),

/***/ 7460:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 2675);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 5204);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 6716);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);

/***/ }),

/***/ 4688:
/*!**********************************************!*\
  !*** ./src/app/app.component.css?ngResource ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9728);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 7804);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 6016:
/*!********************************************************************************!*\
  !*** ./src/app/current-conditions/current-conditions.component.css?ngResource ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9728);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 7804);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.close {
  cursor: pointer;
}
.flex {
  display: flex;
  justify-content: space-between;
}

.card-weather {
  display: flex;
  align-items: center;
  gap: 32px;
  background-color: #f5f5f5;
  margin: 24px 60px 24px 24px;
  padding: 0 12px;
}
a {
  cursor: pointer;
}
`, "",{"version":3,"sources":["webpack://./src/app/current-conditions/current-conditions.component.css"],"names":[],"mappings":"AAAA;EACE,eAAe;AACjB;AACA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,yBAAyB;EACzB,2BAA2B;EAC3B,eAAe;AACjB;AACA;EACE,eAAe;AACjB","sourcesContent":[".close {\n  cursor: pointer;\n}\n.flex {\n  display: flex;\n  justify-content: space-between;\n}\n\n.card-weather {\n  display: flex;\n  align-items: center;\n  gap: 32px;\n  background-color: #f5f5f5;\n  margin: 24px 60px 24px 24px;\n  padding: 0 12px;\n}\na {\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 8444:
/*!************************************************************************!*\
  !*** ./src/app/forecasts-list/forecasts-list.component.css?ngResource ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9728);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 7804);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.icon {
  width: 45px;
  height: 45px;
  position: absolute;
  right: 20px;
  top: -2px;
}
`, "",{"version":3,"sources":["webpack://./src/app/forecasts-list/forecasts-list.component.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,WAAW;EACX,SAAS;AACX","sourcesContent":[".icon {\n  width: 45px;\n  height: 45px;\n  position: absolute;\n  right: 20px;\n  top: -2px;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 6360:
/*!*******************************************************************!*\
  !*** ./src/app/tabs/tab-group/tab-group.component.css?ngResource ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9728);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 7804);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:host {
  .tab-group-header {
    display: flex;
    flex-direction: row;
    gap: 2px;
    overflow-x: auto;
    white-space: nowrap;
  }

  .tab-header-container {
    background-color: #607AA0;
    color: #FFF;
    padding: 4px 12px;
    border: 1px solid #000;
    border-bottom-width: 0;
  }

  .tab-header-label {
    display: flex;
    flex-direction: row;
    gap: 12px;
    cursor: pointer;
  }

  .button-remove-tab {
    width: 20px;
    text-align: center;
  }

  .button-remove-tab:hover {
    background-color: #506080;
    cursor: pointer;
  }

  .container-content {
    border: 1px solid #000;
  }

  .active {
    background-color: #405D80;
    color: #CCC;
  }
}`, "",{"version":3,"sources":["webpack://./src/app/tabs/tab-group/tab-group.component.css"],"names":[],"mappings":"AAAA;EACE;IACE,aAAa;IACb,mBAAmB;IACnB,QAAQ;IACR,gBAAgB;IAChB,mBAAmB;EACrB;;EAEA;IACE,yBAAyB;IACzB,WAAW;IACX,iBAAiB;IACjB,sBAAsB;IACtB,sBAAsB;EACxB;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,eAAe;EACjB;;EAEA;IACE,WAAW;IACX,kBAAkB;EACpB;;EAEA;IACE,yBAAyB;IACzB,eAAe;EACjB;;EAEA;IACE,sBAAsB;EACxB;;EAEA;IACE,yBAAyB;IACzB,WAAW;EACb;AACF","sourcesContent":[":host {\r\n  .tab-group-header {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 2px;\r\n    overflow-x: auto;\r\n    white-space: nowrap;\r\n  }\r\n\r\n  .tab-header-container {\r\n    background-color: #607AA0;\r\n    color: #FFF;\r\n    padding: 4px 12px;\r\n    border: 1px solid #000;\r\n    border-bottom-width: 0;\r\n  }\r\n\r\n  .tab-header-label {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 12px;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .button-remove-tab {\r\n    width: 20px;\r\n    text-align: center;\r\n  }\r\n\r\n  .button-remove-tab:hover {\r\n    background-color: #506080;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .container-content {\r\n    border: 1px solid #000;\r\n  }\r\n\r\n  .active {\r\n    background-color: #405D80;\r\n    color: #CCC;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 3004:
/*!*******************************************************!*\
  !*** ./src/app/tabs/tab/tab.component.css?ngResource ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9728);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 7804);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 440:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<router-outlet></router-outlet>\n";

/***/ }),

/***/ 3044:
/*!*********************************************************************************!*\
  !*** ./src/app/current-conditions/current-conditions.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div>\n  <ng-container *ngIf=\"currentConditionsByZip.length\">\n    <app-tab-group (removeTabEvent)=\"removeTab($event)\">\n      <ng-container\n        *ngFor=\"let location of currentConditionsByZip\"\n        class=\"well flex\"\n      >\n        <app-tab label=\"{{ location.data.name }} ({{ location.zip }})\">\n          <div class=\"card-weather\" (click)=\"showForecast(location.zip)\">\n            <div>\n              <h4>Current conditions: {{ location.data.weather[0].main }}</h4>\n              <h4>Temperatures today:</h4>\n              <p>\n                Current {{ location.data.main.temp | number : '.0-0' }} - Max\n                {{ location.data.main.temp_max | number : '.0-0' }} - Min\n                {{ location.data.main.temp_min | number : '.0-0' }}\n              </p>\n              <p>\n                <a (click)=\"showForecast(location.zip)\"\n                  >Show 5-day forecast for {{ location.data.name }}</a\n                >\n              </p>\n            </div>\n            <img\n              [src]=\"weatherService.getWeatherIcon(location.data.weather[0].id)\"\n            />\n          </div>\n        </app-tab>\n      </ng-container>\n    </app-tab-group>\n  </ng-container>\n</div>\n";

/***/ }),

/***/ 8464:
/*!*************************************************************************!*\
  !*** ./src/app/forecasts-list/forecasts-list.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div>\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">5-day forecast for {{ forecast?.city.name }}</h3>\n    </div>\n    <ul class=\"list-group\">\n      <li *ngFor=\"let dailyForecast of forecast?.list\" class=\"list-group-item\">\n        {{ dailyForecast.dt * 1000 | date : 'EEEE, MMM d' }}:\n        {{ dailyForecast.weather[0].main }}\n        - Min: {{ dailyForecast.temp.min | number : '.0-0' }} - Max:\n        {{ dailyForecast.temp.max | number : '.0-0' }}\n\n        <img\n          [src]=\"weatherService.getWeatherIcon(dailyForecast.weather[0].id)\"\n          class=\"icon\"\n        />\n      </li>\n    </ul>\n  </div>\n</div>\n<button class=\"btn btn-success\" [routerLink]=\"'/'\">< Back to main page</button>";

/***/ }),

/***/ 6488:
/*!***************************************************************!*\
  !*** ./src/app/main-page/main-page.component.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container-fluid\">\n  <app-zipcode-entry> </app-zipcode-entry>\n  <app-current-conditions></app-current-conditions>\n</div>\n";

/***/ }),

/***/ 7384:
/*!********************************************************************!*\
  !*** ./src/app/tabs/tab-group/tab-group.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div>\r\n  <div class=\"tab-group-header\">\r\n    <div\r\n      class=\"tab-header-container\"\r\n      *ngFor=\"let tab of tabs; let i = index\"\r\n      [ngClass]=\"{ active: tab.active === true }\"\r\n      (click)=\"selectTab(tab)\"\r\n    >\r\n      <div class=\"tab-header-label\">\r\n        <span>{{ tab.label }}</span>\r\n        <div class=\"button-remove-tab\" (click)=\"removeTab(i)\">X</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container-content\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n";

/***/ }),

/***/ 9908:
/*!********************************************************!*\
  !*** ./src/app/tabs/tab/tab.component.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div [hidden]=\"!active\">\r\n  <ng-content></ng-content>\r\n</div>\r\n";

/***/ }),

/***/ 248:
/*!***********************************************************************!*\
  !*** ./src/app/zipcode-entry/zipcode-entry.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"well\">\n  <h2>Enter a zipcode:</h2>\n  <input type=\"text\" #zipcode placeholder=\"Zipcode\" class=\"form-control\" />\n  <br />\n  <button class=\"btn btn-primary\" (click)=\"addLocation(zipcode.value)\">\n    Add location\n  </button>\n</div>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(7460)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map