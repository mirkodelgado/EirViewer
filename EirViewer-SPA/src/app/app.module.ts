import { EirresultsResolver } from './_resolvers/eirresults.resolver';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TabsModule } from 'ngx-bootstrap';
import { NgxGalleryModule } from 'ngx-gallery';

import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { HomeComponent } from './home/home.component';
import { appRoutes } from './routes';
import { FetchdataComponent } from './fetchdata/fetchdata.component';
import { CounterComponent } from './counter/counter.component';
import { DemotableComponent } from './demotable/demotable.component';
import { GateService } from './_services/gate.service';
import { AlertifyService } from './_services/alertify.service';
import { UnitresultsComponent } from './unitresults/unitresults.component';
import { EirresultsComponent } from './eirresults/eirresults.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';

@NgModule({
   declarations: [
      AppComponent,
      ValueComponent,
      NavmenuComponent,
      HomeComponent,
      FetchdataComponent,
      CounterComponent,
      DemotableComponent,
      UnitresultsComponent,
      EirresultsComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      RouterModule.forRoot(appRoutes),
      TabsModule.forRoot(),
      NgxGalleryModule
   ],
   providers: [
      GateService,
      AlertifyService,
      ErrorInterceptorProvider,
      EirresultsResolver
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
