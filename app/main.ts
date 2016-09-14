import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import { HttpModule } from '@angular/http';
import 'rxjs/Rx'; //Get everything from Rx

platformBrowserDynamic().bootstrapModule(AppModule, [HttpModule]);
