import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Rating:any = [
    {
      "url": "layer.svg",
      "score":"600+",
      "des": "Happy Customer"
    },
    {
      "url": "chrismas_box.svg",
      "score":"400+",
      "des": "Gift sent last year"
    },
    {
      "url": "stars_icon.svg",
      "score":"4.5",
      "des": "Google Rating"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  Submit(ev: any){
    console.log(ev, "data");
  }
}
