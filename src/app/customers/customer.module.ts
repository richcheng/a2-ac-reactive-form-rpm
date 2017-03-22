import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { Customer } from './customer';

import { CustomerComponent } from './customer.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'customers', component: CustomerComponent }
    ])
  ],
  declarations: [
    CustomerComponent
  ],
  providers: [
  ]
})
export class CustomerModule {}
