import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarCardComponent} from './car-card/car-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CarCardComponent],
  exports: [CarCardComponent]
})
export class CarsModule { }
