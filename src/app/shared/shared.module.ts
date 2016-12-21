import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricePipe } from './price.pipe';
import { BasicCardComponent } from './basic-card/basic-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PricePipe,BasicCardComponent],
  exports: [PricePipe,BasicCardComponent]
})
export class SharedModule { }
