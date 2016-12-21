import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { HouseCardComponent } from './house-card/house-card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [HouseCardComponent],
  exports: [HouseCardComponent]
})
export class HousesModule { }
