import {HousesModule} from '../houses/houses.module';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { UserCardComponent } from './user-card/user-card.component';
import {CarsModule} from '../cars/cars.module';


@NgModule({
  imports: [
    CommonModule,
    CarsModule,
    HousesModule
  ],
  declarations: [UserCardComponent],
  exports: [UserCardComponent]
})
export class UsersModule { }
