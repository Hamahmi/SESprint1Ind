import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { StoreComponent } from './store/store.component';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './signup/signup.component';
import { ConeComponent } from './cone/cone.component';



@NgModule({
  imports: [ThemeModule, DashboardRoutingModule],
  declarations: [DashboardComponent, HomeComponent, ConeComponent],
  entryComponents: [],
  providers: []
})
export class DashboardModule {}
