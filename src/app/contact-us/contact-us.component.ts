import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor() { }
  contact_details = [
    {
      "icon": "call",
      "title": "Phone",
      "desc": "8885011455"
    },
    {
      "icon": "mail",
      "title": "Email",
      "desc": "thegifthamper23@gmail.com"
    },
    {
      "icon": "access_time",
      "title": "Working Hours",
      "desc": "Monday - Saturday : 8am - 22pm"
    },
    {
      "icon": "location_on",
      "title": "Address",
      "desc": "303, Pavani Aqua Apartment, Masjid Banda, Kondapur 500084"
    }
  ]

  ngOnInit(): void {
  }
  Submit(ev: any) {
    console.log(ev, "data");
  }
}
