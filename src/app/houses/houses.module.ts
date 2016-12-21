import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseCardComponent } from './house-card/house-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HouseCardComponent],
  exports: [HouseCardComponent]
})
export class HousesModule { }
