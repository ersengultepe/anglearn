import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'ng-on-changes',
    loadComponent: () => import('../../src/lifecycle-hooks/ngonchanges/parent.component').then(m => m.ParentComponent)
  }
];
