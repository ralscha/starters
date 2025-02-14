import {ApplicationConfig, provideExperimentalZonelessChangeDetection} from '@angular/core';
import {PreloadAllModules, provideRouter, RouteReuseStrategy, withHashLocation, withPreloading} from '@angular/router';

import {routes} from './app.routes';
import {IonicRouteStrategy, provideIonicAngular} from '@ionic/angular/standalone';

export const appConfig: ApplicationConfig = {
  providers: [provideExperimentalZonelessChangeDetection(),
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    provideIonicAngular(),
    provideRouter(routes, withHashLocation(), withPreloading(PreloadAllModules)),
  ]
};
