import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { UserRoutingModule } from './user-routing';

import { UserComponent } from './user/user.component';
import { TableComponent } from './components/table/table.component';
import { AddUserFormComponent } from './components/add-user-form/add-user-form.component';

@NgModule({
  imports: [SharedModule, UserRoutingModule],
  declarations: [UserComponent, TableComponent, AddUserFormComponent],
})
export class UserModule {}
