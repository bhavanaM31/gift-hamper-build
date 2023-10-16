import { Component, OnInit, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {
  @ViewChild('nav') slider!: NgImageSliderComponent;
  constructor() { }

  ngOnInit(): void {
  }
  imageObject: Array<object> = [
    {
      image: '/assets/images/Rakhi.png',
      thumbImage: '/assets/images/Rakhi.png',
      alt: 'alt of image',
    },
    {
      image: '.assets/images/gift_left.png', // Support base64 image
      thumbImage: 'assets/images/gift_left.png', // Support base64 image
      alt: 'Image alt', //Optional: You can use this key if want to show image with alt
    },
    {
      image: '/assets/images/diwali.png',
      thumbImage: '/assets/images/diwali.png',
      alt: 'alt of image',
    },
    {
      image: '/assets/images/greeting_card.png',
      thumbImage: '/assets/images/greeting_card.png',
      alt: 'alt of image',
    },
    {
      image: 'assets/images/kit.png',
      thumbImage: '/assets/images/kit.png',
      alt: 'alt of image',
    },
 
  ];
  prevImageClick() {
    this.slider.prev();
}

nextImageClick() {
    this.slider.next();
}
}
