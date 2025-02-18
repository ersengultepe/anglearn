import {Routes} from '@angular/router';

export const learnRoutes:Routes = [
  {
    path: 'a',
    data: {title: 'Routing Components'},
    loadComponent: () => import('../7-routing/learn-routing/learn-routing.component').then(m => m.LearnRoutingComponent),
  }
];
