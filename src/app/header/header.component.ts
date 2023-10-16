import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gift-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  selectedtab: any = "Home";
  tabs: any = [
    {
      pagetitle: 'Home',
      route: '/home'
    },
    // {
    //   pagetitle: 'Categories',
    //   route: '/home'
    // },
    {
      pagetitle: 'About Us',
      route: '/about-us'
    },
    {
      pagetitle: 'Contact Us',
      route: '/contact-us'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onActivate(e: any) {
    window.scrollTo(0, 0);
  }
  isActive(item: any) {
    return this.selectedtab === item;
  };
  selectTab(event: any) {
    this.selectedtab = event;
  }
}
