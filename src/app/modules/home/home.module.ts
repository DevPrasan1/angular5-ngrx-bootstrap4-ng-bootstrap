import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

import { LayoutComponent } from './layout/layout.component';

@NgModule({
  imports: [SharedModule, HomeRoutingModule],
  declarations: [LayoutComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
