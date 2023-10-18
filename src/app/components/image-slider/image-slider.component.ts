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
      image: '/assets/images/DSC09906.jpg',
      thumbImage: '/assets/images/DSC09908.jpg',
      alt: 'alt of image',
    },
    {
      image: '/assets/images/DSC09978.jpg', // Support base64 image
      thumbImage: '/assets/images/DSC09981.jpg', // Support base64 image
      alt: 'Image alt', //Optional: You can use this key if want to show image with alt
    },
    {
      image: '/assets/images/DSC00061.jpg',
      thumbImage: '/assets/images/DSC00065.jpg',
      alt: 'alt of image',
    },
    {
      image: '/assets/images/DSC09638.jpg',
      thumbImage: '/assets/images/DSC00061.jpg',
      alt: 'alt of image',
    },
    {
      image: '/assets/images/DSC00254.jpg',
      thumbImage: '/assets/images/DSC00335.jpg',
      alt: 'alt of image',
    },
    {
      image: '/assets/images/DSC00117.jpg',
      thumbImage: '/assets/images/DSC00119.jpg',
      alt: 'alt of image',
    },
    {
      image: '/assets/images/DSC00287.jpg',
      thumbImage: '/assets/images/DSC00289.jpg',
      alt: 'alt of image',
    },
    {
      image: '/assets/images/DSC09930.jpg',
      thumbImage: '/assets/images/DSC09933.jpg',
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
