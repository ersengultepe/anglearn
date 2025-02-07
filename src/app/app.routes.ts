import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path : 'lifecycle-hooks',
    children: [
      {
        path : '',
        pathMatch: 'full',
        data: {title : "Lifecycle Hooks Component"},
        loadComponent: () => import('../../src/1-lifecycle-hooks/lifecycle-hooks.component').then(m => m.LifecycleHooksComponent),
      },
      {
        path: 'ng-on-changes',
        data: {title: 'NgOnChanges Component'},
        loadComponent: () => import('../1-lifecycle-hooks/ngOnChanges/parent.component').then(m => m.ParentComponent),
      },
      {
        path: 'ng-on-init',
        data: {title: 'NgOnInit Component'},
        loadComponent: () => import('../../src/1-lifecycle-hooks/ngOnInit/post.component').then(m => m.PostComponent)
      },
      {
        path: 'ng-do-check',
        data: {title: 'NgDoCheck Component'},
        loadComponent: () => import('../../src/1-lifecycle-hooks/ngDoCheck/input.change.component').then(m => m.InputChangeComponent)
      },
      {
        path : '**',
        redirectTo : '404',
        data: {title: '404 Hata Sayfası'}
      }
    ]
  },

];
