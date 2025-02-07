import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path : 'lifecycle-hooks',
    //pathMatch: 'full',
    data: {title : "Lifecycle Hooks Component"},
    loadComponent: () => import('../../src/1-lifecycle-hooks/lifecycle-hooks.component').then(m => m.LifecycleHooksComponent),
    children: [
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
    data: {title: 'Data Binding'},
    loadComponent: () => import('../2-data-binding/data-binding.component').then(m => m.DataBindingComponent),
    children: [
      {
        path : 'event-binding',
        data: {title: 'Event Binding'},
        loadComponent: () => import('../2-data-binding/event-binding/event-binding.component').then(m => m.EventBindingComponent),
      },
      {
        path : 'property-binding',
        data: {title: 'Property Binding'},
        loadComponent: () => import('../2-data-binding/property-binding/property-binding.component').then(m => m.PropertyBindingComponent),
      },
      {
        path : 'two-way-binding',
        data: {title: 'Two-Way Binding'},
        loadComponent: () => import('../2-data-binding/two-way-binding/two-way-binding.component').then(m => m.TwoWayBindingComponent),
      },
      {
        path : 'interpolation-binding',
        data: {title: 'Interpolation'},
        loadComponent: () => import('../2-data-binding/interpolation/interpolation.component').then(m => m.InterpolationComponent),
      }
    ]
  },
  {
    path: 'directives',
    data: {title: 'Directives'},
    loadComponent: ()=>import('../3-directives/directives.component').then(m => m.DirectivesComponent),
    children:[
      {
        path: 'structural',
        data: {title: 'Structural Directives'},
        loadComponent: () => import('../3-directives/structural/structural.component').then(m => m.StructuralComponent)
      }
    ]
  }

];
