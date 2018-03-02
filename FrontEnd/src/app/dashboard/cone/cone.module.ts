import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { ConeRoutingModule } from './cone-routing.module';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { ProductsService } from '../../products.service';


@NgModule({
  imports: [ThemeModule, ConeRoutingModule],
  declarations: [SmartTableComponent],
  providers: [ProductsService]
})
export class ConeModule {}

