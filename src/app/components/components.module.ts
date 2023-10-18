import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { NgImageSliderModule } from 'ng-image-slider';


@NgModule({
  declarations: [
    ImageSliderComponent
  ],
  imports: [
    CommonModule,
    NgImageSliderModule
  ],
  exports: [
    ImageSliderComponent
  ]
})
export class ComponentsModule { }
