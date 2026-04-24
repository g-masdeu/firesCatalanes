import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { RegionsListComponent } from './regions-list/regions-list';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Página de inicio
  { path: 'comarca', component: RegionsListComponent, data: { tipus: 'comarca' } },
  { path: 'poblacio', component: RegionsListComponent, data: { tipus: 'poblacio' } },
  { path: 'data', component: RegionsListComponent, data: { tipus: 'data' } },
  { path: 'preferides', component: RegionsListComponent, data: { tipus: 'preferides' } },
  { path: '**', redirectTo: '' }
];