import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { StoreRoutingModule } from './store-routing.module';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { ProductsService } from '../../products.service';


@NgModule({
  imports: [ThemeModule, StoreRoutingModule],
  declarations: [SmartTableComponent],
  providers: [ProductsService]
})
export class StoreModule {}
