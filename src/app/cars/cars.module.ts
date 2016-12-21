import {SharedModule} from '../shared/shared.module';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarCardComponent} from './car-card/car-card.component';
import { DriverCardComponent } from './driver-card/driver-card.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [CarCardComponent,DriverCardComponent],
  exports: [CarCardComponent,DriverCardComponent]
})
export class CarsModule { }
