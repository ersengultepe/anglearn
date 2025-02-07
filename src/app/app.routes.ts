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
        loadComponent: () =>
          import('../1-lifecycle-hooks/2-ngOnChanges/parent.component').then(m => m.ParentComponent),
      },
      {
        path: 'ng-on-init',
        data: {title: 'NgOnInit Component'},
        loadComponent: () =>
          import('../1-lifecycle-hooks/3-ngOnInit/post.component').then(m => m.PostComponent)
      },
      {
        path: 'ng-do-check',
        data: {title: 'NgDoCheck Component'},
        loadComponent: () =>
          import('../1-lifecycle-hooks/4-ngDoCheck/input.change.component').then(m => m.InputChangeComponent)
      },
      {
        path: 'ng-after-content-init',
        data: {title: 'NgAfterContentInit Component'},
        loadComponent: () =>
          import('../1-lifecycle-hooks/5-ngAfterContentInit/present.component').then(m => m.PresentComponent),
      },
      {
        path: 'ng-after-content-checked',
        data: {title: 'NgAfterContentChecked Component'},
        loadComponent: () =>
          import('../1-lifecycle-hooks/6-ngAfterContentChecked/dietapp.component').then(m => m.DietAppComponent),
      },
      {
        path: 'ng-after-view-init',
        data: {title: 'NgAfterViewInit Component'},
        loadComponent: () =>
          import('../1-lifecycle-hooks/7-ngAfterViewInit/cargo.tracking.component').then(m => m.CargoTrackingComponent),
      },
      {
        path: 'ng-after-view-checked',
        data: {title: 'NgAfterViewChecked Component'},
        loadComponent: () =>
          import('../1-lifecycle-hooks/8-ngAfterViewChecked/counter.component').then(m => m.CounterComponent),
      },
      {
        path: 'ng-on-destroy',
        data: {title: 'NgOnDestroy Component'},
        loadComponent: () =>
          import('../1-lifecycle-hooks/9-ngOnDestroy/television.component').then(m => m.TelevisionComponent),
      },




      {
        path : '**',
        redirectTo : '404',
        data: {title: '404 Hata Sayfası'}
      }
    ]
  },
  {
    path: 'data-binding',
    children: [
      {
        path : '',
        loadComponent: () => import('../2-data-binding/data-binding.component').then(m => m.DataBindingComponent),
      }
    ]
  }

];
