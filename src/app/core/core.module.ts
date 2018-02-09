import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { reducer, INITIAL_APP_INTERFACE } from './store';
import { ZillowService, InterceptorService } from './services';
import { UserService } from './store/user/user.service';

@NgModule({
  imports: [HttpClientModule, StoreModule.forRoot(reducer, { initialState: INITIAL_APP_INTERFACE })],
  providers: [
    ZillowService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
})
export class CoreModule {}
