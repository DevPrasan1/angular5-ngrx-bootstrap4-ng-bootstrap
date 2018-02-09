import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { MainLayoutComponent } from './layout/main-layout';
import { HeaderComponent, FooterComponent } from './layout/components';
import { SidebarComponent } from './layout/components/sidebar/sidebar.component';

@NgModule({
  declarations: [MainLayoutComponent, HeaderComponent, FooterComponent, SidebarComponent],
  imports: [BrowserModule, CoreModule, AppRoutingModule, SharedModule.forRoot(), NgbModule.forRoot()],
  providers: [],
  bootstrap: [MainLayoutComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
