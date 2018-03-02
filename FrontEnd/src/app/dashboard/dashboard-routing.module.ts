import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'items',
        loadChildren: './items/items.module#ItemsModule'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'login',
        loadChildren: './login/login.module#LoginModule'
      },
      {
        path: 'store',
        loadChildren: './store/store.module#StoreModule'
      },
      {
        path: 'about',
        loadChildren: './about/about.module#AboutModule'
      },
      {
        path: 'signup',
        loadChildren: './signup/signup.module#SignupModule'
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DashboardRoutingModule {}
