import {Routes} from '@angular/router';

export const learnRoutes:Routes = [
  {
    path: '',
    loadComponent: () => import('../7-routing/learn-routing/learn-routing.component').then(m => m.LearnRoutingComponent),
  }
];
