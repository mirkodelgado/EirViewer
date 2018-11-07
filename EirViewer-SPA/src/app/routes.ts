import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FetchdataComponent } from './fetchdata/fetchdata.component';
import { CounterComponent } from './counter/counter.component';
import { DemotableComponent } from './demotable/demotable.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'app-counter', component: CounterComponent },
    { path: 'app-fetchdata', component: FetchdataComponent },
    { path: 'app-demotable', component: DemotableComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
