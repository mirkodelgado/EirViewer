import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FetchdataComponent } from './fetchdata/fetchdata.component';
import { CounterComponent } from './counter/counter.component';
import { DemotableComponent } from './demotable/demotable.component';
import { EirresultsComponent } from './eirresults/eirresults.component';
import { UnitresultsComponent } from './unitresults/unitresults.component';
import { EirresultsResolver } from './_resolvers/eirresults.resolver';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    // { path: 'app-eirresults', component: EirresultsComponent },
    { path: 'app-eirresults', component: EirresultsComponent, resolve: { gate: EirresultsResolver }},
    { path: 'app-unitresults', component: UnitresultsComponent },
    { path: 'app-counter', component: CounterComponent },
    { path: 'app-fetchdata', component: FetchdataComponent },
    { path: 'app-demotable', component: DemotableComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
